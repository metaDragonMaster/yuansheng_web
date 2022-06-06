<template>
	<div class="order-details">
		<div class="sub-title"><p class="title">订单详情</p></div>
		<div class="detail-info">
			<p class="tip">
				<span>订单号:223262311047</span>
				<span>2021-09-23 19:46:31</span>
				<span>交易对方:常德原生农业发展有限公司</span>
				<span>
					订单状态:
					<span class="span-success">待发货</span>
				</span>
			</p>
			<ol class="detail-grid-card">
				<li class="info-card">
					<img src="@/assets/demoImage/easy-demo.png" alt="" />
					<div class="flex-column-js-sb">
						<p>微耕机柴油汽油旋耕机松土机锄草机除草机小型拖拉机农用机械田园翻地机起垄耕地机</p>
						<span>这里显示商品类目</span>
						<span>这里显示型号规格</span>
					</div>
				</li>
				<li class="flex-column-center">x10</li>
				<li class="flex-column-center">
					<span>￥99.00</span>
					<span class="span-info">已支付</span>
				</li>
				<li class="flex-column-center"><span class="span-success">待发货</span></li>
				<li class="flex-column-center">
					<el-button type="warning" plain>催单</el-button>
					<el-link type="info">申请取消</el-link>
					<!-- <el-link type="danger">申请取消</el-link> -->
				</li>
			</ol>
		</div>
		<div class="order-steps-grid-card">
			<div class="order-statis">
				<p>待发货</p>
				<el-button type="warning" plain>催单</el-button>
			</div>
			<div class="order-steps">
				<p class="ps span-info">尊敬的用户，请注意您的订单状态，如还未发货，请点击“催单”按钮进行催单。</p>
				<el-steps :space="200" :active="1" align-center>
					<el-step title="提交订单" description="2021-09-23 19:46:31"></el-step>
					<el-step title="支付首款" description="2021-09-23 19:48:24"></el-step>
					<el-step title="商品出库" description=""></el-step>
					<el-step title="确认收货" description=""></el-step>
					<el-step title="支付尾款" description=""></el-step>
				</el-steps>
			</div>
		</div>
		<ol class="order-timeline-grid-card">
			<li class="flex" v-for="item in timeLineList">
				<time>{{ item.dayTime }}</time>
				<ul class="time-line-steps">
					<li class="flex" v-for="stepItem in item.steps">
						<time>{{ stepItem.time }}</time>
						<div class="line flex-column-js-sb">
							<p>{{ stepItem.title }}</p>
							<span>{{ stepItem.subTitle }}</span>
						</div>
					</li>
				</ul>
			</li>
		</ol>
	</div>
</template>
<script>
export default {
	data() {
		return {
			timeLineList: [
				{
					dayTime: '2021-09-23/周日',
					steps: [
						{
							time: '19:48:24',
							title: '支付首款',
							subTitle: '您已支付首款'
						},
						{
							time: '19:48:24',
							title: '提交订单',
							subTitle: '您已提交了订单，请等待第三方卖家系统确认'
						}
					]
				},
				{
					dayTime: '2021-09-23/周日',
					steps: [
						{
							time: '19:48:24',
							title: '支付首款',
							subTitle: '您已支付首款'
						},
						{
							time: '19:48:24',
							title: '提交订单',
							subTitle: '您已提交了订单，请等待第三方卖家系统确认'
						}
					]
				}
			]
		};
	},
	components: {},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.span-success {
	color: #069b87;
}
.span-warning {
	color: #ff8000;
}
.span-info {
	color: #999999;
}
.el-button--warning.is-plain {
	background-color: transparent;
}
.el-button--warning {
	color: #ff8000;
	border-color: #ff8000;
	background-color: #ff8000;
}
.el-button--warning.is-plain:focus,
.el-button--warning.is-plain:hover {
	color: #ffffff;
	border-color: #ff8000;
	background-color: #ff8000;
}

.detail-info {
	font-size: 14px;
	.tip {
		background-color: #f9f9f9;
		padding: 10px 20px;
		color: #666666;
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 1fr;
	}
	.detail-grid-card {
		margin: 40px 0;
		display: grid;
		grid-template-columns: 450px repeat(4, 1fr);
		.info-card {
			display: grid;
			grid-template-columns: 100px auto;
			grid-gap: 15px;
			padding-right: 30px;
			img {
				height: 100px;
			}
			span {
				color: #999999;
			}
		}
		li:not(:first-child) {
			border-left: 1px solid #f2f2f2;
			& > * {
				margin-bottom: 10px;
			}
		}
	}
}
.order-steps-grid-card {
	border-top: 1px solid #f2f2f2;
	border-bottom: 1px solid #f2f2f2;
	padding: 20px 0;
	display: grid;
	grid-template-columns: 238px auto;
	align-items: center;
	.order-statis {
		width: fit-content;
		margin: 0 auto;
		text-align: center;
		p {
			color: #ff8000;
			font-size: 26px;
			margin-bottom: 10px;
		}
	}
	.order-steps {
		min-height: 180px;
		border-left: 1px solid #f2f2f2;
		.ps {
			font-size: 12px;
			padding-left: 20px;
			margin: 16px 0;
		}
		::v-deep .el-step {
			.el-step__head:not(.is-wait) .el-step__icon {
				color: #ffffff;
				background-color: #069b87;
				border: #069b87;
			}
			.el-step__head:not(.is-wait) + .el-step__main {
				.el-step__title {
					color: #069b87;
				}
			}
			.el-step__icon {
				width: 30px;
				height: 30px;
				border-width: 1px;
			}
			.el-step__line {
				top: 14px;
				width: 50%;
				margin-left: 25%;
				background-color: #dddddd;
				height: 1px;
			}
			.el-step__icon-inner {
				font-weight: 500;
			}
			.el-step__title.is-process {
				font-weight: 500;
			}
			.el-step__title.is-wait {
				color: #333333;
			}
			.el-step__description:not(.is-wait) {
				color: #333333;
			}
		}
	}
}

//垂直步骤 时间线
.order-timeline-grid-card {
	padding: 40px;
	font-size: 14px;
	& > .flex time {
		margin-right: 20px;
	}
	.time-line-steps {
		.line {
			position: relative;
			padding: 0 0 16px 24px;
			p {
				font-weight: 700;
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
				display: block;
				background-color: #cccccc;
			}
			&::before {
				width: 7px;
				height: 7px;
				top: 6px;
				left: 0;
				border-radius: 50%;
			}
			&::after {
				height: calc(100% - 12px);
				width: 1px;
				top: 16px;
				left: 3px;
			}
		}
	}
	& > li:first-child .time-line-steps > li:first-child .line::before{
		background-color: #FF8000;
		border: 4px solid #ffe2c4;
		box-sizing: content-box;
		top: 0;
		left: -4px;
	}
	& > li:last-child .time-line-steps > li:last-child .line::after {
		height: 0;
	}
}
</style>
