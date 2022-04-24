<template>
  <div id="home">
    <nav-bar class="homeNav">
      <template v-slot:center><div >购物街</div></template>
    </nav-bar>
    <tab-control @tabClick="tabClick"
                 :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 :class="{fixed: isTabFixed}"
                 class="tab-control"
                 v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pulling-up="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control @tabClick="tabClick"
                     :titles="['流行','新款','精选']"
                     ref="tabControl2"
                     :class="{fixed: isTabFixed}"></tab-control>
        <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//一些公共的组件
//导入顶部导航栏
import NavBar from "@/components/common/navbar/NavBar";
//导入中间导航栏
import TabControl from "@/components/common/tabControl/TabControl";
//导入显示的数据模块
import GoodList from "@/components/content/goods/GoodList";
//导入滚动模块
import Scroll from "@/components/common/scroll/Scroll";
//导入返回顶部
import BackTop from "@/components/content/backTop/BackTop";

//home 独有的组件
//导入轮播图模块
import HomeSwiper from "@/view/home/childComps/HomeSwiper";
//导入推荐模块
import RecommendView from "@/view/home/childComps/RecommendView";
//导入特色模块
import FeatureView from "@/view/home/childComps/FeatureView";


//导入网络请求
import {getHomeMultidata,getHomeGoods} from "@/network/home";



export default {
  name: "homePage",
  components: {
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType:'pop',//默认显示的是流行
      isShowBackTop:false,//判断返回顶部显示
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  created() {
    //创建完成后发送请求 函数内部返回的是 promise 请求
    //banner recommend,feature
    this.getHomeMultidata()
    //pop new sell
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted() {

  },
  methods:{
    //进一步的封装网络请求 在methods里定义 在created里调用
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        //取出请求里data的某个数组保留到组件里的变量
        let resdata = res.data.data
        this.banners = resdata.banner.list
        this.recommends = resdata.recommend.list
      })
    },
    //根据传入的类型 请求不同类型的list追加到goods里不同类型中的list
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        let resdata = res.data.data
        this.goods[type].list.push(...resdata.list)
        this.goods[type].page += 1
        //调用内部的完成上拉方法
        this.$refs.scroll.finishPullUp()
      })
    },

    //事件监听
    //监听tabControl组件里提交事件 获取index判断决定展示的类型
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      //保持选中的类型一致
      this.$refs.tabControl1.currentSelect = index
      this.$refs.tabControl2.currentSelect = index

    },
    //返回顶部  通过给scroll组件绑定一个ref 获取其里面的方法
    backTop(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    //绑定自定义事件获取position，然后判断显示隐藏
    contentScroll(position){
      //判断backtop是否显示
      this.isShowBackTop = -position.y > 1000
      //决定tabcontrol是否吸顶 (position:fixed) isTabFixed决定是否添加class
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    //上拉加载更多 绑定自定义事件 再次调用请求数据参数为当前的type
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    //监听图片加载完成 获取距离顶部的高度
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabOffsetTop)
    }
  },
  computed:{
    //通过计算属性计算当前的点击的类型来 决定要显示的类型数据
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
#home div{
  text-align: center;
}
.homeNav{
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  background-color: #8cbb19;
  color: #fff;
  z-index: 10;
}
.tab-control{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>
