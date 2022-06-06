<template>
	<div id="user-centered" >
		<LogoBanner title="用户中心"></LogoBanner>
		<EasyBreadCrumb limit ></EasyBreadCrumb>
		<div class="user-centered-content limit-max-width">
			<Sidebar class="sidebar" ref="Sidebar" :menus="menus" ></Sidebar>
			<div class="sub-router-view">
				<transition name="ease" mode="out-in">
					<keep-alive>
						<router-view />
					</keep-alive>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
import LogoBanner from "@/components/LogoBanner/index.vue"
import EasySideBar from '@/components/EasySideBar/index.vue';
import Sidebar from '@/components/EasySideBar/Sidebar.vue';
import EasyBreadCrumb from '@/components/EasyBreadCrumb/index.vue';

export default {
	data() {
		return {
			menus:[
				{
					title: '基础信息',
					index: '/userCentered/basicManagement',
				},
				{
					title: '企业管理',
					index: '/user',
					subs:[
						{
							title: '企业信息',
							index: '/userCentered/enterpriseInfo',
						},
						{
							title: '地址管理',
							index: '/userCentered/addressManagement'
						},
						{
							title: '订单管理',
							index: '/userCentered/orderManagement',
							subs:[
								{
									title: '采购订单',
									index: '/userCentered/orderPurchase'
								},
								{
									title: '销售订单',
									index: '/userCentered/orderSale'
								},
							]
						},
					]
				},
			],
		};
	},
	components: {
		LogoBanner,
		EasySideBar,
		Sidebar,
		EasyBreadCrumb
	},
};
</script>
<style lang="scss" scoped="scoped">
@import "@/styles/transition/ease.scss";
#user-centered {
	background-color: #f9f9f9;
}
.user-centered-content {
	// display: grid;
	// grid-template-columns: 13.75rem auto;
	// -ms-grid-template-columns: 13.75rem auto;
	display: flex;
}
.sidebar {
	width: 220px;
}
.sub-router-view {
	background-color: #FFFFFF;
	margin-left: 0.0625rem;
	padding: 1rem ;
	min-height: 31.25rem;
	width: calc(100% - 221px);
	::v-deep .sub-title {
		font-size: 1.25rem;
		padding-bottom: 1rem;
		border-bottom: 0.0625rem solid #F9F9F9;
		&>button:not(.el-button){
			padding: 0.5rem 1rem;
			background: #069b87;
			border-radius: 2px;
			color: #ffffff;
		}
		&>button:active {
			background: #08917e;
		}
		.title {
			margin-right: 2rem;
		}
		&.pointer .title {
			cursor: pointer;
		}
		.title.alive {
			color: #069b87;
			border-bottom: 2px solid #069b87;
		}
	}
}
</style>
