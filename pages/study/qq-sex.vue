<template>
	<view class="container">
		<form @submit="formSubmitSex">
			<view class="page-block">
				<radio-group class="radio-sex" @change="sexChange">
					<label class="radio-single">
						<radio value="1" :checked="sex == 1"/>男
					</label>
					<label class="radio-single">
						<radio value="0" :checked="sex == 0"/>女
					</label>
				</radio-group>
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					//用户信息
					globalUser: {},
					//性别
					sex: "-1",
				};
			},
			methods:{
				//设置性别
				sexChange(e) {
					this.sex = e.detail.value;
				},
				//提交表单
				formSubmitSex() {
					let me = this;
					let sex = me.sex;
					
					uni.request({
						url: me.serverUrl + "/user/modifyUserinfo?qq=786041010",
						data: {
							"userId": me.globalUser.id,
							"sex": sex
						},
						header: {
							"headerUserId": me.globalUser.id,
							"headerUserToken": me.globalUser.userUniqueToken
						},
						method: "POST",
						success(res) {
							var resData = res.data;
							console.log('请求数据------'+res);
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
			},
			onLoad() {
				let me = this;
				let globalUser = me.getGlobalUser("globalUser");
				me.globalUser = globalUser;
				me.sex = globalUser.sex;
			},
			onShow() {
				var me = this;
			}
			
		}
</script>

<style>
	.container {
		width:100%;
		height: 100%;
		position: absolute;
	}
	.page-block{
		margin-top: 20rpx;
	}
	.radio-single{
		padding: 20upx 20upx;
	}
	.radio-sex{
		display: flex;
		flex-direction: column;
		background-color: #F1F1F1;
	}
	.submitBtn {
		margin-left: 40rpx;
		margin-right: 40rpx;
		margin-top: 40upx;
	}
</style>
