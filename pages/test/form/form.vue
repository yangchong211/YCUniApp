<template>
	<view class="uni-flex-column">
		<page-head title="form表单"></page-head>
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-flex-column">
				<view class="title">邮箱</view>
				<input class="uni-input" name="nickname" placeholder="请输入邮箱" />
			</view>
			<view class="uni-form-item uni-flex-column">
				<view class="title">性别，单选</view>
				<radio-group name="gender">
					<label>
						<radio value="男"/><text>男</text>
					</label>
					<label>
						<radio value="女" /><text>女</text>
					</label>
				</radio-group>
				
				<!-- <view class="title">性别，单选</view>
				<radio-group name="gender">
					<label>
						<text class="cell-sex">男</text>
					</label>
					<label>
						<text class="cell-sex">女</text>
					</label>
				</radio-group> -->
				
				
				<view class="uni-form-item uni-flex-column">
					<view class="title">爱好</view>
					<checkbox-group name="loves">
						<label>
							<checkbox value="读书" /><text>读书</text>
						</label>
						<label>
							<checkbox value="写字" /><text>写字</text>
						</label>
					</checkbox-group>
				</view>
				
				<view class="uni-form-item uni-flex-column">
					<view class="title">年龄</view>
					<slider value="20" name="age" show-value></slider>
				</view>
				
				<view class="uni-form-item uni-flex-column">
					<view class="title">保留选项</view>
					<view>
						<switch name="switch"/>
					</view>
				</view>
				
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	var  graceChecker = require("../../../common/graceChecker.js");
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			formSubmit : function(e){
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				//定义
				var rule = [
					{name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
					{name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
					{name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
				]
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
				    uni.showToast({title:"验证通过!"+JSON.stringify(e.detail.value), icon:"none"});
				}else{
				    uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			}
		}
	};
</script>

<style>
	page{
		background: #f8f8f8;
	}
	//性别
	.cell-sex {
		font-size: 24upx;
		color: #666666;
		margin-left: 14upx;
		padding-top: 5upx;
		padding-bottom: 5upx;
		padding-left: 26upx;
		padding-right: 26upx;
		background-color: #FFB400;
		border-radius: 24upx;
		background-clip: 2upx;
	}
</style>
