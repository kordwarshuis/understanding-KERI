<script setup>
defineProps({
  color: { type: String, default: '#c4623a' },
  label: { type: String, default: '' },
})
</script>

<template>
  <g>
    <ellipse cx="0" cy="2" rx="30" ry="5" class="shadow" />
    <path d="M -26 0 C -26 -24 -16 -36 0 -36 C 16 -36 26 -24 26 0 Z" :fill="color" />
    <circle cx="0" cy="-58" r="17" :fill="color" />
    <circle cx="-6" cy="-60" r="2.2" class="eye" />
    <circle cx="6" cy="-60" r="2.2" class="eye" />
    <text v-if="label" x="0" y="26" text-anchor="middle" class="label">{{ label }}</text>
  </g>
</template>

<style scoped>
.shadow { fill: rgba(80, 48, 28, 0.08); }
.eye { fill: #2b241c; opacity: 0.7; }
.label { font: 700 16px var(--sans); fill: var(--ink-soft); }
</style>
