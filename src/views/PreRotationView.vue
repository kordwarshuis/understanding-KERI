<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import Figure from '../components/scene/Figure.vue'
import NameTag from '../components/scene/NameTag.vue'
import KeyIcon from '../components/scene/KeyIcon.vue'
import { measureSceneEnd } from '../sceneTiming'

const route = useRoute()
const router = useRouter()
const { t, tf, preScenes, locale } = useI18n()

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

const scene = computed(() => preScenes.value[index.value])
const art = computed(() => scene.value.art || {})
const sceneKey = computed(() => `${locale.value}-${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === preScenes.value.length - 1)

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

function hashWidth(text) {
  return Math.max(156, String(text || '').length * 14 + 64)
}

function linesOf(art) {
  if (art.hashLines?.length) return art.hashLines
  return wrapWords(art.hashLabel, 22)
}

function go(i) {
  index.value = Math.max(0, Math.min(preScenes.value.length - 1, i))
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
  if (index.value >= preScenes.value.length) index.value = 0
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
        :aria-label="t.preTitle"
        tabindex="-1"
      >
        <header class="what-head">
          <div>
            <p class="kicker">{{ t.preKicker }}</p>
            <h1 class="serif">{{ t.preTitle }}</h1>
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
                  <template v-if="scene.id === 'sealed'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="318" y="36" width="452" height="268" rx="22" class="log" />
                      <text x="342" y="74" class="log-title">{{ art.log }}</text>
                      <g transform="translate(390 128)">
                        <KeyIcon />
                      </g>
                      <text x="428" y="122" class="row-v">{{ art.pub }}</text>
                      <text x="428" y="148" class="row-k">
                        <tspan v-for="(line, li) in wrapWords(art.pubLabel, 22)" :key="line" x="428" :y="148 + li * 22">{{ line }}</tspan>
                      </text>
                      <g class="pop" style="--d: 1.6s">
                        <g transform="translate(548 230)">
                          <rect :x="-hashWidth(art.hash) / 2" y="-22" :width="hashWidth(art.hash)" height="44" rx="22" class="seal-pill" />
                          <circle :cx="-hashWidth(art.hash) / 2 + 22" cy="0" r="9" class="wax" />
                          <text y="6" text-anchor="middle" class="pill-text">{{ art.hash }}</text>
                        </g>
                      </g>
                      <text x="548" text-anchor="middle" class="row-k">
                        <tspan
                          v-for="(line, li) in linesOf(art)"
                          :key="line"
                          x="548"
                          :y="268 + li * 22"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 0.3s">
                      <rect x="16" y="28" width="286" height="214" rx="18" class="log" />
                      <text x="32" y="62" class="log-title">{{ art.keptTitle }}</text>
                      <g transform="translate(48 112)">
                        <KeyIcon />
                      </g>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.keptPublic, 18)"
                          :key="`pub-${li}`"
                          x="78"
                          :y="104 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                      <g transform="translate(48 176)">
                        <KeyIcon />
                      </g>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.keptPrivate, 18)"
                          :key="`priv-${li}`"
                          x="78"
                          :y="168 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 0.5s">
                      <g transform="translate(150 340)"><Figure :label="art.you" /></g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'signs'">
                    <g transform="translate(150 330)"><Figure :label="art.you" /></g>
                    <g class="pop" style="--d: 0.3s">
                      <g transform="translate(228 268)"><KeyIcon /></g>
                    </g>
                    <path class="draw warm" style="--d: 1.1s" pathLength="1" d="M 250 250 C 360 180, 470 180, 560 250" />
                    <g class="slide" style="--d: 1.8s; --fx: -80px; --fy: 20px">
                      <g transform="translate(400 168)">
                        <rect x="-118" y="-24" width="236" height="48" rx="16" class="claim" />
                        <text y="6" text-anchor="middle" class="claim-text">{{ art.note }}</text>
                      </g>
                    </g>
                    <g class="rise" style="--d: 0.4s">
                      <g transform="translate(650 330)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g class="pop" style="--d: 3.2s">
                      <g transform="translate(400 64)">
                        <rect :x="-hashWidth(art.hash) / 2" y="-20" :width="hashWidth(art.hash)" height="40" rx="20" class="seal-pill dim-pill" />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.hash }}</text>
                      </g>
                      <text x="400" y="104" text-anchor="middle" class="tiny">{{ art.unused }}</text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'copy'">
                    <g transform="translate(130 345)"><Figure :label="art.you" /></g>
                    <g class="pop" style="--d: 0.3s">
                      <g transform="translate(155 175)">
                        <rect :x="-hashWidth(art.hash) / 2" y="-22" :width="hashWidth(art.hash)" height="44" rx="22" class="seal-pill" />
                        <circle :cx="-hashWidth(art.hash) / 2 + 22" cy="0" r="9" class="wax" />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.hash }}</text>
                        <text y="44" text-anchor="middle" class="tiny">{{ art.hashLabel }}</text>
                      </g>
                    </g>
                    <g class="rise" style="--d: 0.35s">
                      <g transform="translate(700 345)"><Figure :label="art.thief" color="#4a3f38" /></g>
                    </g>
                    <g transform="translate(455 312)">
                      <g class="fade-in" style="--d: 0.5s">
                        <g class="move" style="--d: 1.4s; --fx: -220px; --fy: 16px">
                          <text y="-26" text-anchor="middle" class="row-v">{{ art.copied }}</text>
                          <KeyIcon />
                          <text y="28" text-anchor="middle" class="tiny">{{ art.copy }}</text>
                          <text text-anchor="middle" class="tiny">
                            <tspan
                              v-for="(line, li) in art.copiedLines"
                              :key="`copied-${li}`"
                              x="0"
                              :y="46 + li * 16"
                            >{{ line }}</tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                    <g class="pop" style="--d: 3.2s">
                      <g transform="translate(640 78)">
                        <text y="-24" text-anchor="middle" class="row-v">{{ art.invented }}</text>
                        <g class="key-dead">
                          <KeyIcon />
                          <path d="M -16 -14 L 20 14 M 20 -14 L -16 14" class="cross" />
                        </g>
                        <text y="30" text-anchor="middle" class="tiny">{{ art.inventedLabel }}</text>
                      </g>
                    </g>
                    <path class="draw red-line" style="--d: 4s" pathLength="1" d="M 640 112 V 148" />
                    <g class="pop" style="--d: 4.3s">
                      <g transform="translate(640 175)">
                        <rect :x="-hashWidth(art.inventedHash) / 2" y="-22" :width="hashWidth(art.inventedHash)" height="44" rx="22" class="seal-pill" />
                        <circle :cx="-hashWidth(art.inventedHash) / 2 + 22" cy="0" r="9" class="wax" />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.inventedHash }}</text>
                        <text y="44" text-anchor="middle" class="tiny">{{ art.inventedHashLabel }}</text>
                      </g>
                    </g>
                    <path class="draw red-line" style="--d: 5s" pathLength="1" d="M 240 175 H 555" />
                    <g class="pop" style="--d: 5.8s">
                      <g transform="translate(390 175)">
                        <rect
                          :x="-hashWidth(art.nomatch) / 2"
                          y="-18"
                          :width="hashWidth(art.nomatch)"
                          height="36"
                          rx="18"
                          class="flag"
                        />
                        <text y="6" text-anchor="middle" class="flag-text">{{ art.nomatch }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'reveal'">
                    <g class="pop" style="--d: 0.2s">
                      <g transform="translate(400 78)"><NameTag text="E7f…q2" /></g>
                    </g>
                    <g class="rise" style="--d: 2.8s">
                      <text x="400" y="128" text-anchor="middle" class="note-text">{{ art.same }}</text>
                    </g>
                    <g transform="translate(400 210)">
                      <g class="vanish" style="--d: 2.2s">
                        <rect :x="-hashWidth(art.hash) / 2" y="-22" :width="hashWidth(art.hash)" height="44" rx="22" class="seal-pill" />
                        <circle :cx="-hashWidth(art.hash) / 2 + 22" cy="0" r="9" class="wax" />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.hash }}</text>
                      </g>
                      <g class="pop" style="--d: 2.8s">
                        <circle r="26" class="glow" />
                        <KeyIcon />
                      </g>
                    </g>
                    <g transform="translate(150 330)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.4s">
                      <g transform="translate(650 330)">
                        <g class="fade-to" style="--d: 3.2s"><Figure :label="art.thief" color="#4a3f38" /></g>
                      </g>
                    </g>
                    <g transform="translate(620 210)">
                      <g class="key-dead" style="--d: 3.2s">
                        <KeyIcon />
                        <g class="pop" style="--d: 3.4s">
                          <path d="M -16 -14 L 20 14 M 20 -14 L -16 14" class="cross" />
                        </g>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'commit'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="16" y="28" width="286" height="214" rx="18" class="log" />
                      <text x="32" y="62" class="log-title">{{ art.keptTitle }}</text>
                      <g transform="translate(48 112)">
                        <KeyIcon />
                      </g>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.keptPublic, 18)"
                          :key="`pub-${li}`"
                          x="78"
                          :y="104 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                      <g transform="translate(48 176)">
                        <KeyIcon />
                      </g>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.keptPrivate, 18)"
                          :key="`priv-${li}`"
                          x="78"
                          :y="168 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g transform="translate(150 340)"><Figure :label="art.you" /></g>
                    <g class="pop" style="--d: 0.4s">
                      <g transform="translate(400 150)">
                        <circle r="26" class="glow" />
                        <KeyIcon />
                      </g>
                      <text x="400" y="198" text-anchor="middle" class="tiny">{{ art.now }}</text>
                    </g>
                    <path class="draw warm" style="--d: 1.4s" pathLength="1" d="M 430 140 C 490 90, 540 90, 590 120" />
                    <g class="pop" style="--d: 2.2s">
                      <rect x="500" y="28" width="284" height="214" rx="18" class="log" />
                      <text x="516" y="62" class="log-title">{{ art.record }}</text>
                      <g transform="translate(642 118)">
                        <rect :x="-hashWidth(art.hash) / 2" y="-22" :width="hashWidth(art.hash)" height="44" rx="22" class="seal-pill" />
                        <circle :cx="-hashWidth(art.hash) / 2 + 22" cy="0" r="9" class="wax" />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.hash }}</text>
                      </g>
                      <text text-anchor="middle" class="row-k">
                        <tspan
                          v-for="(line, li) in linesOf(art)"
                          :key="`hash-${li}`"
                          x="642"
                          :y="160 + li * 22"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                  </template>

                  <template v-else>
                    <circle class="ripple" style="--d: 0.6s" cx="400" cy="168" r="64" />
                    <g class="pop" style="--d: 0.15s">
                      <g transform="translate(400 168) scale(1.15)"><NameTag text="E7f…q2" /></g>
                    </g>
                    <g class="pop" style="--d: 1.1s">
                      <g transform="translate(400 268)">
                        <circle r="26" class="glow" />
                        <KeyIcon />
                      </g>
                    </g>
                    <g class="rise" style="--d: 1.8s">
                      <text x="400" y="120" text-anchor="middle" class="note-text">{{ art.same }}</text>
                    </g>
                    <g class="rise" style="--d: 2.4s">
                      <text x="400" y="328" text-anchor="middle" class="note-text">{{ art.lock }}</text>
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
            <p class="kicker">{{ tf('whatOf', { n: index + 1, total: preScenes.length }) }} · {{ scene.kicker }}</p>
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
                v-for="(s, i) in preScenes"
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

.note-text { font-weight: 800; font-size: 20px; fill: #9a4528; }
.tiny { font-weight: 750; font-size: 16px; fill: #7a6a5c; }
.log { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.log-title { font-family: var(--serif) !important; font-weight: 600; font-size: 24px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 16px; fill: #7a6a5c; }
.row-v { font-weight: 700; font-size: 20px; fill: #2b241c; }
.seal-pill { fill: #fffaf4; stroke: #c9a36a; stroke-width: 2; }
.wax { fill: #e7c99a; }
.pill-text { font-weight: 800; font-size: 20px; fill: #7a4b1f; }
.dim-pill { opacity: 0.85; }
.warm { fill: none; stroke: #e0a96b; stroke-width: 2.5; stroke-linecap: round; }
.red-line { fill: none; stroke: #b4472f; stroke-width: 3; stroke-linecap: round; }
.claim { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.claim-text { font-weight: 700; font-size: 22px; fill: #2b241c; }
.flag { fill: #fbe3da; }
.flag-text { font-weight: 800; font-size: 18px; fill: #9a3a22; }
.cross { fill: none; stroke: #b4472f; stroke-width: 4; stroke-linecap: round; }
.glow { fill: #f6dcb8; }

.rise { animation: rise 0.7s ease var(--d, 0s) both; }
.pop {
  transform-box: fill-box;
  transform-origin: center;
  animation: pop 0.6s cubic-bezier(0.2, 1.4, 0.4, 1) var(--d, 0s) both;
}
.fade-in { animation: fade-in 0.5s ease var(--d, 0s) both; }
.fade-to { opacity: 0.28; animation: fade-from 0.6s ease var(--d, 0s) both; }
.vanish { opacity: 0; animation: fade-from 0.55s ease var(--d, 0s) both; }
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
.key-dead { color: #b9ab9c; animation: key-dead 0.6s ease var(--d, 0s) both; }

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
@keyframes key-dead { from { color: #c4623a; } }

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
  .dots { margin-left: 0; width: 100%; }
  .controls { min-height: 5.5rem; align-content: center; }
  .controls .btn { flex: 1 1 auto; font-size: 1rem; }
}
</style>
