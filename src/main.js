import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import 
import lodash from 'lodash'; window._ = lodash;

// css
import '@/assets/css/tailwind.css' // tailwind css







Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
