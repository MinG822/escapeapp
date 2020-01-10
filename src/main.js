import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY',
    v: 'GOOGLE_MAPS_VERSION',
    libraries: 'places'
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
