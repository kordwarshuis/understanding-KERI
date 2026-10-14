<script setup>
defineProps({
  label: { type: String, default: '' },
})

const windows = [-48, -11, 26].flatMap((x) => [-132, -96].map((y) => [x, y]))
</script>

<template>
  <g>
    <path d="M -80 -150 L 0 -192 L 80 -150 Z" class="roof" />
    <rect x="-70" y="-150" width="140" height="150" class="wall" />
    <rect
      v-for="w in windows"
      :key="w.join()"
      :x="w[0]"
      :y="w[1]"
      width="22"
      height="20"
      rx="3"
      class="win"
    />
    <rect x="-16" y="-50" width="32" height="50" rx="4" class="door" />
    <text v-if="label" y="28" text-anchor="middle" class="label">{{ label }}</text>
  </g>
</template>

<style scoped>
.roof { fill: #b9aa9a; }
.wall { fill: #e2d7cb; }
.win { fill: #c9bcae; }
.door { fill: #a79583; }
.label { font: 700 22px var(--sans); fill: var(--ink-soft); }
</style>
