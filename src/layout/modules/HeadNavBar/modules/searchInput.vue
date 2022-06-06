<template>
	<div>
		<div class="search-input" :class="{ checked: isOpen }" @click="changeCheck">
			<span class="placeholder" v-show="checked != true">输入产品/类型/规格进行搜索</span>
			<div class="input-box flex-align-center">
				<i class="el-icon-search" @click.stop="checked = !checked"></i>
				<!-- <span>{{checked}}</span> -->
				<input ref="input" type="text" v-show="checked == true" v-model="value" />
				<button v-show="checked == true">搜索</button>
				<i class="el-icon-close" v-show="checked == true" @click.stop="checked = false"></i>
			</div>
		</div>
		<i class="el-icon-search is-link search-button" @click="toRoute">搜索</i>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			checked: false
		};
	},
	watch: {
		checked(n, o) {
			if (n == true) {
				setTimeout(() => this.$refs['input'].focus(), 100);
			} else {
				this.value = '';
			}
		}
	},
	computed: {
		isOpen() {
			return this.checked == true && this.value.length >= 0;
		}
	},
	methods: {
		changeCheck() {
			if (this.checked != true) {
				this.checked = true;
			}
		},
		toRoute() {
			console.log('缩小后的按钮图标点击进入搜索界面');
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.search-input {
	margin: 0 0 0 auto;
	height: 64px;
	width: 300px;
	margin-right: 25px;
	font-size: 14px;
	padding: 0 20px;
	position: relative;
	overflow: hidden;
	@media screen and (max-width: 1650px){
		display: none;
	}
	&:not(.checked) {
		border-style: solid;
		border-color: rgba($color: #000000, $alpha: 0.1);
		border-left-width: 1px;
		border-right-width: 1px;
		border-top-width: 0;
		border-bottom-width: 0;
	}
	.placeholder {
		// color: #999999;
		color: inherit;
		line-height: 64px;
	}
	.input-box {
		position: absolute;
		// line-height: 64px;
		height: 100%;
		width: 100%;
		transition: left 0.2s;
		left: calc(100% - 56px);
		top: 0;
		.el-icon-search {
			margin-left: 20px;
			font-size: 18px;
		}
		input {
			border: 0;
			margin-left: 36px;
			line-height: 36px;
			font-size: 18px;
			background-color: transparent;
			color: #ffffff;
		}
		button {
			margin-left: 16px;
			line-height: 16px;
			padding: 4px;
		}
		.el-icon-close {
			font-size: 22px;
			cursor: pointer;
		}
	}
	&.checked {
		background-image: linear-gradient(to right, #53b753, #8bdc8b);
		width: 360px;
		.input-box {
			left: 0;
			i,
			button {
				color: #ffffff;
			}
			input {
				margin-left: 16px;
			}
		}
	}
}
.search-button {
	line-height: 64px;
	margin-right: 25px;
	display: none;
	@media screen and (max-width: 1650px){
		display: block;
	}
	&:hover {
		color: #53b753;
	}
}
.view {
	// &:not(.is-gradual),
	&:hover {
		.search-input {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
}
</style>
