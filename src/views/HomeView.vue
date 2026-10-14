<script setup>
import { RouterLink } from 'vue-router'
import { personas } from '../content/personas'
</script>

<template>
  <section class="hero">
    <p class="kicker">Key Event Receipt Infrastructure</p>
    <h1>KERI is easier to trust once someone explains it kindly.</h1>
    <p class="lede">
      Not many people can say what it is, how it works, or why it matters.
      This hearth sits you down as the person you actually are — a parent, a lawyer,
      a policymaker, a developer, a manager, a clinician — and tells it in that language.
    </p>
    <div class="actions">
      <RouterLink class="btn" to="/what">Watch what KERI does</RouterLink>
      <RouterLink class="btn ghost" to="/story">Start with the story</RouterLink>
      <RouterLink class="btn ghost" to="/words">Browse the words</RouterLink>
    </div>
  </section>

  <p class="section-label">Choose a seat</p>
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
