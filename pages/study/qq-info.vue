<template>
	<view class="container">
		<view class="info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view >头像</view>
				<view class="right-wapper">
					<image :src="globalUser.faceImage" class="face"></image>
					<!-- <image src="../../static/icons/default-face.png" class="face"></image> -->
					<view class="arrow-block">
						<image src="/static/icons/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 昵称 -->
			<view class="item-wapper" @click="modifyNickname">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="gray-fields">
						{{nickname}}
					</view>
					<view class="arrow-block">
						<image src="/static/icons/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 生日 -->
			<view class="item-wapper" @click="modifyBirthday">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view class="gray-fields">
						{{birthday}}
					</view>
					<view class="arrow-block">
						<image src="/static/icons/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 性别 -->
				<view class="item-wapper" @click="modifySex">
					<view class="info-words">性别</view>
					<view class="right-wapper">
						<view class="gray-fields">
							<view v-if="globalUser.sex == 1">
								男
							</view>
							<view v-else-if="globalUser.sex == 0">
								女
							</view>
							<view v-else>
								未选择
							</view>
						</view>
						<view class="arrow-block">
							<image src="../../static/icons/left-gray-arrow.png" class="arrow-ico"></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="item-wapper" @click="cleanStorage">
				<view class="footer-words">
					清理缓存
				</view>
				<view class="right-wapper">
					<view class="gray-fields">
						{{nickname}}
					</view>
					<view class="arrow-block">
						<image src="/static/icons/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			
			<view class="footer-wapper">
				<view class="footer-words" style="margin-top: 10upx;" @click="logout">
					退出登录
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {},
				nickname : "昵称",
				birthday : "生日",
				
			};
		},
	}
</script>

<style>
	@import url("qq-info.css");
</style>
