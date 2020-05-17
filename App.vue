<!-- App.vue是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件 -->
<!-- 这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData -->
<!-- 应用生命周期仅可在App.vue中监听，在页面监听无效 -->
<script>
export default {
	// 当uni-app 初始化完成时触发（全局只触发一次）
	onLaunch: function() {
		console.log('App Launch');
	},
	// 当 uni-app 启动，或从后台进入前台显示
	onShow: function() {
		console.log('App Show');
	},
	// 当 uni-app 从前台进入后台
	onHide: function() {
		console.log('App Hide');
	},
	// 当 uni-app 报错时触发
	onError: function() {
		console.log('App Error');
	},
	// 对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
	onUniNViewMessage: function() {
		console.log('App NViewMessage');
	},
	// 小程序有globalData，这是一种简单的全局变量机制。这套机制在uni-app里也可以使用，并且全端通用。
	// js中操作globalData的方式如下： getApp().globalData.text = 'test'
	// 在应用onLaunch时，getApp对象还未获取，暂时可以使用this.$scope.globalData获取globalData。
	// 如果需要把globalData的数据绑定到页面上，可在页面的onShow页面生命周期里进行变量重赋值。
	globalData: {
		text: 'text'
	}
};
</script>

<!-- 全局样式 -->
<!-- 在App.vue中，可以一些定义全局通用样式，例如需要加一个通用的背景色，首屏页面渲染的动画等都可以写在App.vue中。 -->
<style>
/*每个页面公共css */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */

</style>
