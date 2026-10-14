const KEY = 'keri-hearth-progress'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

export function completedLessons(personaId) {
  return new Set(read()[personaId] || [])
}

export function markComplete(personaId, lessonId) {
  const data = read()
  const list = new Set(data[personaId] || [])
  list.add(lessonId)
  data[personaId] = [...list]
  localStorage.setItem(KEY, JSON.stringify(data))
}
