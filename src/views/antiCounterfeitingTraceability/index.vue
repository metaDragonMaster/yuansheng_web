<template>
	<div id="anti-counterfeiting-traceability">
		<div class="banner limit-max-width flex-column-center">
			<h4>区块链全球区块链溯源系统</h4>
			<div class="content">
				<el-form ref="Form" :model="Form" :rules="Rules" inline label-position="right">
					<el-form-item prop="sscode" label="唯一产品溯源码">
						<div class="flex">
							<el-input v-model="Form.sscode" clearable placeholder="请输入唯一产品溯源码" />
							<el-button class="submit-button">查询</el-button>
							<el-button plain>二维码查询</el-button>
						</div>
					</el-form-item>
				</el-form>
				<p class="flex-js-sard">
					<span>查询时间：2021-08-25 12:30:30</span>
					<span>查询次数：111</span>
					<span>
						条码装填：
						<span class="safe">安全</span>
					</span>
				</p>
			</div>
		</div>
		<div class="limit-max-width ">
			<div class="modelus-title" style="--color:#069B33;">
				<p>
					从种子到筷子的食品安全生态系统
					<span></span>
					<span></span>
					<span></span>
				</p>
			</div>
		</div>
		<div class="limit-max-width main-modules flex-column-center bg1">
			<el-timeline>
				<el-timeline-item>
					<template slot="dot">
						<!-- <img class="time-line-title-icon" src="@/assets/images/antiCounterfeitingTraceability/icon" alt=""> -->
						<img class="time-line-title-icon" src="../../assets/images/antiCounterfeitingTraceability/icon_chandi.png" alt="" />
					</template>
					<div class="time-line-title type-1">
						<h1>产地溯源</h1>
						<p>区块链标识：8qwr-8afg8-gadf-ertiu-559d8f</p>
					</div>
				</el-timeline-item>
				<el-timeline-item color="#069B87">产品名称：常德香米</el-timeline-item>
				<el-timeline-item color="#069B87" class="left">规格：50kg</el-timeline-item>
				<el-timeline-item color="#069B87">产地：常德市桃源县桃山村7组kg-87q地块</el-timeline-item>
				<el-timeline-item color="#069B87" class="left">生产时间：2021-08-25 10:30:30</el-timeline-item>
				<el-timeline-item color="#069B87">质检证书：</el-timeline-item>
				<el-timeline-item color="#069B87" class="left">产品证书：</el-timeline-item>
				<el-timeline-item color="#069B87">平台证书：</el-timeline-item>
			</el-timeline>
		</div>
		<div class="videos limit-max-width">
			<div class="modelus-title" style="--color:#F2A600;">
				<p>
					相关监控视频
					<span></span>
					<span></span>
					<span></span>
				</p>
			</div>
			<ul class="flex">
				<li>
					<img src="@/assets/images/antiCounterfeitingTraceability/videos1.png" alt="" />
					<span>实时稻田监控信息</span>
				</li>
				<li>
					<img src="@/assets/images/antiCounterfeitingTraceability/videos2.png" alt="" />
					<span>加工车间监控信息</span>
				</li>
				<li>
					<img src="@/assets/images/antiCounterfeitingTraceability/videos3.png" alt="" />
					<span>包装车间监控信息</span>
				</li>
			</ul>
		</div>
		<div class="limit-max-width main-modules flex-column-center bg2">
			<el-timeline>
				<el-timeline-item class="left">
					<template slot="dot">
						<img class="time-line-title-icon" src="../../assets/images/antiCounterfeitingTraceability/icon_cangchu.png" alt="" />
					</template>
					<div class="time-line-title type-2">
						<h1>仓储溯源</h1>
						<p>区块链标识：8qwr-8afg8-gadf-ertiu-559d8f</p>
					</div>
				</el-timeline-item>
				<el-timeline-item color="#4A9906" class="left">产品名称：常德香米</el-timeline-item>
				<el-timeline-item color="#4A9906">规格：50kg</el-timeline-item>
				<el-timeline-item color="#4A9906" class="left">产地：常德市桃源县桃山村7组kg-87q地块</el-timeline-item>
				<el-timeline-item color="#4A9906">生产时间：2021-08-25 10:30:30</el-timeline-item>
				<el-timeline-item color="#4A9906" class="left">质检证书：</el-timeline-item>
				<el-timeline-item color="#4A9906">产品证书：</el-timeline-item>
				<el-timeline-item color="#4A9906" class="left">平台证书：</el-timeline-item>
			</el-timeline>
		</div>
		<div class="limit-max-width main-modules flex-column-center">
			<el-timeline>
				<el-timeline-item>
					<template slot="dot">
						<img class="time-line-title-icon" src="../../assets/images/antiCounterfeitingTraceability/icon_wuliu.png" alt="" />
					</template>
					<div class="time-line-title type-3">
						<h1>物流配送溯源</h1>
						<p>区块链标识：8qwr-8afg8-gadf-ertiu-559d8f</p>
					</div>
				</el-timeline-item>
				<el-timeline-item color="#D99307">产品名称：常德香米</el-timeline-item>
				<el-timeline-item color="#D99307" class="left">规格：50kg</el-timeline-item>
				<el-timeline-item color="#D99307">产地：常德市桃源县桃山村7组kg-87q地块</el-timeline-item>
				<el-timeline-item color="#D99307" class="left">生产时间：2021-08-25 10:30:30</el-timeline-item>
				<el-timeline-item color="#D99307">质检证书：</el-timeline-item>
				<el-timeline-item color="#D99307" class="left">产品证书：</el-timeline-item>
				<el-timeline-item color="#D99307">平台证书：</el-timeline-item>
			</el-timeline>
		</div>
		<div class="limit-max-width main-modules flex-column-center">
			<el-timeline>
				<el-timeline-item class="left">
					<template slot="dot">
						<img class="time-line-title-icon" src="../../assets/images/antiCounterfeitingTraceability/icon_xiaoshou.png" alt="" />
					</template>
					<div class="time-line-title type-4">
						<h1>销售终端溯源</h1>
						<p>区块链标识：8qwr-8afg8-gadf-ertiu-559d8f</p>
					</div>
				</el-timeline-item>
				<el-timeline-item color="#51A5E6" class="left">产品名称：常德香米</el-timeline-item>
				<el-timeline-item color="#51A5E6">规格：50kg</el-timeline-item>
				<el-timeline-item color="#51A5E6" class="left">产地：常德市桃源县桃山村7组kg-87q地块</el-timeline-item>
				<el-timeline-item color="#51A5E6">生产时间：2021-08-25 10:30:30</el-timeline-item>
				<el-timeline-item color="#51A5E6" class="left">质检证书：</el-timeline-item>
				<el-timeline-item color="#51A5E6">产品证书：</el-timeline-item>
				<el-timeline-item color="#51A5E6" class="left">平台证书：</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			Form: {
				sscode: '' //	开户人姓名		false	string
			},
			Rules: {
				sscode: [{ required: true, message: '请输入法人手机号', trigger: 'blur' }]
			}
		};
	},
	components: {},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
