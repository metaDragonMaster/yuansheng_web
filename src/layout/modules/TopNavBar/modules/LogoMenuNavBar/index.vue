<template>
	<div id="logo-menu-nav-bar" limit-max-width v-show="$route.meta.isTopMenuNarBar">
		<div class="flex-align-center">
			<div class="ysl-logo flex-align-center" @click="$routerUtil.toName('homepage')">
				<img src="@/assets/images/topnavbar/ysl-logo.png" alt="" />
				<p>原生农业产业服务联盟</p>
			</div>
			<!-- <div class="drift-right search-input">
				<img src="@/assets/iconImages/icon_search.png" alt="" />
				<input type="text" placeholder="输入产品类型/名称/规格进行搜索" />
				<button>搜索</button>
			</div> -->
			<div class="nav-search" drift-right>
				<div class="border-input">
					<!-- <img class="nav-search-icon" src="@/assets/iconImages/icon_search.png" alt=""> -->
					<el-icon class="nav-search-icon el-icon-search"></el-icon>
					<input class="nav-search-input" type="text" placeholder="输入产品类型/名称/规格进行搜索" />
				</div>
				<button class="nav-search-button">搜索</button>
			</div>
			<!-- <button class="shop-card-button" @click="$routerUtil.toName('shopCart')">
				<img src="@/assets/iconImages/icon_gouwuche.png" alt="">
				购物车
				<span>({{num}})</span>
			</button> -->
		</div>
		<ul>
			<!-- <li v-for="(item,index) in menuList" :key="item.toName" -->
			<li
				v-for="(item, index) in menuList"
				:key="item.label"
				:class="[{ alive: currentIndex == index }]"
				:style="{ color: item.color }"
				@click="toRoute(item)"
			>
			<!-- , 'font-weight': item.color ? 'bold' : '500' -->
				{{ item.label }}
			</li>
		</ul>
	</div>
</template>
<script>
import setting from '@/utils/setting.js';
export default {
	data() {
		return {
			num: 0,
			currentIndex: 0,
			menuList: [
				{
					label: '首页',
					toName: 'homepage'
				},
				{
					label: '农资集采',
					// toName:"homepage",
					newWindowUrl: setting.nzjcWindowUrl,
					color: '#F22D24'
				},
				{
					label: '农超企直采',
					// toName:"agriculturalSuperEnterprise"
					newWindowUrl: setting.ncqWindowUrl,
					color: '#FF8000'
				},
				{
					label: '特色服务',
					toName: 'especiallyService'
				},
				{
					label: '供应链金融',
					toName: 'supplyChainFinance'
				},
				{
					label: '防伪溯源',
					toName: 'antiCounterfeitingTraceability'
				},
				{
					label: '数字农业',
					newWindowUrl: setting.officialWebsiteUrl + 'dataCenter'
				},
				{
					label: '原生资讯',
					toName: 'information'
				},
				{
					label: '关于我们',
					newWindowUrl: setting.officialWebsiteUrl + 'aboutUs'
				}
			]
		};
	},
	watch: {
		$route(route) {
			this.startRouteCurrentIndex();
		}
	},
	components: {},
	computed: {},
	created() {
		this.startRouteCurrentIndex();
	},
	methods: {
		toRoute(item) {
			if (item.toName) {
				return this.$routerUtil.toName(item.toName);
			}
			if (item.newWindowUrl) {
				console.log(item.newWindowUrl);
				return this.$routerUtil.newWindow(item.newWindowUrl);
			}
		},
		startRouteCurrentIndex() {
			let num = 0;
			for (let index = 0; index < this.menuList.length; index++) {
				if (this.$route.name == this.menuList[index].toName) {
					this.currentIndex = index;
					num++;
					break;
				}
			}
			num <= 0 ? (this.currentIndex = -1) : null;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#logo-menu-nav-bar {
	background-color: #ffffff;
	transition: background-color 0.3s;
	// position: fixed;
	// top: 2.5rem;
	// width: 100%;
	// z-index: 1000;
	& > .flex-align-center {
		margin-top: 16px;
	}
	.ysl-logo {
		cursor: pointer;
		img {
			width: 7.125rem;
			margin-right: 1rem;
			cursor: pointer;
		}
		p {
			padding-left: 1rem;
			line-height: 1.25rem;
			font-size: 1.375rem;
			border-left: 0.125rem solid #dddddd;
			color: $ThemeColor;
		}
	}
	.nav-search {
		height: 2.5rem;
		display: flex;
		align-items: center;
		.border-input {
			height: 100%;
			border: 0.0625rem solid $ThemeColor;
			border-right: 0;
			display: flex;
		}
		.nav-search-icon {
			width: 0.875rem;
			height: 0.875rem;
			margin: 0.675rem 0.5rem 0.5rem 0.5rem;
		}
		.nav-search-input {
			border: 0;
			height: 100%;
			width: 18.75rem;
		}
		.nav-search-button {
			padding: 0 2.5rem;
			height: 100%;
			color: #ffffff;
			background-color: $ThemeColor;
		}
	}
	// .search-input {
	// 	border: 1px solid #069b87;
	// 	display: flex;

	// 	img {
	// 		height: 14px;
	// 		width: 14px;
	// 		margin: 13px 0 13px 10px;
	// 	}
	// 	input {
	// 		border: 0;
	// 		margin: 13px 10px;
	// 		width: 360px;
	// 	}
	// 	button {
	// 		background-color: #069b87;
	// 		color: #ffffff;
	// 		width: 100px;
	// 		font-size: 16px;
	// 	}
	// }
	.shop-card-button {
		// height: 40px;
		border: 1px solid #d9d9d9;
		padding: 13px 18px;
		line-height: 16px;
		font-size: 12px;
		margin-left: 20px;
		img {
			height: 14px;
			width: 16px;
			margin-top: -4px;
		}
		span {
			color: #ff5600;
		}
	}
	& > ul {
		display: flex;
		// height: 4.375rem;
		// line-height: 4.375rem;
		height: 3.125rem;
		line-height: 3.125rem;
		li {
			cursor: pointer;
			padding: 0 1rem;
			font-size: 1.125rem;
			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}
	}
	.alive {
		color: #069b87;
	}
}
</style>
