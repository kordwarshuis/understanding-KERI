<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import Figure from '../components/scene/Figure.vue'
import NameTag from '../components/scene/NameTag.vue'
import KeyIcon from '../components/scene/KeyIcon.vue'
import Building from '../components/scene/Building.vue'
import { measureSceneEnd } from '../sceneTiming'

const route = useRoute()
const router = useRouter()
const { t, tf, scenes, locale } = useI18n()

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

const scene = computed(() => scenes.value[index.value])
const art = computed(() => scene.value.art || {})
const sceneKey = computed(() => `${locale.value}-${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === scenes.value.length - 1)

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

function labelHalf(text) {
  const lines = wrapWords(text, 16)
  return Math.max(46, Math.max(...lines.map((line) => line.length)) * 7)
}

const verifiers = computed(() => {
  const specs = [
    { label: art.value.bank, color: '#3d6e8a' },
    { label: art.value.clinic, color: '#3f6f62' },
    { label: art.value.stranger, color: '#6d5a7a' },
  ]
  let edge = 786
  const placed = []
  for (let i = specs.length - 1; i >= 0; i--) {
    const half = labelHalf(specs[i].label)
    const x = edge - half
    placed[i] = { ...specs[i], x }
    edge = x - half - 36
  }
  return placed
})
const claims = computed(() => [
  { y: 150, text: art.value.claimA },
  { y: 270, text: art.value.claimB },
])
const claimWidth = (text) => {
  const n = Math.max(String(text || '').length, String(art.value.signed || '').length)
  return Math.min(280, Math.max(210, n * 11 + 32))
}
const claimX = (text) => 324 + claimWidth(text) / 2
const idRows = computed(() => {
  const rows = [
    { k: art.value.nameK, v: art.value.nameV, y: 152 },
    { k: art.value.bornK, v: art.value.bornV, y: 194 },
    { k: art.value.livesK, v: art.value.livesV, y: 236 },
    { k: art.value.overK, v: art.value.overV, y: 278, keep: true },
  ]
  const keyW = Math.min(168, Math.max(...rows.map((row) => String(row.k || '').length)) * 11)
  const vx = 88 + keyW + 16
  return rows.map((row) => ({ ...row, vx, redactW: Math.max(64, 400 - vx) }))
})
const tiles = computed(() => [
  { x: 150, label: art.value.tile1, lit: 0.8 },
  { x: 400, label: art.value.tile2, lit: 4 },
  { x: 650, label: art.value.tile3, lit: 6 },
])

function pillMetrics(text) {
  const lines = wrapWords(text, 18)
  const longest = Math.max(...lines.map((line) => line.length))
  const w = Math.max(120, longest * 11 + 36)
  const h = lines.length === 1 ? 36 : 16 + lines.length * 24
  return { lines, w, h }
}

const placedPills = computed(() =>
  (scene.value.pills || []).map((pill) => {
    const box = pillMetrics(pill.text)
    const half = box.w / 2
    let x = Math.max(14 + half, Math.min(786 - half, pill.x))
    if (pill.y > 155 && pill.y < 230) {
      if (x <= 400 && x + half > 284) x = 284 - half
      if (x > 400 && x - half < 516) x = 516 + half
      x = Math.max(14 + half, Math.min(786 - half, x))
    }
    return { ...pill, ...box, x }
  }),
)

const flagLines = computed(() => wrapWords(art.value.flag, 18))
const flagWidth = computed(() => {
  const longest = Math.max(...flagLines.value.map((line) => line.length), 1)
  return Math.max(200, longest * 11 + 40)
})
const flagHeight = computed(() => (flagLines.value.length > 1 ? 16 + flagLines.value.length * 24 : 36))
const checkerX = computed(() => Math.min(748, 786 - labelHalf(art.value.checker)))
const flagX = computed(() => {
  const half = flagWidth.value / 2
  const room = checkerX.value - labelHalf(art.value.checker) - 24
  return Math.max(half + 20, Math.min(420, room - half))
})
const proofWidth = computed(() => Math.max(132, pillMetrics(art.value.proof).w))
const proofX = computed(() => Math.min(620, 690 - proofWidth.value / 2))

function stackedY(count, index, step = 24) {
  if (count <= 1) return 6
  return -((count - 1) * step) / 2 + 6 + index * step
}
function flagLineY(index) {
  return stackedY(flagLines.value.length, index)
}
function pillLineY(pill, index) {
  return stackedY(pill.lines.length, index)
}
function tileLineY(label, index) {
  const count = wrapWords(label, 16).length
  if (count <= 1) return 294
  return 272 + index * 28
}

function go(i) {
  index.value = Math.max(0, Math.min(scenes.value.length - 1, i))
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
  if (index.value >= scenes.value.length) index.value = 0
  run.value++
})

function syncBar() {
  barMs.value = measureSceneEnd(sceneEl.value)
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
        :aria-label="t.whatTitle"
        tabindex="-1"
      >
        <header class="what-head">
          <div>
            <p class="kicker">{{ t.whatKicker }}</p>
            <h1 class="serif">{{ t.whatTitle }}</h1>
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
          <template v-if="scene.id === 'borrowed'">
            <path class="flow" style="--d: 4.4s" d="M 168 262 C 230 220, 290 214, 334 226" />
            <path class="flow" style="--d: 4.4s" d="M 466 226 C 510 214, 570 220, 632 262" />
            <g class="rise" style="--d: 0.1s">
              <g transform="translate(400 330)"><Building :label="art.company" /></g>
            </g>
            <g class="pop" style="--d: 1s">
              <g transform="translate(400 215)">
                <g class="dim" style="--d: 4.4s"><NameTag text="you@them" /></g>
              </g>
            </g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(130 330)"><Figure :label="art.you" /></g>
            </g>
            <g class="rise" style="--d: 0.5s">
              <g transform="translate(670 330)"><Figure :label="art.friend" color="#6d5a7a" /></g>
            </g>
            <g class="pop" style="--d: 4.4s">
              <g transform="translate(400 266)">
                <rect x="-58" y="-18" width="116" height="36" rx="18" class="closed" />
                <text y="6" text-anchor="middle" class="closed-text">{{ art.closed }}</text>
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'own'">
            <g class="fade-out" style="--d: 0.4s">
              <g transform="translate(620 330)"><Building /></g>
            </g>
            <g transform="translate(300 330)"><Figure :label="art.you" /></g>
            <circle class="ripple" style="--d: 2.6s" cx="300" cy="212" r="48" />
            <path class="draw warm" style="--d: 1.4s" pathLength="1" d="M 338 292 C 380 266, 372 236, 348 220" />
            <g class="pop" style="--d: 0.8s">
              <g transform="translate(342 302)"><KeyIcon /></g>
            </g>
            <g class="pop" style="--d: 2.2s">
              <g transform="translate(300 212)"><NameTag text="E7f…q2" /></g>
            </g>
            <g class="rise" style="--d: 3.2s">
              <text x="300" y="170" text-anchor="middle" class="note-text">{{ art.note }}</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'check'">
            <g transform="translate(180 330)"><Figure :label="art.you" /></g>
            <g transform="translate(180 212)"><NameTag text="E7f…q2" /></g>
            <g v-for="(v, i) in verifiers" :key="v.label">
              <path
                class="draw thin"
                :style="{ '--d': 1 + i * 1.2 + 's' }"
                pathLength="1"
                :d="`M 228 204 Q ${(228 + v.x) / 2} 110 ${v.x} 222`"
              />
              <g class="rise" :style="{ '--d': 0.2 + i * 0.2 + 's' }">
                <g :transform="`translate(${v.x} 330)`"><Figure :label="v.label" :color="v.color" /></g>
              </g>
              <g class="pop" :style="{ '--d': 1.9 + i * 1.2 + 's' }">
                <g :transform="`translate(${v.x} 222)`">
                  <circle r="14" class="ok" />
                  <path d="M -6 0 L -2 5 L 7 -5" class="ok-mark" />
                </g>
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'recover'">
            <g transform="translate(200 330)"><Figure :label="art.you" /></g>
            <circle class="ripple" style="--d: 6.4s" cx="200" cy="212" r="48" />
            <g transform="translate(200 212)"><NameTag text="E7f…q2" /></g>
            <g class="rise" style="--d: 0.6s">
              <g transform="translate(560 330)">
                <g class="fade-to" style="--d: 4.8s"><Figure :label="art.thief" color="#4a3f38" /></g>
              </g>
            </g>
            <g transform="translate(500 302)">
              <g class="fade-in" style="--d: 0.2s">
                <g class="move" style="--d: 1.6s; --fx: -250px; --fy: 0px">
                  <g class="key-dead" style="--d: 4s">
                    <KeyIcon />
                    <g class="pop" style="--d: 4s">
                      <path d="M -14 -12 L 18 12 M 18 -12 L -14 12" class="cross" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g class="pop" style="--d: 5.4s">
              <g transform="translate(250 302)">
                <circle r="20" class="glow" />
                <KeyIcon />
              </g>
            </g>
            <g class="rise" style="--d: 6.4s">
              <text x="200" y="170" text-anchor="middle" class="note-text">{{ art.note }}</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'lies'">
            <g transform="translate(130 330)"><Figure :label="art.someone" color="#4a3f38" /></g>
            <g transform="translate(130 212)"><NameTag text="E7f…q2" /></g>
            <path class="draw thin" style="--d: 3.4s" pathLength="1" :d="`M 522 150 Q ${(522 + checkerX) / 2} 160 ${checkerX - 36} 248`" />
            <path class="draw thin" style="--d: 3.6s" pathLength="1" :d="`M 522 270 Q ${(522 + checkerX) / 2} 272 ${checkerX - 46} 264`" />
            <g
              v-for="(c, i) in claims"
              :key="c.text"
              class="slide"
              :style="{ '--d': 1 + i * 1.3 + 's', '--fx': '-120px', '--fy': '0px' }"
            >
              <g :transform="`translate(${claimX(c.text)} ${c.y})`">
                <rect :x="-claimWidth(c.text) / 2" y="-34" :width="claimWidth(c.text)" height="68" rx="16" class="claim" style="--d: 5s" />
                <text y="-4" text-anchor="middle" class="claim-text">{{ c.text }}</text>
                <text y="20" text-anchor="middle" class="claim-sign">{{ art.signed }}</text>
              </g>
            </g>
            <path class="draw red-line" style="--d: 4.6s" pathLength="1" d="M 316 150 H 302 V 270 H 316" />
            <g class="rise" style="--d: 0.4s">
              <g :transform="`translate(${checkerX} 330)`"><Figure :label="art.checker" color="#3f6f62" /></g>
            </g>
            <g class="pop" style="--d: 5.4s">
              <g :transform="`translate(${flagX} 352)`">
                <rect :x="-flagWidth / 2" :y="-flagHeight / 2" :width="flagWidth" :height="flagHeight" :rx="flagHeight / 2" class="flag" />
                <text text-anchor="middle" class="flag-text">
                  <tspan v-for="(line, li) in flagLines" :key="line" x="0" :y="flagLineY(li)">{{ line }}</tspan>
                </text>
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'minimal'">
            <g class="rise" style="--d: 0.1s">
              <rect x="52" y="70" width="370" height="250" rx="22" class="id-card" />
              <text x="72" y="112" class="id-title">{{ art.idTitle }}</text>
              <g v-for="(row, i) in idRows" :key="row.k">
                <rect
                  v-if="row.keep"
                  class="keep-bg"
                  style="--d: 2.6s"
                  x="68"
                  :y="row.y - 22"
                  width="338"
                  height="36"
                  rx="10"
                />
                <text x="80" :y="row.y" class="row-k">{{ row.k }}</text>
                <text :x="row.vx" :y="row.y" class="row-v">{{ row.v }}</text>
                <rect
                  v-if="!row.keep"
                  class="redact"
                  :style="{ '--d': 1.2 + i * 0.3 + 's' }"
                  :x="row.vx - 6"
                  :y="row.y - 16"
                  :width="row.redactW"
                  height="22"
                  rx="6"
                />
              </g>
            </g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(660 330)"><Figure :label="art.shop" color="#3d6e8a" /></g>
            </g>
            <g :transform="`translate(${proofX} 212)`">
              <g class="slide" style="--d: 3.4s; --fx: -280px; --fy: 66px">
                <rect :x="-proofWidth / 2" y="-18" :width="proofWidth" height="36" rx="18" class="proof" />
                <text y="6" text-anchor="middle" class="proof-text">{{ art.proof }}</text>
              </g>
            </g>
            <g class="pop" style="--d: 4.8s">
              <g :transform="`translate(${proofX + proofWidth / 2 + 24} 200)`">
                <circle r="14" class="ok" />
                <path d="M -6 0 L -2 5 L 7 -5" class="ok-mark" />
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'lend'">
            <g transform="translate(190 330)"><Figure :label="art.you" /></g>
            <g transform="translate(190 212)"><NameTag text="E7f…q2" /></g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(590 330)"><Figure :label="art.helper" color="#b86b3d" /></g>
            </g>
            <path class="rope" style="--d: 1s; --d2: 5.6s" pathLength="1" d="M 238 206 Q 390 100 542 206" />
            <g class="pop" style="--d: 2.2s">
              <g transform="translate(590 212)">
                <g class="fade-to" style="--d: 5.9s"><NameTag :text="art.forYou" /></g>
              </g>
            </g>
            <g class="pop" style="--d: 5.6s">
              <g transform="translate(390 153)">
                <path d="M -10 -10 L 10 10 M 10 -10 L -10 10" class="cross" />
              </g>
            </g>
            <g class="rise" style="--d: 6.4s">
              <text x="590" y="170" text-anchor="middle" class="note-text">{{ art.note }}</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'portable'">
            <path class="road" d="M 150 180 H 650" />
            <g v-for="(tile, i) in tiles" :key="tile.label" class="rise" :style="{ '--d': 0.1 + i * 0.15 + 's' }">
              <rect :x="tile.x - 100" y="228" width="200" height="118" rx="20" class="tile" :style="{ '--d': tile.lit + 's' }" />
              <text :x="tile.x" text-anchor="middle" class="tile-text">
                <tspan v-for="(line, li) in wrapWords(tile.label, 16)" :key="line" :x="tile.x" :y="tileLineY(tile.label, li)">{{ line }}</tspan>
              </text>
            </g>
            <g transform="translate(650 180)">
              <g class="travel" style="--d: 0.8s"><NameTag text="E7f…q2" /></g>
            </g>
            <g class="rise" style="--d: 7s">
              <text x="650" y="140" text-anchor="middle" class="note-text">{{ art.note }}</text>
            </g>
          </template>

          <template v-else>
            <circle class="ripple" style="--d: 0.8s" cx="400" cy="190" r="70" />
            <g class="pop" style="--d: 0.2s">
              <g transform="translate(400 190) scale(1.25)"><NameTag text="E7f…q2" /></g>
            </g>
            <g v-for="(p, i) in placedPills" :key="p.text" class="pop" :style="{ '--d': 0.9 + i * 0.45 + 's' }">
              <g :transform="`translate(${p.x} ${p.y})`">
                <rect :x="-p.w / 2" :y="-p.h / 2" :width="p.w" :height="p.h" :rx="p.h / 2" class="pill" />
                <text text-anchor="middle" class="pill-text">
                  <tspan v-for="(line, li) in p.lines" :key="line" x="0" :y="pillLineY(p, li)">{{ line }}</tspan>
                </text>
              </g>
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
        <p class="kicker">{{ tf('whatOf', { n: index + 1, total: scenes.length }) }} · {{ scene.kicker }}</p>
        <h2 class="serif">{{ scene.title }}</h2>
        <p class="body">{{ scene.body }}</p>
        <div class="foot">
          <RouterLink v-if="scene.word" class="word-chip" :to="`/words/${scene.word.id}`">
            {{ tf('whatWord', { label: scene.word.label }) }}
          </RouterLink>
          <template v-if="scene.final">
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
                v-for="(s, i) in scenes"
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
.what-head .kicker {
  margin: 0;
  font-size: 0.88rem;
}

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
  flex-shrink: 0;
}
.scene-fit {
  position: absolute;
  inset: 0;
}
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
.caption .kicker {
  flex: 0 0 auto;
  margin: 0;
  font-size: 0.88rem;
}
.caption .body {
  font-size: 1.12rem;
  line-height: 1.45;
  max-width: 48rem;
  margin: 0;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.caption .foot {
  flex: 0 0 auto;
  min-height: 2.9rem;
  display: flex;
  flex-wrap: nowrap;
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
.closed { fill: #b4472f; }
.closed-text { font-weight: 800; font-size: 20px; fill: #fff; }
.thin { fill: none; stroke: #cdbfb1; stroke-width: 2; stroke-linecap: round; }
.warm { fill: none; stroke: #e0a96b; stroke-width: 2.5; stroke-linecap: round; }
.red-line { fill: none; stroke: #b4472f; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.ok { fill: #3f6f62; }
.ok-mark { fill: none; stroke: #fff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.cross { fill: none; stroke: #b4472f; stroke-width: 4; stroke-linecap: round; }
.glow { fill: #f6dcb8; }
.claim-text { font-weight: 700; font-size: 24px; fill: #2b241c; }
.claim-sign { font-size: 16px; fill: #7a6a5c; }
.flag { fill: #fbe3da; }
.flag-text { font-weight: 800; font-size: 20px; fill: #9a3a22; }
.id-card { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.id-title { font-family: var(--serif) !important; font-weight: 600; font-size: 26px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 20px; fill: #7a6a5c; }
.row-v { font-weight: 600; font-size: 21px; fill: #2b241c; }
.keep-bg { fill: #fbe9cf; }
.redact { fill: #3a312a; }
.proof { fill: #fbe9cf; stroke: #e0b98a; stroke-width: 2; }
.proof-text { font-weight: 800; font-size: 20px; fill: #7a4b1f; }
.road { fill: none; stroke: #e0cbb4; stroke-width: 2; stroke-dasharray: 4 8; }
.tile-text { font-weight: 700; font-size: 22px; fill: #5b4d40; }
.pill { fill: #fff; stroke: #e8d9c8; stroke-width: 1.5; }
.pill-text { font-weight: 700; font-size: 20px; fill: #2b241c; }

.rise { animation: rise 0.7s ease var(--d, 0s) both; }
.pop {
  transform-box: fill-box;
  transform-origin: center;
  animation: pop 0.6s cubic-bezier(0.2, 1.4, 0.4, 1) var(--d, 0s) both;
}
.fade-in { animation: fade-in 0.5s ease var(--d, 0s) both; }
.fade-out { opacity: 0.1; animation: fade-from 1.2s ease var(--d, 0s) both; }
.fade-to { opacity: 0.3; animation: fade-from 0.6s ease var(--d, 0s) both; }
.dim { opacity: 0.35; animation: fade-from 0.6s ease var(--d, 0s) both; }
.slide { animation: slide 1.1s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) both; }
.move { animation: move 1.1s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) both; }
.draw { stroke-dasharray: 1; animation: draw 1.1s ease var(--d, 0s) both; }
.ripple {
  fill: none;
  stroke: #e7c99a;
  stroke-width: 3;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: ripple 2.2s ease-out var(--d, 0s) infinite;
}
.flow {
  fill: none;
  stroke: #cdbfb1;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 1 11;
  opacity: 0.5;
  animation: flow 1s linear infinite, cut 0.7s ease var(--d, 0s) both;
}
.key-dead { color: #b9ab9c; animation: key-dead 0.6s ease var(--d, 0s) both; }
.claim { fill: #fff; stroke: #b4472f; stroke-width: 2.5; animation: edge 0.6s ease var(--d, 0s) both; }
.redact { transform-box: fill-box; transform-origin: left center; animation: wipe 0.5s ease var(--d, 0s) both; }
.keep-bg { animation: fade-in 0.6s ease var(--d, 0s) both; }
.tile { fill: #fff3e2; stroke: #e0b98a; stroke-width: 2.5; animation: lit 0.6s ease var(--d, 0s) both; }
.travel { animation: travel 6s ease-in-out var(--d, 0s) both; }
.rope {
  fill: none;
  stroke: #e0a96b;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 1;
  opacity: 0;
  animation: draw 1.2s ease var(--d, 0s) both, snap 0.5s ease var(--d2, 0s) both;
}

@keyframes grow { from { transform: scaleX(0); } }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } }
@keyframes pop {
  0% { opacity: 0; transform: scale(0.3); }
  70% { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes fade-in { from { opacity: 0; } }
@keyframes fade-from { from { opacity: 1; } }
@keyframes slide { from { opacity: 0; transform: translate(var(--fx, 0px), var(--fy, 0px)); } }
@keyframes move { from { transform: translate(var(--fx, 0px), var(--fy, 0px)); } }
@keyframes draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes ripple {
  from { opacity: 0.7; transform: scale(0.7); }
  to { opacity: 0; transform: scale(1.5); }
}
@keyframes flow { to { stroke-dashoffset: -24; } }
@keyframes cut { from { stroke: #c4623a; opacity: 1; } }
@keyframes key-dead { from { color: #c4623a; } }
@keyframes edge { from { stroke: #eadfd2; } }
@keyframes wipe { from { transform: scaleX(0); } }
@keyframes lit { from { fill: #fffaf4; stroke: #eadfd2; } }
@keyframes travel {
  0%, 30% { transform: translateX(-500px); }
  50%, 65% { transform: translateX(-250px); }
  85%, 100% { transform: translateX(0); }
}
@keyframes snap { from { opacity: 1; } to { opacity: 0; } }

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
  .what-modal {
    --modal-h: min(700px, calc(100dvh - 16px));
    padding: 0.85rem 0.9rem 0.8rem;
    border-radius: 16px;
  }
  .what-head h1 { font-size: clamp(1.55rem, 6vw, 1.9rem); }
  .scene-frame { height: 220px; }
  .caption h2 { font-size: clamp(1.3rem, 5vw, 1.55rem); }
  .caption .body { font-size: 1.05rem; }
  .caption .foot { min-height: 3rem; }
  .dots { margin-left: 0; width: 100%; }
  .controls { min-height: 5.5rem; align-content: center; }
  .controls .btn { flex: 1 1 auto; font-size: 1rem; }
}
</style>
