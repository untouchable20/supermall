<template>
  <div id="home">
    <nav-bar class="homeNav">
      <template v-slot:center><div >购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control @tabClick="tabClick"
                 class="tab-control"
                 :titles="['流行','新款','精选']"></tab-control>
    <good-list :goods="showGoods"></good-list>
    <ul>
      <li>撑开1</li>
      <li>撑开2</li>
      <li>撑开3</li>
      <li>撑开4</li>
      <li>撑开5</li>
      <li>撑开6</li>
      <li>撑开7</li>
      <li>撑开8</li>
      <li>撑开9</li>
      <li>撑开10</li>
      <li>撑开11</li>
      <li>撑开12</li>
      <li>撑开13</li>
      <li>撑开14</li>
      <li>撑开15</li>
      <li>撑开16</li>
      <li>撑开17</li>
      <li>撑开18</li>
      <li>撑开19</li>
      <li>撑开20</li>
    </ul>
  </div>
</template>

<script>
//一些公共的组件
//导入顶部导航栏
import NavBar from "@/components/common/navbar/NavBar";
//导入中间导航栏
import TabControl from "@/components/common/tabControl/TabControl";
//导入显示的数据
import GoodList from "@/components/content/goods/GoodList";


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
      currentType:'pop'
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
    }
  },
  computed:{
    //通过计算属性返回要显示的类型数据
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
#home div{
  text-align: center;
}
.homeNav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #8cbb19;
  color: #fff;
  z-index: 9;
}

.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}

</style>
