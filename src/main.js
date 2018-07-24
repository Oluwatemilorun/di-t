import '@babel/polyfill'
import Vue from 'vue'
import  './plugins/vuetify'
import App from './App.vue'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.config.productionTip = false
  
new Vue({
  render: h => h(App)
}).$mount('#app')
