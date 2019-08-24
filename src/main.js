import Vue from 'vue'
import App from './App.vue'
// 路由：1. cnpm install vue-router --save 
import VueRouter from 'vue-router'
// 引入axios模块
import axios from 'axios'
import routerlist from './router'



Vue.config.productionTip = false

//2.使用VueRouter
Vue.use(VueRouter);

//3.实例化VueRouter
const router = new VueRouter({
  mode: "history",
  routes: routerlist

})

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"

//配置vue原型  (在任何组件中都可以使用全局的axios请求)
Vue.prototype.$axios = axios;


// 封装自定义全局指令 (无参数 )   显示在ShowBlogs.vue里
// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
// 封装自定义全局指令 (有参数)
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    // 对冒号后的部分进行定义
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = '20px';
    }
  }
})
//自定义全局过滤器（标题字母大写）
// Vue.filter("to-uppercase", value => {
//   return value.toUpperCase();
// })
//自定义全局过滤器（博客内容:只显示100个字符剩下的显示...）
Vue.filter("snippet", value => {
  return value.slice(0, 100) + "...";
})


new Vue({
  // 4.挂载 
  router,
  //5.在app.vue 中写 <router-view></router-view>
  render: h => h(App)
}).$mount('#app')
