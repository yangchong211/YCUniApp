<template>
	<view class="container">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImage" class="face"></image>
			</view>
			<view v-else>
				<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face"></image>
			</view>
			
			
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">用户名：{{userInfo.nickname}}</view>
				<view class="nav-info">ID：{{userInfo.id}}</view>
			</view>
			<view class="info-wapper" v-else>
				<navigator url="./qq-login">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>
			
			
			<view class="set-wapper">
				<navigator url="../mine/setting">
					<image src="../../static/icons/settings.png" class="settings"></image>	
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					//用户是否登陆
					userIsLogin: false,
					//用户信息
					userInfo: {}
				};
			},
			onShow() {
				var me = this;
				// 用户状态的切换
				// var userInfo = uni.getStorageSync("globalUser");
				// if (userInfo != null && userInfo != "" && userInfo != undefined) {
				// 	me.userIsLogin = true;
				// 	me.userInfo = userInfo;
				// } else {
				// 	me.userIsLogin = false;
				// 	me.userInfo = {};
				// }
				
				var userInfo = me.getGlobalUser("globalUser");
				if (userInfo != null) {
					me.userIsLogin = true;
					me.userInfo = userInfo;
				} else {
					me.userIsLogin = false;
					me.userInfo = {};
				}
			}
		}
</script>

<style>
	@import url("qq-me.css");
</style>
