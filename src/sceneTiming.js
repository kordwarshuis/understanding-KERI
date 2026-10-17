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
