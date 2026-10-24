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
import { scenes as preScenesEn } from '../content/prerotation'
import { scenes as preScenesNl } from '../content/nl/prerotation'
import { scenes as keyScenesEn } from '../content/keys'
import { scenes as keyScenesNl } from '../content/nl/keys'
import { scenes as digestScenesEn } from '../content/digest'
import { scenes as digestScenesNl } from '../content/nl/digest'
import { sources as sourcesEn } from '../content/sources'
import { sources as sourcesNl } from '../content/nl/sources'

const STORAGE_KEY = 'keri-hearth-lang'
export const LANG_PARAM = 'lang'

const packs = {
  en: {
    ui: ui.en,
    personas: personasEn,
    concepts: conceptsEn,
    story: storyEn,
    scenes: scenesEn,
    preScenes: preScenesEn,
    keyScenes: keyScenesEn,
    digestScenes: digestScenesEn,
    sources: sourcesEn,
  },
  nl: {
    ui: ui.nl,
    personas: personasNl,
    concepts: conceptsNl,
    story: storyNl,
    scenes: scenesNl,
    preScenes: preScenesNl,
    keyScenes: keyScenesNl,
    digestScenes: digestScenesNl,
    sources: sourcesNl,
  },
}

export function isLocale(code) {
  return Boolean(code && packs[code])
}

function queryLang() {
  try {
    return new URLSearchParams(window.location.search).get(LANG_PARAM)
  } catch {
    return null
  }
}

function readLocale() {
  const fromUrl = queryLang()
  if (isLocale(fromUrl)) return fromUrl
  const saved = localStorage.getItem(STORAGE_KEY)
  if (isLocale(saved)) return saved
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
  document.title = packs[code].ui.brand
}

applyDocumentLang(locale.value)

export function setLocale(code) {
  if (isLocale(code)) locale.value = code
}

/** Keep `?lang=` in sync with the active locale, and the locale in sync with the URL. */
export function installLocaleRouting(router) {
  let syncing = false

  function writeQuery(code) {
    const route = router.currentRoute.value
    if (route.query[LANG_PARAM] === code) return
    syncing = true
    router
      .replace({
        path: route.path,
        query: { ...route.query, [LANG_PARAM]: code },
        hash: route.hash,
      })
      .finally(() => {
        syncing = false
      })
  }

  watch(
    locale,
    (code) => {
      localStorage.setItem(STORAGE_KEY, code)
      applyDocumentLang(code)
      if (!syncing) writeQuery(code)
    },
    { immediate: true },
  )

  router.afterEach((to) => {
    const raw = to.query[LANG_PARAM]
    const code = Array.isArray(raw) ? raw[0] : raw
    if (isLocale(code)) {
      if (locale.value !== code) {
        syncing = true
        locale.value = code
        syncing = false
      }
      return
    }
    writeQuery(locale.value)
  })
}

export function useI18n() {
  const pack = computed(() => packs[locale.value] || packs.en)
  const t = computed(() => pack.value.ui)
  const personas = computed(() => pack.value.personas)
  const concepts = computed(() => pack.value.concepts)
  const story = computed(() => pack.value.story)
  const scenes = computed(() => pack.value.scenes)
  const preScenes = computed(() => pack.value.preScenes)
  const keyScenes = computed(() => pack.value.keyScenes)
  const digestScenes = computed(() => pack.value.digestScenes)
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
    preScenes,
    keyScenes,
    digestScenes,
    sources,
    findPersona,
    findLesson,
  }
}
