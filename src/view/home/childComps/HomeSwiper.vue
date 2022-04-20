<template>
<<<<<<< HEAD
  <swiper>
    <swiper-item v-for="item in banners" >
      <a :href="item.link" >
        <img :src="item.image" alt="" >
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,SwiperItem
=======
    <swiper class='homeSwiper'>
      <swiper-item v-for="item in banners" :key='item.key'>
        <a :href="item.link">
          <img :src="item.image" >
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
<<<<<<< HEAD
=======
  height: 100%;
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
}
</style>
