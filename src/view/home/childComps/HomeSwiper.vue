<template>
  <div>
    <swiper class='homeSwiper'>
      <swiper-item v-for="item in banners" :key='item.key'>
        <a :href="item.link">
          <img :src="item.image" >
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
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
  height: 100%;
}
</style>
