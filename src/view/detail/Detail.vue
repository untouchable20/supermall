<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
     <scroll class="detail-scroll">
       <detail-swiper :top-image="topImage"></detail-swiper>
       <detail-base-info :base-info="goods"></detail-base-info>
       <detail-shop-info class="detail-shop" :ShopInfo="shop"></detail-shop-info>
     </scroll>
    </div>

</template>

<script>
//导入导航栏，轮播图，基本数据
import DetailNavBar from "@/view/detail/childCpm/DetailNavBar";
import DetailSwiper from "@/view/detail/childCpm/DetailSwiper";
import DetailBaseInfo from "@/view/detail/childCpm/DetailBaseInfo";
import DetailShopInfo from "@/view/detail/childCpm/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import {getDetail,Goods,Shop} from "@/network/detail";

export default {
  name: "DetailView",
  data(){
    return{
      iid:null,
      topImage:[],
      //将请求到详情页数据存到该对象里，并且传入详情页
      goods:{},
      shop:{}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.iid
    //请求数据
    getDetail(this.iid).then(res =>{
      let resdata = res.data.result
      //获取轮播数据
      this.topImage = resdata.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(resdata.itemInfo,resdata.columns,resdata.shopInfo.services)
      //
      this.shop = new Shop(resdata.shopInfo)
      console.log(this.shop)
    })

  },
  methods:{
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll{
  height: calc(100% - 44px);
  z-index: 9;
}
.detail-shop{
  height: 300px;
}
</style>
