<template>
  <div class="message">
    <profile-list>
      <profile-item>
        <template v-slot:profile-icon><img src="@/assets/img/profile/mail.svg" alt=""></template>
        <template v-slot:profile-text><p>我的消息</p></template>
      </profile-item>
      <profile-item>
        <template v-slot:profile-icon><img src="@/assets/img/profile/integral.svg" alt=""></template>
        <template v-slot:profile-text><p>积分商城</p></template>
      </profile-item>
      <profile-item>
        <template v-slot:profile-icon><img src="@/assets/img/profile/vip.svg" alt=""></template>
        <template v-slot:profile-text><p>会员卡</p></template>
      </profile-item>
    </profile-list>
  </div>
</template>

<script>
import ProfileList from "@/components/content/profileList/ProfileList";
import ProfileItem from "@/components/content/profileList/ProfileItem";
export default {
  name: "ProfileMsg",
  components:{
    ProfileItem,
    ProfileList
  }
}
</script>

<style scoped>
.message{
  border-bottom: 10px solid #eee;
}
img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

</style>
