<template>
	<view class="container">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icons/search.png" class="search-ico"></image>
			</view>
			
			<input
				placeholder="搜索预告" 
				maxlength="10" 
				class="search-text" 
				confirm-type="search"
				@confirm="searchMe"
			/>
		</view>
		
		<view class="movie-list">
			
			<view class="movie-wapper" v-for="trailer in trailerList">
				<image 
					:src="trailer.cover" 
					:data-trailerId="trailer.id"
					@click="showTrailer"
					class="poster"></image>
			</view>
			
			<!-- <view class="movie-wapper">
				<image src="http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.jpg" class="poster"></image>
			</view> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trailerList: [],
				// 搜索的关键字
				keywords: "",			
				// 当前第几页
				page: 1,
				// 总页数
				totalPages: 1
			};
		},
		methods:{
			showTrailer(){
				var trailerId = e.currentTarget.dataset.trailerid;
				// 页面跳转接口api
				uni.navigateTo({
					url: "../movie/movie?trailerId=" + trailerId
				})
			},
			//调用搜索数据接口
			pagedTrailerList(keywords, page, pageSize) {
				var me = this;
				uni.showLoading({
					mask: true,
					title: "请稍后..."
				});
				uni.showNavigationBarLoading();
				var serverUrl = me.serverUrl;
				// 查询猜你喜欢数据列表
				uni.request({
					url: serverUrl + '/search/list?keywords=' + keywords
															+ '&page=' + page
															+ '&pageSize=' + pageSize
															+ '&qq=786041010',
					method: "POST",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.status == 200) {
							// debugger;
							var tempList = res.data.data.rows;
							me.trailerList = me.trailerList.concat(tempList);
							// 获取总页数
							me.totalPages = res.data.data.total;	
							// 覆盖当前页面里的page
							me.page = page;		
						}
					},
					complete: () => {
						//隐藏loading
						uni.hideNavigationBarLoading();
						uni.hideLoading();
					}
				});
			},
			//开始搜索，输入框中搜索
			searchMe(e) {
				var me = this;
				// 获取搜索的内容
				var value = e.detail.value;
				me.keywords = value;
				me.trailerList = [];
				me.pagedTrailerList(value, 1, 15);
			}
		},
		onLoad() {
			var me = this;
			uni.showLoading({
				mask: true,
				title: "请稍后..."
			});
			uni.showNavigationBarLoading();
			var serverUrl = me.serverUrl;
			// 查询猜你喜欢数据列表
			uni.request({
				url: serverUrl + '/search/list?keywords=&page=&pageSize=&qq=786041010',
				method: "POST",
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						// debugger;
						var trailerList = res.data.data.rows;
						me.trailerList = trailerList;
					}
				},
				complete: () => {
					uni.hideNavigationBarLoading();
					uni.hideLoading();
				}
			});
		},
		//触发上拉加载更多
		onReachBottom() {
			var me = this;
			// 查询下一页面，当前页数累加1
			var page = me.page + 1;			
			// 获得当前页面中data里的搜索值
			var keywords = me.keywords;		
			// 获取总页数
			var totalPages = me.totalPages;	
			// 如果当前需要分页的分页数和总页数相等，就不分页
			if (page > totalPages) {
				return;
			}
			me.pagedTrailerList(keywords, page, 15);
		}
	}
</script>

<style>
	@import url("qq-search.css"); 
</style>
