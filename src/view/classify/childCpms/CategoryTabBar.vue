<template>
  <div class="cate-gory-tab-bar">
    <scroll class="scroll">
      <ul >
        <li v-for="(item,index) in titles" :key="index"
            @click="itemClick(index)" :class="{active:index === isActive}">{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";


export default {
  name: "CategoryTabBar",
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Scroll
  },
  data(){
    return{
      isActive:0
    }
  },
  methods:{
    itemClick(index){
      this.isActive = index
      this.$emit('navClick',index)
    }
  }
}
</script>

<style scoped>
.cate-gory-tab-bar{
  position: relative;
  height: 100vh;
  font-size: 14px;
  color: #333;
  background-color:rgba(0,0,0,.075);
  text-align: center;
}
.scroll{
  height:calc(100% - 93px);
  overflow: hidden;
}
.cate-gory-tab-bar ul li{
  list-style: none;
  height: 40px;
  line-height: 40px;
}
.active{
  font-weight: bold;
  color: #8cbb19;
  background-color: #fff;
  border-left: 3px solid #8cbb19;
}
</style>
