<template>
  <div class="cart-list">
    <scroll class="cart-list-scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
      <div class="cart-list-item" v-for="item in cartList" :key="item">
        <div class="select">
          <label for="select">
          <input type="checkbox" name="select" id="">
          </label>
        </div>
        <div class="cart-goods-show">
          <div class="goods-img">
            <img :src="item.image" alt="">
          </div>
          <div class="goods-info">
            <p class="goods-title">{{item.title}}</p>
            <p class="goods-desc">{{item.desc}}</p>
            <p class="goods-total">
              <span class="goods-price">￥{{item.price}}</span>
              <span class="goods-count">x{{item.count}}</span>
            </p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "@/view/shopcar/cartCpms/CartListItem";

import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from "vuex";

export default {
  name: "CartList",
  components:{
    CartListItem,
    Scroll
  },
  methods: {},
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
.cart-list{
  position: relative;
  height: 100vh;
<<<<<<< HEAD
=======
}
.cart-list-scroll{
  height: calc(100% - 93px);
  overflow: hidden;
}
.cart-list-item{
  display: flex;
  height: 120px;
  background-color:#fff;
  padding: 10px;
  border-bottom:rgba(100, 100, 100, .1) 3px solid;
}
.select {
  line-height: 97px;
}
.cart-goods-show{
  width: 100%;
  overflow: hidden;
}
.goods-img{
  float: left;
  width: 25%;
  padding-left: 5px;
}
.goods-img img{
  width: 100%;
  height: 90px;
  border-radius: 5px;
}
.goods-info{
  float: right;
  width: 75%;
  padding: 0 10px 0 5px;
}
.goods-info > .goods-title,.goods-desc{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.goods-info .goods-title{
  width: 100%;
  color: #333;
  font-size: 15px;

}
.goods-info .goods-desc{
  width: 100%;
  color: gray;
  font-size: 12px;
  margin: 20px 0 20px 0;
}
.goods-total{
  overflow: hidden;
}
.goods-total .goods-price{
  float: left;
  color: orange;
}
.goods-total .goods-count{
  float: right;
>>>>>>> 09d0336db2d1e9e1d9bacd50174cd5dfaf47704b
}
.cart-list-scroll{
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>
