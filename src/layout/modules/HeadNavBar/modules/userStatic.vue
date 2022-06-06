<template>
	<div class="user-static">
		<div v-if="isLogged" class="user-sign-avatar flex-center-js-sb">
			<el-popover popper-class="user-static-popover" placement="bottom-end" trigger="hover" width="250" :visible-arrow="false">
				<div class="user-card">
					<div class="user-grid">
						<img class="user-avatar-img" src="@/assets/imgs/layout/user-avatar.png" alt="" />
						<div class="flex-column-js-sard">
							<p>OceanKz</p>
							<p class="flex-js-sb">
								<span>未做身份认证</span>
								<span class="color-grean">去认证</span>
							</p>
						</div>
					</div>
					<ul class="grid-col-2">
						<li>
							<p>999</p>
							<span>销售订单</span>
						</li>
						<li>
							<p>999</p>
							<span>采购订单</span>
						</li>
					</ul>
					<ul class="router-list">
						<li>
							<img src="@/assets/imgs/layout/1.png" alt="" />
							<span>企业信息</span>
						</li>
						<li>
							<img src="@/assets/imgs/layout/2.png" alt="" />
							<span>地址管理</span>
						</li>
						<li>
							<img src="@/assets/imgs/layout/3.png" alt="" />
							<span>基础信息</span>
						</li>
					</ul>
					<button class="logout-button">
						退出登录
					</button>
				</div>
				<img slot="reference" class="user-avatar" src="@/assets/imgs/layout/user-avatar.png" alt="" />
			</el-popover>
			<img class="icon-news" src="@/assets/imgs/layout/icon-news.png" alt="" />
			<span>消息</span>
			<div class="badge">{{badgeValue}}</div>
		</div>
		<div class="user-sign-buttons flex" v-else>
			<button @click="$routerUtil.toPath('/userSign/login')">登录</button>
			<button @click="$routerUtil.toPath('/userSign/register')">立即注册</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getToken } from '@/utils/auth.js';
export default {
	data() {
		return {
			badgeValue:0,
		};
	},
	computed: {
		...mapGetters(['userInfo']),
		isLogged() {
			// return this.userInfo&&getToken();
			return true;
		}
	},
	methods: {

	}
};
</script>

<style lang="scss" scoped="scoped">
.user-sign-buttons {
	button {
		line-height: 64px;
		padding: 0 16px;
		transition: background-color 0.1s;
		&.active,
		&:hover {
			background-color: #53b753;
			color: #ffffff;
		}
	}
}
.user-sign-avatar {
	// width: 160px;
	// text-align: center;
	// line-height: 64px;
}
.user-avatar {
	height: 30px;
	width: 30px;
	margin-left: 12px;
	margin-right: 12px;
}
.icon-news {
	width: 16px;
	height: 18px;
	margin-right: 4px;
}
.badge {
	background-color: #53b753;
	border-radius: 50%;
	min-width: 18px;
	height: 18px;
	text-align: center;
	color: #fff;
	margin-left: 12px;
	margin-right: 20px;
}
.user-card {
	// border-top: 4px solid #53B753;
	.user-avatar-img {
		width: 48px;
		height: 48px;
		margin-right: 12px;
	}
	.user-grid {
		padding: 22px 16px;
		font-size: 12px;
		display: grid;
		grid-template-columns: 60px auto;
		.color-grean {
			color: #53b753;
			cursor: pointer;
		}
	}
	.user-grid,
	.grid-col-2 {
		p {
			color: #333333;
			font-weight: 600;
		}
		span {
			color: #999999;
			font-weight: 500;
		}
	}
	.grid-col-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: center;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
		li {
			padding: 12px 0;
		}
	}
	.router-list {
		margin: 12px 0;
		li {
			line-height: 40px;
			padding-left: 18px;
			&:hover {
				background-image: linear-gradient(to right, rgba($color: #53b753, $alpha: 0.12), rgba($color: #53b753, $alpha: 0.04));
			}
			img {
				width: 18px;
				height: 18px;
				margin-right: 12px;
			}
		}
	}
	.logout-button {
		height: 34px;
		width: 100%;
		background-color: #F1F1F1;
		color: #999999;
	}
}
</style>
<style lang="scss">
.user-static-popover {
	border-top: 4px solid #53b753 !important;
	padding: 0 !important;
}
</style>
