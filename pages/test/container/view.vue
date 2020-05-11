<template>
	<view class="container">
		<view>
			<view class="title">
				flex-direction: row
				<text>\n横向布局</text>
			</view>
			<view class="uni-flex-row">
				<view class="flex-item uni-bg-red">A</view>
				<view class="flex-item uni-bg-green">B</view>
				<view class="flex-item uni-bg-blue">C</view>
			</view>
			
			
			<view class="title">
				flex-direction: column
				<text>\n纵向布局</text>
			</view>
			<view class="uni-flex-column">
				<view class="flex-item flex-item-V uni-bg-red">A</view>
				<view class="flex-item flex-item-V uni-bg-green">B</view>
				<view class="flex-item flex-item-V uni-bg-blue">C</view>
			</view>
			
			<view class="title">
				
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {};
	}
};
</script>

<style>
	page{
		background-color: #f8f8f8;
	}
	.container{
		padding-left: 30upx;
		padding-right: 30upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
		background-color: #FFFFFF;
	}
	.title{
		margin-top: 30upx;
		font-size: 40rpx;
	}
</style>
