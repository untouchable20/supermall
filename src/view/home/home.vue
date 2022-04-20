<template>

    <nav-bar>
      <template v-slot:center><div class="topTar">购物街</div></template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/view/home/childComps/HomeSwiper.vue'
import RecommendView from '@/view/home/childComps/RecommendView.vue'

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
    HomeSwiper,
    RecommendView
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
