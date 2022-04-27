<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}:</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding: 10px 10px 20px;
}
.desc{
  font-size: 16px;
  font-weight: bold;

}
.info-key{
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 5px;
}
.info-list img{
  width: 100%;
  height: 300px;
}
</style>
