<template>
	<div id="agricultural-super-enterprise">
		<div class="limit-max-width no-1 flex-column-center">
			<h1>采购商入驻</h1>
			<div class="text-bg-hr">
				直面优质产品供应者
			</div>
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication',{ type : 2 })">
				立即入驻
			</button>
		</div>
		<div class="page-model limit-max-width no-2 ">
			<div class="no-model-title-center">
				<p>关于采购商</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<!-- <ol class="model-content">
				<li>
					<p>
						<span>
							产品优势
						</span>
					</p>
					<span>原生联整合了农业合伙企业资源，并以原生标准严格规范生产过程，致力于构建从原生种业源头开始到消费终端的可控、可溯源的食品安全生态，向市场提供真正原生的、健康的产品。</span>
				</li>
				<li>
					<p>
						<span>采购商利好</span>
					</p>
					<span>原生产品直供。<br>提前一季锁定产品。<br>根据需求定向生产。</span>
				</li>
			</ol> -->
			<IntroduceCard :data="IntroduceCardData"></IntroduceCard>
		</div>
		<div class="page-model limit-max-width no-3">
			<div class="no-model-title-center">

				<p>采购数字化全链路 打造高效供应链协同管理</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<div class="context">
				<img src="@/assets/images/settled/agriculturalSuperEnterprise/no-3-image.png" alt="">
			</div>
		</div>
	<!-- 	<div class="page-model limit-max-width no-4 flex-center-js-sard">
			<div class="model-text">
				<h1>寻源采购</h1>
				<p>多重寻源场景</p>
				<p>满足不同采购需求的流合规性</p>
				<ol>
					<li><span>询价采购：来源丰富、充分比价</span></li>
					<li><span>招标采购：在线合规、多方协同</span></li>
					<li><span>竞价采购：透明博弈、快速降本</span></li>
					<li><span>供应商招募：半径扩大、高效触达</span></li>
				</ol>
			</div>
			<div class="image-box">
				<img src="@/assets/images/settled/agriculturalSuperEnterprise/no-4-image.png" alt="">
			</div>
		</div> -->
		<no4></no4>
		<div class="page-model limit-max-width no-5">
			<div class="no-model-title-center">
				<p>入驻流程</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<div class="image-box">
				<img src="@/assets/images/settled/agriculturalSuperEnterprise/no-5-image.png" >
			</div>
			<button class="consulting-button bottom" @click="$routerUtil.toPath('/authentication',{ type : 2 })">
				立即入驻
			</button>
		</div>
	</div>
</template>
<script>
import IntroduceCard from '@/components/SomeWhere/IntroduceCard.vue';
import no4 from "../modules/no4.vue"
export default {
	data(){return{
		IntroduceCardData: [
			{
				image: require('@/assets/imgs/settled/agriculturalEnterprise/1.png'),
				title: '平台优势',
				subs: ['原生联已经整合了常德地区各大农业合伙企业，拥有耕地超150万亩，农资产品需求巨大。我们将对产品提供方进行严格的审查、评级，优中选优，力争把最好的产品提供给各大合伙企业']
			},
			{
				image: require('@/assets/imgs/settled/agriculturalEnterprise/2.png'),
				title: '合伙企业优势',
				subs: ['以常德为中心，辐射周边，与湖南、湖北、四川等多地合伙企业达成合作意向，与全国超20个超大型农资企业达成长期合作']
			}
		],
	}},
	components: {
		IntroduceCard,
		no4,
	},
	computed: {

	},
	mounted() {

	},
	methods:{

	}
}
</script>
<style  lang="scss" scoped="scoped">
#agricultural-super-enterprise {
	.page-model {
		padding-top: 3.375rem;
		padding-bottom: 3.375rem;
		&:nth-child(odd) {
			background-color: #F9FCFB;
		}
	}
	.consulting-button {
		color: #ffffff;
		// background-color: #F22D24;
		background-color: #53B753;
		width: 200px;
		height: 52px;
		font-size: 1.25rem;
		border-radius: 4px;
		margin-top: 2rem;
		letter-spacing: 0.125rem;
		text-indent: 0.125rem;
		display: block;
		// &.bottom {
		// 	background-color: #047934;
		// }
	}
	.no-1 {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url(../../../assets/imgs/settled/agriculturalSuperEnterprise/banner-bg.png);
		height: 400px;
		color: #FFFFFF;
		h1 {
			font-size: 70px;
			font-weight: 500;
		}
		.text-bg-hr {
			//背景横线
			font-size: 30px;
			position: relative;
			&:after,
			&:before {
				content: "";
				display: block;
				position: absolute;
				width: 3.125rem;
				height: 0.125rem;
				background-color: #FFFFFF;
				top: 50%;
			}
			&:after {
				right: -4.6875rem;
			}
			&:before {
				left: -4.6875rem;
			}
		}
	}

	// .no-2 {
	// 	.model-content {
	// 		li {
	// 			display: grid;
	// 			grid-template-columns: 15rem auto;
	// 			// margin: 0 0;
	// 			padding: 0 4rem 0 5rem;
	// 			& > span {
	// 				padding-top: 3rem;
	// 				padding-bottom: 3rem;
	// 			}
	// 		}
	// 		li:not(:last-child) > span {
	// 			border-bottom: 0.0625rem solid #f2f2f2;
	// 		}
	// 		p {
	// 			display: flex;
	// 			align-items: center;
	// 			span {
	// 				font-size: 1.375rem;
	// 				border-left: 0.25rem solid #069B87;
	// 				padding-left: 1rem;
	// 			}
	// 		}
	// 	}
	// }

	.no-3{
		.context {
			max-width: 68rem;
			margin: 4rem auto;
		}
	}
	// .no-4{
	// 	.model-text {
	// 		h1 {
	// 			margin-bottom: 1rem;
	// 		}
	// 		p {
	// 			color: #999999;
	// 			font-size: 0.75rem;
	// 			&:not(:last-child) {
	// 				margin-bottom: .5rem;
	// 			}
	// 		}
	// 		ol {
	// 			margin-top: 1rem;
	// 		}
	// 		li {
	// 			list-style: disc;
	// 			list-style-position: inside;
	// 			color: #0DA056;
	// 			span {
	// 				color: #333333;
	// 			}
	// 			&:not(:last-child) {
	// 				margin-bottom: .5rem;
	// 			}
	// 		}
	// 	}
	// 	.image-box {
	// 		max-width: 32.5rem;
	// 	}
	// }
	.no-5{
		.image-box {
			max-width: 68rem;
			margin: 4rem auto;
		}
		.consulting-button {
			margin: 0 auto;
			// background-color: #F22D24;
		}
	}
}
</style>
