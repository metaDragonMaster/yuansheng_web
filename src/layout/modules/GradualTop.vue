<template>
	<div class="gradual-top flex-center-js-sb limit-max-width" :class="[scrollValue>=500?'solid':'gradual']">
		<img src="@/assets/images/topnavbar/ysl-logo.png" class="ysl-logo"  @click="$routerUtil.toName('homepage')"/>
		<ul class="flex">
			<li v-for="(item,index) in menuList" :key="index" :class="{'active':active == index}">
				{{item.label}}
			</li>
		</ul>
	</div>
</template>
<script>
// import { debounce } from '@/utils/debounce.js';
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			active:0,
			menuList: [
				{
					label: '关于我们',
					// toName: 'aboutUs'
				},
				{
					label: '企业文化',
					// toName: 'aboutUs'
				},
				{
					label: '大事记',
					// toName: 'aboutUs'
				},
				{
					label: '联系我们',
					// toName: 'aboutUs'
				},
			],
			// scrollValue:0,
			// scrollFunc:null,
		};
	},
	components: {},
	computed: {
		...mapGetters(['scrollValue']),
	},
	mounted() {
		// let that = this;
		// that.scrollFunc = debounce(() => {
		// 	let NavTop = document.getElementById("AppMain");
		// 	let _scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		// 	that.scrollValue = _scroll;
		// 	// console.log(_scroll);
		// }, 100);
		// window.addEventListener('scroll', that.scrollFunc);
	},
	beforeDestroy() {
		// let that = this;
		// window.removeEventListener('scroll', that.scrollFunc);
	},
	methods: {
		toRoute(item) {
			if (item.toName) {
				return this.$routerUtil.toName(item.toName);
			}
			if (item.newWindowUrl) {
				console.log(item.newWindowUrl);
				return this.$routerUtil.newWindow(item.newWindowUrl);
			}
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
.gradual-top {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	transition: all 0.3s;
	z-index: 2800;
}
.gradual {
	color: #FFFFFF;
	background-image: linear-gradient(180deg, rgba(0, 15, 26, 0.95) 0%, rgba(0, 15, 26, 0.5) 60%, rgba(0, 15, 26, 0) 100%);
}
.solid {
	// color: #FFFFFF;
	background-image: none;
	background-color: #FFFFFF;
	box-shadow: 0 1px 4px 0 rgba($color: #000000, $alpha: 0.1);
}
.ysl-logo {
	// width: 11.25rem;
	// height: 6.875rem;
	// margin-right: 6.25rem;
	width: 92px;
	height: 56px;
	margin: 22px;
	cursor: pointer;
}
ul {
	li {
		border-bottom: 2px solid transparent;
		margin: 0 50px;
		padding: 12px 0;
		cursor: pointer;
		&.active {
			color: #069B87;
			border-color: #069B87;
		}
	}
}
</style>
