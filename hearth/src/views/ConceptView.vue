<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { concepts } from '../content/glossary'

const route = useRoute()
const concept = computed(() => concepts.find((c) => c.id === route.params.id))
</script>

<template>
  <article v-if="concept" class="paper">
    <p class="kicker">{{ concept.say }}</p>
    <h2 class="serif" style="font-size: 2.4rem; margin: 6px 0">{{ concept.term }}</h2>
    <p class="lead">{{ concept.plain }}</p>
    <aside class="note">
      <strong>Why it matters</strong>
      {{ concept.why }}
    </aside>
    <p class="kicker">From the library</p>
    <p>{{ concept.source }}</p>
    <RouterLink class="btn ghost" to="/words">All words</RouterLink>
  </article>
  <article v-else class="paper">
    <h2 class="serif">That word isn’t in the hearth yet</h2>
    <RouterLink class="btn" to="/words">Back to the words</RouterLink>
  </article>
</template>
