<template>
  <div id="detail">
    <nav-bar class="detail-navbar">
      <template v-slot:left >
        <div class="backArrow" @click="backClick">
          <img  src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center >
        <div class="title">
          <div class="titleItem"
               :class="{active:index === currentIndex}"
               v-for="(item,index) in titles"
               @click="itemClick(index)" :key="item">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-navbar{
  color: #333333;
}
.title{
  display: flex;
}
.titleItem{
  flex: 1;
  font-size: 13px;
}
.active{
  color: #8cbb19;
}
.backArrow img {
  vertical-align: middle;
}
</style>
