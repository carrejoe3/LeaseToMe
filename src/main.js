import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
// import awsExports from './aws-exports'

// Amplify.configure(awsExports)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
