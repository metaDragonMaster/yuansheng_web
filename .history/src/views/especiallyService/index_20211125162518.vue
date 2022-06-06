<template>
	<div class="especially-service">
		<div class="banner">
			<h1>四大特色服务</h1>
			<div class="hr"></div>
			<h4>致力于打造原生农业产业一体化服务平台</h4>
		</div>
		<div class="centent limit-max-width">
			<ol class="list">
				<li v-for="item in list" :key="item.title">
					<div class="flex-center card-image">
						<img :src="item.image" alt />
						<span>{{ item.serviceName }}</span>
					</div>
					<ol class="subList">
						<li v-for="subItem in item.introduction">{{ subItem }}</li>
						<!-- <li >{{ item.introduction }}</li> -->
					</ol>
					<button class="button">{{ item.buttonText }}</button>
				</li>
			</ol>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{
					serviceName: '专利技术服务',
					subTitle: 'Patented technical services',
					introduction: ['平台拥有多项农业专利', '平台专利可以授权用户使用，帮助用户增产增效', '平台拥有的科技力量可以协助用户申请自己的专利'],
					buttonText: "申请专利",
					image: require("@/assets/imgs/especiallyService/1.png"),
				},
				{
					serviceName: '原生认证服务',
					subTitle: 'Native authentication services',
					introduction: ['以种业安全为核心要素，以生态友好和环境友好技术为主要特征原生平台认证产品将保证从种子到筷子的食品安全'],
					buttonText: "申请认证",
					image: require("@/assets/imgs/especiallyService/2.png"),
				},
				{
					serviceName: '品牌授权服务',
					subTitle: 'Brand Licensing Services',
					introduction: ['优质的产品和优秀的企业可获得原生品牌使用许可以及平台全方位的技术支持统一的、良好的品牌形象，将赋予企业和产品更强的竞争力'],
					buttonText: "申请授权",
					image: require("@/assets/imgs/especiallyService/3.png"),
				},
				{
					serviceName: '企采金融服务',
					subTitle: 'Companies adopt services',
					introduction: ['更少的资金办更多的实事', '只要有订单就能获得资金', '只要有信誉就能获得资金', '先赚钱，再还贷'],
					buttonText: "立即咨询",
					image: require("@/assets/imgs/especiallyService/4.png"),
				}
			],
		}
	},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.especially-service {
	.banner {
		height: 500px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url(../../assets/images/especiallyService/banner_tesefw.png);
		text-align: center;
		color: #ffffff;
		h1 {
			font-size: 104px;
			font-weight: 400;
			letter-spacing: 1px;
			padding-top: 114px;
		}
		h4 {
			border-top: 1px solid #ffffff;
			padding-top: 1rem;
			margin-top: 1rem;
			display: inline-block;
			font-size: 32px;
			font-weight: 400;
			letter-spacing: 2px;
		}
	}
	.centent {
		ol.list {
			margin-top: 4.5rem;
			margin-bottom: 4.5rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 32px;
			& > li {
				box-shadow: 4px 5px 15px 0px rgba(59, 143, 62, 0.11);

				.card-image {
					position: relative;
					height: 150px;
					color: #ffffff;
					font-size: 24px;
					img {
						position: absolute;
						left: 0;
						top: 0;
						bottom: 0;
						right: 0;
						z-index: -1;
						filter: blur(1px);
					}
				}
				.subList {
					padding: 22px 25px;
					li {
						list-style: disc;
						list-style-position: inside;
						font-size: 0.75rem;
						color: #666666;
						&:not(:last-child) {
							margin-bottom: 1.5rem;
						}
					}
				}
				.button {
					padding: 6px 28px;
					font-size: 14px;
					color: #ffffff;
					width: fit-content;
					margin: 0 auto;
					display: inline-block;
				}
			}
		}
	}
}
</style>
