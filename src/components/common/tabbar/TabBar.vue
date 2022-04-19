<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

.tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f1f1;
  box-shadow: 0 -3px 1px rgba(100,100,100,.15);
}

</style>
