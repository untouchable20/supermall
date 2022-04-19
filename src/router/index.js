
import {createRouter, createWebHistory} from 'vue-router'


const HomePage = ()=>import('../view/home/home')
const ClassifyItem = ()=>import('../view/classify/classify')
const ShopCarItem = ()=>import('../view/shopcar/shopcar')
const MineProfile = ()=>import('../view/mine/mine')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:HomePage
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
  }
]



const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router
