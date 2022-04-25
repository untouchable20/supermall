<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" >
        <a :href="item.link" >
          <img :src="item.image"  @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,SwiperItem
  },
  data(){
    return{
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    imageLoad(){
      //防止发出多次
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
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
