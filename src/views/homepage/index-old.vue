<template>
	<div id="homepage">
		<div class="homepage-model no-1">
			<div class="banner limit-max-width ">
				<p class="h-title">
					<span>原生联</span>
					<span>产业互联网服务平台</span>
				</p>
				<p class="p-title">
					<span>以原生农业国标为核心要素，运用产业互联网平台化整合赋能模式，利用供应链金融服务杠杆，归集碎</span>
					<span>片化农业生产资源，联合农业龙头企业优势互补、抱团发展，形成新的产业价值链生态系统，提升农业</span>
					<span>产业的集约化、品牌化和产业化水平，推进农业供给侧结构性改革和高质量发展，助力乡村振兴。</span>
				</p>
			</div>
		<!-- 	<div class="banner swiper-banner">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) in no1BannerList" :key="index"
					:style="{'background-image':`url(${item.bannerImage})`}">

					</div>
				</div>
			</div> -->
			<div class="banner-model limit-max-width">
				<div class="drift-right">
					<ul class="ul-count-to">
						<li>
							<span>成交规模</span>
							<p>
								<countTo :startVal="0" :endVal="10000" suffix="+" :duration="3000"></countTo>
								<span>亿元</span>
							</p>
						</li>
						<li>
							<span>入驻合伙企业</span>
							<p>
								<countTo :startVal="0" :endVal="1600" suffix="+" :duration="3000"></countTo>
								<span>万家</span>
							</p>
						</li>
						<li>
							<span>平台供应商</span>
							<p>
								<countTo :startVal="0" :endVal="4592" suffix="+" :duration="3000"></countTo>
								<span>万家</span>
							</p>
						</li>
						<li>
							<span>采购商数</span>
							<p>
								<countTo :startVal="0" :endVal="2483" suffix="+" :duration="3000"></countTo>
								<span>万家</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="homepage-model limit-max-width no-2">
			<div class="mask-box wow fadeInUp">
				<!-- <img src="@/assets/images/homepage/enterprise/1.jpg" alt="" /> -->
				<img src="@/assets/demoImage/easy-demo.png" alt="" />
				<EasyMaskBox v-for="(item, index) in no2ImageList" :key="index">
					<img :src="item.src" alt="图片错误" />
					<template #mask>
						<p><span>{{item.title}}</span></p>
						<span>{{item.text}}</span>
					</template>
				</EasyMaskBox>
			</div>
			<div class="no-model-title-left-border">
				<p>农业新标准</p>
				<span>AGRICULTURAL STANDARDS</span>
				<button drift-right>
					查看更多>
				</button>
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
					<p class="title">{{ item.serviceName }}</p>
					<p class="subTitle">{{ item.subTitle }}</p>
					<div class="separate"></div>
					<ol class="subList">
						<li v-for="subItem in item.introduction">{{ subItem }}</li>
						<!-- <li >{{ item.introduction }}</li> -->
					</ol>
				</li>
			</ol>
		</div>
		<div class="homepage-model limit-max-width no-4">
			<div class="no-model-title-left-border">
				<p>热门资讯</p>
				<span>INFORMATION</span>
			</div>

			<div class="content flex-js-sb">
				<div class="swiper-box">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item, index) in no4ImageList" :key="index">
								<img :src="item.src" />
								<!-- <img src="@/assets/images/homepage/hot/1.jpg" /> -->
								<div class="swiper-info">
									<div class="swiper-title">{{ item.title }}</div>
								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<ul class="information-model">
					<li v-for="(item, index) in no4InformationList" :key="index" @click="$routerUtil.toPath('/information/details',{id:item.newsId})" class="wow fadeInRight" :data-wow-duration="`${ (index + 1)*0.3 }s`">
						<img :src="item.newsTitleImage" alt="" />
						<div class="flex-column-js-sard">
							<p class="font-hide">{{ item.newsTitle }}</p>
							<span class="font-hide-2" v-html="item.newsContent"></span>
							<!-- <span class="font-hide-2" >{{item.newsContent}}</span> -->
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import ApiCommonBanner from "@/api/commonBanner.js";
import ApiCommonNews from "@/api/commonNews.js";

