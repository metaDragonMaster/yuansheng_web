<template>
	<div class="limit-max-width">
		{{id}}
	</div>
</template>
<script>
export default {
	data(){return{
		id:'默认值'
	}},
	components: {
		
	},
	computed: {
		
	},
	mounted() {
		// this.id = 
		// this.$route.query
		console.log(this.$route.query)
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
	
</style>
