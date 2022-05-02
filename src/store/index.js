import {createApp} from "vue";
import {createStore} from "vuex";
import App from '../App'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
const state = {
  cartList:[]
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

createApp({App}).use(store)

export default store
