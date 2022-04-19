<template>
  <div class="tab-bar-item" @click="itemClick" >
    <div v-if="!isActive">
      <slot  name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
    }
  },
  data(){
    return{
      //isActive:true
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
      console.log(this.path);
      console.log(this.$route);
    }
  },
  computed:{
    isActive(){
      //indexOf 判断路径是否相等 1 : true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      //判断是否有传值 先判断是否为活跃状态 再判断是否有传值
      return this.isActive ? {color:this.activeColor ? this.activeColor : '#8cbb19'} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  width: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: bottom;
}
.active{
  color: #8cbb19;
}
</style>
