import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      
      {
        path: 'tips',
        name: 'tips',
        component: () => import('../views/TipsView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
      }
      ,
      {
        path: '/blog/blog1',
        name: 'pomodoro',
        component: () => import('../views/Blog/Blog1.vue')
      }
      ,
      {
        path: '/blog/blog2',
        name: 'active-recall',
        component: () => import('../views/Blog/Blog2.vue')
      }
      
      ,
      {
        path: '/blog/blog3',
        name: 'spaced-repetition',
        component: () => import('../views/Blog/Blog3View.vue')
      }
      ,
      {
        path: '/blog/blog4',
        name: 'mind-mapping',
        component: () => import('../views/Blog/Blog4View.vue')
      }
      ,
      {
        path: '/blog/blog5',
        name: 'richard-technique',
        component: () => import('../views/Blog/Blog5View.vue')
      }
        ,
      {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue')
      }

        ,
      {
        path: '/blog/blog3',
        name: 'spaced-repetition',
        component: () => import('../views/Blog/Blog3View.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../layouts/ErrorLayout.vue'),
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Handle scroll behavior with slow network in mind
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ top: 0 })
        }
      }, 300) // Small delay for smoother transitions
    })
  }
})

export default router