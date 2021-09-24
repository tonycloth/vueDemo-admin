import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

// 懒加载
const Home = () => import('@/views/home.vue')
// 公共组件加载
const Main = () => import('@/views/main/main')
const VideoMange = () => import('@/views/VideoMange')
const UserMange = () => import('@/views/UserMange')
const pageOne = () => import('@/views/other/pageOne')
const pageTwo = () => import('@/views/other/pageTwo')

const News = () => import('@/views/news.vue')
const notFound = () => import('@/views/404.vue')

// Vue.use(Router)

let routes = [
  // {
  //   path: '/',
  //   component: Home,
  //   children: [// 因为其他组件都是在main组件里面，所以在main组件中二级路由
  {
    path: '/',
    // name: 'index',
    label: '首页',
    icon: 's-home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    label: '主页',
    icon: 's-home',
    component: Main
  },
  {
    path: '/video',
    name: 'video',
    label: '视频管理',
    icon: 'video-play',
    component: VideoMange
  },
  {
    path: '/user',
    name: 'user',
    label: '用户管理',
    icon: 'user',
    component: UserMange
  },
  {
    path: '/other',
    label: '其他',
    icon: 'menu',
    children: [
      {
        path: '/page1',
        name: 'page1',
        label: '分支页面1',
        component: pageOne
      },
      {
        path: '/page2',
        name: 'page2',
        label: '分支页面2',
        component: pageTwo
      }
    ]
  },

  {
    path: '/news',
    name: 'news',
    label: '新闻',
    icon: 'news',
    component: News
  },
  {
    path: '/404',
    name: '404',
    label: '404',
    icon: 'loading',
    component: notFound
  }
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
  //   ]
  // }

]
export default routes
