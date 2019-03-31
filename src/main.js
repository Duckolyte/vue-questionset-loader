import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(
  Vuetify,
  {
    iconfont: 'fa'
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
