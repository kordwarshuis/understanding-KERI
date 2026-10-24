<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import Figure from '../components/scene/Figure.vue'
import KeyIcon from '../components/scene/KeyIcon.vue'
import Envelope from '../components/scene/Envelope.vue'
import { measureSceneEnd } from '../sceneTiming'

const route = useRoute()
const router = useRouter()
const { t, tf, keyScenes, locale } = useI18n()

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

const scene = computed(() => keyScenes.value[index.value])
const art = computed(() => scene.value.art || {})
const sceneKey = computed(() => `${locale.value}-${scene.value.id}-${run.value}`)
const isLast = computed(() => index.value === keyScenes.value.length - 1)

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
  return Math.max(156, String(text || '').length * 14 + 64)
}

function claimWidth(text) {
  return Math.max(220, String(text || '').length * 13 + 64)
}

function go(i) {
  index.value = Math.max(0, Math.min(keyScenes.value.length - 1, i))
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
  if (index.value >= keyScenes.value.length) index.value = 0
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
        :aria-label="t.keyTitle"
        tabindex="-1"
      >
        <header class="what-head">
          <div>
            <p class="kicker">{{ t.keyKicker }}</p>
            <h1 class="serif">{{ t.keyTitle }}</h1>
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
                  <template v-if="scene.id === 'pair'">
                    <g class="rise" style="--d: 0.15s">
                      <rect x="16" y="14" width="372" height="198" rx="18" class="log" />
                      <text x="36" y="50" class="log-title">{{ art.publicTitle }}</text>
                      <g transform="translate(78 112) scale(1.25)">
                        <KeyIcon />
                      </g>
                      <text x="132" y="104" class="row-v">{{ art.pub }}</text>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.publicHint, 24)"
                          :key="`pub-${li}`"
                          x="132"
                          :y="132 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 0.45s">
                      <rect x="412" y="14" width="372" height="198" rx="18" class="log private-log" />
                      <text x="432" y="50" class="log-title">{{ art.privateTitle }}</text>
                      <g transform="translate(474 112)" class="key-private">
                        <g transform="scale(1.25)">
                          <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                          <KeyIcon />
                        </g>
                      </g>
                      <text x="536" y="104" class="row-v">{{ art.secret }}</text>
                      <text class="row-k">
                        <tspan
                          v-for="(line, li) in wrapWords(art.privateHint, 22)"
                          :key="`priv-${li}`"
                          x="536"
                          :y="132 + li * 20"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                    <g class="rise" style="--d: 1.35s">
                      <text x="400" y="248" text-anchor="middle" class="note-text">{{ art.pair }}</text>
                    </g>
                    <g class="rise" style="--d: 0.6s">
                      <g transform="translate(400 348)"><Figure :label="art.you" /></g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'share'">
                    <g transform="translate(120 348)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.25s">
                      <g transform="translate(700 348)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g class="pop" style="--d: 0.2s">
                      <g transform="translate(120 118)">
                        <g class="key-private">
                          <g transform="scale(1.25)">
                            <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                            <KeyIcon />
                          </g>
                        </g>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.privateKey, 16)"
                            :key="`stay-k-${li}`"
                            x="0"
                            :y="46 + li * 18"
                          >{{ line }}</tspan>
                        </text>
                        <text y="84" text-anchor="middle" class="reassurance">{{ art.stays }}</text>
                      </g>
                    </g>
                    <path class="draw warm" style="--d: 0.7s" pathLength="1" d="M 210 118 H 590" />
                    <g transform="translate(640 118)">
                      <g class="fade-in" style="--d: 0.85s">
                        <g class="move" style="--d: 1.35s; --fx: -390px; --fy: 0px">
                          <text y="-38" text-anchor="middle" class="row-v">{{ art.pub }}</text>
                          <g transform="scale(1.25)"><KeyIcon /></g>
                          <text text-anchor="middle" class="row-k">
                            <tspan
                              v-for="(line, li) in wrapWords(art.publicKey, 14)"
                              :key="`go-${li}`"
                              x="0"
                              :y="46 + li * 18"
                            >{{ line }}</tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                    <g class="pop" style="--d: 2.8s">
                      <text x="640" y="214" text-anchor="middle" class="reassurance">{{ art.shared }}</text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'lock'">
                    <g transform="translate(78 348)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.2s">
                      <g transform="translate(718 348)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(630 112)">
                        <text y="-38" text-anchor="middle" class="row-v">{{ art.pub }}</text>
                        <g transform="scale(1.25)"><KeyIcon /></g>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.publicKey, 16)"
                            :key="`lock-k-${li}`"
                            x="0"
                            :y="46 + li * 18"
                          >{{ line }}</tspan>
                        </text>
                      </g>
                    </g>
                    <path class="draw warm" style="--d: 1.15s" pathLength="1" d="M 590 112 H 392" />
                    <g transform="translate(310 128)">
                      <g class="rise" style="--d: 0.45s">
                        <g class="vanish" style="--d: 2.55s">
                          <rect
                            :x="-claimWidth(art.note) / 2"
                            y="-28"
                            :width="claimWidth(art.note)"
                            height="56"
                            rx="16"
                            class="claim"
                          />
                          <text y="8" text-anchor="middle" class="claim-text">{{ art.note }}</text>
                        </g>
                      </g>
                      <g class="pop" style="--d: 2.7s">
                        <Envelope />
                        <text y="66" text-anchor="middle" class="tiny">{{ art.locked }}</text>
                      </g>
                    </g>
                    <g class="rise" style="--d: 3.35s">
                      <text text-anchor="middle" class="warn">
                        <tspan
                          v-for="(line, li) in wrapWords(art.cannot, 18)"
                          :key="`no-${li}`"
                          x="630"
                          :y="196 + li * 18"
                        >{{ line }}</tspan>
                      </text>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'open'">
                    <g transform="translate(120 348)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.2s">
                      <g transform="translate(700 348)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g transform="translate(120 118)">
                      <g class="pop" style="--d: 2.85s">
                        <circle r="40" class="glow" />
                      </g>
                      <g class="pop" style="--d: 0.25s">
                        <g class="key-private">
                          <g transform="scale(1.25)">
                            <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                            <KeyIcon />
                          </g>
                        </g>
                        <text y="58" text-anchor="middle" class="row-k">{{ art.privateKey }}</text>
                      </g>
                    </g>
                    <g transform="translate(400 128)">
                      <g class="fade-in" style="--d: 0.35s">
                        <g class="move" style="--d: 1.05s; --fx: 270px; --fy: 0px">
                          <g class="vanish" style="--d: 2.5s">
                            <Envelope />
                            <text y="66" text-anchor="middle" class="tiny">{{ art.locked }}</text>
                          </g>
                        </g>
                      </g>
                      <g class="pop" style="--d: 2.7s">
                        <rect
                          :x="-claimWidth(art.note) / 2"
                          y="-28"
                          :width="claimWidth(art.note)"
                          height="56"
                          rx="16"
                          class="claim"
                        />
                        <text y="8" text-anchor="middle" class="claim-text">{{ art.note }}</text>
                        <g :transform="`translate(0 64)`">
                          <rect
                            :x="-pillWidth(art.opened) / 2"
                            y="-16"
                            :width="pillWidth(art.opened)"
                            height="32"
                            rx="16"
                            class="ok-pill"
                          />
                          <text y="5" text-anchor="middle" class="ok-text">{{ art.opened }}</text>
                        </g>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'caught'">
                    <g transform="translate(120 348)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.2s">
                      <g transform="translate(710 348)"><Figure :label="art.stranger" color="#4a3f38" /></g>
                    </g>
                    <g class="pop" style="--d: 0.25s">
                      <g transform="translate(120 128)">
                        <g class="key-private">
                          <g transform="scale(1.25)">
                            <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                            <KeyIcon />
                          </g>
                        </g>
                        <text y="48" text-anchor="middle" class="row-k">{{ art.privateKey }}</text>
                        <text y="70" text-anchor="middle" class="reassurance">{{ art.opens }}</text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(430 150)">
                        <Envelope />
                      </g>
                    </g>
                    <g transform="translate(430 86)">
                      <g class="fade-in" style="--d: 0.55s">
                        <g class="move" style="--d: 1.25s; --fx: 260px; --fy: 0px">
                          <text y="-50" text-anchor="middle" class="row-k">{{ art.publicKey }}</text>
                          <text y="-28" text-anchor="middle" class="row-v">{{ art.pub }}</text>
                          <g transform="scale(1.2)"><KeyIcon /></g>
                        </g>
                      </g>
                    </g>
                    <path class="draw red-line" style="--d: 2.45s" pathLength="1" d="M 430 112 V 136" />
                    <g class="pop" style="--d: 3.05s">
                      <g transform="translate(430 150)">
                        <path d="M -34 -26 L 34 26 M 34 -26 L -34 26" class="cross" />
                      </g>
                    </g>
                    <g class="pop" style="--d: 3.35s">
                      <g transform="translate(430 228)">
                        <rect
                          :x="-pillWidth(art.still) / 2"
                          y="-16"
                          :width="pillWidth(art.still)"
                          height="32"
                          rx="16"
                          class="flag"
                        />
                        <text y="5" text-anchor="middle" class="flag-text">{{ art.still }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else-if="scene.id === 'sign'">
                    <g transform="translate(110 348)"><Figure :label="art.you" /></g>
                    <g class="rise" style="--d: 0.25s">
                      <g transform="translate(690 348)"><Figure :label="art.friend" color="#6d5a7a" /></g>
                    </g>
                    <g class="rise" style="--d: 0.35s">
                      <text x="400" y="72" text-anchor="middle" class="reassurance">{{ art.readable }}</text>
                    </g>
                    <g class="pop" style="--d: 0.2s">
                      <g transform="translate(150 108)">
                        <g class="key-private">
                          <g transform="scale(1.25)">
                            <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                            <KeyIcon />
                          </g>
                        </g>
                        <text y="48" text-anchor="middle" class="row-k">{{ art.privateKey }}</text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 0.35s">
                      <g transform="translate(650 118)">
                        <text y="-56" text-anchor="middle" class="row-v">{{ art.pub }}</text>
                        <text y="-34" text-anchor="middle" class="row-k">{{ art.publicKey }}</text>
                        <g transform="scale(1.25)"><KeyIcon /></g>
                      </g>
                    </g>
                    <g class="rise" style="--d: 0.3s">
                      <g transform="translate(400 156)">
                        <rect
                          :x="-claimWidth(art.note) / 2"
                          y="-28"
                          :width="claimWidth(art.note)"
                          height="56"
                          rx="16"
                          class="claim"
                        />
                        <text y="8" text-anchor="middle" class="claim-text">{{ art.note }}</text>
                      </g>
                    </g>
                    <path
                      class="draw warm"
                      style="--d: 1s"
                      pathLength="1"
                      :d="`M 188 124 C 220 148, 245 156, ${400 - claimWidth(art.note) / 2} 156`"
                    />
                    <g class="pop" style="--d: 1.85s">
                      <g transform="translate(400 214)">
                        <rect
                          :x="-pillWidth(art.mark) / 2"
                          y="-18"
                          :width="pillWidth(art.mark)"
                          height="36"
                          rx="18"
                          class="seal-pill"
                        />
                        <text y="6" text-anchor="middle" class="pill-text">{{ art.mark }}</text>
                      </g>
                    </g>
                    <path class="draw warm" style="--d: 2.55s" pathLength="1" d="M 490 198 C 545 188, 600 160, 632 130" />
                    <g class="pop" style="--d: 3.45s">
                      <g transform="translate(650 196)">
                        <rect
                          :x="-pillWidth(art.fits) / 2"
                          y="-16"
                          :width="pillWidth(art.fits)"
                          height="32"
                          rx="16"
                          class="ok-pill"
                        />
                        <text y="5" text-anchor="middle" class="ok-text">{{ art.fits }}</text>
                      </g>
                    </g>
                  </template>

                  <template v-else>
                    <g class="pop" style="--d: 0.2s">
                      <g transform="translate(220 132)">
                        <text y="-62" text-anchor="middle" class="note-text">{{ art.share }}</text>
                        <g transform="scale(1.35)"><KeyIcon /></g>
                        <text y="48" text-anchor="middle" class="row-v">{{ art.pub }}</text>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.locks, 22)"
                            :key="`locks-${li}`"
                            x="0"
                            :y="76 + li * 20"
                          >{{ line }}</tspan>
                        </text>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.checks, 22)"
                            :key="`checks-${li}`"
                            x="0"
                            :y="76 + wrapWords(art.locks, 22).length * 20 + 6 + li * 20"
                          >{{ line }}</tspan>
                        </text>
                      </g>
                    </g>
                    <g class="pop" style="--d: 1.15s">
                      <g transform="translate(580 132)">
                        <text y="-62" text-anchor="middle" class="note-text">{{ art.keep }}</text>
                        <g class="key-private">
                          <circle r="46" class="glow" />
                          <g transform="scale(1.35)">
                            <rect x="-30" y="-24" width="60" height="48" rx="16" class="pocket" />
                            <KeyIcon />
                          </g>
                        </g>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.opens, 22)"
                            :key="`opens-${li}`"
                            x="0"
                            :y="76 + li * 20"
                          >{{ line }}</tspan>
                        </text>
                        <text text-anchor="middle" class="row-k">
                          <tspan
                            v-for="(line, li) in wrapWords(art.signs, 22)"
                            :key="`signs-${li}`"
                            x="0"
                            :y="76 + wrapWords(art.opens, 22).length * 20 + 6 + li * 20"
                          >{{ line }}</tspan>
                        </text>
                      </g>
                    </g>
                    <g class="rise" style="--d: 2.15s">
                      <text x="400" y="318" text-anchor="middle" class="note-text">{{ art.line }}</text>
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
            <p class="kicker">{{ tf('whatOf', { n: index + 1, total: keyScenes.length }) }} · {{ scene.kicker }}</p>
            <h2 class="serif">{{ scene.title }}</h2>
            <p class="body">{{ scene.body }}</p>
            <div class="foot">
              <RouterLink v-if="scene.word" class="word-chip" :to="`/words/${scene.word.id}`">
                {{ tf('whatWord', { label: scene.word.label }) }}
              </RouterLink>
              <template v-if="scene.final">
                <button class="btn ghost" type="button" @click="go(0)">{{ t.whatStartOver }}</button>
                <RouterLink class="btn" to="/pre-rotation">{{ t.keyNext }}</RouterLink>
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
                v-for="(s, i) in keyScenes"
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
.log { fill: #fff; stroke: #eadfd2; stroke-width: 2; }
.private-log { fill: #f6efe6; }
.pocket { fill: #f3e7db; stroke: #e0d0c0; stroke-width: 2; }
.key-private { color: #6b4226; }
.log-title { font-family: var(--serif) !important; font-weight: 600; font-size: 24px; fill: #2b241c; }
.row-k { font-weight: 700; font-size: 16px; fill: #7a6a5c; }
.row-v { font-weight: 700; font-size: 20px; fill: #2b241c; }
.seal-pill { fill: #fffaf4; stroke: #c9a36a; stroke-width: 2; }
.pill-text { font-weight: 800; font-size: 18px; fill: #7a4b1f; }
.ok-pill { fill: #e5f0ea; }
.ok-text { font-weight: 800; font-size: 18px; fill: #24564a; }
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
.vanish { opacity: 0; animation: fade-from 0.55s ease var(--d, 0s) both; }
.slide { animation: slide 1.1s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) both; }
.move { animation: move 1.1s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) both; }
.draw { stroke-dasharray: 1; animation: draw 1.1s ease var(--d, 0s) both; }

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
    --modal-h: calc(100dvh - 16px);
    padding: 0.85rem 0.9rem 0.8rem;
    border-radius: 16px;
  }
  .what-head h1 { font-size: clamp(1.55rem, 6vw, 1.9rem); }
  .scene-frame {
    flex: 0 0 auto;
    /* Keep the paragraph and buttons clear of each other as the phone gets shorter. */
    height: clamp(84px, calc(100dvh - 642px), 172px);
    min-height: 0;
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
