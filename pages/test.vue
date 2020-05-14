<!-- 视图，相当于view -->
<template>
	<view class="uni-flex-column">
		
		
	</view>
</template>

<!-- 写的是所有js代码 -->
<script>
	export default {
		// 相当于model，data
		data() {
			return {
				
			};
		},
		//如果有网络请求，可以在onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			console.log('vue onLoad');
		},
		onLoad() {
			console.log("页面加载")
		},
		onUnload() {
			console.log("页面关闭")
		},
		onReady() {
			console.log("页面初次渲染完成")
		},
		onShow() {
			console.log('页面show')
		},
		onHide() {
			console.log('页面Hide')
		},
		onShareAppMessage() {
			console.log('分享')
		},
		onPageScroll() {
			console.log('页面滚动')
		},
		onBackPress() {
			console.log('页面返回')
		}
	};
</script>


<!-- 主要是指css的样式 -->
<style>
	
</style>
