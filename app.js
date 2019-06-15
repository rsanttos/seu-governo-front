import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import pt from 'vuetify/es5/locale/pt'
import VueResource from 'vue-resource'
import App from './src/App.vue'
import moment from 'moment'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { pt },
    current: 'pt'
  }
})
Vue.use(VueResource)
moment.locale('pt-BR')
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App },
  render: h => h(App)
})