<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { story } from '../content/story'
import { personas } from '../content/personas'

const step = ref(0)
const beat = computed(() => story.beats[step.value])
const rotated = ref(false)

watch(step, () => {
  rotated.value = false
})
</script>

<template>
  <section>
    <p class="kicker">Shared by every seat</p>
    <h2 class="serif" style="font-size: clamp(2rem, 4vw, 2.8rem); margin-top: 6px">{{ story.title }}</h2>
    <p class="lede">{{ story.lede }}</p>
    <article class="paper">
      <p class="kicker">{{ step + 1 }} of {{ story.beats.length }} · {{ beat.kicker }}</p>
      <h2 class="serif">{{ beat.title }}</h2>
      <p class="lead">{{ beat.body }}</p>
      <div v-if="beat.interactive === 'locks'" class="locks">
        <div class="lock">
          <em>Current key</em>
          Signs today’s messages. A thief can use it only by publishing an event. Then you retire it. The name stays.
        </div>
        <div class="lock" :class="{ hidden: !rotated }">
          <em>{{ rotated ? 'Spare, now revealed' : 'Spare key, still a hash' }}</em>
          {{
            rotated
              ? 'The spare signed the rotation. It is now the current key. A new spare is committed as a hash, ideally kept somewhere else. The AID did not change.'
              : 'The public log shows only a digest. The spare itself can live off the everyday device until you need it.'
          }}
        </div>
        <button class="btn" type="button" @click="rotated = !rotated">
          {{ rotated ? 'Hide the spare again' : 'Rotate the lock' }}
        </button>
      </div>
      <div class="navrow beat-nav">
        <button class="btn ghost" type="button" :disabled="step === 0" @click="step--">Previous</button>
        <button class="btn" type="button" :disabled="step === story.beats.length - 1" @click="step++">
          Next beat
        </button>
      </div>
    </article>
    <p class="section-label">Sit down as someone</p>
    <div class="grid">
      <RouterLink v-for="persona in personas" :key="persona.id" class="card" :to="`/path/${persona.id}`">
        <p class="who">{{ persona.name }}</p>
        <div class="role">{{ persona.role }}</div>
        <p>{{ persona.worry }}</p>
      </RouterLink>
    </div>
  </section>
</template>
