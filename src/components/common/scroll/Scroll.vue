<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot ></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    //创建实例
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      observeImage:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动区域
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    //滚动底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    //返回顶部
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
