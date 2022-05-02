import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export  default {
  addCart(context,payload){
  //payload新添加的商品
  //判读新加入的是否重复 返回 true
  let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
  //判断oldProduct
  if(oldProduct){
    context.commit(ADD_COUNTER,oldProduct)
  }else{
    payload.count = 1
    context.commit(ADD_TO_CART,payload)
  }
}
}
