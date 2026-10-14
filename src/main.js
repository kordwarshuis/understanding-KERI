import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { installLocaleRouting } from './i18n'
import './styles.css'

installLocaleRouting(router)
createApp(App).use(router).mount('#app')
