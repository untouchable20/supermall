<template>
<!--  在vue3 中插槽通过 v-slot:Name   还需在前面添加template     -->
<!--  activeColor 设置字体颜色 没设置默认为#8cbb19-->
  <tab-bar>
    <tab-bar-item path="/home" activeColor="">
      <template v-slot:item-icon><img src="~assets/img/tabbar/home.svg" alt="" ></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/home-active.svg" alt=""></template>
      <template v-slot:item-text> <div >首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="">
      <template v-slot:item-icon><img src="~assets/img/tabbar/classify.svg" alt="" ></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/classify-active.svg" alt="" ></template>
      <template v-slot:item-text> <div >分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="">
      <template v-slot:item-icon><img src="~assets/img/tabbar/shopcar.svg" alt=""></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/shopcar-active.svg" alt="" ></template>
      <template v-slot:item-text> <div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/mine" activeColor="">
      <template v-slot:item-icon> <img src="~assets/img/tabbar/mine.svg" alt="" ></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/mine-active.svg" alt="" ></template>
      <template v-slot:item-text> <div >我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
  methods:{

  }
}
</script>

<style scoped>
img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: bottom;
}
</style>
