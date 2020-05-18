<template>
	<view class="container">
		<!-- 视频播放 start -->
		<view class="player">
			<video 
				id="myTrailer"
				:src="trailerInfo.trailer" 
				:poster="trailerInfo.poster" 
				class="movie"
				controls>
			</video>
		</view>
		<!-- 视频播放 end -->
		
		<!-- 影片基本信息 start -->
		<view class="movie-info">
			<navigator :url="'../cover/cover?cover=' + trailerInfo.cover">
				<image 
					:src="trailerInfo.cover" 
					class="cover"></image>
			</navigator>
			
			<view class="movie-desc" v-if="true">
				<view class="title">{{trailerInfo.name}}</view>
				<view class="basic-info">{{trailerInfo.basicInfo}}</view>
				<view class="basic-info">{{trailerInfo.originalName}}</view>
				<view class="basic-info">{{trailerInfo.totalTime}}</view>
				<view class="basic-info">{{trailerInfo.releaseDate}}</view>
				
				<view class="score-block">
					<view>
						<view class="score-words">综合评分：</view>
						<view class="movie-score">{{trailerInfo.score}}</view>
					</view>
					<view>
						<block v-if="trailerInfo.score >= 0">
							<trailerStars :innerScore="trailerInfo.score" showNum="0"></trailerStars>
						</block>
						<view class="prise-counts">
							{{trailerInfo.prisedCounts}}  人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 剧情介绍 start -->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{trailerInfo.plotDesc}}</view>
		</view>
		<!-- 剧情介绍 end -->
		
		
		<!-- 演职人员 start -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x class="scroll-list">
				<view class="actor-wapper" v-for="(director,staffIndex) in directorArray">
					<image 
						:src="director.photo"
						class="single-actor"
						mode="aspectFill"
						@click="lookStaffs"
						:data-staffIndex="staffIndex">
					</image>
					<view class="actor-name">{{director.name}}</view>
					<view class="actor-role">{{director.actName}}</view>
				</view>
				
				<view class="actor-wapper" v-for="(actor,actorIndex) in actorArray">
					<image 
						:src="actor.photo"
						class="single-actor"
						mode="aspectFill"
						@click="lookStaffs"
						:data-staffIndex="actorIndex + directorArray.length"
					></image>
					<view class="actor-name">{{actor.name}}</view>
					<view class="actor-role">{{actor.actName}}</view>
				</view>
			</scroll-view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trailerInfo: {},
				// 剧照
				plotPicsArray: [],
				// 导演列表
				directorArray: [],
				// 演员列表
				actorArray: []
			};
		},
		methods:{
			
		},
		onLoad(params) {
			var me = this;
			// 获取上一个页面传入的参数
			// var trailerId = params.trailerId;
			var trailerId = "marvel-1002";
			console.log("onLoad-----:" + trailerId);
			// 通过api修改导航栏的属性
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#000000"
			});
			// 获取预告片的详细信息
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/search/trailer/' + trailerId  + '?qq=786041010',
				method: "POST",
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						var trailerInfo = res.data.data;
						me.trailerInfo = trailerInfo;
						// 把剧照的字符串转换为json array
						var plotPicsArray = JSON.parse(trailerInfo.plotPics);
						me.plotPicsArray = plotPicsArray;
						// debugger;
					}
				}
			});
			
			
			// 获取导演
			uni.request({
				url: serverUrl + '/search/staff/' + trailerId + '/1?qq=786041010',
				method: "POST",
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						me.directorArray = res.data.data;
						// debugger;
					}
				}
			});
		},
		onShow() {
			// 页面被再次显示的时候，可以继续播放
			if (this.videoContext) {
				this.videoContext.play();
			}
		},
		// 页面初次渲染完成，获得视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer');
		},
		onHide() {
			// 页面被隐藏的时候，暂停播放
			this.videoContext.pause();
		},
	}
</script>

<style>
	@import url("qq-movie.css");
</style>
