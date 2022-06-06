<style lang="scss" scoped="scoped">
$white: #ffffff;
$black: #333333;

.head-nav-bar {
	height: 64px;
	width: 100%;
	min-width: 1280px;
	border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
	position: fixed;
	top: 0;
	left: 0;
	background-color: #ffffff;
	z-index: 1000;
	// display: flex;
	// align-items: center;
	// justify-content: space-between;
	// font-size: 16px;
	font-size: 14px;
	&.is-gradual.white {
		color: $white;
	}
	.placeholder  {
		color: $white;
	}
	&.is-gradual {
		background-color: rgba($color: #ffffff, $alpha: 0.3);
	}
	&:not(.white):hover {
		background-color: #ffffff;
	}
}
</style>
<template>
	<div class="head-nav-bar flex-js-sb" :class="{ 'is-gradual': scrollValue <= 0, white: $route.meta.headNavColorWhite }" v-if="$route.meta.isTopMenuNarBar">
		<div class="left flex-align-center">
			<logo />
			<routerLinkNav :routerLinks="routerLinks"></routerLinkNav>
			<!-- {{scrollValue}} -->
		</div>
		<div class="right flex-center">
			<searchInput></searchInput>
			<menuNav :menus="menus"></menuNav>
			<userStatic></userStatic>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import setting from '@/utils/setting.js';

import logo from './modules/logo.vue';
import routerLinkNav from './modules/routerLinkNav.vue';
import menuNav from './modules/menuNav.vue';
import searchInput from './modules/searchInput.vue';
import userStatic from './modules/userStatic.vue';

export default {
	data() {
		return {
			routerLinks: [
				{
					label: '农资集采',
					type: 'newWindow',
					url: setting.nzjcWindowUrl
				},
				{
					label: '农超企',
					type: 'newWindow',
					url: setting.ncqWindowUrl
				},
				{
					label: '特色服务',
					type: 'toName',
					url: 'especiallyService'
				},
				{
					label: '供应链金融',
					type: 'toName',
					url: 'supplyChainFinance'
				},
				{
					label: '防伪溯源',
					type: 'toName',
					url: 'antiCounterfeitingTraceability'
				},
				{
					label: '数字农业',
					type: 'newWindow',
					url: setting.officialWebsiteUrl + 'dataCenter'
				},
				{
					label: '原生资讯',
					type: 'toName',
					url: 'information'
				},
				{
					label: '关于我们',
					type: 'newWindow',
					url: setting.officialWebsiteUrl + 'aboutUs'
				}
			],
			menus: [
				// {
				// 	label: '用户中心',
				// 	subs: [
				// 		{
				// 			label: '基础信息',
				// 			type:"toName",
				// 			url: 'basicManagement'
				// 		},
				// 		{
				// 			label: '企业信息',
				// 			type:"toName",
				// 			url: 'enterpriseInfo'
				// 		},
				// 		{
				// 			label: '地址管理',
				// 			type:"toName",
				// 			url: 'addressManagement'
				// 		},
				// 		{
				// 			label: '销售订单',
				// 			type:"toName",
				// 			url: 'orderSale'
				// 		},
				// 		{
				// 			label: '采购订单',
				// 			type:"toName",
				// 			url: 'orderPurchase'
				// 		}
				// 	]
				// },
				{
					label: '下载app',
					onclick: () => {
						console.log('下载app');
					}
				},
				{
					label: '我要入驻',
					subs: [
						{
							label: '我是合伙企业',
							type: 'toName',
							url: 'settledCooperative'
						},
						{
							label: '我是采购商',
							type: 'toName',
							url: 'settledAgriculturalSuperEnterprise'
						},
						{
							label: '我是农资企业',
							type: 'toName',
							url: 'settledAgriculturalEnterprise'
						},
						{
							label: '我是加工企业',
							type: 'toName',
							url: 'settledProcessingEnterprise'
						}
					]
				},
				{
					label: '客服中心',
					type: 'toName',
					url: 'customerService'
				}
			]
		};
	},
	components: {
		logo,
		routerLinkNav,
		menuNav,
		searchInput,
		userStatic
	},
	computed: {
		...mapGetters(['scrollValue'])
	}
};
</script>
