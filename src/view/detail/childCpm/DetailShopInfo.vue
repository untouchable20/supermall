<template>
  <div class="shop-info"  v-if="Object.keys(ShopInfo).length !== 0">
    <div class="shopBaseInfo">
      <img class="shop-logo" :src="ShopInfo.logo" alt="">
      <span class="shop-name">{{ShopInfo.name}}</span>
    </div>
    <div class="shop-data">
      <div class="shop-sell">
        <p class="count">{{ShopInfo.sells}}</p>
        <p class="text">总销量</p>
      </div>
      <div class="shop-goods">
        <p class="count">{{ShopInfo.goodsCount}}</p>
        <p class="text">全部宝贝</p>
      </div>
      <div class="shop-score">
        <table>
          <tr v-for="item in ShopInfo.score">
            <td>{{item.name}}</td>
            <td class="score" :style="item.isBetter&&{color:'red'}">{{item.score}}</td>
            <td class="cost-per" :style="item.isBetter&&{background:'#8cbb19'}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    ShopInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.shop-info{
  padding: 20px 0;
  border-bottom: 4px solid  rgba(100,100,100,.1);

}
.shopBaseInfo{
  padding: 0 20px;
}
.shopBaseInfo .shop-logo{
  width: 50px;
  height: 50px;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 10px ;
}
.shop-data{
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
 .count,.text{
  text-align: center;
  margin: 5px 0;
  font-weight: bold;
}

.shop-score table {
  text-align: center;
  font-size: 12px;
}

.shop-score table tr td {
  padding: 0 4px 0;
}
.shop-score table .score{
  color: green;
}
.shop-score table .cost-per{
  background-color: green;
  color: #fff;
}
.shop-bottom{
  text-align: center;
}
.shop-bottom p{
  height: 20px;
  width: 100px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 15px;
  background-color: #8cbb19;
  color: #fff;
  margin: 0 auto;
}
</style>
