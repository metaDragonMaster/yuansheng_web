<template>
	<div id="authentication-view">
		<LogoBanner title="用户入驻"></LogoBanner>
		<EasyBreadCrumb limit :breads="breads" ref="EasyBreadCrumb"></EasyBreadCrumb>
		<!-- {{userInfo}} -->
	<!-- 	<div class="limit-max-width">
			<el-button type="danger" @click="testDelete(1)">删合作社</el-button>
			<el-button type="danger" @click="testDelete(2)">删供应商</el-button>
			<p>{{"formAuthenType:"+formAuthenType}}</p>
			<p>{{"userInfo:"}}{{userInfo}}</p>
			<p>{{"breads:"}}{{breads}}</p>
		</div> -->
		<div class="limit-max-width">
			<el-steps :active="progress" align-center process-status="finish">
				<el-step v-for="(step, index) in steps" :key="step.title" :title="step.title">
					<template #icon>
						{{ index + 1 }}
					</template>
				</el-step>
			</el-steps>
			<AuthenticationRegister v-if="progress == 0" @submit="submit"></AuthenticationRegister>
			<AccountAuthentication v-if="progress == 1" @submit="submit"></AccountAuthentication>
			<UploadCertificatesPhotos v-if="progress == 2" @submit="submit"></UploadCertificatesPhotos>
			<ToExamine v-if="progress == 3" @submit="submit"></ToExamine>
			<PaymentAuthentication  v-if="progress == 4" @submit="submit"></PaymentAuthentication>
			<Success v-if="progress == 5" ></Success>
		</div>
	</div>
</template>
<script>
import LogoBanner from '@/components/LogoBanner/index.vue';
import EasyBreadCrumb from '@/components/EasyBreadCrumb/index.vue';
import AuthenticationRegister from './modules/AuthenticationRegister/index.vue';
import AccountAuthentication from './modules/AccountAuthentication.vue';
import UploadCertificatesPhotos from './modules/UploadCertificatesPhotos/index.vue';
import PaymentAuthentication from './modules/PaymentAuthentication.vue';
import ToExamine from './modules/ToExamine.vue';
import Success from './modules/Success.vue';

