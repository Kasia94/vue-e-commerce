import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ListParent from './components/ListParent'
import ListItem from './components/ListItem'
Vue.config.productionTip = false

Vue.component('ListParent', ListParent)
Vue.component('ListItem', ListItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
