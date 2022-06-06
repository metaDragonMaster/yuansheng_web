<template>
	<div class="">
		<el-empty>
			<template slot="description">
				{{errorText||'没有找到该页面'}}
			</template>
			<el-button type="primary" @click="$routerUtil.toName('homepage')">返回首页</el-button>
		</el-empty>
	</div>
</template>
<script>
import { mapActions,mapGetters } from "vuex"
export default {
	data(){return{
		
	}},
	components: {
		
	},
	computed: {
		...mapGetters(['errorText'])
	},
	mounted() {
	},
	deactivated() {
		this.setErrorType('')
	},
	methods:{
		...mapActions({'setErrorType':'error/setErrorType'}),
	}
}
</script>
<style  lang="scss" scoped="scoped">
	
</style>
