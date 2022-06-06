<template>
	<div id="authentication-register">
		<component :is="currentBizComponent" @submit="submit"></component>
	</div>
</template>
<script>
import cooperative from "./cooperative.vue"
import merchant from "./merchant.vue"
import process from "./process.vue"
import purchase from "./purchase.vue"

import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			
		};
	},
	components: {
		cooperative,
		merchant,
		process,
		purchase,
	},
	computed: {
		...mapGetters(['formAuthenType']),
		currentBizComponent() {
			let list = [
				'cooperative',
				'merchant',
				'process',
				'purchase',
			];
			console.log('currentBizComponent',this.formAuthenType);
			let formAuthenType = this.formAuthenType;
			// console.log(list.filter((item)=> item == formAuthenType));
			let filter = list.filter((item)=> formAuthenType.includes(item))[0];
			console.log(filter);
			return filter;
		}
	},
	mounted() {
	
	},
	methods: {
		...mapActions({
			'setFormDataKeep': 'authentication/setFormDataKeep', 
			// 'setAuthenType':'authentication/setAuthenType',
		}),
		submit(form) {
			this.$emit('submit', 1);
			this.setFormDataKeep(form);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#authentication-register {
	
}
</style>
