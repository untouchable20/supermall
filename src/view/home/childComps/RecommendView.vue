<template>
<<<<<<< HEAD
<!--  接受传入的数组 遍历展示-->
=======
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default{
  name:'RecommendView',
  //从home传入
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size:12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
=======
  export default{
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size:12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex:1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
</style>
