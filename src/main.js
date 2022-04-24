import { createApp } from 'vue'
import App from './App.vue'

//导入路由
import router from "@/router/index";



//vue3 .use 在前面

createApp(App).use(router).mount('#app')

