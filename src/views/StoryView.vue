<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n'

const { t, tf, story, personas } = useI18n()

const step = ref(0)
const beat = computed(() => story.value.beats[step.value])
const rotated = ref(false)

watch(step, () => {
  rotated.value = false
})

watch(story, () => {
  if (step.value >= story.value.beats.length) step.value = 0
  rotated.value = false
})
</script>

<template>
  <section>
    <p class="kicker">{{ t.storyKicker }}</p>
    <h2 class="serif" style="font-size: clamp(2rem, 4vw, 2.8rem); margin-top: 6px">{{ story.title }}</h2>
    <p class="lede">{{ story.lede }}</p>
    <article class="paper">
      <p class="kicker">{{ tf('storyOf', { n: step + 1, total: story.beats.length }) }} · {{ beat.kicker }}</p>
      <h2 class="serif">{{ beat.title }}</h2>
      <p class="lead">{{ beat.body }}</p>
      <div v-if="beat.interactive === 'locks'" class="locks">
        <div class="lock">
          <em>{{ t.storyCurrentKey }}</em>
          {{ t.storyCurrentBody }}
        </div>
        <div class="lock" :class="{ hidden: !rotated }">
          <em>{{ rotated ? t.storySpareShown : t.storySpareHidden }}</em>
          {{ rotated ? t.storySpareShownBody : t.storySpareHiddenBody }}
        </div>
        <button class="btn" type="button" @click="rotated = !rotated">
          {{ rotated ? t.storyHide : t.storyRotate }}
        </button>
      </div>
      <div class="navrow beat-nav">
        <button class="btn ghost" type="button" :disabled="step === 0" @click="step--">{{ t.storyPrev }}</button>
        <button class="btn" type="button" :disabled="step === story.beats.length - 1" @click="step++">
          {{ t.storyNext }}
        </button>
      </div>
    </article>
    <p class="section-label">{{ t.storySit }}</p>
    <div class="grid">
      <RouterLink v-for="persona in personas" :key="persona.id" class="card" :to="`/path/${persona.id}`">
        <p class="who">{{ persona.name }}</p>
        <div class="role">{{ persona.role }}</div>
        <p>{{ persona.worry }}</p>
      </RouterLink>
    </div>
  </section>
</template>
