<template>
	<div class="sign-view " :class="{'active':active == true}">
		<!-- active -->
		<fixedTop></fixedTop>
		<img class="is-background" src="@/assets/imgs/sign/bg.png" alt="" />
		<!-- sign index -->
		<div class="title-h">
			<h1>
				<span>高效</span>
				<span>安全</span>
				<span>便捷</span>
			</h1>
			<h4>买卖农产品 就上原生联</h4>
		</div>
		<div class="sign-card"  v-if="signTypeActive" >
			<!-- {{signTypeActive}} -->
			<div class="title-meta">
				<h1>
					欢迎{{signTypeActive.name}}
					<span class="theme-color">原生联</span>
				</h1>
				<h4>
					{{signTypeActive.subTitle}}
				</h4>
			</div>
			<component :is="signTypeActive.componentName"></component>
			<!-- <router-view></router-view> -->
		</div>
	</div>
</template>
<script>
import fixedTop from './fixedTop.vue';
import Login from "./login/index.vue"
import Register from "./register/index.vue"
export default {
	data() {
		return {
			component:[

			],
			active:false,
			signTypeList:[
				{
					subType:"register",
					name:"注册",
					subTitle:"Welcome to register",
					componentName:"Register",
				},
				{
					subType:"login",
					name:"登录",
					subTitle:"Welcome to landing",
					componentName:"Login",
				}
			],
			signTypeActive:null,
			timeSet:null,
		};
	},
	components: {
		fixedTop,
		Login,
		Register,
	},
	watch:{
		$route(n,o) {
			// console.log(o,n)
			let res = o.path.includes('/userSign');
			// console.log(res)
			if(res) {
				this.setAnimation();
			}
		}
	},
	mounted() {
		this.setComponent()
	},
	methods: {
		setComponent(wait) {
			let _item ;
			this.signTypeList.map(item=>{
				if(item.subType == this.$route.meta.subType) {
					_item = item;
				}
			})
			if(wait) {
				if(this.timeSet) clearTimeout(this.timeSet)
				this.timeSet = setTimeout(()=>{
					this.signTypeActive = _item;
				},1000)
			} else {
				this.signTypeActive = _item;
			}
		},
		setAnimation() {
			setTimeout(()=>{
				this.active = false;
			},1000)
			this.active = true;
			this.setComponent(true);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.sign-view {
	// background-image: url(../../assets/imgs/sign/bg.png);
	// background-position: center;
	// background-repeat: no-repeat;
	position: relative;
	min-height: 1000px;
	overflow: hidden;
	min-width: 620px;
	// padding: 0 186px;
	// min-width: 1320px;
	padding: 0 calc((100% - 1530px) / 2);
	display: flex;
	.title-h {
		margin-top: 156px;
		color: #ffffff;
		display: inline-block;
		text-shadow: 0 1px 6px  #000000;
		transition: opacity 1s,margin-top 1s;
		h1 {
			font-size: 60px;
			span:not(:last-child) {
				margin-right: 16px;
			}
		}
		h4 {
			font-size: 38px;
			font-weight: 500;
			margin-top: 16px;
		}
	}
	.is-background {
		width: 1903px;
		// height: 936px;
		height: 1080px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		transition: clip-path 1s;
		clip-path: circle(50% at 10% 26%);
	}
	.sign-card {
		// position: absolute;
		// top: 0;
		// right: 186px;
		// margin-top: 156px;
		margin: 156px 0 0 auto ;
		max-height: 710px;
		background-color: #ffffff;
		box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.08);
		border-radius: 32px;
		padding: 50px 80px 68px 80px;
		width: 536px;
		// transition: right 1s,top 1s;
		transition: margin-bottom 1s,margin-right 1s;
		display: grid;
		grid-template-rows: 135px auto;
		.title-meta {
			h1 {
				font-size: 42px;
			}
			h4 {
				font-size: 30px;
				font-weight: 500;
			}
		}
		::v-deep .submit-bottom {
			width: 100%;
			height: 47px;
			background: linear-gradient(90deg, #73B753 0%, #9BD558 100%);
			box-shadow: 0px 2px 10px 0px rgba(83, 183, 83, 0.36);
			border-radius: 24px;
			color: #FFF;
			margin-top: auto;
		}
	}
	.theme-color {
		color: #53b753;
	}
	@media screen and ( max-width:1320px ) {
		flex-direction: column;
		min-height: 1160px;
		// .title-h {
		// 	text-shadow: 0 0 0 #000000;
		// }
		.is-background {
			height: 100%;
			clip-path: circle(50% at 26% -10%);
		}
		.sign-card {
			// margin-top: 360px;
			margin-top: 30px;
		}
	}
	@media screen and ( max-width:1530px ) {
		.title-h {
			margin-left: 30px;
		}
		.sign-card {
			margin-right: 30px;
		}
	}
}
.sign-view.active {
	.is-background {
		clip-path: circle(60% at 100% 26%);
	}
	.title-h {
		text-shadow: 0 0 0 ;
		opacity: 0;
		margin-top: -10px;
	}
	.sign-card {
		margin-right: -100%;
	}
	@media screen and ( min-width:1320px ) {
		// .sign-card {
			// right: -100%;
			// margin-right: -100%;
		// }
	}
	@media screen and ( max-width:1320px ) {
		// .sign-card {
			// top: 100%;
			// margin-right: -100%;
		// }
		.is-background {
			clip-path: circle(50% at 26% 200%);
		}
	}
}

::v-deep .el-form {
	.el-form-item {
		border-radius: 50px;
		border: 1px solid transparent;
		.el-form-item__content {
			height: 55px;
		}
		.el-form-item__error {
			padding-left: 84px;
		}
		&.is-error {
			border-color: #F56C6C;
		}
	}
	.el-input {
		overflow: hidden;
		// height: 55px;
		background-color: #ebebeb;
		border-radius: 50px;
		.el-input-group__prepend,
		.el-input-group__append,
		.el-input__inner {
			height: 55px;
			background-color: #ebebeb;
			border: 0;
		}
		.el-input-group__prepend {
			border-radius: 50px 0 0 50px;
			border: 0;
			.icon {
				width: 28px;
			}
		}
		.el-input-group__append {
			border-radius: 0 50px 50px 0;
			color: #53B753;
		}
	}
}



</style>
