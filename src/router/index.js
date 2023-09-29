import BlockForm from '@/components/BlockForm.vue'
import ParentComponent from '@/components/Communication/ParentComponent.vue'
import UsersList from '@/components/Users/UsersList.vue'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  base: window.location.pathname,
  routes: [{
    path: '/',
    component: HomePage
  },
  {
    path: '/questionA',
    component: ParentComponent
  },
  {
    path: '/questionB',
    component: UsersList
  },
  {
    path: '/questionC',
    component: BlockForm
    // meta: { requiresAuth: true }
  },
  {
    path: '/notFound(.*)',
    component: NotFound
  }
  ]
})
export default router