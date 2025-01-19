import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/pages/Shopping.vue'),
    },
  ],
})

export default router
