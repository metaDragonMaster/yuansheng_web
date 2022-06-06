<template>
	<div class="fixed-top flex-center-js-sb">
		<div class="flex-center-js-sb">
			<logo></logo>
			<span class="meta-title">原生农业</span>
		</div>
		<!-- <div class="buttons">
		</div> -->
		<userStatic></userStatic>
	</div>
</template>
<script>
import logo from "@/layout/modules/HeadNavBar/modules/logo.vue"
import userStatic from "@/layout/modules/HeadNavBar/modules/userStatic.vue"
export default {
	data(){return{

	}},
	components: {
		logo,
		userStatic,
	},
	mounted() {

	},
	methods:{

	}
}
</script>
<style  lang="scss" scoped="scoped">
.fixed-top {
	height: 72px;
	width: 100%;
	// min-width: 1280px;
	border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba($color: #FFFFFF, $alpha: 0.8);
	z-index: 1000;
	.meta-title {
		margin-left: 28px;
		font-size: 20px;
	}
}
</style>
