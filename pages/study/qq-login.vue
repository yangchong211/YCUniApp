<template>
	<view class="container">
		<form >
			<view class="face-wapper">
				<image src="/static/icons/default-face.png" class="user-face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<button class="commit" type="primary" form-type="submit" >注册/登录</button>
		</form>
		
		
	</view>
</template>

<script>
	export default {
			data() {
				return {
					
				};
			},
			methods:{
				formSubmit (e) {
					var me = this;
					var username = e.detail.value.username;
					var password = e.detail.value.password;
					console.log(username);
					console.log(password);
					// 发起注册/登录的请求
					var serverUrl = me.serverUrl;
					uni.request({
						url: serverUrl + '/user/registOrLogin?qq=786041010',
						data: {
							"username": username,
							"password": password
						},
						method: "POST",
						success: (res) => {
							console.log('成功-----registOrLogin------');
							// 获取真实数据之前，务必判断状态是否为200
							if (res.data.status == 200) {
								var userInfo = res.data.data;
								
								// 保存用户信息到全局的缓存中
								uni.setStorageSync("globalUser", userInfo);
								// 切换页面跳转，使用tab切换的api
								uni.switchTab({
									url: "./qq-me"
								});
							} else if (res.data.status == 500) {
								uni.showToast({
									title: res.data.msg,
									duration: 2000,
								})
							}
						},
						fail:function(e){
							console.log('异常-----registOrLogin------');
						},
					});
				}
			},
			onShow() {
				
			}
		}
</script>

<style>
	@import url("qq-login.css");
</style>
