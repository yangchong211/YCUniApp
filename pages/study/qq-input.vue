<template>
	<view class="container">
		<form @submit="formSubmitInput">
			<view class="input-page">
				<view class="page-block">
					<input
						type="text"
						name="nickname"
						:value="globalUser.nickname" 
						class="input-content"
						placeholder="请输入昵称"
						placeholder-class="graywords"
						maxlength="10"/>
				</view>
				
				<button type="primary" form-type="submit" class="submitBtn">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//用户信息
				globalUser: {},
			};
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
		},
		methods: {
			formSubmitNickname(e) {
				var me = this;
				var nickname = e.detail.value.nickname;
				
				uni.request({
					url: me.serverUrl + "/user/modifyUserinfo?qq=786041010",
					data: {
						"userId": me.globalUser.id,
						"nickname": nickname
					},
					header: {
						"headerUserId": me.globalUser.id,
						"headerUserToken": me.globalUser.userUniqueToken
					},
					method: "POST",
					success(res) {
						var resData = res.data;
						// console.log(typeof(resData));
						if (resData.status == 200) {
							// 获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser", userInfo);
							uni.navigateBack({
								delta: 1
							})
						} else if (resData.status == 502 || resData.status == 500) {
							uni.showToast({
								title: res.data.msg,
								duration: 2000
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		width:100%;
		height: 100%;
		position: absolute;
	}
	.input-page{
		display: flex;
		flex-direction: column;
	}
	.page-block{
		margin-top: 20rpx;
		background-color: #007AFF
	}
	.input-content{
		background-color: #1AAD19;
	}
	.graywords {
		color: #EAEAEA;
	}
</style>
