<template>
	<div id="layout">
		<div>
			<!-- <TopNavBar></TopNavBar> -->
			<HeadNavBar></HeadNavBar>
			<!-- {{$store.state.resize.resizeValue}} -->
			<div class="app-main">
				<router-view></router-view>
			</div>
		</div>
		<BottomFooter></BottomFooter>
	</div>
</template>
<script>
import TopNavBar from './modules/TopNavBar/index.vue';
import HeadNavBar from './modules/HeadNavBar/index.vue';
import BottomFooter from './modules/BottomFooter/index.vue';
import { mapActions } from 'vuex';
import { getToken } from '@/utils/auth.js';
import { throttle } from '@/utils/throttle.js';//节流
export default {
	components: {
		TopNavBar,
		HeadNavBar,
		BottomFooter,
	},
	data(){return{
		scrollFunc:null,
		resizeFunc:null,
	}},
	watch: {
		$route(newRoute, oldRoute) {
			if (newRoute.meta.needLogin && !getToken()) {
				this.$store.dispatch('user/setUserInfo', null);
				this.$routerUtil.toPath('/userSign/login');
			}
		},
	},
	created() {
		this.getUserInfo()
	},
	mounted(){
		let that = this;
		that.scrollFunc = throttle(() => {
			let _scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			this.$store.dispatch('scroll/setScrollValue',_scroll);
		}, 100);
		window.addEventListener('scroll', that.scrollFunc);
		that.resizeFunc = () => {
			let _resize = document.body.offsetWidth;
			this.$store.dispatch('resize/setResizeValue',_resize);
		};
		that.resizeFunc();
		window.addEventListener('resize', throttle(that.resizeFunc, 16));
	},
	beforeDestroy() {
		// let that = this;
		// window.removeEventListener('scroll', that.scrollFunc);
		// window.removeEventListener('resize', that.resizeFunc);
	},
	methods: {
		...mapActions({ getUserInfo: 'user/getUserInfo' })
	}
};
</script>
<style lang="scss" scoped="scoped">
#layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// padding-top: 72px;
}
</style>
