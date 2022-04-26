<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span class="discount" v-if="baseInfo.discount">{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns && baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns && baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services && baseInfo.services[baseInfo.services.length - 1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="item in baseInfo.services.length - 1" :key="item">
        <img :src="baseInfo.services[item-1].icon" alt="">
        <span>{{baseInfo.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    baseInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  created() {

  }
}
</script>

<style scoped>
.base-info{
  width: 100%;
  padding: 10px 10px 20px;
  border-bottom: solid 4px rgba(100,100,100,.1);
}
.info-title{
  font-size: 16px;
  font-weight: bold;

}
.info-price{
  margin-top: 8px;
}
.info-price .n-price{
  color: #8cbb19;
  font-size: 20px;
  margin-right: 8px;
}
.info-price .o-price {
  color: #8cbb19;
  text-decoration: line-through;
  font-size: 15px;
  margin-right: 4px;
}
.info-price .discount {
  background: #8cbb19;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  position: relative;
  top: -2px;
  padding: 5px;
}
.info-other {
  margin-top: 12px;
  font-size: 14px;
  display: flex;

  padding-bottom: 4px;
  justify-content: space-between;
  border-bottom: solid 2px rgba(100, 100, 100, .3);
}
.info-services {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.info-services img {
  width: 12px;
  height: 12px;
}
</style>
