<template>
	<div id="processing-enterprise">
		<div class="limit-max-width no-1 flex-column-center">
			<h1>加工企业入驻</h1>
			<div class="text-bg-hr">直接沟通上下游</div>
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication', { type: 4 })">立即入驻</button>
		</div>
		<div class="page-model limit-max-width no-2 ">
			<div class="no-model-title-center">
				<p>农产品加工</p>
				<span>ABOUT THE SOURCE OF THE PRODUCT</span>
			</div>
			<!-- <ol class="model-content">
				<li>
					<p><span>原材料优势</span></p>
					<span>
						就近采购优质原材料。<br>提前订购原材料。<br>选择面广，可选种类多。
					</span>
				</li>
				<li>
					<p><span>销售规划</span></p>
					<span>
						直接对接采购商，产品不愁销路。<br>参与中央厨房供货，打响品牌名声。<br>加入原生认证体系，提升品牌附加值。
					</span>
				</li>
			</ol> -->
			<IntroduceCard :data="IntroduceCardData"></IntroduceCard>
		</div>
		<div class="page-model limit-max-width no-3">
			<div class="no-model-title-center">
				<p>采购数字化全链路 打造高效供应链协同管理</p>
				<span>ABOUT THE SOURCE OF THE PRODUCT</span>
			</div>
			<div class="context"><img src="@/assets/images/settled/agriculturalSuperEnterprise/no-3-image.png" alt="" /></div>
		</div>
		<!-- <div class="page-model limit-max-width no-4 flex-center-js-sard">
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
			<div class="image-box"><img src="@/assets/images/settled/agriculturalSuperEnterprise/no-4-image.png" alt="" /></div>
		</div> -->
		<no4></no4>
		<div class="page-model limit-max-width no-5">
			<div class="no-model-title-center">
				<p>入驻流程</p>
				<span>ABOUT THE SOURCE OF THE PRODUCT</span>
			</div>
			<div class="image-box"><img src="@/assets/images/settled/agriculturalSuperEnterprise/no-5-image.png" /></div>
			<button class="consulting-button bottom" @click="$routerUtil.toPath('/authentication', { type: 4 })">立即入驻</button>
		</div>
	</div>
</template>
<script>
import IntroduceCard from '@/components/SomeWhere/IntroduceCard.vue';
import no4 from "../modules/no4.vue"
export default {
	data() {
		return {
			IntroduceCardData: [
				{
					image: require('@/assets/imgs/settled/cooperative/1.png'),
					title: '平台优势',
					subs: ['原生联致力于互联网赋能农业生产，整合合伙企业资源，构建从原生种业源头开始到消费终端的可控、可溯源的食品安全生态，打造原生农业区域品牌，提升农产品价值。']
				},
				{
					image: require('@/assets/imgs/settled/cooperative/2.png'),
					title: '合伙企业优势',
					subs: ['通过审核，即可使用原生品牌，并获得原生评级，提高产品价值。', '通过平台集中采购农资，降低生产成本。', '参与平台生产计划调配，生产不再盲目。']
				}
			],
		};
	},
	components: {
		IntroduceCard,
		no4
	},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#processing-enterprise {
	.page-model {
		padding-top: 3.375rem;
		padding-bottom: 3.375rem;
		&:nth-child(odd) {
			background-color: #f9fcfb;
		}
	}
	.consulting-button {
		color: #ffffff;
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
		background-image: url(../../../assets/images/settled/processingEnterprise/no1-banner-bg.png);
		// height: 35rem;
		height: 400px;
		color: #ffffff;
		h1 {
			font-size: 70px;
		}
		.text-bg-hr {
			//背景横线
			font-size: 30px;
			position: relative;
			&:after,
			&:before {
				content: '';
				display: block;
				position: absolute;
				width: 3.125rem;
				height: 0.125rem;
				background-color: #ffffff;
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

	.no-2 {
		.model-content {
			li {
				display: grid;
				grid-template-columns: 15rem auto;
				// margin: 0 0;
				padding: 0 4rem 0 5rem;
				& > span {
					padding-top: 3rem;
					padding-bottom: 3rem;
				}
			}
			li:not(:last-child) > span {
				border-bottom: 0.0625rem solid #f2f2f2;
			}
			p {
				display: flex;
				align-items: center;
				span {
					font-size: 1.375rem;
					border-left: 0.25rem solid #FF8000;
					padding-left: 1rem;
				}
			}
		}
	}

	.no-3 {
		.context {
			max-width: 68rem;
			margin: 4rem auto;
		}
	}
	// .no-4 {
	// 	.model-text {
	// 		h1 {
	// 			margin-bottom: 1rem;
	// 		}
	// 		p {
	// 			color: #999999;
	// 			font-size: 0.75rem;
	// 			&:not(:last-child) {
	// 				margin-bottom: 0.5rem;
	// 			}
	// 		}
	// 		ol {
	// 			margin-top: 1rem;
	// 		}
	// 		li {
	// 			list-style: disc;
	// 			list-style-position: inside;
	// 			color: #0da056;
	// 			span {
	// 				color: #333333;
	// 			}
	// 			&:not(:last-child) {
	// 				margin-bottom: 0.5rem;
	// 			}
	// 		}
	// 	}
	// 	.image-box {
	// 		max-width: 32.5rem;
	// 	}
	// }
	.no-5 {
		.image-box {
			max-width: 68rem;
			margin: 4rem auto;
		}
		.consulting-button {
			margin: 0 auto;
		}
	}
}
</style>
