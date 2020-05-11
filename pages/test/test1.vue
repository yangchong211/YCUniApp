<template>
	<view class="container">
		<view class="list-cell">
			<text class="cell-tit">姓名</text>
			<text class="cell-name">学员121</text>
		</view>
	</view>

</template>

<script>
	export default{
		data() {
			return {};
		},
	}
</script>

<style lang="scss">
	page {
		background: #f8f8f8;
	}
	.container {
		background-color: #ffffff;
		border-radius: 20upx;
		margin-top: 30upx;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.list-cell {
		display: flex;
		align-items: baseline;
		padding: 15upx;
		position: relative;
		background: #ffffff;
		justify-content: flex-start;
		&.cell-tit {
			flex: 1;
			font-size: 30upx;
			color: #333333;
			margin-left: 10upx;
		}
		.cell-name {
			font-size: 24upx;
			color: #666666;
			padding-top: 5upx;
			padding-bottom: 5upx;
			padding-left: 12upx;
			padding-right: 12upx;
			background-color: #f6f6f6;
			border-radius: 10upx;
		}
		.cell-tip {
			font-size: 22upx;
			color: #999999;
			justify-content: flex-end;
			justify-content: end;
		}
	}
</style>
