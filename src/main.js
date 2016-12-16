require('es6-promise').polyfill()
require('isomorphic-fetch')
import 'babel-polyfill'

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routeConfig/'
import store from './store/'
import App from './App.vue'

import 'bootstrap'

import components from './components' //加载公共组件
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`${name}`, components[key])
})

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

new Vue({ store, router }).$mount('#app')