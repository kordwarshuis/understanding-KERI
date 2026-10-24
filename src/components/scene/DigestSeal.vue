<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const width = computed(() => Math.max(168, String(props.text).length * 14 + 64))
const left = computed(() => -width.value / 2)
const sealX = computed(() => left.value + 22)
</script>

<template>
  <g>
    <rect :x="left" y="-22" :width="width" height="44" rx="22" class="seal" />
    <circle :cx="sealX" cy="0" r="9" class="wax" />
    <text y="6" text-anchor="middle" class="label">{{ text }}</text>
  </g>
</template>

<style scoped>
.seal { fill: #fffaf4; stroke: #c9a36a; stroke-width: 2; }
.wax { fill: #e7c99a; }
.label { font: 800 18px var(--sans); fill: #7a4b1f; }
</style>
