import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
      return savedPosition

    const target = to.hash && document.getElementById(to.hash.slice(1))
    return target ? { el: target, top: 24 } : { top: 0 }
  },
})
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} — Vaim` : 'Vaim — Fitness Videos & Community'
})
app.use(router)
app.mount('#app')
