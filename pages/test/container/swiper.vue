<template>
	<view class="uni-flex-column" style="margin: 30upx;">
		<view>swiper,可滑动视图</view>
		<view class="uni-comment-top">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			};
		}
	};
</script>

<style>
	.swiper{
		height: 300upx;
	}
	.swiper-item{
		height: 300upx;
		display: block;
	}
</style>
