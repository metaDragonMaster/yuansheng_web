<template>
	<div class="step-over flex-column-center">
		<img  v-for="item in imgType" :src="item.src" v-show="item.type == statusType">
		<h2>{{succressText}}</h2>
		<el-button v-if="buttonText" class="submit-button" @click="$emit('emitClick')">{{buttonText}}</el-button>
		<span>{{psText}}</span>
	</div>
</template>
<script>
export default {
	data(){return {
		image:'',
		imgType:[
			{
				type:'success',
				src:require("@/assets/iconImages/icon_success.png")
			},
			{
				type:'warning',
				src:require("@/assets/iconImages/icon_warning.png")
			},
			{
				type:'danger',
				src:require("@/assets/iconImages/icon_danger.png")
			},
			
		]
	}},
	props:{
		succressText:{
			type:String,
			default:'完成',
		},
		buttonText:{
			type:String,
			default:'',
		},
		psText:{
			type:String,
			default:'',
		},
		statusType:{
			type:String,
			default:"success",
			validator: (value) => {
				return ['success', 'warning', 'danger'].indexOf(value) !== -1;
			}
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.step-over {
	img {
		width: 3rem;
		height: 3rem;
		margin: 5rem 0 1rem 0;
	}
	h2 {
		margin-bottom: 1.875rem;
	}
	button {
		margin-bottom: 5rem;
	}
	span {
		font-size: 0.75rem;
		color: #999999;
		padding-bottom: 5rem;
	}
}
</style>
