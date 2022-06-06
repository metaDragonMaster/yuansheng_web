<template>
	<div class="supply-chain-finance">
		<div class="banner limit-max-width">
			<div class="content">
				<h3>农业供应链金融信贷服务</h3>
				<h1>为您的农业生产保驾护航</h1>
				<ul class="flex-js-sb">
					<li>订单直通采购商</li>
					<li>公平公正撮合交易</li>
					<li>贷款可分期还款</li>
				</ul>
				<button type="button">立即咨询</button>
			</div>
		</div>
		<div class="limit-max-width no-1">
			<ul class="flex-center-js-sard">
				<li>
					<img src="../../assets/iconImages/icon_dingdan.png" alt="">
					<div class="info">
						<h3>订单质押服务</h3>
						<ol>
							<li>企业获得订单</li>
							<li>提交供应链金融平台审核</li>
							<li>农信担保</li>
							<li>获得订单质押贷款</li>
						</ol>
						<button type="button" @click="toDetails">
							立即申请
						</button>
					</div>
				</li>
				<li>
					<img src="../../assets/iconImages/icon_xinyong.png" alt="">
					<div class="info">
						<h3>信用担保贷款</h3>
						<ol>
							<li>企业获得订单</li>
							<li>提交供应链金融平台审核</li>
							<li>农信担保</li>
							<li>获得订单质押贷款</li>
						</ol>
						<button type="button" @click="toDetails">
							立即申请
						</button>
					</div>
				</li>
			</ul>
		</div>
		<div class=" limit-max-width no-2">
			<div class="no-model-title-center">
				<p>合作伙伴</p>
				<span>COOPERATIVE PARTNER</span>
			</div>
			<ol class="grid">
				<li v-for="item in partners" :key="item.title"><img :src="item" alt="" /></li>
			</ol>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			partners: [
				require('@/assets/images/supplyChainFinance/pic_youzheng.png'),
				require('@/assets/images/supplyChainFinance/pic_nongye.png'),
				require('@/assets/images/supplyChainFinance/pic_jianshe.png'),
				require('@/assets/images/supplyChainFinance/pic_zhanshang.png'),
				require('@/assets/images/supplyChainFinance/pic_gongshang.png'),
				require('@/assets/images/supplyChainFinance/pic_mingsheng.png'),
				require('@/assets/images/supplyChainFinance/pic_jiaotong.png'),
				require('@/assets/images/supplyChainFinance/pic_pufa.png'),
				require('@/assets/images/supplyChainFinance/pic_zhongguo.png'),
				require('@/assets/images/supplyChainFinance/pic_zhongxin.png')
			]
		};
	},
	methods: {
		toDetails() {
			this.$routerUtil.toPath("/supplyChainFinance/details");
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.supply-chain-finance {
	.banner {
		height: 500px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url(../../assets/images/supplyChainFinance/banner_jinrong.png);
		// position: relative;
		padding-top: 140px;
		color: #ffffff;
		.content {
			padding-left: 90px;
			width: 642px;
			h3 {
				font-weight: 400;
				font-size: 24px;
			}
			h1 {
				font-size: 50px;
			}
			ul{
				border-top: 1px solid #FFFFFF;
				padding-top: 1rem;
				margin-top: 1rem;
				li{
					&::before {
						content: "";
						display: inline-block;
						width: .75rem;
						height: .75rem;
						background-color: #FFFFFF;
						transform: rotateZ(45deg);
						margin-right: 1rem;
					}
				}
			}
			button {
				background-color: #FFFFFF;
				color: #121212;
				padding: 12px 34px;
				border-radius: 3px;
				margin-top: 1rem;
			}
		}
	}
	.no-1{
		padding-top: 100px;
		padding-bottom: 100px;
		ul {
			& > li {
				width: 520px;
				padding: 35px 0;
				// box-shadow: 0 0 0.5rem -0.125rem rgba($color: #000000, $alpha: 0.3);
				border: 1px solid #f2f2f2;
				transition: box-shadow 0.3s;
				display: grid;
				grid-template-columns: 167px 1fr;
				border-radius: 3px;
				&:hover {
					box-shadow: 0 0 1rem -0.125rem rgba($color: #000000, $alpha: 0.3);
				}
				img {
					width: fit-content;
					margin: 0 auto;
				}
				h3 {
					margin-bottom: 20px;
					font-size: 28px;
				}
				ol {
					li {
						list-style-type: decimal;
						list-style-position: inside;
						margin-bottom: 1rem;
						color: #666666;
					}
				}
				button {
					background-color: #069B87;
					color: #FFFFFF;
					padding: 12px 34px;
					border-radius: 3px;
					margin-top: 1rem;
				}
			}
		}
	}
	.no-2 {
		padding-top: 56px;
		padding-bottom: 56px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url(../../assets/images/supplyChainFinance/img_hezuohb.png);
		.no-model-title-center {
			padding-bottom: 40px;
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-gap: 20px;
		}
	}
}
</style>
