<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import Figure from '../components/scene/Figure.vue'
import DigestSeal from '../components/scene/DigestSeal.vue'
import Press from '../components/scene/Press.vue'
import { fitSceneFrame, measureSceneEnd } from '../sceneTiming'

const route = useRoute()
const router = useRouter()
const { t, tf, digestScenes, locale } = useI18n()

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const panel = ref(null)
const sceneEl = ref(null)
const barMs = ref(0)

const index = ref(0)
const run = ref(0)
const playing = ref(!reduced)
const settled = ref(reduced)
const finished = ref(false)
const ended = ref(false)

function close() {
  router.replace({ path: '/', query: { ...route.query } })
}

const scene = computed(() => digestScenes.value[index.value])
const art = computed(() => scene.value.art || {})
const sceneKey = computed(() => `${locale.value}-${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === digestScenes.value.length - 1)

function wrapWords(text, max) {
  const words = String(text || '').trim().split(/\s+/).filter(Boolean)
  if (!words.length) return ['']
  const out = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (line && next.length > max) {
      out.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) out.push(line)
  return out.slice(0, 3)
}

function pillWidth(text) {
  return Math.max(148, String(text || '').length * 13 + 48)
}

function cardHeight(count) {
  return 36 + count * 22
}

function cardTop(count, center) {
  return center - cardHeight(count) / 2
}

function lineY(count, center, i) {
  return cardTop(count, center) + 30 + i * 22
}

function go(i) {
  index.value = Math.max(0, Math.min(digestScenes.value.length - 1, i))
  ended.value = false
  finished.value = false
  settled.value = reduced
  playing.value = !reduced
  run.value++
}

function onSceneDone() {
  if (!playing.value || finished.value) return
  playing.value = false
  finished.value = true
  ended.value = isLast.value
}

function toggle() {
  if (playing.value) {
    playing.value = false
    return
  }
  if (settled.value || finished.value || ended.value) run.value++
  settled.value = false
  finished.value = false
  ended.value = false
  playing.value = true
}

function onKey(e) {
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    if (index.value > 0) go(index.value - 1)
    return
  }
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    if (!isLast.value) go(index.value + 1)
    return
  }
  if ((e.key === ' ' || e.code === 'Space') && !reduced) {
    e.preventDefault()
    toggle()
  }
}

watch(locale, () => {
  if (index.value >= digestScenes.value.length) index.value = 0
  run.value++
})

function syncBar() {
  barMs.value = measureSceneEnd(sceneEl.value)
  fitSceneFrame(sceneEl.value)
}

watch(sceneKey, () => {
  barMs.value = 0
})

watch(sceneKey, syncBar, { flush: 'post' })

onMounted(() => {
  document.body.classList.add('modal-open')
  window.addEventListener('keydown', onKey)
  panel.value?.focus()
  syncBar()
  document.fonts?.ready.then(() => fitSceneFrame(sceneEl.value))
})
onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <div class="what-backdrop" @click.self="close">
      <div
        ref="panel"
        class="what-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="t.digestTitle"
        tabindex="-1"
      >
        <header class="what-head">
          <div>
            <p class="kicker">{{ t.digestKicker }}</p>
            <h1 class="serif">{{ t.digestTitle }}</h1>
          </div>
          <button class="what-close" type="button" :aria-label="t.whatClose" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div class="stage" :class="{ paused: !playing, settled }">
          <div class="scene-frame">
            <div class="scene-fit">
              <svg
                ref="sceneEl"
                class="scene"
                viewBox="0 0 800 400"
                role="img"
                :aria-label="scene.title"
                preserveAspectRatio="xMidYMid meet"
              >
                <g :key="sceneKey">
                  <template v-if="scene.id === 'length'">
                    <g class="rise" style="--d: 0.15s">
                      <text x="176" :y="cardTop(1, 100) - 12" text-anchor="middle" class="tiny">{{ art.shortLabel }}</text>
                      <rect
                        x="24"
                        :y="cardTop(1, 100)"
                        width="304"
                        :height="cardHeight(1)"
                        rx="16"
                        class="note"
                      />
                      <text x="176" :y="lineY(1, 100, 0)" text-anchor="middle" class="note-line">{{ art.short }}</text>
                    </g>
                    <g class="rise" style="--d: 0.4s">
                      <text
                        x="176"
                        :y="cardTop(art.longLines.length, 268) - 12"
                        text-anchor="middle"
                        class="tiny"
                      >{{ art.longLabel }}</text>
                      <rect
                        x="24"
                        :y="cardTop(art.longLines.length, 268)"
                        width="304"
                        :height="cardHeight(art.longLines.length)"
                        rx="16"
                        class="note"
                      />
                      <text text-anchor="middle" class="note-small">
                        <tspan
                          v-for="(line, li) in art.longLines"
                          :key="`long-${li}`"
                          x="176"
                          :y="lineY(art.longLines.length, 268, li)"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="pop" style="--d: 0.7s">
                      <g transform="translate(468 100)"><Press /></g>
                    </g>
                    <g class="pop" style="--d: 0.95s">
                      <g transform="translate(468 268)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.2s" pathLength="1" d="M 328 100 H 406" />
                    <path class="draw warm" style="--d: 1.45s" pathLength="1" d="M 328 268 H 406" />
                    <path class="draw warm" style="--d: 1.7s" pathLength="1" d="M 530 100 H 577" />
                    <path class="draw warm" style="--d: 1.9s" pathLength="1" d="M 530 268 H 577" />
                    <g class="pop" style="--d: 2.55s">
                      <g transform="translate(672 100)"><DigestSeal :text="art.shortDigest" /></g>
                    </g>
                    <g class="pop" style="--d: 2.9s">
                      <g transform="translate(672 268)"><DigestSeal :text="art.longDigest" /></g>
                    </g>
                    <g class="rise" style="--d: 3.5s">
                      <text x="672" y="190" text-anchor="middle" class="measure">{{ art.sameLength }}</text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'blocks'">
                    <g class="rise" style="--d: 0.15s">
                      <rect
                        x="28"
                        y="24"
                        width="744"
                        :height="cardHeight(art.wideLines.length)"
                        rx="18"
                        class="note"
                      />
                      <text text-anchor="middle" class="note-line">
                        <tspan
                          v-for="(line, li) in art.wideLines"
                          :key="`wide-${li}`"
                          x="400"
                          :y="24 + 30 + li * 22"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="pop" style="--d: 0.7s">
                      <rect x="36" y="168" width="180" height="56" rx="14" class="note" />
                      <text x="126" y="202" text-anchor="middle" class="note-line">{{ art.block1 }}</text>
                    </g>
                    <g class="pop" style="--d: 1.05s">
                      <rect x="36" y="248" width="180" height="56" rx="14" class="note" />
                      <text x="126" y="282" text-anchor="middle" class="note-line">{{ art.block2 }}</text>
                    </g>
                    <g class="pop" style="--d: 0.85s">
                      <g transform="translate(430 238)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.45s" pathLength="1" d="M 216 196 C 290 196, 340 220, 368 232" />
                    <path class="draw warm" style="--d: 2.15s" pathLength="1" d="M 216 276 C 290 276, 340 256, 368 246" />
                    <path class="draw warm" style="--d: 2.85s" pathLength="1" d="M 492 238 H 575" />
                    <g class="pop" style="--d: 3.55s">
                      <g transform="translate(670 238)"><DigestSeal :text="art.digest" /></g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'same'">
                    <g class="rise" style="--d: 0.2s">
                      <rect x="28" y="148" width="250" height="64" rx="16" class="note" />
                      <text x="153" y="186" text-anchor="middle" class="note-line">{{ art.sentence }}</text>
                    </g>
                    <g class="pop" style="--d: 0.45s">
                      <g transform="translate(400 180)"><Press /></g>
                    </g>
                    <g class="rise" style="--d: 0.9s">
                      <text x="400" y="258" text-anchor="middle" class="reassurance">{{ art.noKey }}</text>
                    </g>
                    <path class="draw warm" style="--d: 1.05s" pathLength="1" d="M 278 180 H 338" />
                    <path class="draw warm" style="--d: 1.35s" pathLength="1" d="M 462 168 C 520 140, 548 108, 565 108" />
                    <g class="pop" style="--d: 2.15s">
                      <g transform="translate(660 108)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <path class="draw warm" style="--d: 2.55s" pathLength="1" d="M 462 192 C 520 220, 548 252, 565 252" />
                    <g class="rise" style="--d: 2.7s">
                      <text x="548" y="196" text-anchor="middle" class="tiny">{{ art.again }}</text>
                    </g>
                    <g class="pop" style="--d: 3.35s">
                      <g transform="translate(660 252)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <g class="pop" style="--d: 4.05s">
                      <g transform="translate(660 180)">
                        <rect :x="-pillWidth(art.same) / 2" y="-16" :width="pillWidth(art.same)" height="32" rx="16" class="ok-pill" />
                        <text y="5" text-anchor="middle" class="ok-text">{{ art.same }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'change'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="20" y="72" width="236" height="64" rx="16" class="note" />
                      <text x="138" y="110" text-anchor="middle" class="note-line">
                        <tspan>{{ art.before }}</tspan><tspan class="mark">{{ art.mark }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 0.45s">
                      <rect x="20" y="244" width="236" height="64" rx="16" class="note" />
                      <text x="138" y="282" text-anchor="middle" class="note-line">
                        <tspan>{{ art.before }}</tspan><tspan class="mark">{{ art.changedMark }}</tspan>
                      </text>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(390 104)"><Press /></g>
                    </g>
                    <g class="pop" style="--d: 0.6s">
                      <g transform="translate(390 276)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.05s" pathLength="1" d="M 256 104 H 328" />
                    <path class="draw warm" style="--d: 1.25s" pathLength="1" d="M 256 276 H 328" />
                    <path class="draw warm" style="--d: 1.55s" pathLength="1" d="M 452 104 H 555" />
                    <path class="draw warm" style="--d: 1.75s" pathLength="1" d="M 452 276 H 555" />
                    <g class="pop" style="--d: 2.25s">
                      <g transform="translate(650 104)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <g class="pop" style="--d: 2.55s">
                      <g transform="translate(650 276)"><DigestSeal :text="art.changedDigest" /></g>
                    </g>
                    <g class="pop" style="--d: 3.25s">
                      <g transform="translate(650 190)">
                        <rect :x="-pillWidth(art.unlike) / 2" y="-16" :width="pillWidth(art.unlike)" height="32" rx="16" class="flag" />
                        <text y="5" text-anchor="middle" class="flag-text">{{ art.unlike }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'oneway'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="24" y="78" width="250" height="64" rx="16" class="note" />
                      <text x="149" y="116" text-anchor="middle" class="note-line">{{ art.sentence }}</text>
                    </g>
                    <g class="pop" style="--d: 0.4s">
                      <g transform="translate(400 110)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 0.9s" pathLength="1" d="M 274 110 H 338" />
                    <path class="draw warm" style="--d: 1.3s" pathLength="1" d="M 462 110 H 545" />
                    <g class="pop" style="--d: 2.05s">
                      <g transform="translate(640 110)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <path class="draw red-line" style="--d: 2.7s" pathLength="1" d="M 640 140 C 620 210, 460 268, 340 268" />
                    <g class="pop" style="--d: 3.5s">
                      <g transform="translate(220 268)">
                        <rect x="-112" y="-32" width="224" height="64" rx="16" class="blank" />
                        <path d="M -18 -14 L 18 14 M 18 -14 L -18 14" class="cross" />
                      </g>
                    </g>
                    <g class="rise" style="--d: 4.05s">
                      <text x="220" text-anchor="middle" class="warn">
                        <tspan
                          v-for="(line, li) in wrapWords(art.hidden, 24)"
                          :key="`hid-${li}`"
                          x="220"
                          :y="324 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'check'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="250" y="20" width="300" height="112" rx="18" class="log" />
                      <text x="400" y="52" text-anchor="middle" class="log-title">{{ art.written }}</text>
                      <g transform="translate(400 90)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <g class="rise" style="--d: 0.3s">
                      <g transform="translate(92 328)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g class="rise" style="--d: 0.45s">
                      <rect x="150" y="188" width="230" height="64" rx="16" class="note" />
                      <text x="265" y="226" text-anchor="middle" class="note-line">{{ art.sentence }}</text>
                    </g>
                    <g class="pop" style="--d: 0.7s">
                      <g transform="translate(490 220)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.2s" pathLength="1" d="M 380 220 H 428" />
                    <path class="draw warm" style="--d: 1.7s" pathLength="1" d="M 552 220 H 575" />
                    <g class="pop" style="--d: 2.4s">
                      <g transform="translate(670 220)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <g class="pop" style="--d: 3.2s">
                      <g transform="translate(670 292)">
                        <rect :x="-pillWidth(art.matches) / 2" y="-16" :width="pillWidth(art.matches)" height="32" rx="16" class="ok-pill" />
                        <text y="5" text-anchor="middle" class="ok-text">{{ art.matches }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'commit'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="16" y="28" width="268" height="220" rx="18" class="log" />
                      <text text-anchor="middle" class="log-title">
                        <tspan
                          v-for="(line, li) in wrapWords(art.kept, 18)"
                          :key="`kept-${li}`"
                          x="150"
                          :y="58 + li * 26"
                        >{{ line }}</tspan>
                      </text>
                      <text
                        x="150"
                        :y="58 + wrapWords(art.kept, 18).length * 26 + 28"
                        text-anchor="middle"
                        class="row-v"
                      >{{ art.key }}</text>
                      <text
                        x="150"
                        :y="58 + wrapWords(art.kept, 18).length * 26 + 58"
                        text-anchor="middle"
                        class="row-k"
                      >{{ art.keepLine }}</text>
                    </g>
                    <g class="rise" style="--d: 0.35s">
                      <g transform="translate(140 348)"><Figure :label="art.you" /></g>
                    </g>
                    <g class="pop" style="--d: 0.55s">
                      <g transform="translate(400 138)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.05s" pathLength="1" d="M 284 138 H 338" />
                    <path class="draw warm" style="--d: 1.55s" pathLength="1" d="M 462 138 H 516" />
                    <g class="pop" style="--d: 2.15s">
                      <rect x="516" y="28" width="268" height="220" rx="18" class="log" />
                      <text x="650" y="62" text-anchor="middle" class="log-title">{{ art.record }}</text>
                      <g transform="translate(650 132)"><DigestSeal :text="art.digest" /></g>
                      <text text-anchor="middle" class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.only, 22)"
                          :key="`only-${li}`"
                          x="650"
                          :y="178 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                  </template>

                  <template v-else>
                    <rect x="0" y="0" width="800" height="400" fill="none" />
                    <g class="pop" style="--d: 0.15s">
                      <g transform="translate(175 175)">
                        <text y="-108" text-anchor="middle" class="tiny">{{ art.sameTitle }}</text>
                        <rect x="-112" y="-78" width="224" height="46" rx="14" class="note" />
                        <text y="-48" text-anchor="middle" class="note-small">{{ art.note }}</text>
                        <rect x="-112" y="-20" width="224" height="46" rx="14" class="note" />
                        <text y="10" text-anchor="middle" class="note-small">{{ art.note }}</text>
                        <text y="62" text-anchor="middle" class="measure">{{ art.same }}</text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 0.85s">
                      <g transform="translate(455 175)">
                        <text y="-108" text-anchor="middle" class="tiny">{{ art.changedTitle }}</text>
                        <rect x="-112" y="-78" width="224" height="46" rx="14" class="note" />
                        <text y="-48" text-anchor="middle" class="note-small">{{ art.note }}</text>
                        <rect x="-112" y="-20" width="224" height="46" rx="14" class="note" />
                        <text y="10" text-anchor="middle" class="note-small">
                          <tspan>{{ art.before }}</tspan><tspan class="mark">{{ art.mark }}</tspan>
                        </text>
                        <text y="62" text-anchor="middle" class="warn">{{ art.unlike }}</text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 1.55s">
                      <g transform="translate(680 130)">
                        <DigestSeal :text="art.seal" />
                      </g>
                      <g transform="translate(680 190)">
                        <path d="M -16 -12 L 16 12 M 16 -12 L -16 12" class="cross" />
                      </g>
                      <text x="680" y="228" text-anchor="middle" class="warn">{{ art.hidden }}</text>
                    </g>
                    <g class="rise" style="--d: 2.3s">
                      <text x="400" y="330" text-anchor="middle" class="note-text">{{ art.line }}</text>
                    </g>
                  </template>
                </g>
              </svg>
            </div>
          </div>

          <div class="bar" aria-hidden="true">
            <span v-if="barMs" :key="sceneKey" :style="{ '--dur': barMs + 'ms' }" @animationend.self="onSceneDone"></span>
          </div>

          <div class="caption" aria-live="polite">
            <p class="kicker">{{ tf('whatOf', { n: index + 1, total: digestScenes.length }) }} · {{ scene.kicker }}</p>
            <h2 class="serif">{{ scene.title }}</h2>
            <p class="body">{{ scene.body }}</p>
            <div class="foot">
              <RouterLink v-if="scene.word" class="word-chip" :to="`/words/${scene.word.id}`">
                {{ tf(scene.word.id === 'digest' ? 'digestWord' : 'whatWord', { label: scene.word.label }) }}
              </RouterLink>
              <template v-if="scene.final">
                <button class="btn ghost" type="button" @click="go(0)">{{ t.whatStartOver }}</button>
                <RouterLink class="btn" to="/pre-rotation">{{ t.digestNext }}</RouterLink>
                <RouterLink class="btn ghost" to="/">{{ t.whatSeat }}</RouterLink>
              </template>
            </div>
          </div>

          <div class="controls">
            <button
              class="btn ghost"
              type="button"
              :disabled="index === 0"
              :title="`${t.whatBack} (←)`"
              @click="go(index - 1)"
            >
              {{ t.whatBack }}
            </button>
            <button
              v-if="!reduced"
              class="btn"
              type="button"
              :title="`${playing ? t.whatPause : finished || ended ? t.whatAgain : t.whatPlay} (Space)`"
              @click="toggle"
            >
              {{ playing ? t.whatPause : finished || ended ? t.whatAgain : t.whatPlay }}
            </button>
            <button
              class="btn ghost"
              type="button"
              :disabled="isLast"
              :title="`${t.whatNext} (→)`"
              @click="go(index + 1)"
            >
              {{ t.whatNext }}
            </button>
            <div class="dots">
              <button
                v-for="(s, i) in digestScenes"
                :key="s.id"
                :class="{ on: i === index }"
                :aria-label="tf('whatScene', { n: i + 1, title: s.title })"
                @click="go(i)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.what-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 12px;
  background: rgba(43, 36, 28, 0.42);
  backdrop-filter: blur(4px);
}
.what-modal {
  --modal-h: min(680px, calc(100dvh - 24px));
  width: min(960px, 100%);
  height: var(--modal-h);
  min-height: var(--modal-h);
  max-height: var(--modal-h);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1rem 1.15rem 0.95rem;
  border-radius: 22px;
  background: var(--paper);
  box-shadow: var(--shadow);
  color: var(--ink);
  outline: none;
  overflow: hidden;
}
.what-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex: 0 0 auto;
}
.what-head h1 {
  font-size: clamp(1.75rem, 3.5vw, 2.35rem);
  margin: 0.1rem 0 0;
  line-height: 1.15;
}
.what-head .kicker { margin: 0; font-size: 0.88rem; }
.what-close {
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: #f3e7db;
  color: var(--ink);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  flex: 0 0 auto;
}
.what-close:hover { background: #ead9c8; }
.stage {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.scene-frame {
  flex: 0 0 auto;
  width: 100%;
  height: 280px;
  position: relative;
  z-index: 0;
}
.scene-fit { position: absolute; inset: 0; }
.scene {
  display: block;
  width: 100%;
  height: 100%;
  color: #c4623a;
  overflow: visible;
  pointer-events: none;
}
.scene text { font-family: var(--sans); }
.bar {
  height: 3px;
  flex: 0 0 auto;
  border-radius: 4px;
  background: #f1e6da;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.bar span {
  display: block;
  height: 100%;
  background: var(--terracotta);
  transform-origin: left center;
  animation: grow var(--dur) linear both;
}
.caption {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: var(--paper);
  overflow: hidden;
}
.caption h2 {
  font-size: clamp(1.45rem, 2.8vw, 1.9rem);
  margin: 0.15rem 0 0.35rem;
  line-height: 1.2;
  flex: 0 0 auto;
}
.caption .kicker { flex: 0 0 auto; margin: 0; font-size: 0.88rem; }
.caption .body {
  font-size: 1.12rem;
  line-height: 1.45;
  max-width: 48rem;
  margin: 0;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}
.caption .foot {
  flex: 0 0 auto;
  min-height: 2.9rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin-top: 0.4rem;
}
.caption .foot .btn { padding: 10px 16px; font-size: 1rem; }
.word-chip {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: #f6eadc;
  color: var(--terracotta-deep);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
}
.word-chip:hover { background: #f1dcc6; }
.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  flex: 0 0 auto;
  min-height: 3rem;
  padding-top: 0.2rem;
  position: relative;
  z-index: 1;
  background: var(--paper);
}
.controls .btn { padding: 11px 18px; font-size: 1.02rem; }
.dots { display: flex; gap: 0.45rem; margin-left: auto; }
.dots button {
  width: 11px;
  height: 11px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #e3d4c4;
  cursor: pointer;
}
.dots button.on { background: var(--terracotta); transform: scale(1.25); }

.note-text { font-weight: 800; font-size: 20px; fill: #9a4528; }
.tiny { font-weight: 750; font-size: 16px; fill: #7a6a5c; }
.reassurance { font-weight: 800; font-size: 16px; fill: #2f5c50; }
.warn { font-weight: 800; font-size: 16px; fill: #9a3a22; }
.measure { font-weight: 800; font-size: 16px; fill: #9a4528; }
.note { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.note-line { font-weight: 750; font-size: 18px; fill: #2b241c; }
.note-small { font-weight: 750; font-size: 16px; fill: #2b241c; }
.mark { fill: #c4623a; font-weight: 800; font-size: 22px; }
.blank { fill: #fff; stroke: #c9b8a8; stroke-width: 2; stroke-dasharray: 7 6; }
.log { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.log-title { font-family: var(--serif) !important; font-weight: 600; font-size: 22px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 16px; fill: #7a6a5c; }
.row-v { font-weight: 700; font-size: 20px; fill: #2b241c; }
.ok-pill { fill: #e5f0ea; }
.ok-text { font-weight: 800; font-size: 18px; fill: #24564a; }
.warm { fill: none; stroke: #e0a96b; stroke-width: 2.5; stroke-linecap: round; }
.red-line { fill: none; stroke: #b4472f; stroke-width: 3; stroke-linecap: round; }
.flag { fill: #fbe3da; }
.flag-text { font-weight: 800; font-size: 18px; fill: #9a3a22; }
.cross { fill: none; stroke: #b4472f; stroke-width: 4; stroke-linecap: round; }

.rise { animation: rise 0.7s ease var(--d, 0s) both; }
.pop {
  transform-box: fill-box;
  transform-origin: center;
  animation: pop 0.6s cubic-bezier(0.2, 1.4, 0.4, 1) var(--d, 0s) both;
}
.draw { stroke-dasharray: 1; animation: draw 1.1s ease var(--d, 0s) both; }

@keyframes grow { from { transform: scaleX(0); } }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } }
@keyframes pop {
  0% { opacity: 0; transform: scale(0.3); }
  70% { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }

.paused .scene *,
.paused .bar span { animation-play-state: paused !important; }
.settled .scene *,
.settled .bar span { animation: none !important; }

@media (prefers-reduced-motion: reduce) {
  .scene *,
  .bar span { animation: none !important; }
  .bar { display: none; }
}
@media (max-width: 720px) {
  .what-backdrop { padding: 8px; }
  .what-modal {
    --modal-h: calc(100dvh - 16px);
    padding: 0.75rem 0.75rem 0.7rem;
    border-radius: 16px;
  }
  .what-head h1 { font-size: clamp(1.55rem, 6vw, 1.9rem); }
  .scene-frame {
    flex: 0 0 auto;
    width: calc(100% + 1.5rem);
    margin-inline: -0.75rem;
    height: auto;
    aspect-ratio: 800 / 400;
    max-height: min(280px, calc(100dvh - 380px));
    overflow: hidden;
  }
  .caption {
    flex: 1 1 auto;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .caption h2 { font-size: clamp(1.3rem, 5vw, 1.55rem); }
  .caption .body {
    flex: 0 0 auto;
    overflow: visible;
    font-size: 1.05rem;
  }
  .dots { margin-left: 0; width: 100%; }
  .controls { min-height: 5.5rem; align-content: center; }
  .controls .btn { flex: 1 1 auto; font-size: 1rem; }
}
</style>
