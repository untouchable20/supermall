<template>

    <nav-bar>
      <template v-slot:center><div class="topTar">购物街</div></template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'

import {getHomeMultiData} from '@/network/home'
export default {
  name: "homePage",
  data(){
    return{
        banners:[],
        recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultiData().then(res => {
      let resdata = res.data.data
      this.banners = resdata.banner.list
      this.recommends = resdata.recommend.list
    })
  }
}
</script>

<style scoped>

</style>