import ApiNzjcuserCooperative from "@/api/nzjcuserCooperative.js"
import ApiNzjcuserMerchant from '@/api/nzjcuserMerchant.js';
import ApiNzjcuserProcess from '@/api/nzjcuserProcess.js';
import ApiNzjcuserPurchase from '@/api/nzjcuserPurchase.js';
import { mapActions, mapGetters } from 'vuex';
import {
	getToken,
	removeToken
} from "@/utils/auth.js";
export default {
	data() {
		return {
			// progress: -1, //当前用户认证进度
			progress: 0, //当前用户认证进度
			breads: [],
			steps: [
				{ title: '资料上传' },
				{ title: '账户' },
				{ title: '图片上传' },
				{ title: '平台审核' },
				{ title: '打款验证' },
				{ title: '成功' },
			],
			currentType:undefined,
			authentications: [
				{
					type: 1,
					title: '合作社入驻',
					formAuthenType:'cooperativeId',
					selectSpeed: ApiNzjcuserCooperative.selectCooperativeAuditSpeed,
				},
				{
					type: 2,
					title: '农超企入驻',
					formAuthenType:'purchaseId',
					selectSpeed:ApiNzjcuserPurchase.selectPurchaseAuditSpeed
				},
				{
					type: 3,
					title: '农资企业入驻',
					formAuthenType:'merchantId',
					selectSpeed:ApiNzjcuserMerchant.selectMerchantAuditSpeed
				},
				{
					type: 4,
					title: '加工企业入驻',
					formAuthenType:'processId',
					selectSpeed:ApiNzjcuserProcess.selectProcessAuditSpeed
				}
			],
			statusList:[
				// (0待上传图片，1已经提交人工审核，2审核成功待打款验证，3成功，-1审核失败， -2打款验证失败，-3冻结)
				{
					value: 0,
					label: '待上传图片',
					handle: () =>{
						this.submit(2)
					}
				},
				{
					value: 1,
					label: '已经提交人工审核',
					handle: () =>{
						this.submit(3)
						this.setToExamineType('success')
					}
				},
				{
					value: 2,
					label: '审核成功待打款验证',
					handle: () =>{
						this.submit(4)
					}
				},
				{
					value: 3,
					label: '成功',
					handle: () =>{
						this.$routerUtil.toName("basicManagement");
					}
				},
				// {
				// 	value: 4,
				// 	label: '待上传图片',
				// 	handle: () =>{
				// 		this.submit(2)
				// 	}
				// },
				{
					value: -1,
					label: '审核失败',
					handle: () =>{
						this.submit(3)
						this.setToExamineType('warning')
					}
				},
				{
					value: -2,
					label: '打款验证失败',
					handle: () =>{
						this.submit(4)
						this.setFormFail(true);
						// this.$nextTick(()=>{
						// 	this.$refs['PaymentAuthenticationDom'].handleFail(true);
						// })
					}
				},
				{
					value: -3,
					label: '冻结',
					handle: () =>{
						this.submit(3)
						// this.$refs['ToExamineDom'].handle('danger')
						this.setToExamineType('danger')
					}
				},
			],
		};
	},
	components: {
		LogoBanner,
		EasyBreadCrumb,
		AuthenticationRegister,
		AccountAuthentication,
		UploadCertificatesPhotos,
		ToExamine,
		PaymentAuthentication,
		Success,
	},
	computed:{
		...mapGetters(['userInfo','formAuthenType']),
	},
	watch: {
		userInfo(newUser,oldUser) {
			if(!oldUser) {
				this.init()
			}
		},
	},
	async created() {
		if(getToken()) {
			this.init()
		} else {
			this.$routerUtil.toPath('/userSign/login');
			this.$message.warning('用户入驻请先登录。')
		}
	},
	// deactivated() {
	// 	this.setAuthenType("")
	// },
	methods: {
		...mapActions({
			'setToExamineType':'authentication/setToExamineType', //设置审核类型
			'setAuthenType':'authentication/setAuthenType', //设置认证类型
			'setFormFail':'authentication/setFormFail', //是否打款失败
			'setFormMsg':'authentication/setFormMsg', //是否查询
			'getUserInfo':'user/getUserInfo', //获取用户信息
			'setFormDataKeep':'authentication/setFormDataKeep', //获取用户信息
			'setFormDataKeepAccount':'authentication/setFormDataKeepAccount', //获取用户信息
		}),
		init() {
			if(this.userInfo&&this.userInfo['userOpenInfoObject']) {
				this.setFormDataKeep({});
				this.setFormDataKeepAccount({});
				let userOpenInfoObject = this.userInfo['userOpenInfoObject'];
				let formAuthenType = '';
				for(let i in userOpenInfoObject) {
					if(userOpenInfoObject[i]>0) {
						formAuthenType = i;
						break;
					}
				}
				this.authentications.map(item => {
					if(item.formAuthenType == formAuthenType) {
						this.currentType = item;
					}
				});
				console.log('created userInfo',formAuthenType,this.currentType)
				this.filterAuthenticationType();
				this.selectAuditSpeed();
				this.setBreadsLabel();
			}
		},
		async selectAuditSpeed() {
			let func ;
			console.log(this.currentType)
			if(this.currentType&&this.currentType.selectSpeed) {
				func = this.currentType.selectSpeed;
			}
			if(!func) {
				console.log('用户未认证');
				return;
			}
			let {code,data} = await func();
			if(code == 10200) {
				// console.log(data)
				let {
					status,msg,modifyTime
				} = data;
				// let status = -2;
				this.statusList.map(item=>{
					if(item.value == status) {
					// if(item.value == 0) {
						console.log(item);
						item.handle();
						this.setFormMsg(msg);
					}
				})
			}
		},

		setBreadsLabel() { //设置面包屑
			this.breads = [];
			if(this.currentType&&this.currentType.title) {
				this.breads.push({ label: this.currentType.title });
				console.log('设置面包屑',this.breads);
			} else {
				let { type } = this.$route.query;
				this.authentications.map(item => {
					item.type == type && this.breads.push({ label: item.title });
				});
			}
			if(this.breads.length<=0) {
				this.$message.warning('未知的认证类型');
				this.$store.dispatch('error/setErrorType','未知的认证类型');
				this.$routerUtil.toPath('/404');
			} else {
				this.$nextTick(()=>{
					this.$refs['EasyBreadCrumb'].startbreadList();
				})
			}
		},
		filterAuthenticationType() {
			if(this.currentType&&this.currentType.formAuthenType) {
				this.setAuthenType(this.currentType.formAuthenType);
			} else {
				let userOpenInfoObject = this.userInfo['userOpenInfoObject'];
				let formAuthenType = '';
				for(let i in userOpenInfoObject) {
					if(userOpenInfoObject[i]>0) {
						formAuthenType = i;
						break;
					}
				}
				console.log("查看是否有上传过资料",formAuthenType)
				if(!formAuthenType) {
					let { type } = this.$route.query;
					this.authentications.map(item => {
						if(item.type == type) {
							formAuthenType = item.formAuthenType;
						}
					});
					console.log("没有就用路由里type的类型",formAuthenType);
				}
				this.setAuthenType(formAuthenType);
			}
		},
		submit(progress) {
			console.log(progress);
			this.progress = progress;
		},

		async testDelete(type) {
			let {code,data} = await ApiNzjcuserCooperative.testDelete({'type':type});
			this.getUserInfo();
			// this.setAuthenType('')
			this.filterAuthenticationType()
			// this.removeToken()
			this.submit(0)
		}
	},
};
</script>
<style lang="scss" scoped="scoped">
#authentication-view {
	::v-deep .submit-button {
		background-color: $ThemeColor;
		color: #ffffff;
		border: 0;
	}
	.el-steps {
		max-width: 52rem;
		margin: 3.125rem auto 0 auto;
	}
}
</style>
