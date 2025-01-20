import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory('/'),
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
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/pages/Shopping.vue'),
    },
  ],
})

export default router
