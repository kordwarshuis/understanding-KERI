<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: '#c4623a' },
  label: { type: String, default: '' },
})

const lines = computed(() => wrapWords(props.label, 16))

function wrapWords(text, max) {
  const words = String(text || '').trim().split(/\s+/).filter(Boolean)
  if (!words.length) return []
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
  return out.slice(0, 2)
}
</script>

<template>
  <g>
    <ellipse cx="0" cy="2" rx="30" ry="5" class="shadow" />
    <path d="M -26 0 C -26 -24 -16 -36 0 -36 C 16 -36 26 -24 26 0 Z" :fill="color" />
    <circle cx="0" cy="-58" r="17" :fill="color" />
    <circle cx="-6" cy="-60" r="2.2" class="eye" />
    <circle cx="6" cy="-60" r="2.2" class="eye" />
    <text v-if="lines.length" text-anchor="middle" class="label">
      <tspan v-for="(line, i) in lines" :key="i" x="0" :y="30 + i * 28">{{ line }}</tspan>
    </text>
  </g>
</template>

<style scoped>
.shadow { fill: rgba(80, 48, 28, 0.08); }
.eye { fill: #2b241c; opacity: 0.7; }
.label { font: 700 26px var(--sans); fill: var(--ink-soft); }
</style>
