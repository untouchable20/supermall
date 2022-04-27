<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
     <scroll class="detail-scroll">
       <detail-swiper :top-image="topImage"></detail-swiper>
       <detail-base-info :base-info="goods"></detail-base-info>
       <detail-shop-info class="detail-shop" :ShopInfo="shop"></detail-shop-info>
       <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
       <detail-param-info :param-info="paramInfo"></detail-param-info>
       <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
       <good-list :goods="recommendInfo"></good-list>
     </scroll>
    </div>

</template>

<script>
//导入导航栏，轮播图，基本数据,商店信息,商品详情信息,商店评论，推荐信息
import DetailNavBar from "@/view/detail/childCpm/DetailNavBar";
import DetailSwiper from "@/view/detail/childCpm/DetailSwiper";
import DetailBaseInfo from "@/view/detail/childCpm/DetailBaseInfo";
import DetailShopInfo from "@/view/detail/childCpm/DetailShopInfo";
import DetailGoodsInfo from "@/view/detail/childCpm/DetailGoodsInfo";
import DetailParamInfo from "@/view/detail/childCpm/DetailParamInfo";
import DetailCommentInfo from "@/view/detail/childCpm/DetailCommentInfo";
import GoodList from "@/components/content/goods/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
//导入请求数据
import {getDetail,Goods,Shop,GoodsParam} from "@/network/detail";
import {getRecommend} from "@/network/home";

export default {
  name: "DetailView",
  data(){
    return{
      iid:null,
      topImage:[],
      //将请求到详情页数据存到该对象里，并且传入详情页
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendInfo:[]
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
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
      //获取店铺信息
      this.shop = new Shop(resdata.shopInfo)
      //获取商品详细信息
      this.detailInfo = resdata.detailInfo
      //获取参数信息
      this.paramInfo = new GoodsParam(resdata.itemParams.info,resdata.itemParams.rule)
      //获取评论信息
      if(resdata.rate.cRate !== 0){
        this.commentInfo = resdata.rate.list[0]
      }
      console.log(resdata)
    })
    //请求推荐数据
    getRecommend().then(res=>{
      let resdata = res.data.data
      this.recommendInfo = resdata.list
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

</style>
