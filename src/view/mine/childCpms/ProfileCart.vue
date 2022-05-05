<template>
  <div class="profileCart">
    <profile-list>
      <profile-item>
        <template v-slot:profile-icon><img src="@/assets/img/profile/cart.svg" alt=""></template>
        <template v-slot:profile-text><p>我的购物车</p></template>
      </profile-item>
      <profile-item>
        <template v-slot:profile-icon><img src="@/assets/img/profile/bag.svg" alt=""></template>
        <template v-slot:profile-text><p>下载购物APP</p></template>
      </profile-item>
    </profile-list>
  </div>
</template>

<script>
import ProfileList from "@/components/content/profileList/ProfileList";
import ProfileItem from "@/components/content/profileList/ProfileItem";
export default {
  name: "ProfileCart",
  components:{
    ProfileList,
    ProfileItem
  }
}
</script>

<style scoped>
img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

</style>
