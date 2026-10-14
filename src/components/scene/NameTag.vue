<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const width = computed(() => Math.max(140, String(props.text).length * 13 + 72))
const left = computed(() => -width.value / 2)
const sealX = computed(() => left.value + 22)
const textX = computed(() => left.value + 48 + (width.value - 70) / 2)
</script>

<template>
  <g>
    <rect :x="left" y="-22" :width="width" height="44" rx="22" class="tag" />
    <circle :cx="sealX" cy="0" r="10" class="seal" />
    <path :d="`M ${sealX - 4} 0 L ${sealX - 0.5} 3.2 L ${sealX + 4.6} -3.2`" class="tick" />
    <text :x="textX" y="7" text-anchor="middle" class="text">{{ text }}</text>
  </g>
</template>

<style scoped>
.tag { fill: #fffaf4; stroke: #c4623a; stroke-width: 2.2; }
.seal { fill: #e7c99a; }
.tick { fill: none; stroke: #9a4528; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.text { font: 750 22px var(--sans); fill: #2b241c; letter-spacing: 0.02em; }
</style>
