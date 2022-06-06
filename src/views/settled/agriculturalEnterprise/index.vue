<template>
	<div id="agricultural-enterprise">
		<div class="limit-max-width no-1 ">
			<h1>农资企业入驻</h1>
			<h3>直面消费者</h3>
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication',{ type : 3 })">
				立即入驻
			</button>
		</div>
		<div class="page-model limit-max-width no-2 ">
			<div class="no-model-title-center">
				<p>关于农资集采</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
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
			<div class="image-box">
				<img src="@/assets/imgs/settled/bg_banner3.png" alt="">
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
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication',{ type : 3 })">
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
		no4
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
#agricultural-enterprise {
	.page-model {
		padding-top: 3.375rem;
		padding-bottom: 3.375rem;
		&:nth-child(odd) {
			background-color: #F9FCFB;
		}
	}
	.consulting-button {
		color: #FFFFFF;
		background-color: #53B753;
		width: 200px;
		height: 52px;
		font-size: 1.25rem;
		border-radius: 0.25rem;
		font-weight: 500;
		letter-spacing: 0.125rem;
		text-indent: 0.125rem;
		display: block;
	}
	.no-1 {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url(../../../assets/imgs/settled/agriculturalEnterprise/banner-bg.png);
		height: 400px;
		color: #FFF;
		h1 {
			font-size: 70px;
			padding-top: 5.625rem;
		}
		h3 {
			font-size: 30px;
			margin-bottom: 1.5rem;
		}
	}

	.no-2 {
	}

	.no-3{
		.context {
			max-width: 68rem;
			margin: 4rem auto;
		}
	}
	// .no-4{
	// 	background-image: url(../../../assets/imgs/settled/mobg.png);
	// 	background-size: cover;
	// 	background-position: center;
	// 	background-repeat: no-repeat;
	// 	.model-text {
	// 		color: #FFF;
	// 		h1 {
	// 			margin-bottom: 1rem;
	// 		}
	// 		p {
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
	// 				color: #FFF;
	// 			}
	// 			&:not(:last-child) {
	// 				margin-bottom: .5rem;
	// 			}
	// 		}
	// 	}
	// 	.image-box {
	// 		max-width: 520px;
	// 	}
	// }
	.no-5{
		.image-box {
			max-width: 68rem;
			margin: 4rem auto;
		}
		.consulting-button {
			margin: 0 auto;
			// background-color: #047934;
		}
	}
}
</style>
