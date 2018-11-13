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
      component: HomePage
    },
    {
      path: '/signin',
      component: SigninPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings/profile',
      name: 'profile-settings',
      component: ProfileSettingsPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(AuthMiddleware)

export default router
