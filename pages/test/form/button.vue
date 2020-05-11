<template>
	<view class="uni-flex-column">
		<page-head :title="title"></page-head>
		<button class="uni-btn-v">页面主操作 Normal</button>
		<!-- type 有效值有3种 -->
		<button type="primary">页面主操作 Normal</button>
		<button type="primary" loading="true">页面主操作 Loading</button>
		<button type="primary" disabled="true">页面主操作 Disabled</button>
		<button type="default">页面次要操作 Normal</button>
		<button type="default" disabled="true">页面次要操作 Disabled</button>
		<button type="warn">警告类操作 Normal</button>
		<button type="warn" disabled="true">警告类操作 Disabled</button>
		<view class="button-sp-area">
			<button type="primary" plain="true">按钮</button>
			<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
			<button type="default" plain="true">按钮</button>
			<button type="default" disabled="true" plain="true">按钮</button>
			<button class="mini-btn" type="primary" size="mini">按钮</button>
			<button class="mini-btn" type="default" size="mini">按钮</button>
			<button class="mini-btn" type="warn" size="mini">按钮</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'button按钮',
			loading: true
		};
	},
	onLoad() {
		this._timer = null;
	},
	onshow() {
		this.clearTimer();
		this._timer = setTimeout(() => {
			this.loading = true;
		}, 300);
	},
	onUnload() {
		this.clearTimer();
		this.loading = false;
	},
	onReady() {},
	onHide() {},
	methods:{
		clearTimer(){
			if (this._timer != null) {
			    clearTimeout(this._timer);
			}
		}
	}
};
</script>

<style>
button {
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}

.button-sp-area {
	margin: 0 auto;
	width: 60%;
}
</style>
