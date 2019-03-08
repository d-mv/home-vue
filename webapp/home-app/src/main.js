import Vue from 'vue'
import App from './App.vue'

import store from './store'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
export const EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
