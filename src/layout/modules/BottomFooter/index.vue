<template>
	<div id="bottom-footer" :class="{ other: other == true }">
		<div class="limit-max-width flex" v-show="$route.meta.easyFooter!=true">
			<!-- <img src="@/assets/images/topnavbar/ysl-logo.png" v-show="!other" alt="" class="ysl-logo" /> -->
			<img src="@/assets/images/bottomfooter/logo-white.png" v-show="!other" alt="" class="ysl-logo" />
			<img src="@/assets/images/bottomfooter/bottom-logo.png" v-show="other" alt="" class="ysl-logo" />

			<ol class="bottom-dl-list-ol">
				<dl v-for="dlItem in dlList" :key="dlItem.dt">
					<dt>{{ dlItem.dt }}</dt>
					<dd v-for="ddItem in dlItem.dds">
						<span @click="ddItem.onClick">{{ ddItem.label }}</span>
					</dd>
				</dl>
			</ol>
			<ol class="qrcode-list-ol">
				<li>
					<img src="@/assets/images/bottomfooter/qrcode.png" alt="" />
					<span>官方公众号</span>
				</li>
				<li>
					<img src="@/assets/images/bottomfooter/qrcode.png" alt="" />
					<span>扫码下载APP</span>
				</li>
			</ol>
		</div>
		<textCenter></textCenter>
	</div>
</template>
<script>
import textCenter from "./text-center.vue"
export default {
	data() {
		return {
			dlList: [
				{
					dt: '快速入驻',
					dds: [
						{
							label: '合伙企业',
							onClick: () => {}
						},
						{
							label: '农资企业',
							onClick: () => {}
						},
						{
							label: '加工企业',
							onClick: () => {}
						},
						{
							label: '采购商',
							onClick: () => {}
						}
					]
				},
				{
					dt: '特色服务',
					dds: [
						{
							label: '专利技术服务',
							onClick: () => {}
						},
						{
							label: '原生认证服务',
							onClick: () => {}
						},
						{
							label: '品牌授权服务',
							onClick: () => {}
						}
					]
				},
				{
					dt: '供应链金融',
					dds: [
						{
							label: '订单质押',
							onClick: () => {}
						},
						{
							label: '信用担保贷款',
							onClick: () => {}
						}
					]
				},
				{
					dt: '原生资讯',
					dds: [
						{
							label: '资讯',
							onClick: () => {}
						},
						{
							label: '要闻',
							onClick: () => {}
						},
						{
							label: '领导关怀',
							onClick: () => {}
						}
					]
				}
				// {
				// 	"dt":"平台规则",
				// 	"dds":[
				// 		{
				// 			"label":"违规处理",
				// 			"onClick":()=>{}
				// 		},
				// 	]
				// }
			]
		};
	},
	props: {
		other: {
			type: Boolean,
			default: false
		}
	},
	components: {
		textCenter
	},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#bottom-footer {
	// background-color: #21242D;
	// .hr {
	// 	background-color: #717171;
	// 	height: 0.0625rem;
	// 	display: block;
	// 	overflow: hidden;
	// }
	box-shadow: 0 -2px 6px 0 rgba($color: #000000, $alpha: 0.03);
	// color: #FFFFFF;
	background-color: #53b753;
}
.bottom-dl-list-ol,
.bottom-dl-list-ol dt,
// .text-center,
.qrcode-list-ol span {
	color: #ffffff;
}
.other {
	.limit-max-width.flex {
		background-color: #069b87;
	}
	.limit-max-width.text-center {
		background-color: #069481;
	}
}
.limit-max-width.flex {
	padding-top: 2.625rem;
	padding-bottom: 2.625rem;
}
// .limit-max-width.text-center {
// 	background-color: #F4F4F4;
// 	// background-color: #ffffff;
// 	padding-top: 2.625rem;
// 	padding-bottom: 2.625rem;
// 	font-size: 0.75rem;
// 	.a-link {
// 		cursor: pointer;
// 	}
// 	p:not(:last-child) {
// 		margin-bottom: 1rem;
// 	}
// 	img {
// 		width: 1rem;
// 		height: 1rem;
// 		margin-top: -4px;
// 		margin-right: 4px;
// 	}
// }
.qrcode-list-ol {
	display: flex;
	img {
		width: 5.625rem;
	}
	li {
		display: flex;
		flex-direction: column;
		margin-left: 1.875rem;
		font-size: 0.75rem;
		text-align: center;
	}
}
.ysl-logo {
	width: 180px;
	height: 110px;
	margin-right: 158px;
}
.bottom-dl-list-ol {
	display: flex;
	dl {
		margin-right: 6.25rem;
		// &:not(:last-child) {
		// 	// margin-right: 5.25rem;
		// }
		// &:last-child {
		// 	margin-right: 3.625rem;
		// }
		dt {
			// color: #0d0d0d;
			margin-bottom: 1.875rem;
			font-weight: bold;
		}
		dd {
			font-size: 0.75rem;
			&:not(:last-child) {
				padding-bottom: 1.25rem;
			}
			span {
				cursor: pointer;
				// &:hover,
				// &:active {
				// 	color: #ff5600;
				// }
			}
		}
	}
}
</style>