import EasyMaskBox from '@/components/EasyMaskBox/index.vue';
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
import { WOW } from 'wowjs';
import countTo from 'vue-count-to';
export default {
	data() {
		return {

			no1BannerList: [],
			no2ImageList:[
				// {
				// 	src:require('@/assets/images/homepage/enterprise/1.jpg'),
				// 	title:"湖南兴蔬种业",
				// 	text:"湖南兴蔬种业有限公司，由湖南省农科院蔬菜研究所发起成立，是一家集蔬菜科研、生产、销售于一体的高新技术企业",
				// },
				{
					src:require('@/assets/images/homepage/enterprise/2.jpg'),
					title:"汇美农业",
					text:"汇美农业科技有限公司，系国内生产和加工水果罐头的著名品牌，年产量超过5万吨，是中国罐头协会会员。",
				},
				{
					src:require('@/assets/images/homepage/enterprise/3.jpg'),
					title:"湖南湘佳",
					text:"湖南湘佳牧业股份有限公司是企业运营特征的优质鸡养殖与加工企业。",
				},
				{
					src:require('@/assets/images/homepage/enterprise/4.jpg'),
					title:"湖南金健米业",
					text:"开发、生产销售优质粮油及制品、农副产品、新型食品、油脂化工产品、优质稻种子，经营宾馆餐饮和公司自产产品及技术设备进出口业务。",
				},
				{
					src:require('@/assets/images/homepage/enterprise/5.jpg'),
					title:"河洲龟鳖",
					text:"河洲龟鳖创建于1998年，地处湖南省常德市，是一家以龟鳖生态养殖、种苗繁殖、合作社为一体的农业产业化龙头企业。",
				},
				{
					src:require('@/assets/images/homepage/enterprise/6.jpg'),
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
				},
				{
					serviceName: '原生认证服务',
					subTitle: 'Native authentication services',
					introduction: ['以种业安全为核心要素，以生态友好和环境友好技术为主要特征原生平台认证产品将保证从种子到筷子的食品安全']
				},
				{
					serviceName: '品牌授权服务',
					subTitle: 'Brand Licensing Services',
					introduction: ['优质的产品和优秀的企业可获得原生品牌使用许可以及平台全方位的技术支持统一的、良好的品牌形象，将赋予企业和产品更强的竞争力']
				},
				{
					serviceName: '企采金融服务',
					subTitle: 'Companies adopt services',
					introduction: ['更少的资金办更多的实事','只要有订单就能获得资金','只要有信誉就能获得资金','先赚钱，再还贷']
				}
			],
			no4ImageList: [
				{
					src: require('@/assets/images/homepage/hot/1.jpg'),
					title: '云南省耕地质量保护与提升办法'
				},
				{
					src: require('@/assets/images/homepage/hot/2.jpg'),
					title: '云南省耕地质量保护与提升办法'
				},
				{
					src: require('@/assets/images/homepage/hot/3.jpg'),
					title: '云南省耕地质量保护与提升办法'
				},
			],
			no4InformationList: [
				{
					src: require('@/assets/images/homepage/no4-list-1.png'),
					title: '原生联数字化采购打通中小企业供需造血能力需造血能力',
					subText: '近日，原生联企业采购推出“企业复工扶持计划”，打造“企采商”业务，面向平台上3000万中小企业提供一站式数字化采数字化采'
				},
				{
					src: require('@/assets/images/homepage/no4-list-2.png'),
					title: '降本千万俱乐部再添一员，泰山石膏累积数字累积数字',
					subText: '泰山石膏有限公司与原生联企业采购平台达成战略合作，依托原生联互联网技术构建企业采购管理平台。'
				},
				{
					src: require('@/assets/images/homepage/no4-list-3.png'),
					title: '原生联企业采购推供应链金融保理，24小时吸24小时吸',
					subText: '近日，南京大田科技开发有限公司在原生联企业采购平台上一笔与江苏省交通工程集团有限公司的交易获得融资，成功解决了成功解决了'
				}
			],
			_banner: undefined,
			_swiper: undefined,
		};
	},
	components: {
		EasyMaskBox,
		countTo
	},
	mounted() {
		this.$nextTick(() => {
			this.swiperInit();
			// this.getBanner();
			// this.getHotNews();
			new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				// live: false,
				// offset: 100,
				// mobile: true
			}).init();
		});
	},

	methods: {
		swiperInit() {
			let swiperOption = {
				el: '.swiper-container',
				loop: true, //循环
				// autoplay : true,
				autoplay: {
					delay: 3000 //自动切换的时间间隔，单位ms
				},
				pagination: {
					//分页符
					el: '.swiper-pagination',
					clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
				}
			}
			this._swiper = new Swiper('.swiper-container', swiperOption);
		},
		async getBanner() {
			let swiperOption = {
				el: '.swiper-banner',
				loop: true, //循环
				// autoplay : true,
				autoplay: {
					delay: 3000 //自动切换的时间间隔，单位ms
				},
				// pagination: {
				// 	//分页符
				// 	el: '.swiper-pagination',
				// 	clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
				// }
			}
			this._banner = new Swiper('.swiper-banner', swiperOption);
			let res = await ApiCommonBanner.getHomeBanner();
			this.no1BannerList = res.data;
		},
		async getHotNews() {
			let {code,data,msg} = await ApiCommonNews.getHotNews();

			let list = data.slice(0,3);
			for (let i in list) {
				let html = list[i].newsContent.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '').replace(/<br\/?>/gi, '').replace(/<[^>/]+>/g, '').replace(/(\n)?<\/([^>]+)>/g, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ').replace(/<\/?(img)[^>]*>/gi, '').replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;/g,"\'").replace(/&quot;/g,"\"").replace(/<\/?.+?>/g,"")
				let x = html.slice(0,60)+'...'
				list[i].newsContent = x;
			}
			this.no4InformationList = list;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">

#homepage {
	.homepage-model {
		// @include mixin-limit-max-width;
		&:nth-child(even) {
			background-color: #f2f3f5;
		}
	}
}
.no-2,
.no-3,
.no-4 {
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
}

.no-1 {
	position: relative;
	padding-bottom: 8.5rem;
	.banner,
	.banner-model {
		background-repeat: no-repeat;
		background-position: center;
	}
	.swiper-banner {
	}
	.banner {
		color: #ffffff;
	// 	// height: 34.375rem;
		height: 33.125rem;
		background-size: cover;
		background-position: center;
		background-image: url(../../assets/images/homepage/no1-banner.png);
		.h-title {
			padding-top: 5.5rem;
			margin-bottom: 1.25rem;
			span:first-child {
				font-size: 6.75rem;
			}
			span:last-child {
				font-size: 4.375rem;
			}
		}
		.p-title {
			span {
				display: block;
				margin-bottom: 0.75rem;
			}
		}
	}
	.banner-model {
		height: 11.125rem;
		// margin-top: -2.625rem;
		z-index: 8;
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		background-image: url(../../assets/images/homepage/no1-banner-model.png);
		.drift-right {
			width: 62rem;
			height: 8.5rem;
		}
		.ul-count-to {
			height: 100%;
			margin-top: 2.625rem;
			color: #ffffff;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			align-items: center;
			li {
				& > span {
					margin-left: 2.5rem;
					font-size: 0.75rem;
				}
				p {
					text-align: center;
					span:first-child {
						font-size: 2.5rem;
						white-space: nowrap;
					}
					span:last-child {
						font-size: 1rem;
					}
				}
			}
		}
	}
}

.no-2 {
	box-shadow: 0 0.5rem 0.5rem -0.25rem rgba($color: #000000, $alpha: 0.3) inset;
	.mask-box {
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
				&::after {
					content: "+";
					// position: absolute;
					// top: 0;
					// right: 0;
					line-height: 20px;
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
			li {
				width: 12.5rem;
				&:nth-child(1),
				&:nth-child(3),
				&:nth-child(6),
				&:nth-child(8) {
					background-color: #f7f7f8;
				}
				&:nth-child(2),
				&:nth-child(4),
				&:nth-child(5),
				&:nth-child(7) {
					background-color: #ffffff;
				}
			}
		}
	}
}

.no-3 {
	background-image: url(../../assets/images/homepage/no3-bg.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	.flex-js-sb {
		margin-top: 4.5rem;
		& > li {
			flex: 1;
			background-color: #ffffff;
			padding: 2.25rem 1.875rem;
			min-height: 27.5rem;
			box-shadow: 0 0 0.5rem -0.125rem rgba($color: #000000, $alpha: 0.3);
			border-radius: 0.25rem;
			transition: background-color 0.3s;
			&:not(:last-child) {
				margin-right: 2rem;
			}
			&:hover {
				background-color: $ThemeColor;
				.title,
				.subList li,
				.subTitle {
					color: #ffffff;
				}
				.separate {
					background-color: #ffffff;
				}
			}
			.title {
				font-size: 1.5rem;
				color: $ThemeColor;
			}
			.subTitle {
				font-size: 0.75rem;
				color: #ff8000;
				margin: 0.75rem 0 1.75rem;
			}
			.separate {
				width: 3.75rem;
				height: 0.0625rem;
				background-color: #bbbbbb;
				margin-bottom: 3.25rem;
			}
		}
		.subList li {
			list-style: disc;
			list-style-position: inside;
			font-size: 0.75rem;
			color: #999999;
			&:not(:last-child) {
				margin-bottom: 1.5rem;
			}
		}
	}
}

.no-4 {
	.content {
		.swiper-box {
			width: 44.375rem;
			height: 19.375rem;
			img {
				height: 100%;
				width: 100%;
			}
			.swiper-container {
				position: relative;
				// left: 1rem;
				// top: 1rem;
				height: 100%;
				width: 100%;
				/*重置覆盖分页器的样式*/
				.swiper-pagination {
					text-align: right;
					padding-right: 1rem;
				}
				::v-deep .swiper-pagination-bullet {
					border-radius: 0;
					width: 6px;
					height: 6px;
					background-color: #ffffff;
					opacity: 1;
					margin: 0 2px;
				}
				/*重置覆盖分页器激活时的样式表现*/
				::v-deep .swiper-pagination-bullet-active {
					background-color: $ThemeColor;
				}
				.swiper-info {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 3.125rem;
					line-height: 3.125rem;
					padding-left: 1rem;
					background-color: rgba($color: #000000, $alpha: 0.3);
					.swiper-title {
						color: #ffffff;
					}
				}
			}
		}
		.information-model {
			width: 26.5rem;
			li {
				display: grid;
				grid-template-columns: 4.375rem auto;
				grid-gap: 1rem;
				border-bottom: 0.0625rem solid #e4e4e4;
				padding: 1rem 0;
				cursor: pointer;
				&:hover p {
					color: #ff5600;
				}
				img {
					width: 4.375rem;
					height: 4.375rem;
				}
				span {
					font-size: 0.75rem;
					color: #999999;
				}
			}
		}
	}
}
</style>
