<template>
	<ul class="links flex-align-center">
		<li class="is-link" v-for="item in routerLinks" @click="$routerUtil.toRoute(item)">
			{{item.label}}
		</li>
	</ul>
</template>

<script>
export default {
	props:{
		routerLinks:{
			type: Array,
			default:()=>[]
		},
	},
	methods:{
		// toRoute(item) {
		// 	if (item.toName) {
		// 		return this.$routerUtil.toName(item.toName);
		// 	}
		// 	if (item.newWindowUrl) {
		// 		console.log(item.newWindowUrl);
		// 		return this.$routerUtil.newWindow(item.newWindowUrl);
		// 	}
		// },
		toRoute({
			type,url
		}) {
			console.log(type)
			let validate = ['toName', 'toPath','newWindow'].includes(type);
			if (validate) {
				let to ;

			}
		}
	}
}
</script>

<style  lang="scss" scoped="scoped">
.links {
	margin-left: 12px;
	.is-link {
		margin: 0 12px;
		transition: color 0.1s;
		line-height: 64px;
		&:hover {
			color: #53B753;
		}
	}
}
@media screen and (max-width: 1400px) {
	.is-link {
		margin: 0 8px;
	}
}
</style>
