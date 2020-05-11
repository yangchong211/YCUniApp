<template>
	<view class="uni-flex-column">
		<page-head title="scroll-view,区域滚动视图"></page-head>
		<view class="uni-title uni-flex-column">
			<text>Vertical Scroll</text>
			<text>纵向滚动</text>
		</view>
		<view> 
			<scroll-view class="scroll-Y" scroll-top="scrollTop" scroll-y="true" 
						@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
				<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
				<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
			</scroll-view>
		</view>
		<view @tap="goTop" class="uni-link uni-center uni-common-mt">
			点击这里返回顶部
		</view>
		<view>
			<scroll-view class="scroll-Y" scroll-top="scrollTop" scroll-x="true"
						@scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
	            
	        }
	    },
	    methods: {
	        
	    },
	}
</script>

<style>
	.scroll-Y {
		height: 300rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
</style>
