<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n'

const { t, concepts } = useI18n()
const q = ref('')

const list = computed(() => {
  const needle = q.value.trim().toLowerCase()
  if (!needle) return concepts.value
  return concepts.value.filter((c) =>
    `${c.term} ${c.say} ${c.plain}`.toLowerCase().includes(needle),
  )
})
</script>

<template>
  <section>
    <p class="kicker">{{ t.wordsKicker }}</p>
    <h2 class="serif" style="font-size: clamp(2rem, 4vw, 2.8rem); margin-top: 6px">{{ t.wordsTitle }}</h2>
    <p class="lede">{{ t.wordsLede }}</p>
    <input v-model="q" class="search" type="search" :placeholder="t.wordsSearch" />
    <div class="word-list">
      <RouterLink v-for="concept in list" :key="concept.id" class="word" :to="`/words/${concept.id}`">
        <strong>{{ concept.term }}</strong>
        <span>{{ concept.say }}</span>
      </RouterLink>
      <p v-if="!list.length">{{ t.wordsEmpty }}</p>
    </div>
  </section>
</template>
