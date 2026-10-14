import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PathView from './views/PathView.vue'
import GlossaryView from './views/GlossaryView.vue'
import ConceptView from './views/ConceptView.vue'
import StoryView from './views/StoryView.vue'
import SourcesView from './views/SourcesView.vue'
import WhatView from './views/WhatView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/what', name: 'what', component: WhatView },
    { path: '/path/:persona/:lesson?', name: 'path', component: PathView },
    { path: '/words', name: 'words', component: GlossaryView },
    { path: '/words/:id', name: 'concept', component: ConceptView },
    { path: '/story', name: 'story', component: StoryView },
    { path: '/sources', name: 'sources', component: SourcesView },
  ],
})
