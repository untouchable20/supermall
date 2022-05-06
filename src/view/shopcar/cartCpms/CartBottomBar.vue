<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-check="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from "vuex";

export default {
  name: "CartBottomBar",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    //计算总价
    totalPrice(){
      return '￥' + this.cartList.filter(item => item.checked).
      reduce((preValue,item)=>{
         return preValue + item.price * item.count
      },0).toFixed(2)
    },
    //计算选中的长度
    checkLength(){
      //返回列表里选中的个数
      return this.cartList.filter(item => item.checked).length
    },
    //是否全选
    isSelectAll(){
     // return  !(this.cartList.filter(item => !item.checked).length)
      if(this.cartList.length === 0) return false
      //false 为不选中  find找到其中一个的状态没被选中就返回true 在取反
     return  !this.cartList.find(item => !item.checked)
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        //全选中时 全部为false
        this.cartList.forEach(item => item.checked = false)
      }else{
        //没选中时 全部为true
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #eee;
  position: fixed;
  bottom: 44px;
  line-height: 40px;
  font-size: 15px;
}
.check-content{
  display: flex;
  align-items: center;
  width: 80px;
}
.check-button{
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.price{
  flex:1;
  margin-left: 30px;
}
.calculate{
  width: 80px;
  color: #fff;
  text-align: center;
  background-color: #8cbb19;
}
</style>
