<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n'

const props = defineProps({
  blocks: { type: Array, required: true },
})

const { concepts } = useI18n()
const picked = ref(null)

watch(
  () => props.blocks,
  () => {
    picked.value = null
  },
)

function concept(id) {
  return concepts.value.find((c) => c.id === id)
}

function choose(blockIndex, optionIndex, ok) {
  picked.value = { blockIndex, optionIndex, ok }
}
</script>

<template>
  <div>
    <template v-for="(block, i) in blocks" :key="i">
      <p v-if="block.kind === 'lead'" class="lead">{{ block.text }}</p>
      <p v-else-if="block.kind === 'p'">{{ block.text }}</p>
      <aside v-else-if="block.kind === 'note'" class="note">
        <strong>{{ block.title }}</strong>
        {{ block.text }}
      </aside>
      <div v-else-if="block.kind === 'pair'" class="pair">
        <div>
          <h3>{{ block.leftTitle }}</h3>
          <p>{{ block.left }}</p>
        </div>
        <div>
          <h3>{{ block.rightTitle }}</h3>
          <p>{{ block.right }}</p>
        </div>
      </div>
      <div v-else-if="block.kind === 'list'">
        <p v-if="block.title"><strong>{{ block.title }}</strong></p>
        <ul class="checklist">
          <li v-for="item in block.items" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div v-else-if="block.kind === 'words'" class="chips">
        <RouterLink v-for="id in block.ids" :key="id" class="chip" :to="`/words/${id}`">
          {{ concept(id)?.term || id }}
        </RouterLink>
      </div>
      <div v-else-if="block.kind === 'check'" class="check">
        <p><strong>{{ block.q }}</strong></p>
        <button
          v-for="(option, oi) in block.options"
          :key="option.t"
          class="option"
          :class="{
            good: picked && picked.blockIndex === i && oi === picked.optionIndex && option.ok,
            bad: picked && picked.blockIndex === i && oi === picked.optionIndex && !option.ok,
          }"
          type="button"
          @click="choose(i, oi, option.ok)"
        >
          {{ option.t }}
        </button>
        <p v-if="picked && picked.blockIndex === i" class="explain">{{ block.explain }}</p>
      </div>
    </template>
  </div>
</template>
