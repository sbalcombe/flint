import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.config.productionTip = false

let app

// Initialize Firebase
let config = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID
}

window.Flint = {
  cardUpFront: true,
  currencySymbol: '$',
  stripeKey: 'yourpublickey',
  usesStripe: true
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      router,
      data: { user: user },
      render: h => h(App)
    }).$mount('#app')
  }
})
