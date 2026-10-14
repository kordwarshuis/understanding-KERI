import { computed, ref, watch } from 'vue'
import { ui, fill } from './ui'
import { personas as personasEn, findPersona as findPersonaEn, findLesson } from '../content/personas'
import { personas as personasNl } from '../content/nl/personas'
import { concepts as conceptsEn } from '../content/glossary'
import { concepts as conceptsNl } from '../content/nl/glossary'
import { story as storyEn } from '../content/story'
import { story as storyNl } from '../content/nl/story'
import { scenes as scenesEn } from '../content/what'
import { scenes as scenesNl } from '../content/nl/what'
import { sources as sourcesEn } from '../content/sources'
import { sources as sourcesNl } from '../content/nl/sources'

const STORAGE_KEY = 'keri-hearth-lang'
const packs = {
  en: {
    ui: ui.en,
    personas: personasEn,
    concepts: conceptsEn,
    story: storyEn,
    scenes: scenesEn,
    sources: sourcesEn,
  },
  nl: {
    ui: ui.nl,
    personas: personasNl,
    concepts: conceptsNl,
    story: storyNl,
    scenes: scenesNl,
    sources: sourcesNl,
  },
}

function readLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && packs[saved]) return saved
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('nl') ? 'nl' : 'en'
}

export const locale = ref(readLocale())
export const locales = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'nl', label: 'Nederlands', short: 'NL' },
]

function applyDocumentLang(code) {
  document.documentElement.lang = code
  const title = packs[code].ui.brand
  document.title = title
}

applyDocumentLang(locale.value)

watch(locale, (code) => {
  localStorage.setItem(STORAGE_KEY, code)
  applyDocumentLang(code)
})

export function setLocale(code) {
  if (packs[code]) locale.value = code
}

export function useI18n() {
  const pack = computed(() => packs[locale.value] || packs.en)
  const t = computed(() => pack.value.ui)
  const personas = computed(() => pack.value.personas)
  const concepts = computed(() => pack.value.concepts)
  const story = computed(() => pack.value.story)
  const scenes = computed(() => pack.value.scenes)
  const sources = computed(() => pack.value.sources)

  function tf(key, vars) {
    return fill(t.value[key] || key, vars)
  }

  function findPersona(id) {
    return pack.value.personas.find((p) => p.id === id) || findPersonaEn(id)
  }

  return {
    locale,
    locales,
    setLocale,
    t,
    tf,
    personas,
    concepts,
    story,
    scenes,
    sources,
    findPersona,
    findLesson,
  }
}
