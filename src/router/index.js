
//vue3 引入 下面两个
import {createRouter, createWebHistory} from 'vue-router'


const HomePage = ()=>import('@/view/home/home')
const ClassifyItem = ()=>import('@/view/classify/classify')
const ShopCarItem = ()=>import('@/view/shopcar/shopcar')
const MineProfile = ()=>import('@/view/mine/mine')
const Detail = ()=>import('@/view/detail/Detail')
const routes = [
  {
    path:'',
    redirect:'/home',

  },
  {
    path:'/home',
    component:HomePage,
    meta:{
      keepalive:true
    }
  },
  {
    path:'/classify',
    component:ClassifyItem
  },
  {
    path:'/cart',
    component:ShopCarItem
  },
  {
    path:'/mine',
    component:MineProfile
  },
  {
    path: '/detail/:iid',
    component:Detail
  }
]

//vue3 创建

const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router
