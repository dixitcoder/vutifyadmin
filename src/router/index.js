import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import auth from '@/auth'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: '/login',
  },
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [{
      path: 'dashboard',
      beforeEnter: requireAuth,
      component: () => import('../pages/dashboard.vue'),
    },
    {
      path: 'account-settings',
      beforeEnter: requireAuth,
      component: () => import('../pages/account-settings.vue'),
    },
    {
      path: 'typography',
      beforeEnter: requireAuth,
      component: () => import('../pages/typography.vue'),
    },
    {
      path: 'icons',
      beforeEnter: requireAuth,
      component: () => import('../pages/icons.vue'),
    },
    {
      path: 'cards',
      beforeEnter: requireAuth,
      component: () => import('../pages/cards.vue'),
    },
    {
      path: 'tables',
      beforeEnter: requireAuth,
      component: () => import('../pages/tables.vue'),
    },
    {
      path: 'form-layouts',
      beforeEnter: requireAuth,
      component: () => import('../pages/form-layouts.vue'),
    },
    {
      path: 'whatsappList',
      beforeEnter: requireAuth,
      component: () => import('../pages/whatsappList.vue'),
    },
    {
      path: 'product/:productId',
      component: () => import('../pages/Deatsils.vue'),
    },
    {
      path: 'whatsapp',
      beforeEnter: requireAuth,
      component: () => import('../pages/whatsapp.vue'),
    }],
  },
  {
    path: '/',
    component: () => import('../layouts/blank.vue'),
    children: [{
      path: 'login',
      component: () => import('../pages/login.vue'),
    },
    {
      path: 'register',
      component: () => import('../pages/register.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/[...all].vue'),
    }],
  },
  {
    path: '/logout',
    beforeEnter(to, from, next) {
      auth.logout()
      next('/')
    },
  }],
})

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: ('/'),
      },
    })
  } else {
    next()
  }
}
export default router
