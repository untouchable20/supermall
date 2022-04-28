<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :class="{active:index === currentSelect}"
         class="tab-control-item"
         @click="currentClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentSelect:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    //通过传入的index赋值给currentSelect
    // 然后动态绑定class active 条件: index===currentSelect
    currentClick(index){
      this.currentSelect = index
      //提交事件，并把当前index的值作为值传到父组件
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: #8cbb19;
}
.active span{
  border-bottom: 2px solid #8cbb19;
}
</style>
