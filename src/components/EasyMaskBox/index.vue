<template>
	<div class="easy-mask-box">
		<slot></slot>
		<div class="mask">
			<slot name="mask"></slot>
		</div>
	</div>
</template>
<style  lang="scss" scoped="scoped">
.easy-mask-box {
	overflow: hidden;
	position: relative;
	.mask {
		position: absolute;
		left: 0;
		top: -100%;
		// top: 0;
		transition: top .3s;
		width: 100%;
		height: 100%;
	}
	&:hover .mask{
		top: 0;
	}
}
</style>
