<template>
	<el-cascader v-model="addressData" :options="options" @change="handleChange"></el-cascader>
</template>
<script>
import chinaData from '@/utils/json/chinaData.json';
export default {
	data() {
		return {
			addressData: [],
			options: chinaData,
		};
	},
	components: {},
	computed: {},
	props: {
		value: {
			type: [String, Array],
			default: ''
		}
	},
	model: {
		prop: 'value',
		event: 'emitValue'
	},
	watch:{
		value(newVal,oldVal) {
			// if(typeof(newVal) == 'string' && newVal.length>0) {
			// 	this.addressData = newVal.split(',');
			// } else {
			// 	this.addressData = newVal
			// }
			this.startData(newVal)
		},
	},
	mounted() {
		// console.log(this.value);
		this.startData(this.value);
	},
	methods: {
		startData(val) {
			if(typeof(val) == 'string') {
				this.addressData = val.split(',');
			} else {
				this.addressData = val
			}
		},
		handleChange(value) {
			console.log(value);
			this.$emit('emitValue', value);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.el-form .el-cascader.el-cascader--medium {
	width: 100%;
}
</style>
