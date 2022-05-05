<template>
  <div class="message">
    <div class="msg-item">
      <div class="img"><img src="@/assets/img/profile/mail.svg" alt=""></div>
      <div class="info"><p>我的消息</p></div>
    </div>
    <div class="msg-item">
      <div class="img"><img src="@/assets/img/profile/integral.svg" alt=""></div>
      <div class="info"><p>积分商城</p></div>
    </div>
    <div class="msg-item">
      <div class="img"><img src="@/assets/img/profile/vip.svg" alt=""></div>
      <div class="info"><p>会员卡</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMsg"
}
</script>

<style scoped>
.message{
  border-bottom: 10px solid #eee;
}
.message .msg-item:nth-child(2) .info{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.msg-item{
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  display: flex;
}
.msg-item .img{
  width: 15%;
  text-align: center;
}
.msg-item .img img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.msg-item .info{
  width: 85%;
  margin-left: 5px;
}
</style>
