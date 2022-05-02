<template>
  <div class="cart-list">
    <scroll class="cart-list-scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "@/view/shopcar/cartCpms/CartListItem";

import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from "vuex";

export default {
  name: "CartList",
  components:{
    CartListItem,
    Scroll
  },
  methods: {},
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
.cart-list{
  position: relative;
  height: 100vh;
}
.cart-list-scroll{
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>
