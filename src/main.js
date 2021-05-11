import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js' //@=src的绝对路径

//引入axios模块
import axios from './axios'
axios.defaults.baseURL=" http://115.159.160.93:8080";

Vue.prototype.axios=axios;

Vue.config.productionTip = false
//引入全局组件
import MyHeader from "@/components/MyHeader.vue"
Vue.component("my-header",MyHeader);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
