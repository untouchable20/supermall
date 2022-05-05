<template>
    <div id="detail">
      <detail-nav-bar @itemClick="itemClick" class="detail-nav" ref="nav"></detail-nav-bar>
     <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
       <detail-swiper :top-image="topImage"></detail-swiper>
       <detail-base-info :base-info="goods"></detail-base-info>
       <detail-shop-info class="detail-shop" :ShopInfo="shop"></detail-shop-info>
       <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
       <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
       <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
       <good-list ref="recommend" :goods="recommendInfo"></good-list>
     </scroll>
      <detail-bottom-bar class="bottom-bar" @addCart="addToCart"></detail-bottom-bar>
      <back-top class="back-top" @click.native="backTop" v-show="isShowBackTop"></back-top>
      <toast :message="message" :show="show"></toast>
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
import DetailBottomBar from "@/view/detail/childCpm/DetailBottomBar";
import BackTop from "@/components/content/backTop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";
import Toast from "@/components/common/toast/Toast";
//导入网络请求 商品，商店，商品评论类用于保存数据
import {getDetail,Goods,Shop,GoodsParam} from "@/network/detail";
//导入混入封装
import {backTopMixin} from '@/common/mixin'
//导入评论请求
import {getRecommend} from "@/network/home";
//导入mapActions辅助函数
import {mapActions} from 'vuex'

export default {
  name: "DetailView",
  mixins:[backTopMixin],
  data(){
    return{
      iid:null,
      topImage:[],
      //将请求到详情页数据存到各个对象里，并且传入各个组件里
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendInfo:[],
      themeTopY:[],
      currentIndex:null,
      message:'',
      show:false
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
    DetailBottomBar,
    BackTop,
    Scroll,
    Toast
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
      //获取评论信息 判断是否有评论再保存数据
      if(resdata.rate.cRate !== 0){
        this.commentInfo = resdata.rate.list[0]
      }
      this.$nextTick(()=>{
        //获取navbar的offsetTop值，push到数组里
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.param.$el.offsetTop - 30)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop - 35)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 40)
        this.themeTopY.push(Number.MAX_VALUE)
      })

    })
    //请求推荐数据
    getRecommend().then(res=>{
      let resdata = res.data.data
      this.recommendInfo = resdata.list
    })

  },
  methods:{
    //将actions里的方法展开
    ...mapActions(['addCart']),
    //监听navbar点击 调用scroll里的滚动事件 参数y的值为themeTopY里的第index个值
    itemClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],1000)
    },
    //监听页面的滚动
    contentScroll(position){
      //获取y值  0 - 1 index : 0  1 - 2 index:1  2 - 3 index : 2  >3 index : 3
      const positionY = -position.y
      let length = this.themeTopY.length
      //positionY 和 主题数据里的值对比
      //打印i的条件:  第一个：i < 3 同时 y >= i < i+1 这个条件是打印 0 1 2
      //第二个: i === 3 同时  i >= 3 打印 3
      //条件 避免重复打印
      // for (let i = 0; i < length; i++) {
      //  if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1] )
      //    ||(i === length - 1 && positionY >= this.themeTopY[i]))){
      //    this.currentIndex = i
      //    //navbar里currentIndex 决定被选中的item 将滚动获取到的y 判断后得出的i赋值到navbar里
      //    this.$refs.nav.currentIndex = this.currentIndex
      //  }
      // }
      //方法二 : 在数组末尾添加一个值,这样就有五个值了, 循环时 i < length - 1 循环4次
      // 0 - 1 : 0   1 - 2: 1    2 -3 : 2    3 - 4 : 3
      for (let i = 0; i < length -1 ; i++) {
        if(this.currentIndex !== i &&
          (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
          this.currentIndex = i
          //navbar里currentIndex 决定被选中的item 将滚动获取到的y 判断后得出的i赋值到navbar里
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      //显示回到顶部
      this.isShowBackTop = -position.y > 1000
    },
    //添加购物车
    addToCart(){
      //获取信息
      const product = {}
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //添加到购物车
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res)
      // })
      this.addCart(product).then(res=>{
        this.show = true
        this.message = res

        setTimeout(()=>{
          this.show = false
          this.message = ''
        },2000)
        console.log(res);
      })
    }
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
.back-top {
  text-align: center;
}
.bottom-bar{
  width: 100%;
}
</style>
