<template>
<<<<<<< HEAD
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
=======
<div class="nar-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
<<<<<<< HEAD
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100.100,100,.1);
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
}
=======
 .nar-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    background-color: #8CBB19;
    color: #fff;
  }
  .left, .right {
    width: 40px;
  }
  .center {
    flex: 1;
  }
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
</style>
