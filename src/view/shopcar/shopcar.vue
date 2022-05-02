<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center><div>购物车({{cartLength}})</div></template>
    </nav-bar> 
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//导入组件
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/view/shopcar/cartCpms/CartList";
<<<<<<< HEAD
import CartBottomBar from "@/view/shopcar/cartCpms/CartBottomBar";
=======

import Scroll from "@/components/common/scroll/Scroll";
>>>>>>> 09d0336db2d1e9e1d9bacd50174cd5dfaf47704b
import {mapGetters} from "vuex"


export default {
  name: "shopcarItem",
  components:{
    NavBar,
<<<<<<< HEAD
    CartBottomBar,
=======
    CartList,
    Scroll,
>>>>>>> 09d0336db2d1e9e1d9bacd50174cd5dfaf47704b
    CartList
  },
  computed:{
    //// 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters({length:'cartLength'})
    ...mapGetters(['cartLength' ])
  },
}
</script>

<style scoped>
.cart{}
.cart-nav {
  background-color: #8cbb19;
  color: #fff;

}

</style>
