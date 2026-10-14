<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="shell">
    <header class="top">
      <RouterLink class="brand" to="/">
        <span class="flame" aria-hidden="true"></span>
        <span>
          <strong>The KERI Hearth</strong>
          <small>A warm way in</small>
        </span>
      </RouterLink>
      <nav>
        <RouterLink to="/what">What it does</RouterLink>
        <RouterLink to="/story">The story</RouterLink>
        <RouterLink to="/words">Words</RouterLink>
        <RouterLink to="/sources">Sources</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>
        English explanations only, drawn from the texts in this project.
        KERI is said like the name Carrie.
      </p>
    </footer>
  </div>
</template>
