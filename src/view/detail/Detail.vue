<template>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-image="topImage"></detail-swiper>
    <detail-base-info :base-info="goods"></detail-base-info>
</template>

<script>
import DetailNavBar from "@/view/detail/childCpm/DetailNavBar";
import DetailSwiper from "@/view/detail/childCpm/DetailSwiper";
import DetailBaseInfo from "@/view/detail/childCpm/DetailBaseInfo";
import {getDetail,Goods,Shop} from "@/network/detail";

export default {
  name: "DetailView",
  data(){
    return{
      iid:null,
      topImage:[],
      goods:{},
      shop:{}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
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
    })
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
