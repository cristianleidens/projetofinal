import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Clients from './components/Clients.vue'
import Local from './components/Local.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/clients',
      component: Clients
    },
    {
      path: '/Local',
      component: Local
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
