<template>
	<div id="other-layout">
		<GradualTop></GradualTop>
		<div id="AppMain">
			<router-view></router-view>
		</div>
		<BottomFooter other></BottomFooter>
	</div>
</template>
<script>
import GradualTop from "./modules/GradualTop.vue";
import BottomFooter from './modules/BottomFooter/index.vue';
export default {
	data() {
		return {};
	},
	components: {
		GradualTop,
		BottomFooter,
	},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#other-layout {
	min-height: 200vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
#AppMain {
	// margin-top: -100px;
}
</style>
