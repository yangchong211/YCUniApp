import Vue from 'vue'
import App from './App'


// main.js是uni-app的入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如vuex。
// 可以配置全局变量
Vue.config.productionTip = false



//这部分是学习教程案例start

Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero";			// 生产环境
// Vue.prototype.serverUrl = "https://www.imovietrailer-dev.com/superhero";		// 开发环境

Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

//这部分是学习教程案例end


App.mpType = 'app'

const app = new Vue({
    ...App
})

//挂载Vue实例
app.$mount()
