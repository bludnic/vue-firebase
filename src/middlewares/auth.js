import store from '~/store'

export default (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = store.state.user.user

    if (!user) {
      next({
        path: '/signin',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}
