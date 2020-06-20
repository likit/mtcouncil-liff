import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$liff = window.liff

new Vue({
  render: h => h(App),
}).$mount('#app')
