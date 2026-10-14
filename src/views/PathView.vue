<script setup>
import { computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n'
import { completedLessons, markComplete } from '../progress'
import LessonBody from '../components/LessonBody.vue'

const route = useRoute()
const router = useRouter()
const { t, tf, findPersona, findLesson } = useI18n()

const persona = computed(() => findPersona(route.params.persona))
const lesson = computed(() => {
  if (!persona.value) return null
  const id = route.params.lesson || persona.value.lessons[0].id
  return findLesson(persona.value, id) || persona.value.lessons[0]
})
const index = computed(() => persona.value?.lessons.findIndex((l) => l.id === lesson.value?.id) ?? 0)
const done = computed(() => (persona.value ? completedLessons(persona.value.id) : new Set()))

const prev = computed(() => persona.value?.lessons[index.value - 1])
const next = computed(() => persona.value?.lessons[index.value + 1])

watch(
  lesson,
  (value) => {
    if (persona.value && value) markComplete(persona.value.id, value.id)
  },
  { immediate: true },
)

function go(id) {
  router.push(`/path/${persona.value.id}/${id}`)
}
</script>

<template>
  <section v-if="persona && lesson">
    <p class="kicker">{{ persona.role }}</p>
    <h2 class="serif" style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-top: 6px">
      {{ persona.name }} · {{ persona.worry }}
    </h2>
    <div class="steps">
      <a
        v-for="(item, i) in persona.lessons"
        :key="item.id"
        :class="{ on: item.id === lesson.id, done: done.has(item.id) }"
        href="#"
        @click.prevent="go(item.id)"
      >
        {{ i + 1 }}. {{ item.title }}
      </a>
    </div>
    <article class="paper">
      <p class="kicker">{{ tf('pathMinutes', { n: lesson.minutes }) }}</p>
      <h2 class="serif" style="margin-top: 6px">{{ lesson.title }}</h2>
      <LessonBody :blocks="lesson.blocks" />
      <div class="navrow">
        <button class="btn ghost" type="button" :disabled="!prev" @click="prev && go(prev.id)">{{ t.pathBack }}</button>
        <button v-if="next" class="btn" type="button" @click="go(next.id)">{{ t.pathContinue }}</button>
        <RouterLink v-else class="btn" to="/story">{{ t.pathStory }}</RouterLink>
      </div>
    </article>
  </section>
  <section v-else class="paper">
    <h2 class="serif">{{ t.pathMissing }}</h2>
    <RouterLink class="btn" to="/">{{ t.pathChoose }}</RouterLink>
  </section>
</template>
