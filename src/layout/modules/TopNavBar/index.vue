<template>
	<!-- <div id="top-nav-bar" :class="[$route.meta.isTopMenuNarBar?'haveMenu':'noMenu']"> -->
	<div id="top-nav-bar" class="noMenu">
		<MainNavBar></MainNavBar>
		<LogoMenuNavBar></LogoMenuNavBar>
	</div>
</template>
<script>
import MainNavBar from "./modules/MainNavBar/index.vue";
import LogoMenuNavBar from "./modules/LogoMenuNavBar/index.vue";
export default {
	data(){return{
		
	}},
	components: {
		MainNavBar,
		LogoMenuNavBar,
	},
	computed: {},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
#top-nav-bar {
	box-shadow: 0px 3px 9px rgba($color: #000000, $alpha: 0.1);
}
.haveMenu {
	padding-top: 6.875rem;
	// padding-top: 2.5rem;
}
.noMenu {
	padding-top: 2.5rem;
}
</style>
