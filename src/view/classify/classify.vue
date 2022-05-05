<template>
  <div class="category">
    <nav-bar class="nav">
      <template v-slot:center><div>商品分类</div></template>
    </nav-bar>
    <div class="main">
      <category-tab-bar  @navClick="navClick" class="tab-bar" :titles="CategoryTitles"></category-tab-bar>
      <category-info class="cinfo" :item-info="CategoryInfo"></category-info>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CategoryTabBar from "@/view/classify/childCpms/CategoryTabBar";
import CategoryInfo from "@/view/classify/childCpms/CategoryInfo";

import {getClassifyData,getSubCategory,getSubCategoryDetail} from "@/network/category";

export default {
  name: "classifyItem",
  data(){
    return{
      //侧边栏
      CategoryTitles:[],
      //各个侧边栏的信息
      CategoryInfo:[]
    }
  },
  components:{
    NavBar,
    CategoryTabBar,
    CategoryInfo
  },
  created() {
    this.getCategoryTitle()
    this.getCategoryInfo(3627)
    getSubCategoryDetail("50003",'pop').then(res=>{
      console.log(res)
    })
  },
  methods:{
    //侧边栏
    getCategoryTitle(){
      getClassifyData().then(res=>{
        let resdata = res.data.data
        this.CategoryTitles = resdata.category.list
      })
    },
    //每个侧边栏对应的信息
    getCategoryInfo(maitkey) {
      getSubCategory(maitkey).then(res => {
        let resdata = res.data.data
        this.CategoryInfo = resdata.list
      })
    },
    navClick(index){
      this.getCategoryInfo(this.CategoryTitles[index].maitKey)
    }
  }
}
</script>

<style scoped>
.category{
  position: relative;
  height: 100vh;
}
.main{
  height: calc(100% - 93px);
  overflow: hidden;
  display: flex;
}
.tab-bar{
  width: 25%;
}
.cinfo{
  width: 75%;
}
</style>
