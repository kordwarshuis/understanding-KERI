<script setup>
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <g>
    <rect x="-48" y="-16" width="96" height="32" rx="16" class="tag" />
    <circle cx="-31" cy="0" r="7" class="seal" />
    <path d="M -34 0 L -31.5 2.5 L -27.5 -2.5" class="tick" />
    <text x="8" y="5" text-anchor="middle" class="text">{{ text }}</text>
  </g>
</template>

<style scoped>
.tag { fill: #fffaf4; stroke: #c4623a; stroke-width: 2; }
.seal { fill: #e7c99a; }
.tick { fill: none; stroke: #9a4528; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.text { font: 750 14px var(--sans); fill: #2b241c; letter-spacing: 0.02em; }
</style>
