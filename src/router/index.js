import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products/index.vue')
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('@/views/Products/view.vue'),
    meta: { parent: 'Products' }
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import('@/views/Authors/index.vue')
  },
  {
    path: '/authors/:id',
    name: 'Author',
    component: () => import('@/views/Authors/view.vue'),
    meta: { parent: 'Authors' }
  },
  {
    path: '/contacts',
    component: () => import('@/views/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
