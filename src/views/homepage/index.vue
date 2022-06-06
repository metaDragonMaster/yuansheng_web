\<template>
	<div id="homepage">
		<Banner></Banner>
		<CountTo></CountTo>
		<div class="no-2 limit-max-width ">
			<div class="mask-box wow fadeInUp">
				<!-- <img src="@/assets/images/homepage/enterprise/1.jpg" alt="" /> -->
				<img src="@/assets/imgs/homepage/masks/1.png" alt="" />
				<EasyMaskBox class="flex-align-center" v-for="(item, index) in no2ImageList" :key="index">
					<img :src="item.src" alt="图片错误" />
					<template #mask>
						<p><span>{{item.title}}</span></p>
						<span>{{item.text}}</span>
					</template>
				</EasyMaskBox>
			</div>
			<div class="no-model-title-center">
				<p>农业新标准</p>
				<span>AGRICULTURAL STANDARDS</span>
			</div>
			<div class="patent-model">
				<div class="patent-left wow fadeInLeft" :data-wow-duration="`${ 0.5 }s`">
					<h1>
						300
					</h1>
					<p>专利技术</p>
				</div>
				<ol class="patent-right wow fadeInRight" :data-wow-duration="`${ 0.5 }s`">
					<li class="flex-center" v-for="(item, index) in no2Patent" :key="index" >
						<img :src="item.src" >
					</li>
				</ol>
			</div>
		</div>
		<div class="homepage-model limit-max-width no-3">
			<div class="no-model-title-center">
				<p>特色服务</p>
				<span>CHARACTERISTIC SERVICE</span>
			</div>
			<ol class="flex-js-sb wow fadeInUp">
				<li v-for="item in no3List" :key="item.title">
					<img class="bg-image" :src="item.bgImage" alt="">
					<div class="info">
						<p class="title">{{ item.serviceName }}</p>
						<p class="subTitle">{{ item.subTitle }}</p>
						<div class="separate"></div>
						<ol class="subList">
							<li v-for="subItem in item.introduction">{{ subItem }}</li>
							<!-- <li >{{ item.introduction }}</li> -->
						</ol>
					</div>
				</li>
			</ol>
		</div>
		<div class="homepage-model limit-max-width no-4">
			<div class="no-model-title-center">
				<p>热门资讯</p>
				<span>INFORMATION</span>
			</div>
			<Hots></Hots>
		</div>
	</div>
</template>
<script>
import { WOW } from 'wowjs';
import ApiCommonBanner from "@/api/commonBanner.js";
import ApiCommonNews from "@/api/commonNews.js";

import Banner from "./modules/banner.vue"
import CountTo from "./modules/countTo.vue"
import Hots from "./modules/hots.vue"

