<template>
  <div class="profile-cart">
    <div class="profile-cart-item">
      <div class="img"><img src="@/assets/img/profile/cart.svg" alt=""></div>
      <div class="info">我的购物车</div>
    </div>
    <div class="profile-cart-item">
      <div class="img"><img src="@/assets/img/profile/bag.svg" alt=""></div>
      <div class="info">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCart"
}
</script>

<style scoped>
.profile-cart{}
.profile-cart-item{
  height: 40px;
}
.profile-cart .profile-cart-item:first-child .info{
  border-bottom: 1px solid #ccc;
}
.profile-cart-item{
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  display: flex;
}
.profile-cart-item .img{
  width: 15%;
  text-align: center;
}
.profile-cart-item .img img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.profile-cart-item .info{
  width: 85%;
  margin-left: 5px;
}
</style>
