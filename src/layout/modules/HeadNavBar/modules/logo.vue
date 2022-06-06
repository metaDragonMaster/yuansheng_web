<template>
	<div class="logo is-link" @click="$routerUtil.toPath('/')">
		<img src="@/assets/images/topnavbar/ysl-logo.png" alt="">
	</div>
</template>
<script>
export default {
	data(){return{

	}},
	methods:{

	}
}
</script>
<style  lang="scss" scoped="scoped">
.logo {
	margin-left: 30px;
	img {
		width: 82px;
		height: 50px;
	}
}
</style>
