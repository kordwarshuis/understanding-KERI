<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from '../i18n'

const route = useRoute()
const { t, concepts } = useI18n()
const concept = computed(() => concepts.value.find((c) => c.id === route.params.id))
</script>

<template>
  <article v-if="concept" class="paper">
    <p class="kicker">{{ concept.say }}</p>
    <h2 class="serif" style="font-size: 2.4rem; margin: 6px 0">{{ concept.term }}</h2>
    <p class="lead">{{ concept.plain }}</p>
    <aside class="note">
      <strong>{{ t.conceptWhy }}</strong>
      {{ concept.why }}
    </aside>
    <p class="kicker">{{ t.conceptFrom }}</p>
    <p>{{ concept.source }}</p>
    <RouterLink class="btn ghost" to="/words">{{ t.conceptAll }}</RouterLink>
  </article>
  <article v-else class="paper">
    <h2 class="serif">{{ t.conceptMissing }}</h2>
    <RouterLink class="btn" to="/words">{{ t.conceptBack }}</RouterLink>
  </article>
</template>
