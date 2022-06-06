<template>
	<div class="text-center">
		<p class="a-link" @click="$routerUtil.newWindow('https://beian.miit.gov.cn')">湘ICP备2021013450号</p>
		<img src="@/assets/images/bottomfooter/icon.jpg" />
		<span>湘公网安备 43070402001017号</span>
		<!-- www.yuanshengl.com -->
	</div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
.text-center {
	background-color: #F4F4F4;
	// background-color: #ffffff;
	padding-top: 2.625rem;
	padding-bottom: 2.625rem;
	font-size: 0.75rem;
	.a-link {
		cursor: pointer;
	}
	p:not(:last-child) {
		margin-bottom: 1rem;
	}
	img {
		width: 1rem;
		height: 1rem;
		margin-top: -4px;
		margin-right: 4px;
	}
}
</style>
