import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import './plugins/firestore'
import './plugins/vee-validate'
import './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    this.$store.dispatch('clientInit')
  }
}).$mount('#app')
