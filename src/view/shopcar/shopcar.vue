<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center><div>购物车({{cartLength}})</div></template>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/view/shopcar/cartCpms/CartList";
import {mapGetters} from "vuex"

export default {
  name: "shopcarItem",
  components:{
    NavBar,
    CartList
  },
  computed:{
    //// 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters({length:'cartLength'})
    ...mapGetters(['cartLength' ])
  }
}
</script>

<style scoped>
.cart-nav {
  background-color: #8cbb19;
  color: #fff;
}
</style>
