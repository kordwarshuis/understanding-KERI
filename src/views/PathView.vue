<script setup>
import { computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { findLesson, findPersona } from '../content/personas'
import { completedLessons, markComplete } from '../progress'
import LessonBody from '../components/LessonBody.vue'

const route = useRoute()
const router = useRouter()

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
      <p class="kicker">About {{ lesson.minutes }} minutes</p>
      <h2 class="serif" style="margin-top: 6px">{{ lesson.title }}</h2>
      <LessonBody :blocks="lesson.blocks" />
      <div class="navrow">
        <button class="btn ghost" type="button" :disabled="!prev" @click="prev && go(prev.id)">Back</button>
        <button v-if="next" class="btn" type="button" @click="go(next.id)">Continue</button>
        <RouterLink v-else class="btn" to="/story">Walk the shared story</RouterLink>
      </div>
    </article>
  </section>
  <section v-else class="paper">
    <h2 class="serif">That seat isn’t here</h2>
    <RouterLink class="btn" to="/">Choose another</RouterLink>
  </section>
</template>
