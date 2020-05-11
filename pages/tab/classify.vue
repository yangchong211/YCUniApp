<template>
	<view style="color: #007AFF;">
		{{title}}
	</view>
</template>

<script>
	export default{
		data() {
			return {
				title: "首页"
			}
		},
		methods:{
			
		},
		components:{
			
		},
		//tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			
		}
	}
</script>

<style>
</style>
