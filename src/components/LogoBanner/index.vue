<template>
	<div class="logo-banner limit-max-width">
		<img src="@/assets/images/topnavbar/ysl-logo.png" alt="" @click="$routerUtil.toPath('/')">
		<span>{{title}}</span>
		<div class="drift-right">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props:{
		title:"",
	}
}
</script>
<style  lang="scss" scoped="scoped">
.logo-banner {
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
	padding-top: 1rem;
	padding-bottom: 1rem;
	img {
		// height: 4.375rem;
		// width: 7.125rem;
		width: 7.125rem;
		margin-right: 1rem;
		cursor: pointer;
	}
}
</style>
