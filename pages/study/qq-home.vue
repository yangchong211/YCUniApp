<!-- 视图，相当于view -->
<template>
	<view class="page">
		<!-- 轮播图 -->
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<!-- 轮播图item数据 -->
			<swiper-item v-for="carousel in carouselList">
				<!-- navigator相当于指示器 -->
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + carousel.movieId">
					<image :src="carousel.image" class="carousel"></image>
				</navigator>
				<!-- <image :src="carousel.image" class="carousel"></image> -->
			</swiper-item>
		</swiper>
		
		
		<!-- 热门超英 -->
		<view class="super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/hot.png" class="hot-ico"></image>
				<view class="hot-title">
					热门超英
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="scroll-hot">
			<view class="single-poster" v-for="superhero in hotSuperheroList">
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + superhero.id">
					<image :src="superhero.cover" class="poster"></image>
				</navigator>
				<view class="movie-name">
					{{superhero.name}}
				</view>
			</view>
		</scroll-view>
		
		<!-- 热门预告 -->
		<view class="super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/interest.png" class="hot-ico"></image>
				<view class="hot-title">
					热门预告
				</view>
			</view>
		</view>
		<view class="hot-movies">
			<video
				:id="trailer.id"
				:data-playingindex="trailer.id"
				@play="meIsPlaying"
				v-for="trailer in hotTrailerList" 
				:src="trailer.trailer" 
				:poster="trailer.poster" 
				class="hot-movie-single"
				 controls></video>
		</view>
		
		
		<!-- 猜你喜欢 -->
		<view class="super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-title">
					猜你喜欢
				</view>
			</view>
		</view>
		<view class="guess-u-like">
			<view class="single-like-movie" v-for="(guess,gIndex) in guessULikeList">
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + guess.id">
					<image :src="guess.cover" class="like-movie"></image>
				</navigator>
				
				
				<view class="movie-desc">
					<view class="movie-title">
						{{guess.name}}
					</view>
					<view class="movie-info">
						{{guess.basicInfo}}
					</view>
					<view class="movie-info">
						{{guess.releaseDate}}
					</view>
				</view>
				
				
				<view class="movie-oper" :data-gIndex="gIndex" @click="praiseMe">
					<image src="../../static/icons/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						点赞
					</view>
					<view :animation="animationDataArr[gIndex]" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<!-- 写的是所有js代码 -->
<script>
	export default {
		// 相当于model，data
		data() {
			return {
				title:"yangchong",
				// 轮播图集合数据
				carouselList: [],
				// 热门超英
				hotSuperheroList:[],
				// 热门预告
				hotTrailerList:[],
				// 猜你喜欢
				guessULikeList:[],
				
				//动画
				animationData: {},
				animationDataArr: [
					{}, {}, {}, {}, {}
				]
			};
		},
		methods:{
			// 实现点赞动画效果
			praiseMe(e) {
				// #ifdef APP-PLUS || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex;
				console.log(gIndex);
				// return;
				// 构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				
				// 导出动画数据到view组件，实现组件的动画效果
				// this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[gIndex] = this.animationData.export();
			
				// 还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation;
					this.animationDataArr[gIndex] = this.animationData.export();
				}.bind(this), 500)
				// #endif
			},
			//下拉刷新操作
			refresh() {
				// 查询猜你喜欢数据列表
				var me = this;
				uni.showLoading({
					mask: true
				});
				uni.showNavigationBarLoading();
				var serverUrl = me.serverUrl;
				// 查询猜你喜欢数据列表
				uni.request({
					url: serverUrl + '/index/guessULike?qq=786041010',
					method: "POST",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.status == 200) {
							console.log('vue onLoad 查询猜你喜欢' + res.data);
							var guessULikeList = res.data.data;
							me.guessULikeList = guessULikeList;
						}
					},
					complete: () => {
						uni.hideNavigationBarLoading();
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			}
		},
		//下拉刷新操作
		onPullDownRefresh() {
			this.refresh();
		},
		//页面卸载时候调用
		onUnload() {
			// 页面卸载的时候，清除动画数据
			this.animationData = {};
			this.animationDataArr = [
				{}, {}, {}, {}, {}
			];
		},
		//如果有网络请求，可以在onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			console.log('vue onLoad');
			// #ifdef APP-PLUS || MP-WEIXIN
			// 在页面创建的时候，创建一个临时动画对象
			this.animation = uni.createAnimation();
			// #endif
			
			var me = this;
			// 获取common.js中的服务器地址
			// var serverUrl = common.serverUrl;
			// 通过挂载到main.js中获取服务器的地址，作为全局变量
			var serverUrl = me.serverUrl;
			
			// 请求轮播图数据
			uni.request({
				url: serverUrl + '/index/carousel/list?qq=786041010',
				method: "POST",
				success: (res) => {
					console.log('vue onLoad 请求轮播图数据' + res.data);
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						var carouselList = res.data.data;
						me.carouselList = carouselList;
					}
				}
			});
			
			// 查询热门超英
			uni.request({
				url: serverUrl + '/index/movie/hot?type=superhero&qq=786041010',
				method: "POST",
				success: (res) => {
					// console.log(res.data);
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						console.log('vue onLoad 查询热门超英' + res.data);
						var hotSuperheroList = res.data.data;
						me.hotSuperheroList = hotSuperheroList;
					}
				}
			});
			
			
			// 查询热门预告
			uni.request({
				url: serverUrl + '/index/movie/hot?type=trailer&qq=786041010',
				method: "POST",
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						console.log('vue onLoad 查询热门预告' + res.data);
						var hotTrailerList = res.data.data;
						me.hotTrailerList = hotTrailerList;
					}
				}
			});
			
			me.refresh();
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
	@import url("qq-home.css");
</style>
