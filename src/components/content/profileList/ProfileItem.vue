<template>
  <div class="profile-item">
    <div class="img"><slot name="profile-icon"></slot></div>
    <div class="info"><slot name="profile-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "ProfileItem"
}
</script>

<style scoped>

.profile-item{
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  display: flex;
}

.profile-item .img{
  width: 15%;
  text-align: center;
}
.profile-item .img img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.profile-item .info{
  width: 85%;
  margin-left: 5px;
  border-bottom: 1px solid #ccc;
}
.profile-item:last-child .info{
  border-bottom: none;
}
</style>
