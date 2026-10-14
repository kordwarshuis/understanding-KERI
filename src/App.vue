<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from './i18n'

const { t, locale, locales, setLocale } = useI18n()
</script>

<template>
  <div class="shell">
    <header class="top">
      <RouterLink class="brand" to="/">
        <span class="flame" aria-hidden="true"></span>
        <span>
          <strong>{{ t.brand }}</strong>
          <small>{{ t.brandTag }}</small>
        </span>
      </RouterLink>
      <div class="top-tools">
        <nav>
          <RouterLink to="/what">{{ t.navWhat }}</RouterLink>
          <RouterLink to="/story">{{ t.navStory }}</RouterLink>
          <RouterLink to="/words">{{ t.navWords }}</RouterLink>
          <RouterLink to="/sources">{{ t.navSources }}</RouterLink>
        </nav>
        <div class="lang" role="group" :aria-label="t.langLabel">
          <button
            v-for="item in locales"
            :key="item.id"
            type="button"
            :class="{ on: locale === item.id }"
            :aria-pressed="locale === item.id"
            :title="item.label"
            @click="setLocale(item.id)"
          >
            {{ item.short }}
          </button>
        </div>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>{{ t.footer }}</p>
    </footer>
  </div>
</template>
