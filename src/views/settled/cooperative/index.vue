<template>
	<div id="settled-cooperative">
		<div class="no-1 limit-max-width flex-column-center">
			<h1>合伙企业入驻</h1>
			<h4>
				C O O P E R A T I V E S E T T L E M E N T
				<span></span>
			</h4>
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication', { type: 1 })">立即入驻</button>
		</div>
		<div class="page-model limit-max-width no-2 ">
			<div class="no-model-title-center">
				<p>关于合伙企业</p>
				<span>ABOUT THE PARTNERSHI</span>
			</div>
			<IntroduceCard :data="IntroduceCardData"></IntroduceCard>
		</div>
		<div class="no-3 limit-max-width">
			<div class="no-model-title-center">
				<p>专属权益</p>
				<span>EXCLUSIVE RIGHTS</span>
			</div>
			<div class="model-content">
				<EasySlidSelect :list="no3List">
					<template v-slot="{ item }">
						<div class="no-3-models-box">
							<img :src="item.image" alt="" />
							<div class="no-3-model-mask">
								<div class="title">{{ item.title }}</div>
								<div class="hr"></div>
								<span class="subText">{{ item.subText }}</span>
							</div>
						</div>
					</template>
				</EasySlidSelect>
			</div>
		</div>
		<div class="no-4 limit-max-width">
			<div class="no-model-title-center">
				<p>入驻流程</p>
				<span>IN THE PROCESS</span>
			</div>
			<div class="model-content">
				<el-steps :active="currentIndex" align-center finish-status="wait">
					<el-step v-for="(step, index) in steps" :key="step.title" :title="step.title">
						<template #icon>
							{{ index + 1 }}
						</template>
					</el-step>
				</el-steps>
				<div class="model-step-box"></div>
			</div>
			<button class="consulting-button" @click="$routerUtil.toPath('/authentication', { type: 1 })">立即入驻</button>
		</div>
	</div>
</template>
<script>
import IntroduceCard from '@/components/SomeWhere/IntroduceCard.vue';
import EasySlidSelect from '@/components/EasySlidSelect/index.vue';
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
			no3List: [
				{
					title: '身份权益',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png')
				},
				{
					title: '报价权益66',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png')
				},
				{
					title: '专属终端',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png'),
					src: '@/assets/images/settled/cooperative/no3-demo.png'
				},
				{
					title: '订单反馈',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png')
				},
				{
					title: '维权通道',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png')
				},
				{
					title: '金融权益',
					subText: '您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处',
					image: require('@/assets/images/settled/cooperative/no3-demo.png')
				}
			],
			currentIndex: 2,
			steps: [
				{
					title: '申请入驻'
				},
				{
					title: '填写资料'
				},
				{
					title: '平台审核'
				},
				{
					title: '入驻成功'
				}
			]
		};
	},
	components: {
		EasySlidSelect,
		IntroduceCard
	},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#settled-cooperative {

.no-2,
	.no-3,
	.no-4 {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
	.consulting-button {
		color: #ffffff;
		background-color: #53B753;
		width: 200px;
		height: 52px;
		font-size: 1.25rem;
		border-radius: 0.25rem;
		font-weight: 500;
		letter-spacing: 0.125rem;
		text-indent: 0.125rem;
		display: block;
		margin: 0 auto;
	}
	.no-1 {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(../../../assets/imgs/settled/cooperative/bg-banner.png);
		height: 400px;
		// color: #047934;
		color: #FFFFFF;
		h1 {
			font-size: 70px;
			font-weight: 500;
			margin-bottom: 16px;
		}
		h4 {
			font-size: 24px;
			font-weight: 500;
			width: 31.25rem;
			text-align: justify;
			span {
				display: inline-block;
				width: 100%;
			}
		}
	}

	.no-3 {
		background-repeat: no-repeat;
		background-position: bottom left;
		background-size: 100% 25rem;
		background-image: url(../../../assets/images/settled/cooperative/no3-bg.png);
		min-height: 50rem;
		.model-content {
			padding-top: 2rem;
		}
		.no-3-models-box {
			position: relative;
			color: #ffffff;
			height: 23.75rem;
			width: 100%;
			img {
				// position: absolute;
				// left: 0;
				// top: 0;
				width: 100%;
				height: 100%;
				// z-index: -1;
			}
			.no-3-model-mask {
				position: absolute;
				top: 0;
				right: 0;
				width: 34.375rem;
				height: 100%;
				background-color: rgba($color: #001224, $alpha: 0.8);
				padding: 5.625rem 3.75rem;
				.hr {
					background-color: $ThemeColor;
					height: 0.125rem;
					width: 2.25rem;
					margin-top: 1.25rem;
					margin-bottom: 2.25rem;
				}
				.title {
					font-size: 1.5rem;
				}
				span {
					font-size: 0.875rem;
				}
			}
		}
	}
	.no-4 {

		.model-content {
			::v-deep .el-steps {
				max-width: 40.625rem;
				margin: 3.125rem auto;
			}
			::v-deep .el-step__icon {
				width: 3rem;
				height: 3rem;
				font-size: 1.375rem;
			}
			::v-deep .el-step__line {
				top: 1.5rem;
			}
			::v-deep .el-step__title.is-process,
			::v-deep .el-step__title.is-success {
				color: $ThemeColor;
			}
			::v-deep .el-step__head.is-process,
			::v-deep .el-step__head.is-success {
				border-color: $ThemeColor;
				color: #ffffff;
			}
			::v-deep .el-step__icon.is-text {
				background-color: $ThemeColor;
			}
			::v-deep .el-step__head.is-wait {
				border-color: #333333;
			}
			::v-deep .el-step__head.is-wait .el-step__icon.is-text {
				background-color: #333333;
			}
			.model-step-box {
				background-color: #001224;
			}
		}
	}
}
</style>
