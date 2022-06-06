<template>
	<ul id="select-menu" drift-right>
		<!-- <li class="main-shop-cart" @click="$routerUtil.toName('shopCart')">
			<img src="@/assets/iconImages/icon_shoppingcar.png" >
			购物车
			<span>0</span>
		</li> -->
		<li v-for="item in menus" @click="menuItemClick(item)">
			<span>{{ item.label }}</span>
			<i v-show="item.subList" class="el-icon-arrow-down"></i>
			<ol class="sub-list" v-if="item.subList">
				<li v-for="subItem in item.subList" @click.stop="menuItemClick(subItem)">{{ subItem.label }}</li>
			</ol>
		</li>
		<li flex-center-js-sb>
			<el-popover placement="top-start" width="200" trigger="hover" :close-delay="1000">
				<img src="@/assets/images/app_qrcode.png" alt="">
				<p class="text-center">请扫描二维码下载APP</p>
				<div slot="reference">
					<img src="@/assets/iconImages/icon_shouji.png" alt="" />
					<span style="padding-left: 0.25rem;">手机版</span>
				</div>
			</el-popover>
		</li>
	</ul>
</template>
<script>
import { getToken } from '@/utils/auth.js';
export default {
	data() {
		return {
			// currentIndex:
			menus: [
				{
					label: '用户中心',
					subList: [
						{
							label: '基础信息',
							toName: 'basicManagement'
						},
						{
							label: '企业信息',
							toName: 'enterpriseInfo'
						},
						{
							label: '地址管理',
							toName: 'addressManagement'
						},
						{
							label: '销售订单',
							toName: 'orderSale'
						},
						{
							label: '采购订单',
							toName: 'orderPurchase'
						}
					]
				},
				{
					label: '我要入驻',
					subList: [
						{
							label: '我是合伙企业',
							toName: 'settledCooperative'
						},
						{
							label: '我是采购商',
							toName: 'settledAgriculturalSuperEnterprise'
						},
						{
							label: '我是农资企业',
							toName: 'settledAgriculturalEnterprise'
						},
						{
							label: '我是加工企业',
							toName: 'settledProcessingEnterprise'
						}
					]
				},
				{
					label: '客服中心',
					toName: 'customerService'
				}
			],
		};
	},
	// props:{
	// 	menus:{
	// 		type:Array,
	// 		default:()=>[],
	// 	}
	// },
	components: {},
	computed: {},
	mounted() {},
	methods: {
		menuItemClick(item) {
			console.log('menuItemClick:', item.toName);
			if (item.toName) {
				this.$routerUtil.toName(item.toName);
			}
			// if(item.toPath) {
			// 	this.$routerUtil.toPath(item.toPath,item.params);
			// }
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#select-menu {
	display: flex;
	li {
		cursor: pointer;
	}
	& > li:not(:last-child) {
		// padding: 0 1rem;
		line-height: 2.5rem;
		font-size: 0.75rem;
		height: 2.5rem;
		min-width: 6rem;
		text-align: center;
		position: relative;
		z-index: 1030;
		.el-icon-arrow-down {
			transition: transform 0.3s;
		}
		&:after {
			content: '|';
			position: absolute;
			right: -0.25rem;
			top: -0.0625rem;
			color: #828282;
		}
		.sub-list {
			transition: opacity 0.2s;
			color: #999999;
			opacity: 0;
			z-index: 1020;
			position: absolute;
			bottom: 2.5rem;
			right: 0;
			width: 100%;
			li {
				background-color: #ffffff;
				&:hover {
					color: #ff8000;
				}
			}
		}
		&:hover {
			background-color: #ffffff;
			color: #ff8000;
			&:after {
				opacity: 0;
			}
			.el-icon-arrow-down {
				transform: rotateZ(-180deg);
			}
			.sub-list {
				// z-index: 1020;
				top: 2.5rem;
				// height: fit-content;
				opacity: 1;
			}
		}
	}
	& > li:last-child {
		padding-left: 1rem;
		img {
			width: 0.5rem;
		}
	}
	// .main-shop-cart {
	// 	line-height: 2.5rem;
	// 	cursor: pointer;
	// 	img {
	// 		width: 1rem;
	// 		margin-top: -0.25rem;
	// 	}
	// 	span {
	// 		color: $ThemeColor;
	// 	}
	// }
}
</style>
