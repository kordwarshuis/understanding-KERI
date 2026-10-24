import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PathView from './views/PathView.vue'
import GlossaryView from './views/GlossaryView.vue'
import ConceptView from './views/ConceptView.vue'
import StoryView from './views/StoryView.vue'
import SourcesView from './views/SourcesView.vue'
import WhatView from './views/WhatView.vue'
import PreRotationView from './views/PreRotationView.vue'
import KeysView from './views/KeysView.vue'
import DigestView from './views/DigestView.vue'
import LogView from './views/LogView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.name === 'what' || to.name === 'pre-rotation' || to.name === 'keys' || to.name === 'digest' || to.name === 'log') return false
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/what',
      name: 'what',
      components: {
        default: HomeView,
        modal: WhatView,
      },
    },
    {
      path: '/keys',
      name: 'keys',
      components: {
        default: HomeView,
        modal: KeysView,
      },
    },
    {
      path: '/digest',
      name: 'digest',
      components: {
        default: HomeView,
        modal: DigestView,
      },
    },
    {
      path: '/pre-rotation',
      name: 'pre-rotation',
      components: {
        default: HomeView,
        modal: PreRotationView,
      },
    },
    {
      path: '/log',
      name: 'log',
      components: {
        default: HomeView,
        modal: LogView,
      },
    },
    { path: '/path/:persona/:lesson?', name: 'path', component: PathView },
    { path: '/words', name: 'words', component: GlossaryView },
    { path: '/words/:id', name: 'concept', component: ConceptView },
    { path: '/story', name: 'story', component: StoryView },
    { path: '/sources', name: 'sources', component: SourcesView },
  ],
})
