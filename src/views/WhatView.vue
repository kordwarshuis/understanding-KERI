<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { scenes } from '../content/what'
import Figure from '../components/scene/Figure.vue'
import NameTag from '../components/scene/NameTag.vue'
import KeyIcon from '../components/scene/KeyIcon.vue'
import Building from '../components/scene/Building.vue'

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const index = ref(0)
const run = ref(0)
const playing = ref(!reduced)
const settled = ref(reduced)
const ended = ref(false)

const scene = computed(() => scenes[index.value])
const sceneKey = computed(() => `${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === scenes.length - 1)

const verifiers = [
  { x: 470, label: 'a bank', color: '#3d6e8a' },
  { x: 600, label: 'a clinic', color: '#3f6f62' },
  { x: 730, label: 'a stranger', color: '#6d5a7a' },
]
const claims = [
  { y: 150, text: '“Sold to Ann.”' },
  { y: 270, text: '“Sold to Ben.”' },
]
const idRows = [
  { k: 'Name', v: 'Maya Rivera', y: 150 },
  { k: 'Born', v: '4 June 1991', y: 192 },
  { k: 'Lives', v: '12 Elm Street', y: 234 },
  { k: 'Over 18', v: 'yes', y: 276, keep: true },
]
const tiles = [
  { x: 150, label: 'Today’s app', lit: 0.8 },
  { x: 400, label: 'A new provider', lit: 4 },
  { x: 650, label: 'Another network', lit: 6 },
]

const pillWidth = (text) => text.length * 7.4 + 30

function go(i) {
  index.value = Math.max(0, Math.min(scenes.length - 1, i))
  ended.value = false
  if (!playing.value) settled.value = true
  run.value++
}

function onSceneDone() {
  if (!playing.value) return
  if (isLast.value) {
    playing.value = false
    ended.value = true
    return
  }
  index.value++
}

function toggle() {
  if (playing.value) {
    playing.value = false
    return
  }
  if (ended.value) index.value = 0
  if (settled.value || ended.value) run.value++
  settled.value = false
  ended.value = false
  playing.value = true
}

function onKey(e) {
  if (e.key === 'ArrowRight') go(index.value + 1)
  if (e.key === 'ArrowLeft') go(index.value - 1)
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="what">
    <p class="kicker">About ninety seconds, no jargon</p>
    <h1 class="serif">What KERI does</h1>
    <p class="lede">
      Not how it works. Just what changes for you, and for everyone you deal with online.
    </p>

    <div class="stage paper" :class="{ paused: !playing, settled }">
      <svg class="scene" viewBox="0 0 800 400" role="img" :aria-label="scene.title">
        <g :key="sceneKey">
          <template v-if="scene.id === 'borrowed'">
            <path class="flow" style="--d: 4.4s" d="M 168 262 C 230 220, 290 214, 334 226" />
            <path class="flow" style="--d: 4.4s" d="M 466 226 C 510 214, 570 220, 632 262" />
            <g class="rise" style="--d: 0.1s">
              <g transform="translate(400 330)"><Building label="the company in the middle" /></g>
            </g>
            <g class="pop" style="--d: 1s">
              <g transform="translate(400 215)">
                <g class="dim" style="--d: 4.4s"><NameTag text="you@them" /></g>
              </g>
            </g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(130 330)"><Figure label="you" /></g>
            </g>
            <g class="rise" style="--d: 0.5s">
              <g transform="translate(670 330)"><Figure label="a friend" color="#6d5a7a" /></g>
            </g>
            <g class="pop" style="--d: 4.4s">
              <g transform="translate(400 266)">
                <rect x="-50" y="-17" width="100" height="34" rx="17" class="closed" />
                <text y="6" text-anchor="middle" class="closed-text">Closed</text>
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'own'">
            <g class="fade-out" style="--d: 0.4s">
              <g transform="translate(620 330)"><Building /></g>
            </g>
            <g transform="translate(300 330)"><Figure label="you" /></g>
            <circle class="ripple" style="--d: 2.6s" cx="300" cy="212" r="48" />
            <path class="draw warm" style="--d: 1.4s" pathLength="1" d="M 338 292 C 380 266, 372 236, 348 220" />
            <g class="pop" style="--d: 0.8s">
              <g transform="translate(342 302)"><KeyIcon /></g>
            </g>
            <g class="pop" style="--d: 2.2s">
              <g transform="translate(300 212)"><NameTag text="E7f…q2" /></g>
            </g>
            <g class="rise" style="--d: 3.2s">
              <text x="300" y="170" text-anchor="middle" class="note-text">made from your own keys</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'check'">
            <g transform="translate(180 330)"><Figure label="you" /></g>
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
            <g transform="translate(200 330)"><Figure label="you" /></g>
            <circle class="ripple" style="--d: 6.4s" cx="200" cy="212" r="48" />
            <g transform="translate(200 212)"><NameTag text="E7f…q2" /></g>
            <g class="rise" style="--d: 0.6s">
              <g transform="translate(560 330)">
                <g class="fade-to" style="--d: 4.8s"><Figure label="a thief" color="#4a3f38" /></g>
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
              <text x="200" y="170" text-anchor="middle" class="note-text">same name</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'lies'">
            <g transform="translate(130 330)"><Figure label="someone" color="#4a3f38" /></g>
            <g transform="translate(130 212)"><NameTag text="E7f…q2" /></g>
            <path class="draw thin" style="--d: 3.4s" pathLength="1" d="M 522 150 Q 640 160 678 248" />
            <path class="draw thin" style="--d: 3.6s" pathLength="1" d="M 522 270 Q 620 272 668 264" />
            <g
              v-for="(c, i) in claims"
              :key="c.text"
              class="slide"
              :style="{ '--d': 1 + i * 1.3 + 's', '--fx': '-120px', '--fy': '0px' }"
            >
              <g :transform="`translate(420 ${c.y})`">
                <rect x="-100" y="-32" width="200" height="64" rx="16" class="claim" style="--d: 5s" />
                <text y="-4" text-anchor="middle" class="claim-text">{{ c.text }}</text>
                <text y="18" text-anchor="middle" class="claim-sign">signed E7f…q2</text>
              </g>
            </g>
            <path class="draw red-line" style="--d: 4.6s" pathLength="1" d="M 312 150 H 298 V 270 H 312" />
            <g class="rise" style="--d: 0.4s">
              <g transform="translate(690 330)"><Figure label="anyone checking" color="#3f6f62" /></g>
            </g>
            <g class="pop" style="--d: 5.4s">
              <g transform="translate(420 352)">
                <rect x="-130" y="-18" width="260" height="36" rx="18" class="flag" />
                <text y="6" text-anchor="middle" class="flag-text">Two stories, one name: caught</text>
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'minimal'">
            <g class="rise" style="--d: 0.1s">
              <rect x="80" y="70" width="300" height="250" rx="22" class="id-card" />
              <text x="104" y="110" class="id-title">Your ID</text>
              <g v-for="(row, i) in idRows" :key="row.k">
                <rect
                  v-if="row.keep"
                  class="keep-bg"
                  style="--d: 2.6s"
                  x="96"
                  :y="row.y - 22"
                  width="268"
                  height="34"
                  rx="10"
                />
                <text x="108" :y="row.y" class="row-k">{{ row.k }}</text>
                <text x="196" :y="row.y" class="row-v">{{ row.v }}</text>
                <rect
                  v-if="!row.keep"
                  class="redact"
                  :style="{ '--d': 1.2 + i * 0.3 + 's' }"
                  x="190"
                  :y="row.y - 16"
                  width="160"
                  height="22"
                  rx="6"
                />
              </g>
            </g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(660 330)"><Figure label="a shop" color="#3d6e8a" /></g>
            </g>
            <g transform="translate(640 212)">
              <g class="slide" style="--d: 3.4s; --fx: -372px; --fy: 66px">
                <rect x="-56" y="-17" width="112" height="34" rx="17" class="proof" />
                <text y="6" text-anchor="middle" class="proof-text">Over 18 ✓</text>
              </g>
            </g>
            <g class="pop" style="--d: 4.8s">
              <g transform="translate(722 200)">
                <circle r="14" class="ok" />
                <path d="M -6 0 L -2 5 L 7 -5" class="ok-mark" />
              </g>
            </g>
          </template>

          <template v-else-if="scene.id === 'lend'">
            <g transform="translate(190 330)"><Figure label="you" /></g>
            <g transform="translate(190 212)"><NameTag text="E7f…q2" /></g>
            <g class="rise" style="--d: 0.3s">
              <g transform="translate(590 330)"><Figure label="your helper" color="#b86b3d" /></g>
            </g>
            <path class="rope" style="--d: 1s; --d2: 5.6s" pathLength="1" d="M 238 206 Q 390 100 542 206" />
            <g class="pop" style="--d: 2.2s">
              <g transform="translate(590 212)">
                <g class="fade-to" style="--d: 5.9s"><NameTag text="for you" /></g>
              </g>
            </g>
            <g class="pop" style="--d: 5.6s">
              <g transform="translate(390 153)">
                <path d="M -10 -10 L 10 10 M 10 -10 L -10 10" class="cross" />
              </g>
            </g>
            <g class="rise" style="--d: 6.4s">
              <text x="590" y="170" text-anchor="middle" class="note-text">ended, by you</text>
            </g>
          </template>

          <template v-else-if="scene.id === 'portable'">
            <path class="road" d="M 150 180 H 650" />
            <g v-for="(t, i) in tiles" :key="t.label" class="rise" :style="{ '--d': 0.1 + i * 0.15 + 's' }">
              <rect :x="t.x - 92" y="230" width="184" height="110" rx="20" class="tile" :style="{ '--d': t.lit + 's' }" />
              <text :x="t.x" y="292" text-anchor="middle" class="tile-text">{{ t.label }}</text>
            </g>
            <g transform="translate(650 180)">
              <g class="travel" style="--d: 0.8s"><NameTag text="E7f…q2" /></g>
            </g>
            <g class="rise" style="--d: 7s">
              <text x="650" y="140" text-anchor="middle" class="note-text">still the same name</text>
            </g>
          </template>

          <template v-else>
            <circle class="ripple" style="--d: 0.8s" cx="400" cy="190" r="70" />
            <g class="pop" style="--d: 0.2s">
              <g transform="translate(400 190) scale(1.5)"><NameTag text="E7f…q2" /></g>
            </g>
            <g v-for="(p, i) in scene.pills" :key="p.text" class="pop" :style="{ '--d': 0.9 + i * 0.45 + 's' }">
              <g :transform="`translate(${p.x} ${p.y})`">
                <rect :x="-pillWidth(p.text) / 2" y="-18" :width="pillWidth(p.text)" height="36" rx="18" class="pill" />
                <text y="6" text-anchor="middle" class="pill-text">{{ p.text }}</text>
              </g>
            </g>
          </template>
        </g>
      </svg>

      <div class="bar" aria-hidden="true">
        <span :key="sceneKey" :style="{ '--dur': scene.dur + 'ms' }" @animationend.self="onSceneDone"></span>
      </div>

      <div :key="sceneKey + '-caption'" class="caption" aria-live="polite">
        <p class="kicker">{{ index + 1 }} of {{ scenes.length }} · {{ scene.kicker }}</p>
        <h2 class="serif">{{ scene.title }}</h2>
        <p class="body">{{ scene.body }}</p>
        <RouterLink v-if="scene.word" class="word-chip" :to="`/words/${scene.word.id}`">
          KERI’s word for this: {{ scene.word.label }}
        </RouterLink>
        <div v-if="scene.final" class="actions">
          <RouterLink class="btn" to="/story">Now see how it works</RouterLink>
          <RouterLink class="btn ghost" to="/">Choose your seat</RouterLink>
        </div>
      </div>

      <div class="controls">
        <button class="btn ghost" :disabled="index === 0" @click="go(index - 1)">Back</button>
        <button v-if="!reduced" class="btn" @click="toggle">
          {{ playing ? 'Pause' : ended ? 'Play again' : 'Play' }}
        </button>
        <button class="btn ghost" :disabled="isLast" @click="go(index + 1)">Next</button>
        <div class="dots">
          <button
            v-for="(s, i) in scenes"
            :key="s.id"
            :class="{ on: i === index }"
            :aria-label="`Scene ${i + 1}: ${s.title}`"
            @click="go(i)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.what h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); margin: 0.2rem 0 0.4rem; }
.stage { margin-top: 1.6rem; }

.scene { display: block; width: 100%; height: auto; color: #c4623a; overflow: visible; }
.scene text { font-family: var(--sans); }

.bar { height: 4px; margin: 0.4rem 0 1.2rem; border-radius: 4px; background: #f1e6da; overflow: hidden; }
.bar span {
  display: block;
  height: 100%;
  background: var(--terracotta);
  transform-origin: left center;
  animation: grow var(--dur) linear both;
}

.caption { min-height: 11rem; animation: rise 0.6s ease both; }
.caption h2 { font-size: clamp(1.5rem, 3.2vw, 2.1rem); margin: 0.2rem 0 0.5rem; }
.caption .body { font-size: 1.1rem; line-height: 1.6; max-width: 46rem; margin: 0 0 0.8rem; }
.caption .actions { margin-top: 1rem; }

.word-chip {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: #f6eadc;
  color: var(--terracotta-deep);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}
.word-chip:hover { background: #f1dcc6; }

.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem; margin-top: 1.2rem; }
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

/* Scene parts */
.note-text { font-weight: 800; font-size: 15px; fill: #9a4528; }
.closed { fill: #b4472f; }
.closed-text { font-weight: 800; font-size: 15px; fill: #fff; }
.thin { fill: none; stroke: #cdbfb1; stroke-width: 2; stroke-linecap: round; }
.warm { fill: none; stroke: #e0a96b; stroke-width: 2.5; stroke-linecap: round; }
.red-line { fill: none; stroke: #b4472f; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.ok { fill: #3f6f62; }
.ok-mark { fill: none; stroke: #fff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.cross { fill: none; stroke: #b4472f; stroke-width: 4; stroke-linecap: round; }
.glow { fill: #f6dcb8; }
.claim-text { font-weight: 700; font-size: 17px; fill: #2b241c; }
.claim-sign { font-size: 12px; fill: #7a6a5c; }
.flag { fill: #fbe3da; }
.flag-text { font-weight: 800; font-size: 14px; fill: #9a3a22; }
.id-card { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.id-title { font-family: var(--serif) !important; font-weight: 600; font-size: 20px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 14px; fill: #7a6a5c; }
.row-v { font-weight: 600; font-size: 15px; fill: #2b241c; }
.keep-bg { fill: #fbe9cf; }
.redact { fill: #3a312a; }
.proof { fill: #fbe9cf; stroke: #e0b98a; stroke-width: 2; }
.proof-text { font-weight: 800; font-size: 14px; fill: #7a4b1f; }
.road { fill: none; stroke: #e0cbb4; stroke-width: 2; stroke-dasharray: 4 8; }
.tile-text { font-weight: 700; font-size: 16px; fill: #5b4d40; }
.pill { fill: #fff; stroke: #e8d9c8; stroke-width: 1.5; }
.pill-text { font-weight: 700; font-size: 14px; fill: #2b241c; }

/* Base styles are each element's final frame; animations only describe how it gets there. */
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
.paused .caption,
.paused .bar span { animation-play-state: paused !important; }

.settled .scene *,
.settled .caption,
.settled .bar span { animation: none !important; }

@media (prefers-reduced-motion: reduce) {
  .scene *,
  .caption,
  .bar span { animation: none !important; }
  .bar { display: none; }
}

@media (max-width: 720px) {
  .dots { margin-left: 0; width: 100%; }
}
</style>
