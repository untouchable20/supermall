<template>
  <div class="money">
    <div class="left">
      <p><span class="num">0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div class="center">
      <p><span class="num">0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div class="right">
      <p><span class="num">0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMoney"
}
</script>

<style scoped>
.money{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border-bottom: 10px solid #eeeeee;
  font-size: 15px;
  text-align: center;
}
.num{
  color: #8cbb19;
  font-size: 20px;
  font-weight: bold;
}
</style>
