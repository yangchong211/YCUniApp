import Vue from 'vue'
import App from './App'


// main.js是uni-app的入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如vuex。
// 可以配置全局变量
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

//挂载Vue实例
app.$mount()
