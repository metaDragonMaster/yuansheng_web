<template>
	<div id="main-nav-bar" limit-max-width>
		<MainNavBarUser></MainNavBarUser>
		<SelectMenu ></SelectMenu>
	</div>
</template>
<script>
import SelectMenu from './modules/SelectMenu/index.vue';
import MainNavBarUser from './modules/MainNavBarUser/index.vue';

export default {
	data() {
		return {
			
		};
	},
	components: {
		SelectMenu,
		MainNavBarUser,
	},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#main-nav-bar {
	background-color: #F9F9F9;
	color: #999999;
	display: flex;
	min-height: 2.5rem;
	z-index: 1001;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	font-size: 0.75rem;
}
</style>