//#anti-counterfeiting-traceability{}
.banner {
	// height: ;
	background-image: url(../../assets/images/antiCounterfeitingTraceability/banner-bg.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	color: #ffffff;
	h4 {
		-webkit-box-reflect: below -6px -webkit-gradient(linear, left top, left bottom, from(rgba($color: transparent, $alpha: 0)), to(rgba(0, 0, 0, 0.1)));
		margin: 2rem 0;
		font-size: 1.5rem;
	}
	.content {
		background-color: rgba($color: #031d2a, $alpha: 0.8);
		margin-bottom: 44px;
		::v-deep .el-form-item__label {
			color: #ffffff;
		}
		.el-form {
			padding: 2.25rem;
			.el-form-item:last-child {
				margin-bottom: 0;
			}
			.submit-button {
				background-color: #069b87;
				border-color: #069b87;
				color: #ffffff;
			}
			.is-plain {
				background-color: transparent;
				color: #069b87;
				border-color: #069b87;
			}
		}
		.el-input {
			width: 31.25rem;
			margin-right: 0.625rem;
		}
		p.flex-js-sard {
			padding-bottom: 1.375rem;
			font-size: 12px;
			.safe {
				color: #069b87;
			}
		}
	}
}
.bg1 {
	background-image: url(../../assets/images/antiCounterfeitingTraceability/bg_chandisy.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
} 
.bg2 {
	background-image: url(../../assets/images/antiCounterfeitingTraceability/bg_cangchusy.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.modelus-title {
	text-align: center;
	padding: 2.5rem 0;
	p {
		font-size: 2rem;
		font-weight: bold;
		display: inline-block;
		position: relative;
		color: var(--color,#069b87);
		span {
			&::after,
			&::before {
				content: '';
				display: block;
				background-color: var(--color,#069b87);
				position: absolute;
				border-radius: 50%;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		span:nth-child(1) {
			&::after,
			&::before {
				width: 0.375rem;
				height: 0.375rem;
			}
			&::after {
				left: -1rem;
			}
			&::before {
				right: -1rem;
			}
		}
		span:nth-child(2) {
			&::after,
			&::before {
				width: 0.5rem;
				height: 0.5rem;
			}
			&::after {
				left: -2.5rem;
			}
			&::before {
				right: -2.5rem;
			}
		}
		span:nth-child(3) {
			&::after,
			&::before {
				width: 0.7rem;
				height: 0.7rem;
			}
			&::after {
				left: -4.25rem;
			}
			&::before {
				right: -4.25rem;
			}
		}
	}
}
.videos {
	.flex {
		text-align: center;
		li:not(:last-child) {
			margin-right: 1.875rem;
		}
	}
}
.main-modules {
	padding-top: 5rem;
	.el-timeline {
		position: relative;
		right: -162px;
	}
	.el-timeline-item.left {
		right: 100%;
		text-align: right;
		padding-right: 28px;
		::v-deep.el-timeline-item__tail {
			left: inherit;
			right: -6px;
		}
		::v-deep.el-timeline-item__node--normal {
			left: inherit;
			right: -11px;
		}
	}
	::v-deep .el-timeline-item:first-child {
		.el-timeline-item__dot {
			top: -10px;
			left: -17px;
		}
	}
	::v-deep .el-timeline-item:first-child.left {
		padding-right: 0;
		.el-timeline-item__dot {
			left: inherit;
			top: -10px;
			right: -27px;
		}
		.el-timeline-item__wrapper {
			padding-left: 0;
			padding-right: 28px;
		}
	}
	.time-line-title {
		h1 {
			font-weight: 500;
		}
		p {
			border: 1px solid;
			padding: 6px 10px;
		}
		&.type-1 {
			p {
				border-color: rgba($color: #069b87, $alpha: 0.5);
				background-color: rgba($color: #069b87, $alpha: 0.1);
				color: #069b87;
			}
		}
		&.type-2 {
			p {
				border-color: rgba($color: #4a9906, $alpha: 0.5);
				background-color: rgba($color: #4a9906, $alpha: 0.1);
				color: #4a9906;
			}
		}
		&.type-3 {
			p {
				border-color: rgba($color: #d99307, $alpha: 0.5);
				background-color: rgba($color: #d99307, $alpha: 0.1);
				color: #d99307;
			}
		}
		&.type-4 {
			p {
				border-color: rgba($color: #51A5E6, $alpha: 0.5);
				background-color: rgba($color: #51A5E6, $alpha: 0.1);
				color: #51A5E6;
			}
		}
		
	}
	.time-line-title-icon {
		// position: absolute;
	}
}
</style>
