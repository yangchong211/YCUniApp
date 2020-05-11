<template>
	<view>
		<view class="container">
			<!-- hover-stay-time="50" 按住后多久出现点击态，单位毫秒 -->
			<view class="list-cell" hover-stay-time="50">
				<text class="cell-tit">姓名</text>
				<input class="cell-name" type="text" placeholder="学员121" maxlength="10" @input="lengthInput"/>
			</view>
			<view class="list-cell" hover-stay-time="50">
				<text class="cell-tit">性别</text>
				<text class="cell-sex">男</text>
				<text class="cell-sex">女</text>
			</view>
			<!-- hover-class="cell-hover" 指定按下去的样式类 -->
			<view class="list-cell" hover-stay-time="50" hover-class="cell-hover" @tap="showPicker('birthday')">
				<text class="cell-tit">生日</text>
				<text class="cell-tip">请选择</text>
				<!-- e470是back键的unicode -->
				<!-- <text class="cell-more uni-icon">&#xe470;</text> -->
			</view>
			<view class="list-cell" hover-stay-time="50" hover-class="cell-hover" @click="selectClass">
				<text class="cell-tit">年级</text>
				<text class="cell-tip">请选择</text>
				<text class="cell-more "></text>
			</view>
			<view class="list-cell" hover-stay-time="50" hover-class="cell-hover" @click="selectSchool">
				<text class="cell-tit">学校</text>
				<text class="cell-tip">请选择</text>
				<text class="cell-more"></text>
			</view>
			<view class="list-cell" hover-stay-time="50" hover-class="cell-hover" @tap="showPicker('year')">
				<text class="cell-tit">入学年份</text>
				<text class="cell-tip">请选择</text>
				<text class="cell-more"></text>
			</view>
		</view>
		
		<!-- 底部保存按钮 -->
		<view class="list-cell save-btn" @click="saveBtn">
			<text class="cell-tit">保存</text>
		</view>
		
		<!-- https://ext.dcloud.net.cn/plugin?id=273 -->
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			value="2020-04-08"
			:current="false"
			fields="day"
			@confirm="onConfirm($event,'birthday')"
			@cancel="onCancel"
			:disabled-after="false"
			ref="birthday"
		></w-picker>
		
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			value="2020-04-08"
			:current="false"
			fields="year"
			@confirm="onConfirm($event,'year')"
			@cancel="onCancel"
			:disabled-after="false"
			ref="year"
		></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	export default {
		data() {
			return {
				
			};
		},

		methods: {
			showPicker(type){
				this.$refs[type].show();
			},
			navTo(url) {
				uni.navigateTo({
					url
				});
			},
			//保存
			saveBtn() {
				uni.showModal({
					content: '是否要保存',
					success: e => {
						if (e.confirm) {
							//保存操作，调用接口网络请求
						}
					}
				});
			},
			//舰艇姓名最长输入长度不超过10，否则给予吐司
			lengthInput: function(event) {
				var value = event.target.value;
				var length = value.length;
				if (length>10){
					mui.toast('名字不能超过10个字')
				}
			},
			//选择年级
			selectClass : function(e){
				mui.toast('选择年级')
				this.$refs["date1"].show();
			},
			//选择学校
			selectSchool : function(e){
				mui.toast('选择学校')
				this.$refs["date1"].show();
			},
		},
		components: {
			wPicker
		},
		//创建
		created() {
			console.log('vue created');
		},
		//如果有网络请求，可以在onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			console.log('vue onLoad');
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

<!-- uni.scss文件的用途是为了方便整体控制应用的风格 -->
<!-- 使用时需要在 style 节点上加上 lang="scss" -->
<style lang="scss">
	page {
		background: #f8f8f8;
	}
	.container {
		//flex布局
		display: flex;
		//纵向布局
		flex-direction: column;
		border-radius: 20upx;
		margin-top: 30upx;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.list-cell {
		//flex布局
		display: flex;
		//横向布局
		flex-direction: row;
		align-items: baseline;
		padding: 15upx;
		position: relative;
		background: #ffffff;
		justify-content: flex-start;
		&.save-btn {
			border-radius: 40upx;
			margin-top: 100px;
			margin-bottom: 30upx;
			margin-left: 30upx;
			margin-right: 30upx;
			background-color: #DDDDDD;
			text-align: center;
			.cell-tit {
				color: #999999;
				font-size: 36upx;
				text-align: center;
				margin-right: 0;
			}
		}
		//设置按下去的颜色
		&.cell-hover {
			background: #fafafa;
		}
		//右边箭头的样式
		.cell-more {
			align-self: baseline;
			font-size: 32upx;
			color: #909399;
			margin-left: 10upx;
		}
		//姓名样式
		.cell-tit {
			flex: 1;
			font-size: 30upx;
			color: #333333;
			margin-left: 10upx;
		}
		.cell-name {
			font-size: 24upx;
			color: #666666;
			width: 104upx;
			text-align: center;
			padding-top: 5upx;
			padding-bottom: 5upx;
			padding-left: 12upx;
			padding-right: 12upx;
			background-color: #f6f6f6;
			border-radius: 10upx;
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
			background-color: #f6f6f6;
			border-radius: 24upx;
			background-clip: 2upx;
		}
		//右边箭头
		.cell-more{
			align-self: baseline;
			font-size:32upx;
			color:#CFCFCF;
			margin-left:12upx;
		}
		.cell-tip {
			font-size: 22upx;
			color: #999999;
			justify-content: flex-end;
			justify-content: end;
		}
		.uni-icon {
			font-family: uniicons;
			font-weight: normal;
		}
	}
</style>
