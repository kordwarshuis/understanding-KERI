function clock(value) {
  const raw = String(value || '').trim()
  const n = parseFloat(raw)
  if (!Number.isFinite(n)) return 0
  return raw.endsWith('ms') ? n : n * 1000
}

/** Latest end time, in ms, of the finite animations inside a scene. */
export function measureSceneEnd(root) {
  if (!root) return 0
  let end = 0
  const nodes = [root, ...root.querySelectorAll('*')]
  for (const el of nodes) {
    const style = getComputedStyle(el)
    const names = style.animationName.split(',')
    if (names.every((name) => name.trim() === 'none')) continue
    const durations = style.animationDuration.split(',')
    const delays = style.animationDelay.split(',')
    const counts = style.animationIterationCount.split(',')
    for (let i = 0; i < names.length; i++) {
      if (names[i].trim() === 'none') continue
      const count = (counts[i] ?? counts[0]).trim()
      if (count === 'infinite') continue
      const times = Number(count)
      const repeats = Number.isFinite(times) && times > 0 ? times : 1
      const delay = clock(delays[i] ?? delays[0])
      const duration = clock(durations[i] ?? durations[0])
      end = Math.max(end, delay + duration * repeats)
    }
  }
  return Math.round(end)
}

/**
 * Zoom the scene so its artwork fills the 2:1 frame.
 * Scenes that already use the full canvas stay put, so wide layouts do not crop.
 */
export function fitSceneFrame(svg) {
  if (!svg) return
  const group = svg.querySelector('g')
  if (!group) return
  let box
  try {
    box = group.getBBox()
  } catch {
    return
  }
  if (!box.width || !box.height) return
  const travelers = svg.querySelectorAll('.move, .slide')
  for (const el of travelers) {
    const fx = Math.abs(parseFloat(el.style.getPropertyValue('--fx')) || 0)
    const fy = Math.abs(parseFloat(el.style.getPropertyValue('--fy')) || 0)
    if (fx > 24 || fy > 24) {
      svg.setAttribute('viewBox', '0 0 800 400')
      return
    }
  }
  const pad = 32
  let width = box.width + pad * 2
  let height = box.height + pad * 2
  if (width / height > 2) height = width / 2
  else width = height * 2
  if (width > 760 || height > 380) {
    svg.setAttribute('viewBox', '0 0 800 400')
    return
  }
  const x = box.x + box.width / 2 - width / 2
  const y = box.y + box.height / 2 - height / 2
  const n = (value) => Math.round(value * 10) / 10
  svg.setAttribute('viewBox', `${n(x)} ${n(y)} ${n(width)} ${n(height)}`)
}
