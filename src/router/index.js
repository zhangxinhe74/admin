import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('@/views/login')
const Home = () => import('@/views/home')
const Layout = () => import('@/views/layout')
const Artivle = () => import('@/views/artivle')
const Image = () => import('@/views/image')
const Publish = () => import('@/views/publish')
const Comment = () => import('@/views/comment')
const Fans = () => import('@/views/fans')
const Setting = () => import('@/views/setting')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/artivle',
        name: 'artivle',
        component: Artivle
      },
      {
        path: '/image',
        name: 'image',
        component: Image
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      },
      {
        path: '/fans',
        name: 'fans',
        component: Fans
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
