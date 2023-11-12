import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: () => import('../page/HelloCard.vue')
    },
    {
      path: '/users',
      name: 'listFirst',
      component: () => import('../page/AddFriends.vue')
    },
    {
        path: '/friends',
        name: 'listsecond',
        component: () => import('../page/ListFriends.vue')
    }
  ]
})

export default router
