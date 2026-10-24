<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import Figure from '../components/scene/Figure.vue'
import NameTag from '../components/scene/NameTag.vue'
import KeyIcon from '../components/scene/KeyIcon.vue'
import DigestSeal from '../components/scene/DigestSeal.vue'
import Press from '../components/scene/Press.vue'
import { fitSceneFrame, measureSceneEnd } from '../sceneTiming'

const route = useRoute()
const router = useRouter()
const { t, tf, logScenes, locale } = useI18n()

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

const scene = computed(() => logScenes.value[index.value])
const art = computed(() => scene.value.art || {})
const sceneKey = computed(() => `${locale.value}-${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === logScenes.value.length - 1)

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

function go(i) {
  index.value = Math.max(0, Math.min(logScenes.value.length - 1, i))
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
  if (index.value >= logScenes.value.length) index.value = 0
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
        :aria-label="t.logTitle"
        tabindex="-1"
      >
        <header class="what-head">
          <div>
            <p class="kicker">{{ t.logKicker }}</p>
            <h1 class="serif">{{ t.logTitle }}</h1>
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
                  <template v-if="scene.id === 'first'">
                    <g class="rise" style="--d: 0.2s">
                      <g transform="translate(118 250)"><Figure :label="art.you" /></g>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(530 42)"><NameTag :text="art.name" /></g>
                    </g>
                    <g class="rise" style="--d: 0.7s">
                      <text x="530" y="82" text-anchor="middle" class="tiny">{{ art.nameLabel }}</text>
                    </g>
                    <path class="draw warm" style="--d: 0.9s" pathLength="1" d="M 530 92 V 112" />
                    <g class="rise" style="--d: 0.45s">
                      <rect x="250" y="112" width="530" height="268" rx="18" class="log" />
                      <text x="274" y="148" class="log-title">{{ art.card }}</text>
                      <g transform="translate(300 198)"><KeyIcon /></g>
                      <text x="336" y="192" class="row-v">{{ art.pub }}</text>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.pubLabel, 28)"
                          :key="`pub-${li}`"
                          x="336"
                          :y="216 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                      <g transform="translate(530 292)">
                        <DigestSeal :text="art.hash" />
                      </g>
                      <text text-anchor="middle" class="row-k">
                        <tspan
                          v-for="(line, li) in art.hashLines"
                          :key="`hash-${li}`"
                          x="530"
                          :y="332 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'link'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="16" y="78" width="280" height="168" rx="18" class="log" />
                      <text x="36" y="114" class="log-title">{{ art.first }}</text>
                      <g transform="translate(60 164)"><KeyIcon /></g>
                      <text x="96" y="158" class="row-v">{{ art.pub }}</text>
                      <text x="96" y="184" class="row-k">{{ art.pubLabel }}</text>
                    </g>
                    <g class="pop" style="--d: 0.55s">
                      <g transform="translate(400 162)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 1s" pathLength="1" d="M 296 162 H 338" />
                    <path class="draw warm" style="--d: 1.35s" pathLength="1" d="M 462 146 C 510 96, 540 96, 556 96" />
                    <g class="pop" style="--d: 2s">
                      <g transform="translate(660 96)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <path class="draw warm" style="--d: 2.45s" pathLength="1" d="M 660 118 V 158" />
                    <g class="rise" style="--d: 2.7s">
                      <rect x="500" y="158" width="284" height="176" rx="18" class="log" />
                      <text x="642" y="194" text-anchor="middle" class="log-title">{{ art.next }}</text>
                      <text x="642" y="230" text-anchor="middle" class="prior">{{ art.digest }}</text>
                      <text text-anchor="middle" class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.carries, 26)"
                          :key="`carries-${li}`"
                          x="642"
                          :y="256 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="pop" style="--d: 3.5s">
                      <g transform="translate(642 360)">
                        <rect :x="-pillWidth(art.matches) / 2" y="-16" :width="pillWidth(art.matches)" height="32" rx="16" class="ok-pill" />
                        <text y="5" text-anchor="middle" class="ok-text">{{ art.matches }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'replay'">
                    <g class="pop" style="--d: 0.15s">
                      <g transform="translate(400 46)"><NameTag :text="art.name" /></g>
                    </g>
                    <g class="rise" style="--d: 0.45s">
                      <text x="400" y="90" text-anchor="middle" class="tiny">{{ art.same }}</text>
                    </g>
                    <g
                      v-for="(card, i) in art.cards"
                      :key="card.step"
                      class="rise"
                      :style="{ '--d': 0.7 + i * 0.55 + 's' }"
                    >
                      <rect :x="20 + i * 260" y="114" width="244" height="230" rx="18" class="log" />
                      <text :x="142 + i * 260" y="150" text-anchor="middle" class="log-title">{{ card.step }}</text>
                      <text
                        v-if="card.prior"
                        :x="142 + i * 260"
                        y="180"
                        text-anchor="middle"
                        class="prior"
                      >{{ card.prior }}</text>
                      <g :transform="`translate(${142 + i * 260} ${card.prior ? 224 : 210})`">
                        <KeyIcon />
                      </g>
                      <text
                        :x="142 + i * 260"
                        :y="card.prior ? 262 : 250"
                        text-anchor="middle"
                        class="row-v"
                      >{{ card.key }}</text>
                      <text :x="142 + i * 260" y="308" text-anchor="middle" class="row-k">{{ card.role }}</text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'short'">
                    <g class="rise" style="--d: 0.1s">
                      <text x="178" y="36" text-anchor="middle" class="col-title">{{ art.full }}</text>
                      <text x="622" y="36" text-anchor="middle" class="col-title">{{ art.short }}</text>
                    </g>
                    <g
                      v-for="(card, i) in art.cards"
                      :key="`full-${card.step}`"
                      class="rise"
                      :style="{ '--d': 0.3 + i * 0.28 + 's' }"
                    >
                      <rect x="28" :y="56 + i * 104" width="300" height="84" rx="16" class="log" />
                      <text x="56" :y="106 + i * 104" class="log-title">{{ card.step }}</text>
                      <text x="130" :y="106 + i * 104" class="row-v">{{ card.key }}</text>
                    </g>
                    <g
                      v-for="(card, i) in art.cards.slice(0, 2)"
                      :key="`short-${card.step}`"
                      class="rise"
                      :style="{ '--d': 1.2 + i * 0.28 + 's' }"
                    >
                      <rect x="472" :y="56 + i * 104" width="300" height="84" rx="16" class="log" />
                      <text x="500" :y="106 + i * 104" class="log-title">{{ card.step }}</text>
                      <text x="574" :y="106 + i * 104" class="row-v">{{ card.key }}</text>
                      <text x="400" :y="108 + i * 104" text-anchor="middle" class="measure">=</text>
                    </g>
                    <g class="pop" style="--d: 1.9s">
                      <rect x="472" y="264" width="300" height="84" rx="16" class="blank" />
                      <text x="622" y="314" text-anchor="middle" class="warn">{{ art.unfinished }}</text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'rewrite'">
                    <g class="rise" style="--d: 0.15s">
                      <text x="148" y="58" text-anchor="middle" class="tiny">{{ art.written }}</text>
                      <rect x="24" y="70" width="248" height="72" rx="16" class="log" />
                      <g transform="translate(64 106)"><KeyIcon /></g>
                      <text x="168" y="112" text-anchor="middle" class="row-v">
                        <tspan>{{ art.keyBase }}</tspan><tspan class="mark">{{ art.keyMark }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 0.4s">
                      <text x="148" y="214" text-anchor="middle" class="tiny">{{ art.changed }}</text>
                      <rect x="24" y="226" width="248" height="72" rx="16" class="log" />
                      <g transform="translate(64 262)"><KeyIcon /></g>
                      <text x="168" y="268" text-anchor="middle" class="row-v">
                        <tspan>{{ art.keyBase }}</tspan><tspan class="mark">{{ art.changedMark }}</tspan>
                      </text>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(390 106)"><Press /></g>
                    </g>
                    <g class="pop" style="--d: 0.6s">
                      <g transform="translate(390 262)"><Press /></g>
                    </g>
                    <path class="draw warm" style="--d: 0.9s" pathLength="1" d="M 272 106 H 328" />
                    <path class="draw warm" style="--d: 1.1s" pathLength="1" d="M 272 262 H 328" />
                    <path class="draw warm" style="--d: 1.4s" pathLength="1" d="M 452 106 H 548" />
                    <path class="draw warm" style="--d: 1.6s" pathLength="1" d="M 452 262 H 548" />
                    <g class="pop" style="--d: 2.05s">
                      <g transform="translate(656 106)"><DigestSeal :text="art.digest" /></g>
                    </g>
                    <g class="pop" style="--d: 2.35s">
                      <g transform="translate(656 262)"><DigestSeal :text="art.changedDigest" /></g>
                    </g>
                    <g class="rise" style="--d: 2.6s">
                      <text x="656" y="154" text-anchor="middle" class="tiny">{{ art.onNext }}</text>
                      <text x="656" y="310" text-anchor="middle" class="tiny">{{ art.now }}</text>
                    </g>
                    <g class="pop" style="--d: 3.15s">
                      <g transform="translate(656 196)">
                        <rect :x="-pillWidth(art.nomatch) / 2" y="-16" :width="pillWidth(art.nomatch)" height="32" rx="16" class="flag" />
                        <text y="5" text-anchor="middle" class="flag-text">{{ art.nomatch }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'split'">
                    <g
                      v-for="(side, i) in [
                        { title: art.leftTitle, key: art.leftKey },
                        { title: art.rightTitle, key: art.rightKey },
                      ]"
                      :key="side.title"
                      class="rise"
                      :style="{ '--d': 0.15 + i * 0.35 + 's' }"
                    >
                      <rect :x="20 + i * 400" y="20" width="360" height="292" rx="18" class="log" />
                      <text :x="200 + i * 400" y="56" text-anchor="middle" class="log-title">{{ side.title }}</text>
                      <text :x="200 + i * 400" y="86" text-anchor="middle" class="row-k">{{ art.follows }}</text>
                      <g :transform="`translate(${200 + i * 400} 136)`">
                        <DigestSeal :text="art.digest" />
                      </g>
                      <g :transform="`translate(${150 + i * 400} 196)`"><KeyIcon /></g>
                      <text :x="178 + i * 400" y="202" class="row-v">{{ side.key }}</text>
                      <g :transform="`translate(${200 + i * 400} 262)`">
                        <rect :x="-pillWidth(art.signed) / 2" y="-16" :width="pillWidth(art.signed)" height="32" rx="16" class="ok-pill" />
                        <text y="5" text-anchor="middle" class="ok-text">{{ art.signed }}</text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 1.5s">
                      <g transform="translate(400 352)">
                        <rect :x="-pillWidth(art.flag) / 2" y="-18" :width="pillWidth(art.flag)" height="36" rx="18" class="flag" />
                        <text y="6" text-anchor="middle" class="flag-text">{{ art.flag }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else>
                    <g class="pop" style="--d: 0.15s">
                      <g transform="translate(400 58)"><NameTag :text="art.name" /></g>
                    </g>
                    <g
                      v-for="(step, i) in art.steps"
                      :key="step.n"
                      class="rise"
                      :style="{ '--d': 0.45 + i * 0.4 + 's' }"
                    >
                      <rect :x="40 + i * 290" y="168" width="150" height="84" rx="16" class="log" />
                      <text :x="115 + i * 290" y="218" text-anchor="middle" class="log-title">{{ step.n }}</text>
                      <text
                        v-if="step.prior"
                        :x="(40 + (i - 1) * 290 + 150 + 40 + i * 290) / 2"
                        y="156"
                        text-anchor="middle"
                        class="prior"
                      >{{ step.prior }}</text>
                      <path
                        v-if="step.prior"
                        class="draw warm"
                        :style="{ '--d': 0.85 + i * 0.4 + 's' }"
                        pathLength="1"
                        :d="`M ${40 + (i - 1) * 290 + 150} 210 H ${40 + i * 290}`"
                      />
                    </g>
                    <g class="rise" style="--d: 1.8s">
                      <text x="400" y="320" text-anchor="middle" class="note-text">{{ art.line }}</text>
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
            <p class="kicker">{{ tf('whatOf', { n: index + 1, total: logScenes.length }) }} · {{ scene.kicker }}</p>
            <h2 class="serif">{{ scene.title }}</h2>
            <p class="body">{{ scene.body }}</p>
            <div class="foot">
              <RouterLink v-if="scene.word" class="word-chip" :to="`/words/${scene.word.id}`">
                {{ tf('whatWord', { label: scene.word.label }) }}
              </RouterLink>
              <template v-if="scene.final">
                <button class="btn ghost" type="button" @click="go(0)">{{ t.whatStartOver }}</button>
                <RouterLink class="btn" to="/story">{{ t.whatStory }}</RouterLink>
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
                v-for="(s, i) in logScenes"
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
  flex: 1 1 0;
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

.note-text { font-weight: 800; font-size: 22px; fill: #9a4528; }
.tiny { font-weight: 750; font-size: 16px; fill: #7a6a5c; }
.measure { font-weight: 800; font-size: 22px; fill: #2f5c50; }
.warn { font-weight: 800; font-size: 18px; fill: #9a3a22; }
.col-title { font-weight: 800; font-size: 18px; fill: #5c5146; }
.prior { font-weight: 800; font-size: 16px; fill: #7a4b1f; }
.log { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.log-title { font-family: var(--serif) !important; font-weight: 600; font-size: 22px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 16px; fill: #7a6a5c; }
.row-v { font-weight: 700; font-size: 20px; fill: #2b241c; }
.mark { fill: #c4623a; font-weight: 800; }
.blank { fill: #fff; stroke: #c9b8a8; stroke-width: 2; stroke-dasharray: 7 6; }
.ok-pill { fill: #e5f0ea; }
.ok-text { font-weight: 800; font-size: 18px; fill: #24564a; }
.warm { fill: none; stroke: #e0a96b; stroke-width: 2.5; stroke-linecap: round; }
.flag { fill: #fbe3da; }
.flag-text { font-weight: 800; font-size: 18px; fill: #9a3a22; }

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
