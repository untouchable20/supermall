<template>
  <div class="category-info">
    <scroll class="cinfo-scroll">
      <div class="main">
        <div class="info-item" v-for="item in itemInfo">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
          <p>{{item.title}}</p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryInfo",
  components:{
    Scroll
  },
  props:{
    itemInfo:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.category-info{
  height: 100vh;
}
.cinfo-scroll{
  height:calc(100% - 93px);
  overflow: hidden;
}
.main{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  text-align: center;
}
.info-item{
  width: 48%;
}
.info-item img{
  width: 80px;
  height: 80px;
  margin: 5px 0;
}
.info-item p{
  font-size: 14px;
}
li{
  list-style: none;
}
</style>
