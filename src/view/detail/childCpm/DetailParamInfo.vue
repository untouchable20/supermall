<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
<!--    遍历二维数组， 第一层:4||n  第二层:5||n   tr遍历的是第一层  td遍历第二层-->
    <table class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: solid 4px rgba(0, 0, 0, 0.1);
}
.param-info table{
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr{
  height: 42px;
}
.param-info table tr td {
  border-bottom: solid 1px rgba(100,100,100,.3);
}
.info-param-key{
  width: 95px
}
.info-param{
  border-top: 1px solid rgba(0,0,0,.5);
}
.info-value{
  color: #eb4868;
}
.info-img{
  width: 100%;
}

.info-img img{
  width: 100%;

}
</style>
