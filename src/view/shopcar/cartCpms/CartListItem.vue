<template>
      <div class="cart-list-item" >
        <div class="selector">
          <check-button  @click.native="checkClick" :is-check="itemInfo.checked"></check-button>
        </div>
        <div class="cart-goods-show">
          <div class="goods-img">
            <img :src="itemInfo.image" alt="">
          </div>
          <div class="goods-info">
            <p class="goods-title">{{itemInfo.title}}</p>
            <p class="goods-desc">{{itemInfo.desc}}</p>
            <p class="goods-total">
              <span class="goods-price">￥{{itemInfo.price}}</span>
              <span class="goods-count">x{{itemInfo.count}}</span>
            </p>
          </div>
        </div>
      </div>
</template>
<script>

import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components:{
    CheckButton,
  },
  methods:{
    checkClick(){
      //取反
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }

}
</script>

<style scoped>
.cart-list-item{
  display: flex;
  height: 120px;
  background-color:#fff;
  padding: 10px;
  border-bottom:rgba(100, 100, 100, .1) 3px solid;
}
.selector {
  display: flex;
  justify-content: center;
  align-items: center;
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
}
</style>
