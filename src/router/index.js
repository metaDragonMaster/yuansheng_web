import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/layout/index.vue';
import otherLayout from "@/layout/otherLayout.vue"

Vue.use(VueRouter);
// Router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

/*
	@meta
		title	标题
		isTopMenuNarBar	展示导航菜单
*/
const routes = [{
		path: '/',
		name: 'layout',
		redirect: 'homepage',
		component: layout,
		children: [{
				path: '/homepage',
				name: 'homepage',
				meta: {
					title: "首页",
					isTopMenuNarBar: true,
				},
				component: () => import('@/views/homepage/index.vue'),
			},
			{
				path:'/userSign',
				name:'userSign',
				component: () => import('@/views/sign/index.vue'),
				children:[
					{
						path: '/userSign/register',
						name: 'userRegister',
						meta: {
							title: "欢迎注册原生联",
							easyFooter:true,
							subType:"register",
						},
						component: () => import('@/views/sign/register/index.vue'),
					},
					{
						path: '/userSign/login',
						name: 'userLogin',
						meta: {
							title: "欢迎登录原生联",
							easyFooter:true,
							subType:"login",
						},
						component: () => import('@/views/sign/login/index.vue'),
					},
				]
			},


			// {
			// 	path: '/userSign/register',
			// 	name: 'userRegister',
			// 	meta: {
			// 		title: "欢迎注册原生联"
			// 	},
			// 	component: () => import('@/views/userSign/register/index.vue'),
			// },
			// {
			// 	path: '/userSign/login',
			// 	name: 'userLogin',
			// 	meta: {
			// 		title: "欢迎登录原生联"
			// 	},
			// 	component: () => import('@/views/userSign/login/index.vue'),
			// },
			{
				path: '/demo',
				name: 'demo',
				component: () => import('@/views/demo/index.vue'),
			},
			{
				path: '/demoId',
				name: 'demoId',
				component: () => import('@/views/demo/demoId.vue'),
			},
			{
				path: '/shopCart',
				name: 'shopCart',
				meta: {
					title: "购物车",
					isTopMenuNarBar: true,
				},
				component: () => import('@/views/shopCart/index.vue'),
			},
			{
				path: '/userCentered',
				name: 'userCentered',
				redirect: '/userCentered/basicManagement',
				component: () => import('@/views/userCentered/index.vue'),
				meta: {
					title: "会员中心",
					needLogin:true,
				},
				children: [{
						path: 'basicManagement',
						name: 'basicManagement',
						meta: {
							title: "基础信息",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/basicManagement/index.vue'),
					},
					{
						path: 'changeUserPassword',
						name: 'changeUserPassword',
						meta: {
							title: "更改密码",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import(
							'@/views/userCentered/views/basicManagement/changeUserPassword/index.vue'),
					},
					{
						path: 'changeUserPhoneNo',
						name: 'changeUserPhoneNo',
						meta: {
							title: "更改手机号",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import(
							'@/views/userCentered/views/basicManagement/changeUserPhoneNo/index.vue'),
					},
					{
						path: 'addressManagement',
						name: 'addressManagement',
						meta: {
							title: "地址管理",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/addressManagement/index.vue'),
					},
					{
						path: 'enterpriseInfo',
						name: 'enterpriseInfo',
						meta: {
							title: "企业信息",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/enterpriseInfo/index.vue'),
					},
					{
						path: 'memberManagement',
						name: 'memberManagement',
						meta: {
							title: "成员管理",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/enterpriseInfo/memberManagement/index.vue'),
					},
					{
						path: 'censusRegister',
						name: 'censusRegister',
						meta: {
							title: "户籍管理",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/enterpriseInfo/censusRegister/index.vue'),
					},
					// {
					// 	path: 'censusRegisterDetails',
					// 	name: 'censusRegisterDetails',
					// 	meta: {
					// 		title: "户籍详情",
					// 		unshowRouteTitle: true
					// 	},
					// 	component: () => import('@/views/userCentered/views/enterpriseInfo/censusRegister/details.vue'),
					// },


					// {
					// 	path:'orderManagement',
					// 	name:'orderManagement',
					// 	meta:{
					// 		title:"订单管理",
					// 		unshowRouteTitle:true
					// 	},
					// 	component: () => import('@/views/userCentered/views/orderManagement/index.vue'),
					// },
					{
						path: 'orderSale',
						name: 'orderSale',
						meta: {
							title: "销售订单",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/orderManagement/orderSale/index.vue'),
					},
					{
						path: 'orderPurchase',
						name: 'orderPurchase',
						meta: {
							title: "采购订单",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/orderManagement/orderPurchase/index.vue'),
					},
					{
						path: 'orderPurchase/details',
						name: 'orderPurchaseDetails',
						meta: {
							title: "采购订单",
							unshowRouteTitle: true,
							needLogin:true,
						},
						component: () => import('@/views/userCentered/views/orderManagement/orderPurchase/orderDetails.vue'),
					},
				]
			},
			{
				path: '/settled/cooperative',
				name: 'settledCooperative',
				component: () => import('@/views/settled/cooperative/index.vue'),
				meta: {
					title: "合伙企业入驻",
					isTopMenuNarBar: true,
				},
			},
			{
				path: '/settled/agriculturalSuperEnterprise',
				name: 'settledAgriculturalSuperEnterprise',
				meta: {
					title: "农超企入驻",
					isTopMenuNarBar: true,
				},
				component: () => import('@/views/settled/agriculturalSuperEnterprise/index.vue'),
			},
			{
				path: '/settled/agriculturalEnterprise',
				name: 'settledAgriculturalEnterprise',
				meta: {
					title: "农资商入驻",
					isTopMenuNarBar: true,
				},
				component: () => import('@/views/settled/agriculturalEnterprise/index.vue'),
			},
			{
				path: '/settled/processingEnterprise',
				name: 'settledProcessingEnterprise',
				meta: {
					title: "加工企业入驻",
					isTopMenuNarBar: true,
				},
				component: () => import('@/views/settled/processingEnterprise/index.vue'),
			},
			{
				path: '/authentication',
				name: 'authentication',
				component: () => import('@/views/authentication/index.vue'),
				meta: {
					title: "用户认证"
				},
			},
			{
				path: '/customerService',
				name: 'customerService',
				component: () => import('@/views/customerService/index.vue'),
				meta: {
					title: "客服中心"
				},
			},
			{
				path: '/customerServiceProblem',
				name: 'customerServiceProblem',
				// redirect: 'homepage', //不能让用户直接进入这个界面，需要进子路由
				component: () => import('@/views/customerService/view/problem.vue'),
				meta: {
					title: "客服中心"
				},
			},
			{
				path: '/antiCounterfeitingTraceability',
				name: 'antiCounterfeitingTraceability',
				component: () => import('@/views/antiCounterfeitingTraceability/index.vue'),
				meta: {
					title: "防伪溯源",
					isTopMenuNarBar: true,
				},
			},
			{
				path: '/especiallyService',
				name: 'especiallyService',
				component: () => import('@/views/especiallyService/index.vue'),
				meta: {
					title: "特色服务",
					isTopMenuNarBar: true,
				},
			},
			{
				path: '/supplyChainFinance',
				name: 'supplyChainFinance',
				component: () => import('@/views/supplyChainFinance/index.vue'),
				meta: {
					title: "供应链金融",
					isTopMenuNarBar: true,
					headNavColorWhite:true,
				},
			},
			{
				path: '/supplyChainFinance/details',
				name: 'supplyChainFinanceDetails',
				component: () => import('@/views/supplyChainFinance/details.vue'),
				meta: {
					title: "供应链金融",
					isTopMenuNarBar: true,
				},
			},
			{
				path: '/information',
				name: 'information',
				component: () => import('@/views/information/index.vue'),
				meta: {
					title: "原生资讯",
					isTopMenuNarBar: true,
				},
			},
			{
				path: '/information/details',
				name: 'informationDetails',
				component: () => import('@/views/information/details.vue'),
				meta: {
					title: "原生资讯",
					isTopMenuNarBar: true,
				},
			},

		]
	},
	{
		path: "/dataCenter",
		name: "dataCenter",
		component: () => import('@/views/dataCenter/index.vue'),
	},
	{
		path: "/dataCenter/region",
		name: "dataCenterRegion",
		component: () => import('@/views/dataCenter/region.vue'),
	},
	// {
	// 	path: '/otherLayout',
	// 	name: 'otherLayout',
	// 	redirect: 'homepage',
	// 	component: otherLayout,
	// 	children:[
	// 		{
	// 			path:"/aboutUs",
	// 			name:"aboutUs",
	// 			component: () => import('@/views/aboutUs/index.vue'),
	// 		}
	// 	]
	// },
	{
		path:"/aboutUs",
		name:"aboutUs",
		component: () => import('@/views/aboutUs/index.vue'),
	},

	{
		path: "/404",
		name: "404",
		component: () => import('@/views/error/404.vue'),
	},
	{
		path: "*",
		name: "missView",
		redirect: '404',
		// component: () => import('@/views/error/404.vue'),
	},
]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0,
			// behavior: 'smooth',
		}
	},
})

export default router
