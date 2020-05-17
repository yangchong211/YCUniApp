<!-- 视图，相当于view -->
<template>
	<view class="page">
		<!-- 轮播图 -->
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
		
			<swiper-item>
				<image :src="" class="carousel"></image>
			</swiper-item>
		
		</swiper>
		
		
		
	</view>
</template>

<!-- 写的是所有js代码 -->
<script>
	export default {
		// 相当于model，data
		data() {
			return {
				title:"yangchong",
			};
		},
		methods:{
			change(e){
				var title = e.detail.value;
				
			}
		},
		//如果有网络请求，可以在onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			console.log('vue onLoad');
		},
		//每个页面的onShow，页面已经加载出
		onShow() {
			console.log('vue onShow');
		},
		//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {
			console.log('vue onReady');
		},
		//监听页面隐藏
		onHide() {
			console.log('vue onHide');
		},
		//监听页面返回
		onBackPress() {
			console.log('vue onBackPress');
		}
	};
</script>


<!-- 主要是指css的样式 -->
<style>
	
</style>