import EasyMaskBox from '@/components/EasyMaskBox/index.vue';
export default {
	data() {
		return {
			no2ImageList:[
				// {
				// 	src:require('@/assets/images/homepage/enterprise/1.jpg'),
				// 	title:"湖南兴蔬种业",
				// 	text:"湖南兴蔬种业有限公司，由湖南省农科院蔬菜研究所发起成立，是一家集蔬菜科研、生产、销售于一体的高新技术企业",
				// },
				{
					src:require('@/assets/imgs/homepage/masks/2.png'),
					title:"汇美农业",
					text:"汇美农业科技有限公司，系国内生产和加工水果罐头的著名品牌，年产量超过5万吨，是中国罐头协会会员。",
				},
				{
					src:require('@/assets/imgs/homepage/masks/3.png'),
					title:"湖南湘佳",
					text:"湖南湘佳牧业股份有限公司是企业运营特征的优质鸡养殖与加工企业。",
				},
				{
					src:require('@/assets/imgs/homepage/masks/4.png'),
					title:"湖南金健米业",
					text:"开发、生产销售优质粮油及制品、农副产品、新型食品、油脂化工产品、优质稻种子，经营宾馆餐饮和公司自产产品及技术设备进出口业务。",
				},
				{
					src:require('@/assets/imgs/homepage/masks/5.png'),
					title:"河洲龟鳖",
					text:"河洲龟鳖创建于1998年，地处湖南省常德市，是一家以龟鳖生态养殖、种苗繁殖、合作社为一体的农业产业化龙头企业。",
				},
				{
					src:require('@/assets/imgs/homepage/masks/6.png'),
					title:"海大生物饲料",
					text:"广东海大集团股份有限公司是一家高科技集团企业，主要从事水产、畜牧饲料、苗种、动物保健产品、规模养殖和健康食品的研发和生产。",
				},
			],
			no2Patent:[
				{
					src:require('@/assets/images/homepage/patent/1.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/2.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/3.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/4.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/5.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/6.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/7.jpg'),
				},
				{
					src:require('@/assets/images/homepage/patent/8.jpg'),
				},
			],
			no3List: [
				{
					serviceName: '专利技术服务',
					subTitle: 'Patented technical services',
					introduction: ['平台拥有多项农业专利', '平台专利可以授权用户使用，帮助用户增产增效', '平台拥有的科技力量可以协助用户申请自己的专利'],
					bgImage:require("@/assets/imgs/homepage/service/1.png"),
				},
				{
					serviceName: '原生认证服务',
					subTitle: 'Native authentication services',
					introduction: ['以种业安全为核心要素，以生态友好和环境友好技术为主要特征原生平台认证产品将保证从种子到筷子的食品安全'],
					bgImage:require("@/assets/imgs/homepage/service/2.png"),
				},
				{
					serviceName: '品牌授权服务',
					subTitle: 'Brand Licensing Services',
					introduction: ['优质的产品和优秀的企业可获得原生品牌使用许可以及平台全方位的技术支持统一的、良好的品牌形象，将赋予企业和产品更强的竞争力'],
					bgImage:require("@/assets/imgs/homepage/service/3.png"),
				},
				{
					serviceName: '企采金融服务',
					subTitle: 'Companies adopt services',
					introduction: ['更少的资金办更多的实事','只要有订单就能获得资金','只要有信誉就能获得资金','先赚钱，再还贷'],
					bgImage:require("@/assets/imgs/homepage/service/4.png"),
				}
			],
		};
	},
	components: {
		Banner,
		CountTo,
		Hots,

		EasyMaskBox,
	},
	mounted() {
		this.$nextTick(() => {
			new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
			}).init();
		});
	},
	methods: {
	}
};
</script>
<style lang="scss" scoped="scoped">
#homepage {
	.homepage-model {
		overflow: hidden;
	}
	.no-model-title-center {
		p {
			font-size: 30px;
			margin-bottom: 8px;
		}
		span {
			color: #6AB783;
		}
	}
	.no-2 {
		padding-bottom: 68px;
		.mask-box {
			margin-top: 55px;
			display: grid;
			grid-template-columns: repeat(6,1fr);
			.easy-mask-box {
				margin-bottom: 2rem;
				::v-deepep .mask {
					display: flex;
					flex-direction: column;
					justify-content: center;
					color: #ffffff;
					background-color: $ThemeColor;
					padding: 0 2rem;
					& > span {
						font-size: 0.75rem;
					}
					p {
						margin-bottom: 1rem;
						height: 0.0625rem;
						background-color: #ffffff;
						span {
							background-color: $ThemeColor;
							padding-right: 1rem;
							// transform: translateY(-.5rem);
							position: relative;
							top: -0.5625rem;
						}
					}
				}
			}
		}
		.patent-model {
			margin-top: 45px;
			width: 100%;
			display: grid;
			grid-template-columns: 25rem auto;
			.patent-left {
				height: 18.75rem;
				width: 100%;
				// background-image: url(../../assets/demoImage/easy-demo.png);
				padding-left: 108px;
				padding-top: 74px;
				background-image: url(../../assets/images/homepage/bg_nyxbz.png);
				h1 {
					font-size: 90px;
					line-height: 90px;
					// position: relative;
					display: flex;
					color: #53B753;
					&::after {
						content: "+";
						line-height: 36px;
						font-size: 50px;
					}
				}
				p{
					font-size: 28px;
				}
			}
			.patent-right {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				// li {
				// 	// width: 226px;
				// 	&:nth-child(1),
				// 	&:nth-child(3),
				// 	&:nth-child(6),
				// 	&:nth-child(8) {
				// 		background-color: #f7f7f8;
				// 	}
				// 	&:nth-child(2),
				// 	&:nth-child(4),
				// 	&:nth-child(5),
				// 	&:nth-child(7) {
				// 		background-color: #ffffff;
				// 	}
				// }
			}
		}
	}
	.no-3 {
		background-image: url(../../assets/imgs/homepage/service/service-bg.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		padding-top: 55px;
		padding-bottom: 60px;
		.no-model-title-center {
			p {
				color: #FFFFFF;
			}
			span {
				color: #FFF00E;
			}
		}
		.flex-js-sb {
			margin-top: 45px;
			& > li {
				flex: 1;
				color: #FFFFFF;
				background-color: rgba($color: #A8F4BF, $alpha: 0.5);
				// padding: 2.25rem 1.875rem;
				min-height: 27.5rem;
				box-shadow: 0 0 0.5rem -0.125rem rgba($color: #000000, $alpha: 0.3);
				border-radius: 0.25rem;
				// transition: background-color 0.3s;
				// background-repeat: no-repeat;
				// background-position: 250% 145%;

				transition: background 0.2s;
				overflow: hidden;
				position: relative;
				.info {
					z-index: 10;
					position: absolute;
					left: 0 ;
					top: 0;
					padding: 2.25rem 1.875rem;
				}
				.bg-image {
					z-index: 9;
					opacity: 0.5;
					position: absolute;
					right: -100px;
					bottom: -110px;
					transition: right 0.2s,bottom 0.2s;
				}
				// &:nth-child(1) {
				// 	background-image: url(../../assets/imgs/homepage/service/1.png);
				// }
				// &:nth-child(2) {
				// 	background-image: url(../../assets/imgs/homepage/service/2.png);
				// }
				// &:nth-child(3) {
				// 	background-image: url(../../assets/imgs/homepage/service/3.png);
				// }
				// &:nth-child(4) {
				// 	background-image: url(../../assets/imgs/homepage/service/4.png);
				// }
				&:not(:last-child) {
					margin-right: 2rem;
				}
				.title {
					font-size: 1.5rem;
				}
				.subTitle {
					font-size: 0.75rem;
					margin: 0.75rem 0 1.75rem;
				}
				.separate {
					width: 135px;
					height: 0.0625rem;
					background-color: #FFF00E;
					margin-bottom: 30px;
				}
				&:hover {
					color: #333333;
					// background-position: 220% 135%;
					background-color: #FFFFFF;
					.bg-image {
						opacity: 1;
						// position: absolute;
						right: -80px;
						bottom: -90px;
					}
				}
			}
			.subList li {
				list-style: disc;
				list-style-position: inside;
				font-size: 0.75rem;
				&:not(:last-child) {
					margin-bottom: 1.5rem;
				}
			}
		}
	}
	.no-4 {
		padding-top: 80px;
		padding-bottom: 80px;
		.hots {
			margin-top: 45px;
		}
	}
}
</style>
