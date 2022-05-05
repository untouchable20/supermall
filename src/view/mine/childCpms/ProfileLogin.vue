<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/img/profile/profile.svg" alt="">
    </div>
    <div class="center">
      <div>登录/注册</div>
      <div>
        <img class="phone" src="@/assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/img/profile/arrow-right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin"
}
</script>

<style scoped>
.login{
  display: flex;
  justify-content: space-around;
  height: 80px;
  background-color: #8cbb19;
  color: #fff;
  align-items: center;
  font-size: 15px;
}
.left{
  width: 25%;
  text-align: center;
}
.left img{
  width: 60px;
  height: 60px;
}
.center{
  width: 50%;
}
.center div{
  margin-bottom: 10px;
}
.center .phone{
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.right{
  width: 25%;
  text-align: center;
}
.right img{
  width: 20px;
  height: 20px;
}
</style>
