<template>
	<p class="read-agreement" :class="[{ checked: read }]" @click="read = !read">
		我已阅读并同意
		<span>{{agreement}}</span>
	</p>
</template>
<script>
export default {
	data() {
		return {
			read: false,
		};
	},
	props:{
		agreement:{
			type:String,
			default:""
		}
	},
	components: {},
	computed: {},
	mounted() {},
	methods: {
	}
};
</script>
<style lang="scss" scoped="scoped">
.read-agreement {
	cursor: pointer;
	padding-left: 2rem;
	position: relative;
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0.5rem;
		top: 0.5625rem;
		border: #dfdfdf solid 0.0625rem;
		font-size: 0.75rem;
		height: 1rem;
		width: 1rem;
		border-radius: 0.125rem;
		transition: all 0.3s;
		overflow: hidden;
	}
	&:hover:before {
		border-color: $ThemeColor;
	}
	&.checked:before {
		content: '√';
		text-align: center;
		line-height: 0.875rem;
		border-color: $ThemeColor;
	}
	&.checked:before,
	span {
		color: $ThemeColor;
	}
}
</style>
