<template>
  <div class="profile">
    <nav-bar>
      <template v-slot:center><div>我的档案</div></template>
    </nav-bar>
    <profile-login></profile-login>
    <profile-money></profile-money>
    <profile-msg></profile-msg>
    <profile-cart></profile-cart>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ProfileLogin from "@/view/mine/childCpms/ProfileLogin";
import ProfileMoney from "@/view/mine/childCpms/ProfileMoney";
import ProfileMsg from "@/view/mine/childCpms/ProfileMsg";
import ProfileCart from "@/view/mine/childCpms/ProfileCart";
export default {
  name: "mineProfile",
  components:{
    NavBar,
    ProfileLogin,
    ProfileMoney,
    ProfileMsg,
    ProfileCart
  }
}
</script>

<style scoped>

</style>
