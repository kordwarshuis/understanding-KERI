<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const width = computed(() => Math.max(108, String(props.text).length * 9.2 + 56))
const left = computed(() => -width.value / 2)
const sealX = computed(() => left.value + 18)
const textX = computed(() => left.value + 40 + (width.value - 56) / 2)
</script>

<template>
  <g>
    <rect :x="left" y="-18" :width="width" height="36" rx="18" class="tag" />
    <circle :cx="sealX" cy="0" r="8" class="seal" />
    <path :d="`M ${sealX - 3.2} 0 L ${sealX - 0.4} 2.8 L ${sealX + 3.8} -2.8`" class="tick" />
    <text :x="textX" y="5.5" text-anchor="middle" class="text">{{ text }}</text>
  </g>
</template>

<style scoped>
.tag { fill: #fffaf4; stroke: #c4623a; stroke-width: 2; }
.seal { fill: #e7c99a; }
.tick { fill: none; stroke: #9a4528; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.text { font: 750 16px var(--sans); fill: #2b241c; letter-spacing: 0.02em; }
</style>
