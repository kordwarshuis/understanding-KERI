<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const width = computed(() => Math.max(96, String(props.text).length * 8.2 + 52))
const left = computed(() => -width.value / 2)
const sealX = computed(() => left.value + 17)
const textX = computed(() => left.value + 38 + (width.value - 52) / 2)
</script>

<template>
  <g>
    <rect :x="left" y="-16" :width="width" height="32" rx="16" class="tag" />
    <circle :cx="sealX" cy="0" r="7" class="seal" />
    <path :d="`M ${sealX - 3} 0 L ${sealX - 0.5} 2.5 L ${sealX + 3.5} -2.5`" class="tick" />
    <text :x="textX" y="5" text-anchor="middle" class="text">{{ text }}</text>
  </g>
</template>

<style scoped>
.tag { fill: #fffaf4; stroke: #c4623a; stroke-width: 2; }
.seal { fill: #e7c99a; }
.tick { fill: none; stroke: #9a4528; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.text { font: 750 14px var(--sans); fill: #2b241c; letter-spacing: 0.02em; }
</style>
