import Vue from 'vue'
import Router from 'vue-router'

import AuthMiddleware from '~/middlewares/auth'
import HomePage from '~/pages/HomePage'
import SigninPage from '~/pages/SigninPage'
import RegisterPage from '~/pages/RegisterPage'
import ProfilePage from '~/pages/ProfilePage'
import ProfileSettingsPage from '~/pages/ProfileSettingsPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Vue Firebase'
      }
    },
    {
      path: '/signin',
      component: SigninPage,
      meta: {
        title: 'Sign In'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        title: 'Register'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: {
        title: 'Your Profile',
        requiresAuth: true
      }
    },
    {
      path: '/settings/profile',
      name: 'profile-settings',
      component: ProfileSettingsPage,
      meta: {
        title: 'Profile Settings',
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(AuthMiddleware)
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''
  next()
})

export default router
