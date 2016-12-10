import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'

import components from './components' //加载公共组件

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`${name}`, components[key])
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
