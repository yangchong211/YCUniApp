<template>
	<view style="color: #007AFF;">
		{{title}}
	</view>
</template>

<script>
	export default{
		data() {
			return {
				title: "分类"
			}
		},
		methods:{
			
		},
		components:{
			
		},
		//tabbar 切换第一次加载时可能渲染不及时，
		//可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花
		onLoad() {
			
		},
		//tabbar 的页面展现过一次后就保留在内存中，
		//再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。
		onShow() {
			
		},
	}
</script>

<style>
</style>
