import { createRouter, createWebHistory } from 'vue-router'
const Home= ()=>import('../views/Home/Home.vue')
const Global= ()=>import('../views/Global/Global')
const Foreign= ()=>import('../views/Foreign/Foreign')
const Gxiangqing=()=>import('../views/Gxiangqing')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/foreign',
    name: 'Foreign',
    component: Foreign
  },
  {
    path: '/global',
    name: 'Global',
    component: Global
  },
  {
    path: '/gxiangqing/:name',
    name: 'Gxiangqing',
    component: Gxiangqing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
