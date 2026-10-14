<script setup>
import { useI18n } from '../i18n'

const { sources } = useI18n()
</script>

<template>
  <article class="paper">
    <p class="kicker">{{ sources.kicker }}</p>
    <h2 class="serif" style="font-size: 2.4rem">{{ sources.title }}</h2>
    <p class="lead">{{ sources.lede }}</p>
    <ul class="checklist">
      <li v-for="item in sources.items" :key="item">{{ item }}</li>
    </ul>
    <aside class="note">
      <strong>{{ sources.noteTitle }}</strong>
      {{ sources.noteBody }}
    </aside>
  </article>
</template>
