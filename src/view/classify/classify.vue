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

    // getSubCategoryDetail("50003",'pop').then(res=>{
    //   console.log(res)
    // })
  },
  methods:{
    //侧边栏
    async getCategoryTitle(){
      // getClassifyData().then(res=>{
      //   let resdata = res.data.data
      //   this.CategoryTitles = resdata.category.list
      //   //在保存数据后 发送请求 请求第一个侧边栏的信息
      //   this.$nextTick(()=>{
      //     this.getCategoryInfo(this.CategoryTitles[0].maitKey)
      //   })
      // })
      const {data : res} = await getClassifyData()
      this.CategoryTitles = res.data.category.list;
      // console.log(res)
      await this.$nextTick(()=>{
        this.getCategoryInfo(this.CategoryTitles[0].maitKey)
      })
    },
    //根据每个侧边栏对应的key渲染不同的内容
    async getCategoryInfo(maitkey) {
      // getSubCategory(maitkey).then(res => {
      //   let resdata = res.data.data
      //   this.CategoryInfo = resdata.list
      //   console.log(res)
      // })
      const {data:res} = await getSubCategory(maitkey);
      // console.log(res)
      this.CategoryInfo = res.data.list;
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
