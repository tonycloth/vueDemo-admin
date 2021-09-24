// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import store from './store/index.js'
// 第三方配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 重复点击菜单报错兼容
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  routes
})
// router.beforeEach((to, form, next) => {
//   if (to.path === '/login') {
//     sessionStorage.removeItem('token')
//   }
//   let token = sessionStorage.getItem('token')
//   if (token === 'undefined') {
//     token = ''
//   }

//   if (!token && to.path === '/register') {
//     next()
//   } else if (!token && to.path !== 'login') {
//     console.log('跳转=>', to.path)
//     next({
//       path: '/login', query: {url: to.path}
//     })
//   } else {
//     next()
//   }
//   if (to.path === '/') {
//     next({path: '/home'})
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
