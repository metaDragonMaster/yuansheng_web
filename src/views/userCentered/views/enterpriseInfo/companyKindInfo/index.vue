<template>
	<!-- 企业信息种类集成类 -->
	<div id="company-kind-info">
		<!-- 
			address: "北京东城小巷口"
			bankName: "102362023993"
			bankNo: "123456"
			bankPhoneNo: "15584849568"
			bankUserName: "123"
			certificationNo: "431023196802131616"
			cityNo: "110000,110100,110101"
			contactCertificationNo: "431023196802131616"
			contactName: "何赛花"
			contactPhoneNo: "15684849595"
			cooperativeLv: null
			id: 1
			licenseCode: "123456"
			licenseCodePhoto: "https://web.yuanshengl.com/web/image/1632640532389_d5e66c61eb532c09cbdf02b96107cb59.jpg"
			mcc: "农耕"
			name: "农耕合作社"
			phoneNo: "15584849568"
			pid: null
			realName: "何赛花"
			status: 3

		 -->
		<p class="info—title-companymsg">工商信息</p>
		<div class="info-companymsg-content flex">
			<ol class="content-leftmsg">
				<li class="msg-item flex">
					<p class="item-name">企业名称：</p>
					<p class="item-content">{{ cooperativeInfo.name }}</p>
				</li>
				<li class="msg-item flex">
					<p class="item-name">法人代表：</p>
					<p class="item-content">{{ cooperativeInfo.realName }}</p>
				</li>
				<li class="msg-item flex">
					<p class="item-name">注册地址：</p>
					<p class="item-content">{{ cooperativeInfo.address }}</p>
				</li>
				<li class="msg-item flex">
					<p class="item-name">对公账户：</p>
					<p class="item-content">{{ cooperativeInfo.bankNo }}</p>
				</li>
				<li class="msg-item flex">
					<p class="item-name">原生认证：</p>
					<p class="item-content">{{ cooperativeInfo.cooperativeLv }}</p>
				</li>
			</ol>
			<div class="content-rightimg"><img :src="cooperativeInfo.licenseCodePhoto" alt="营业执照" /></div>
		</div>
		<p class="info—title-companymsg" style="margin-top: 20px">管理员</p>
		<div class="info-companypower-content">
			<div class="power-item flex">
				<p>一级管理员：</p>
				<div class="power-item-admins flex">
					<p v-for="(item, index) in Vo1List">
						{{ item.realName}}
					</p>
				</div>
			</div>
			<div class="power-item flex">
				<p>二级管理员：</p>
				<div class="power-item-admins flex">
					<p v-for="(item, index) in Vo2List">
						{{ item.realName }}
						{{Vo2List.length != index + 1?'、':'。'}}
					</p>
				</div>
			</div>
		</div>
<!-- 		<div class="info-companypower-content">
			<div class="power-item flex" v-for="(item, index) in adminVoList">
				<p>{{ item.adminPower }}：</p>
				<div class="power-item-admins flex">
					<p v-for="(pitem, pindex) in item.powerNameList">
						{{ pitem.name}}
						{{item.powerNameList.length != pindex + 1?'、':''}}
					</p>
				</div>
			</div>
		</div> -->
		<!-- 
		 {{item.powerNameList.length != pindex + 1?'、':''}}
		 -->
	</div>
</template>

<script>
import Api from "@/api/nzjcuserCooperative.js"
export default {
	data() {
		return {
			cooperativeInfo:{},
			adminVoList:[],
			
			adminData: [
				{
					adminPower: '一级管理员',
					powerNameList: [
						{
							name: '张三',
							isAuditing: false
						}
					],
					isCanAdd: true
				},
				{
					adminPower: '二级管理员',
					powerNameList: [
						{
							name: '王五',
							isAuditing: true
						},
						{
							name: '李四',
							isAuditing: false
						},
						{
							name: '刘书华',
							isAuditing: true
						},
					],
					isCanAdd: true
				}
			]
		};
	},
	activated() {
		this.$nextTick(()=>{
			this.selectCooperativeInfo();
		})
	},
	mounted() {
		this.$nextTick(()=>{
			this.selectCooperativeInfo();
		})
	},
	computed:{
		Vo1List() {
			return this.adminVoList.filter(item=>item.adminLv == 1)
		},
		Vo2List() {
			return this.adminVoList.filter(item=>item.adminLv == 2)
		},
	},
	methods: {
		async selectCooperativeInfo() {
			let {data} = await Api.selectCooperativeInfo();
			console.log(data)
			this.cooperativeInfo = data;
			this.adminVoList = data.adminVoList;
		}
	}
};
</script>

<style lang="scss" scoped>
#company-kind-info {
	.info—title-companymsg {
		margin-top: 10px;
		color: #333333;
		font-size: 14px;
		font-weight: bold;
	}

	.info-companymsg-content {
		font-size: 14px;
		color: #666666;

		.content-leftmsg {
			flex: 6.2;
			min-width: 120px;
			padding-right: 40px;

			.msg-item {
				margin-top: 30px;

				.item-name {
					min-width: 70px;
				}

				.item-content {
					color: #333333;
				}
			}
		}

		.content-rightimg {
			flex: 3.8;

			img {
				width: 206px;
				height: 300px;
			}
		}
	}

	.info-companypower-content {
		font-size: 14px;
		color: #333333;
		margin-bottom: 30px;
		.power-item:nth-child(1) {
			margin-top: 28px;
		}
		.power-item {
			margin-top: 32px;
			align-items: baseline;
			&>p {
				min-width: 6rem;
			}
			.item-add {
				width: 60px;
				height: 30px;
				border: 1px solid #dfdfdf;
				border-radius: 4px;
				color: #333333;
				font-weight: bold;
				margin-left: 10px;
			}

			.item-add:active {
				background-color: #e5e1e1;
			}
			.power-item-admins {
				flex-wrap: wrap;
				align-items: center;
				&> p {
					padding: 0.5rem 0;
				}
			}
		}
	}
}
</style>
