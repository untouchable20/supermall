<template>
  <div id="home">
    <nav-bar class="homeNav">
      <template v-slot:center><div >购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
//导入顶部导航栏
import NavBar from "@/components/common/navbar/NavBar";
//导入中间导航栏
import TabControl from "@/components/common/tabControl/TabControl";


//导入轮播图模块
import HomeSwiper from "@/view/home/childComps/HomeSwiper";
//导入推荐模块
import RecommendView from "@/view/home/childComps/RecommendView";
//导入特色模块
import FeatureView from "@/view/home/childComps/FeatureView";


//导入网络请求
import {getHomeMultidata} from "@/network/home";


export default {
  name: "homePage",
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  created() {
    //创建完成后发送请求 函数内部返回的是 promise 请求
    getHomeMultidata().then(res =>{
      //取出请求里data的某个数组保留到组件里的变量
      let resdata = res.data.data
      this.banners = resdata.banner.list
      this.recommends = resdata.recommend.list
    })
  }
}
</script>

<style scoped>
#home{
  height: 2000px;
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
}

</style>
