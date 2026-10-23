<template>
  <g class="envelope">
    <rect x="-78" y="-44" width="156" height="88" rx="14" />
    <path d="M -78 -44 L 0 10 L 78 -44" />
    <rect x="-13" y="-10" width="26" height="22" rx="4" class="lock" />
    <path d="M -7 -10 V -18 a 7 7 0 0 1 14 0 V -10" class="shackle" />
  </g>
</template>

<style scoped>
.envelope { fill: #fffaf4; stroke: #c9a36a; stroke-width: 2.5; stroke-linejoin: round; }
.envelope path { fill: none; }
.lock { fill: #e7c99a; }
.shackle { stroke-linecap: round; }
</style>
