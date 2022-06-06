<template>
	<ul class="links">
		<li class="is-link" :class="{ 'is-gradual': scrollValue <= 0 }" v-for="(item, index) in menus" :key="index" @click="onclick(item)">
			<span class="label">{{ item.label }}</span>
			<i v-show="item.subs" class="el-icon-arrow-down"></i>
			<subNav :menus="item.subs"></subNav>
		</li>
	</ul>
</template>

<script>
import subNav from './subNav.vue';
import { mapGetters } from 'vuex';
export default {
	props: {
		menus: {
			type: Array,
			default: () => []
		}
	},
	components: {
		subNav
	},
	computed: {
		...mapGetters(['scrollValue'])
	},
	methods: {
		onclick(item) {
			// this.$routerUtil.toRoute(item)
			if(item.onclick) {
				item.onclick()
			}
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.el-icon-arrow-down {
	transition: transform 0.3s;
}
.links {
	display: flex;
	& > .is-link {
		// min-width: 5.5rem;
		padding: 0 12px;
		text-align: center;
		position: relative;
		z-index: 1030;
		& > .label {
			line-height: 64px;
		}
		&:hover {
			& > .label {
				color: #53B753;
			}
			.el-icon-arrow-down {
				color: #53B753;
				transform: rotateZ(-180deg);
			}
			.subs {
				opacity: 1;
				top: 100%;
			}
		}
	}
}
// .subs.is-gradual {
// 	background-color: rgba($color: #ffffff, $alpha: 0.6);
// }
</style>
