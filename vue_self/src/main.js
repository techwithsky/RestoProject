import '@babel/polyfill'
// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
// import './plugins/bootstrap-vue'?0
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('upper',function(val){
  return val.toUpperCase()
})
new Vue({
  render: h => h(App),
}).$mount('#app')
