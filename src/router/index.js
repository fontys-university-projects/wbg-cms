import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MaintenanceView from '@/views/MaintenanceView.vue'
import LoginView from '@/views/LoginView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'
import ResetRequestView from '@/views/ResetRequestView.vue'
import OverviewView from '@/views/analytics/OverviewView.vue'
import ReportView from '@/views/analytics/ReportView.vue'
import UsersView from '@/views/administration/UsersView.vue'
import ForOForView from '@/views/ForOForView.vue'
import FiveHundredView from '@/views/FiveHundredView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OverviewView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordResetView,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ResetRequestView,
      meta: {
        hideNavbar: true,
       }
    },
    {
      name: 'Analytics',
      path: '/analytics',
      redirect: { name: 'Overview' },
      children: [
        {
          path: 'overall',
          name: 'Overview',
          component: OverviewView
        },
        {
          path: 'socials',
          name: 'Socials',
          component: MaintenanceView
        },
        {
          path: 'ga',
          name: 'Google Analytics',
          component: MaintenanceView
        },
        {
          path: 'campaign',
          name: 'Campaign',
          component: MaintenanceView
        },
        {
          path: 'reports',
          name: 'Reports',
          component: ReportView
        },
      ]
    },
    {
      name: 'Administration',
      path: '/administration',
      redirect: { name: 'Settings' },
      children: [
        {
          path: 'settings',
          name: 'Settings',
          component: MaintenanceView
        },
        {
          path: 'users',
          name: 'Users',
          component: UsersView
        },
        {
          path: 'roles',
          name: 'Roles',
          component: MaintenanceView
        },
      ]
    },
    {
      path: '/404',
      name: 'Not Found',
      component: ForOForView
    },
    {
      path: '/500',
      name: 'Server Error',
      component: FiveHundredView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Not Found' }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.name + ' | ' + import.meta.env.VITE_APP_NAME || import.meta.env.VITE_APP_NAME ; // Use the route's title or a default title
});

export default router
