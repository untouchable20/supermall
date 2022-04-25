<template>
  <div >
    <swiper >
      <swiper-item class="swiper-item" v-for="item in topImage" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "DetailSwiper",
  props:{
    topImage:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
.swiper img{
  width: 100%;
  height: 100%;
}
</style>
