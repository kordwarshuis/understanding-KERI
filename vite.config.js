import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages serves project sites under /<repo>/
  base: process.env.BASE_PATH || '/',
})
