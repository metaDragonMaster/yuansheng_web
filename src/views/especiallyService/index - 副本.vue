<template>
	<div class="especially-service">
		<div class="banner">
			<h1>四大特色服务</h1>
			<div class="hr"></div>
			<h4>致力于打造原生农业产业一体化服务平台</h4>
		</div>
		<div class="centent limit-max-width">
			<ol class="flex-js-sb">
				<li v-for="item in list" :key="item.title" class="flex-column-js-sb">
					<div>
						<p class="title">{{ item.serviceName }}</p>
						<p class="subTitle">{{ item.subTitle }}</p>
						<div class="separate"></div>
						<ol class="subList">
							<li v-for="subItem in item.introduction">{{ subItem }}</li>
							<!-- <li >{{ item.introduction }}</li> -->
						</ol>
					</div>
					<button class="button">{{item.buttonText}}</button>
				</li>
			</ol>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list:[
				{
					serviceName: '专利技术服务',
					subTitle: 'Patented technical services',
					introduction: ['平台拥有多项农业专利', '平台专利可以授权用户使用，帮助用户增产增效', '平台拥有的科技力量可以协助用户申请自己的专利'],
					buttonText:"申请专利"
				},
				{
					serviceName: '原生认证服务',
					subTitle: 'Native authentication services',
					introduction: ['以种业安全为核心要素，以生态友好和环境友好技术为主要特征原生平台认证产品将保证从种子到筷子的食品安全'],
					buttonText:"申请认证"
				},
				{
					serviceName: '品牌授权服务',
					subTitle: 'Brand Licensing Services',
					introduction: ['优质的产品和优秀的企业可获得原生品牌使用许可以及平台全方位的技术支持统一的、良好的品牌形象，将赋予企业和产品更强的竞争力'],
					buttonText:"申请授权"
				},
				{
					serviceName: '企采金融服务',
					subTitle: 'Companies adopt services',
					introduction: ['更少的资金办更多的实事','只要有订单就能获得资金','只要有信誉就能获得资金','先赚钱，再还贷'],
					buttonText:"立即咨询"
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
		color: #FFFFFF;
		h1 {
			font-size: 104px;
			font-weight: 400;
			letter-spacing: 1px;
			padding-top: 114px;
		}
		h4 {
			border-top: 1px solid #FFFFFF;
			padding-top: 1rem;
			margin-top: 1rem;
			display: inline-block;
			font-size: 32px;
			font-weight: 400;
			letter-spacing: 2px;
		}
	}
	.centent {
		.flex-js-sb {
			margin-top: 4.5rem;
			margin-bottom: 4.5rem;
			& > li {
				flex: 1;
				background-color: #ffffff;
				padding: 2.25rem 1.875rem;
				min-height: 27.5rem;
				border: 1px solid #f2f2f2;
				border-radius: 0.25rem;
				transition: box-shadow 0.3s;
				&:not(:last-child) {
					margin-right: 2rem;
				}
				&:hover {
					box-shadow: 0 0 1rem -0.125rem rgba($color: #000000, $alpha: 0.3);
					// background-color: $ThemeColor;
					// .title,
					// .subList li,
					// .subTitle {
					// 	color: #ffffff;
					// }
					// .separate {
					// 	background-color: #ffffff;
					// }
				}
				.title {
					font-size: 1.5rem;
					color: #ff8000;
				}
				.subTitle {
					font-size: 0.75rem;
					color: #bbbbbb;
					margin: 0.75rem 0 1.75rem;
				}
				.separate {
					width: 5rem;
					height: 0.0625rem;
					background-color: #DDDDDD;

					margin-bottom: 3.25rem;
				}
			}
			.subList li {
				list-style: disc;
				list-style-position: inside;
				font-size: 0.75rem;
				color: #666666;
				&:not(:last-child) {
					margin-bottom: 1.5rem;
				}
			}
			.button {
				padding: 12px 34px ;
				font-size: 14px;
				color: #FFFFFF;
				background-color: $ThemeColor;
				border-radius: 3px;
				margin-top: 30px;
				width: fit-content;
			}
		}
	}
}
</style>
