import RotaPublica from '@/router/indexPublico'
import { createRouter, createWebHistory } from 'vue-router'
import { atualizarSeo } from '@/composable/useSeo'
const routes = [{ ...RotaPublica }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})
router.afterEach((to) => {
  atualizarSeo(to)
})


export default router
