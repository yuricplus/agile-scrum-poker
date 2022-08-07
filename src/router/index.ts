import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewGame from '../views/newGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-game',
      name: 'new game',
      component: () => import('../views/NewGame.vue')
    },
    {
      path: '/room',
      name: 'room | sds',
      component: () => import('../views/Room.vue')
    }
  ]
})

export default router
