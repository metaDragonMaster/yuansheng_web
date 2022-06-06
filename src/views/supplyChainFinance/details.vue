<template>
	<div class="view limit-max-width">
		<button class="backButton" @click="$routerUtil.toPath('/supplyChainFinance')">< 返回</button>
		<div class="card">
			<h2 class="card-title-header">
				订单质押服务
				<span>订单质押，生产无忧</span>
			</h2>
			<ol class="tabs">
				<li>合伙企业</li>
				<li>民生基础</li>
				<li>订单质押</li>
				<li>惠及面广</li>
			</ol>
			<h3>目标客户</h3>
			<span>合伙企业、小型加工企业等小微企业和种植、养殖大户</span>
			<h3>产品优势</h3>
			<ul class="list-int-number">
				<li>帮助小微企业获得金融支持；</li>
				<li>帮助小微企业增收，解决得到订单，却因缺少资金影响生产的问题；</li>
				<li>帮助加工企业增储粮源，增加收入；</li>
				<li>帮助交收库扩大仓储规模；</li>
				<li>技防+人防多层监管，保证粮食安全。</li>
			</ul>
		</div>
		<div class="card introduce">
			<div class="card-title-hr">
				<p>产品介绍</p>
			</div>
			<h4>一、产品简介</h4>
			<span>
				订单质押服务是以合伙企业为主的小微企业为目标用户的普惠供应链金融产品。贷款主体为合伙企业、小型加工企业等小微企业和种植、养殖大户。合伙企、小型加工企业签订生产订单之后，即可通过原生联平台批量向银行申请金融贷款，将生产订单质押给银行，由银行保管，原生联平台居中担保，确保生产按计划进行，确保银行资金安全。
			</span>
			<h4>二、目标客户</h4>
			<span>合伙企业、小型加工企业和种植、养殖大户。</span>
			<h4>三、业务模式</h4>
			<span>原生联生产订单+合伙企业/小微企业（借款主体）+金融机构。</span>
			<h4>四、业务流程</h4>
			<ul class="list-int-number">
				<li>合伙企业/小微企业与原生联平台签订生产订单；</li>
				<li>合伙企业/小微企业向原生联平台提交借款申请；</li>
				<li>原生联平台筛选借款申请，审核通过后，向银行提交金融贷款申请；</li>
				<li>银行审核贷款资质，并收取生产订单作为质押；</li>
				<li>银行向合伙企业/小微企业放款。</li>
			</ul>
			<h4>五、具体操作</h4>
			<ul class="list-int-number">
				<li>
					申请
					<p>合伙企业/小微企业与原生联平台签订生产订单，凭借原生联平台生产订单号向平台提出贷款申请；</p>
				</li>
				<li>
					推送和担保
					<p>原生联平台初选，把符合条件的合伙企业/小微企业推送银行批量申请贷款，并且提供担保；</p>
				</li>
				<li>
					放款
					<p>借款、担保手续办理完毕后，银行进行放款；</p>
				</li>
				<li>
					还款
					<p>还款到期前，合伙企业/小微企业的销售款由原生联平台代收，销售款将优先归还银行贷款。</p>
				</li>
			</ul>
			<h4>六、产品优势</h4>
			<ul class="list-int-number">
				<li>帮助合伙企业/小微企业获得金融支持；</li>
				<li>帮助合伙企业/小微企业增收，解决得到订单，却因缺少资金影响生产的问题；</li>
				<li>帮助合伙企业/小微企业扩大生产规模，增加收入；</li>
				<li>多层监管，平台担保，平台代收货款，保证资金安全。</li>
			</ul>
			<h4>
				七、相关制度、合同及协议
			</h4>
			<ul class="list-int-number">
				<li>《保证合同》</li>
				<li>《借款合同》</li>
				<li>《承诺函》</li>
				<li>《监管合同》</li>
				<li>《平台采购合同》</li>
				<li>《代理销售协议》</li>
			</ul>
			<button class="submit-button">
				立即申请
			</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped="scoped">
.view {
	background-color: #F2F2F2;
	padding-bottom: 30px;
	padding-top: 72px;
	.backButton {
		margin: 1rem 0;
		&:hover {
			color: #069b87;
		}
	}
	.submit-button {
		color: #FFFFFF;
		background-color: #069b87;
		width: 160px;
		height: 46px;
		margin: 30px 0 ;
		border-radius: 4px;
	}
	.card {
		background-color: #FFFFFF;
		padding: 35px 60px;
		&:not(:last-child) {
			margin-bottom: 30px;
		}
	}
	.tabs {
		display: flex;
		li {
			border: 1px solid #D9D9D9;
			padding: 4px 8px;
			margin-right: 10px;
		}
		& ~ h3 {
			margin-top: 1rem;
			margin-bottom: 0.25rem;
		}
	}
	.introduce {
		padding: 0 60px;
		h4 {
			padding-top: 1rem;
		}
		h4 + span {
			padding: 2rem;
		}
		h4 + ul {
			padding-left: 2rem;
		}
		.card-title-hr {
			font-size: 20px;
			font-weight: bold;
			// padding: 1rem 0;
			border-bottom: 2px solid #F2F2F2;
			p {
				display: inline-block;
				padding: 1rem 0;
				border-bottom: 2px solid #069B87;
				margin-bottom: -2px;
			}
		}
	}
	.card-title-header {
		font-size: 32px;
		margin-bottom: 1rem;
		span {
			font-size: 16px;
			font-weight: 400;
		}
	}
	.tabs,
	.list-int-number,
	span {
		color: #666666;
	}

	.list-int-number {
		li {
			list-style-type: number;
			list-style-position: inside;
			margin-top: 0.25rem;
		}
	}
}
</style>
