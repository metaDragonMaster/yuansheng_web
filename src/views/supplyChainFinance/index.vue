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
		<ul class="flex-js-sb limit-max-width no-1">
			<li>
				<img src="../../assets/imgs/supplyChainFinance/11.png" alt="" />
				<div class="info">
					<h3>订单质押服务</h3>
					<ol>
						<li><span>企业获得订单</span></li>
						<li><span>提交供应链金融平台审核</span></li>
						<li><span>农信担保</span></li>
						<li><span>获得订单质押贷款</span></li>
					</ol>
					<button type="button" @click="toDetails">立即申请</button>
				</div>
			</li>
			<li>
				<img src="../../assets/imgs/supplyChainFinance/12.png" alt="" />
				<div class="info">
					<h3>信用担保贷款</h3>
					<ol>
						<li><span>企业获得订单</span></li>
						<li><span>提交供应链金融平台审核</span></li>
						<li><span>农信担保</span></li>
						<li><span>获得订单质押贷款</span></li>
					</ol>
					<button type="button" @click="toDetails">立即申请</button>
				</div>
			</li>
		</ul>
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
				require('@/assets/imgs/supplyChainFinance/1.png'),
				require('@/assets/imgs/supplyChainFinance/2.png'),
				require('@/assets/imgs/supplyChainFinance/3.png'),
				require('@/assets/imgs/supplyChainFinance/4.png'),
				require('@/assets/imgs/supplyChainFinance/5.png'),
				require('@/assets/imgs/supplyChainFinance/6.png'),
				require('@/assets/imgs/supplyChainFinance/7.png'),
				require('@/assets/imgs/supplyChainFinance/8.png'),
				require('@/assets/imgs/supplyChainFinance/9.png'),
				require('@/assets/imgs/supplyChainFinance/10.png')
			]
		};
	},
	methods: {
		toDetails() {
			this.$routerUtil.toPath('/supplyChainFinance/details');
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.supply-chain-finance {
	.banner {
		height: 600px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url(../../assets/imgs/supplyChainFinance/banner-bg.png);
		// position: relative;
		padding-top: 182px;
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
			ul {
				// border-top: 1px solid #FFFFFF;
				padding-top: 1rem;
				margin-top: 1rem;
				li {
					&::before {
						content: '';
						display: inline-block;
						width: 0.75rem;
						height: 0.75rem;
						border-radius: 50%;
						background-color: #ffffff;
						margin-right: 1rem;
					}
				}
			}
			button {
				background-color: #53b753;
				color: #ffffff;
				padding: 10px 44px;
				margin-top: 55px;
			}
		}
	}
	.no-1 {
		padding-top: 100px;
		padding-bottom: 100px;
		& > li {
			// width: 520px;
			flex: 1;
			padding: 35px 0;
			box-shadow: 0 0 0.5rem -0.125rem rgba($color: #3b8f3e, $alpha: 0.3);
			// border: 1px solid #f2f2f2;
			transition: box-shadow 0.3s;
			display: grid;
			grid-template-columns: 167px 1fr;
			border-radius: 3px;
			&:first-child {
				margin-right: 46px;
			}
			&:hover {
				box-shadow: 0 0 1rem -0.125rem rgba($color: #3b8f3e, $alpha: 0.3);
				img {
					animation: 0.6s imgMove infinite alternate ease-in-out;
				}
			}
			img {
				width: fit-content;
				margin: 0 auto;
			}
			@keyframes imgMove {
				0% {
					margin-top: 0;
				}
				100% {
					margin-top: 20px;
				}
			}
			h3 {
				margin-bottom: 20px;
				font-size: 24px;
			}
			ol {
				display: grid;
				grid-template-columns: 1fr 1fr;
				li {
					list-style-type: disc;
					list-style-position: inside;
					margin-bottom: 20px;
					color: #53b753;
					span {
						color: #666666;
					}
				}
			}
			button {
				background-color: #53b753;
				color: #ffffff;
				padding: 10px 44px;
				margin-top: 6px;
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
			li {
				box-shadow: 0 0 0.5rem -0.125rem rgba($color: #3b8f3e, $alpha: 0.3);
			}
		}
	}
}
</style>
