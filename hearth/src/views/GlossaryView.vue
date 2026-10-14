<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { concepts } from '../content/glossary'

const q = ref('')
const list = computed(() => {
  const needle = q.value.trim().toLowerCase()
  if (!needle) return concepts
  return concepts.filter((c) =>
    `${c.term} ${c.say} ${c.plain}`.toLowerCase().includes(needle),
  )
})
</script>

<template>
  <section>
    <p class="kicker">A small dictionary</p>
    <h2 class="serif" style="font-size: clamp(2rem, 4vw, 2.8rem); margin-top: 6px">Words, said plainly</h2>
    <p class="lede">The jargon is real. It does not have to arrive all at once.</p>
    <input v-model="q" class="search" type="search" placeholder="Try AID, receipt, vLEI…" />
    <div class="word-list">
      <RouterLink v-for="concept in list" :key="concept.id" class="word" :to="`/words/${concept.id}`">
        <strong>{{ concept.term }}</strong>
        <span>{{ concept.say }}</span>
      </RouterLink>
      <p v-if="!list.length">Nothing under that spelling. Try “key” or “credential”.</p>
    </div>
  </section>
</template>
