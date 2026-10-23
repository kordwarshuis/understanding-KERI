<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n'

const { t, personas } = useI18n()
</script>

<template>
  <section class="hero">
    <p class="kicker">{{ t.homeKicker }}</p>
    <h1>{{ t.homeTitle }}</h1>
    <p class="lede">{{ t.homeLede }}</p>
    <div class="actions">
      <RouterLink class="btn" to="/what">{{ t.homeWatch }}</RouterLink>
      <RouterLink class="btn ghost" to="/keys">{{ t.homeKeys }}</RouterLink>
      <RouterLink class="btn ghost" to="/pre-rotation">{{ t.homePre }}</RouterLink>
      <RouterLink class="btn ghost" to="/story">{{ t.homeStory }}</RouterLink>
      <RouterLink class="btn ghost" to="/words">{{ t.homeWords }}</RouterLink>
    </div>
  </section>

  <p class="section-label">{{ t.homeSeats }}</p>
  <div class="grid">
    <RouterLink
      v-for="persona in personas"
      :key="persona.id"
      class="card"
      :to="`/path/${persona.id}`"
    >
      <span class="dot" :style="{ background: persona.accent, boxShadow: `0 0 0 6px ${persona.accent}22` }"></span>
      <p class="who">{{ persona.name }}</p>
      <div class="role">{{ persona.role }}</div>
      <p>{{ persona.blurb }}</p>
    </RouterLink>
  </div>
</template>
