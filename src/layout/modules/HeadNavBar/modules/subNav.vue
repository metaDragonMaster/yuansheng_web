<template>
	<ul class="subs" :class="{'is-gradual':scrollValue<=0}">
		<li class="sub" v-for="(item,index) in menus" :key="index" @click="$routerUtil.toRoute(item)">
			{{item.label}}
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name:"subNav",
	props: {
		menus:{
			type: Array,
			default: ()=>[],
		}
	},
	computed: {
		...mapGetters(['scrollValue']),
	},
}
</script>

<style  lang="scss" scoped="scoped">
.subs {
	background-color: #FFFFFF;
	// opacity: 0;
	transition: opacity 0.1s ;
	z-index: 1020;
	position: absolute;
	right: 0;
	top: -1000%;
	// bottom: 72px;
	// bottom: 0;
	width: 100%;
	&.is-gradual {
		background-color: rgba($color: #FFFFFF, $alpha: 0.6);
	}
	.sub {
		font-size: 14px;
		line-height: 24px;
		&:hover {
			color: #53B753;
		}
	}
}
</style>
