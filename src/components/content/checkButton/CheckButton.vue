<template>
  <div class="check-button" :class="{check:isCheck}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isCheck:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: relative;
}
.check-button img{
  width: 15px;
  height: 15px;
  position: absolute;
}
.check{
  border-color:#8cbb19;
  background-color: #8cbb19;
}
</style>
