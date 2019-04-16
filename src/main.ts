import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//
// Plugins
//
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify, {
  iconfont: 'md',
  Vuetify
})
//
// Main
//
Vue.config.productionTip = false
//
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
