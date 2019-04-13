import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(
  Vuetify,
  {
    iconfont: 'fa',
    theme: {
      primary: colors.cyan.lighten3, // #E53935
      secondary: colors.cyan.darken3, // #FFCDD2
      accent: colors.indigo.base, // #3F51B5
      error: '#b71c1c'
    }
  }
)

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
