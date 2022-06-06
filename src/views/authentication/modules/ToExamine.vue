<template>
	<div id="to-examine">
		<!-- @emitClick="submit" buttonText="下一步" -->
		<!-- {{toExamineType}} -->
		<EasyStepOver :statusType="type"  :succressText="label"></EasyStepOver>
	</div>
</template>
<script>
import EasyStepOver from '@/components/EasyStepOver/index.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	data(){return{
		type:"success",
		TextList:[
			{
				value:'success',
				label:"您的资料已经全部提交，正在审核中，请留意平台信息！"
			},
			{
				value:'warning',
				label:"审核失败"
			},
			{
				value:'danger',
				label:"账号冻结"
			},
		]
	}},
	components: {
		EasyStepOver,
	},
	computed: {
		...mapGetters(['toExamineType']),
		label() {
			let label = '';
			this.TextList.map(item=>{
				if(this.type == item.value) {
					label = item.label
				}
			})
			return label
		}
	},
	mounted() {
		this.c = this.toExamineType;
	},
	methods:{
		handle(type) {
			this.type = type;
		},
		submit($enent) {
			// this.$emit('submit', 4);
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#to-examine {
	
}
</style>
