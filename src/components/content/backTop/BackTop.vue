<template>
  <div class="back-top" >
    <img src="@/assets/img/common/backToparrow.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods:{

  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: 60px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50%;

}
.back-top img{
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
</style>
