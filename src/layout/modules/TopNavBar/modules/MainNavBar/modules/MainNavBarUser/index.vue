<template>
	<div id="main-nav-bar-user" flex>
		<button @click="$routerUtil.toName('homepage')">欢迎来到原生联</button>
		<div class="flex-js-sard" v-if="!userInfo">
			<button class="user-to-login-button" @click="$routerUtil.toPath('/userSign/login')"><span>你好，请登录</span></button>
			<button class="user-to-register-button" @click="$routerUtil.toPath('/userSign/register')"><span>免费注册</span></button>
		</div>
		<div v-else class="user-info-mobile" >
			<p >{{ userInfo.mobile }}</p>
			<button  @click="logout" class="logout-button">退出登录</button>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
		};
	},
	computed: {
		...mapGetters(['userInfo'])
	},
	methods: {
		logout() {
			this.isHover = false
			this.$store.dispatch('user/logout');
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#main-nav-bar-user {
	.user-to-login-button {
		margin-left: 1rem;
		span {
			padding-right: 1rem;
			padding-left: 1rem;
			position: relative;
			&:after {
				content: '|';
				display: block;
				position: absolute;
				right: -0.125rem;
				top: -0.0625rem;
				color: #828282;
			}
		}
	}
	.user-to-register-button {
		color: #099b88;
		font-weight: bold;
		padding-left: 1rem;
	}
	.user-info-mobile {
		display: flex;
		align-items: center;
		margin-left: 2rem;
		p {
			cursor: pointer;
		}
	}
	.logout-button {
		margin-left: 1rem;
		background-color: #e32416;
		color: #FFFFFF;
		border-radius: 4px;
		font-size: 12px;
		padding: 2px 4px;
		// transition: all 1s;
	}
}
</style>
