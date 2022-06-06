<template>
	<div id="account-authentication">
		<!-- {{ formDataKeep }} -->
		<!-- {{formAuthenType}} -->
		<!-- <br /> -->
		<!-- {{ Form }} -->
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="140px">
			<el-form-item prop="bankUserName" label="开户人姓名"><el-input v-model="Form.bankUserName" clearable placeholder="请输入开户人姓名" /></el-form-item>
			<el-form-item prop="bankPhoneNo" label="开户预留手机号"><el-input v-model="Form.bankPhoneNo" clearable placeholder="请输入开户预留手机号" /></el-form-item>
			<el-form-item prop="bankName" label="支行名称">
				<el-select v-model="Form.bankName" placeholder="请输入关键词搜索" filterable remote reserve-keyword :remote-method="selectBankInfo" :loading="loading">
					<el-option v-for="item in selectHeadOffice" :key="item.bankCode" :label="item.bankName" :value="item.bankCode"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="bankNo" label="银行账号"><el-input v-model="Form.bankNo" clearable placeholder="请输入银行账号" /></el-form-item>
			<el-form-item prop="phoneNo" label="法人手机号"><el-input v-model="Form.phoneNo" clearable /></el-form-item>
			<el-form-item prop="smsCode" label="验证码"><VerifyElementInput action="verify" v-model="Form.smsCode" :bindPhoneNo="Form.phoneNo"></VerifyElementInput></el-form-item>
			<el-form-item>
				<el-button class="submit-button" @click="submit">下一步</el-button>
				<el-button @click="back">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import VerifyElementInput from '@/components/VerifyElementInput/index.vue';
import SelectAddress from '@/components/SelectAddress/index.vue';
import FormUtil from "@/utils/formUtil.js";
import { mapActions, mapGetters } from 'vuex';
import ApiNzjcuserCooperative from '@/api/nzjcuserCooperative.js';
import ApiNzjcuserMerchant from '@/api/nzjcuserMerchant.js';
import ApiNzjcuserProcess from '@/api/nzjcuserProcess.js';
import ApiNzjcuserPurchase from '@/api/nzjcuserPurchase.js';

export default {
	data() {
		return {
			loading: false,
			Form: {
				bankUserName: '', //	开户人姓名		false	string
				bankName: '', //		开户行		false	string
				bankNo: '', //			银行账号		false	string
				bankPhoneNo: '', //开户预留手机号
				phoneNo: '', //法人手机号
				smsCode: ''
			},
			// Form: {
			// 	bankUserName: '', //	开户人姓名		false	string
			// 	bankName: '', //		开户行		false	string
			// 	bankNo: '', //			银行账号		false	string
			// 	bankPhoneNo: '', //开户预留手机号
			// 	phoneNo: '', //法人手机号
			// 	smsCode: ''
			// },
			Rules: {
				phoneNo: [{ required: true, message: '请输入法人手机号', trigger: 'blur' }],
				// smsCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
				bankUserName: [{ required: true, message: '请输入开户人姓名', trigger: 'blur' }],
				bankName: [{ required: true, message: '请选择支行', trigger: 'blur' }],
				bankNo: [{ required: true, message: '请输入银行账号', trigger: 'blur' }],
				bankPhoneNo: [{ required: true, message: '请输入开户预留手机号', trigger: 'blur' }],
				phoneNo: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			},
			selectHeadOffice: [],
		};
	},
	components: {
		SelectAddress,
		VerifyElementInput
	},
	computed: {
		...mapGetters([
			'formDataKeep',
			'formDataKeepAccount',
			'userInfo',
			'formAuthenType',
			'needStartForm'
		])
	},
	async mounted() {
		// if(this.Form.bankName) {
		// }
		if(this.needStartForm) {
			this.setNeedStartForm(false);
			let data = await this.selectAuthenticationInfo();
			console.log('重新')
			if(data) {
				this.Form = FormUtil.combineAttrs(this.Form,data);
				this.setFormDataKeepAccount(this.Form);
			}
		} else {
			this.Form = FormUtil.combineAttrs(this.Form,this.formDataKeepAccount);
		}
		// this.selectBankInfoByCode(this.Form.bankName)
	},
	methods: {
		...mapActions({
			'setFormDataKeep': 'authentication/setFormDataKeep',
			'setFormDataKeepAccount': 'authentication/setFormDataKeepAccount',
			'setNeedStartForm': 'authentication/setNeedStartForm',
			'getUserInfo': 'user/getUserInfo',
		}),
		async selectCooperativeInfo() {
			//查询合作社信息
			// console.log(this.userInfo);
			let { code, data } = await ApiNzjcuserCooperative.selectCooperativeInfo();
			console.log(data);

			if(code == 10200) {
				let fromData = {
					name: data.name,
					// name: "15151515",
					licenseCode: data.licenseCode,
					mcc: data.mcc,
					realName: data.realName,
					certificationNo: data.certificationNo,
					address: data.address,
					// cityNo: JSON.parse(data.cityNo),
					cityNo: data.cityNo,
					phoneNo: data.phoneNo,
					contactName: data.contactName,
					contactCertificationNo: data.contactCertificationNo,
					contactPhoneNo: data.contactPhoneNo
				};
				console.log("设置认证。",fromData)
				this.setFormDataKeep(fromData)
				return data
			} else {
				return false;
			}
		},
		async selectMerchantInfo() {
			//查询合作社信息
			// console.log(this.userInfo);
			let { code, data } = await ApiNzjcuserMerchant.selectMerchantInfo();
			console.log(data);
			if(code == 10200) {
				let fromData = {
					name: data.name,
					// name: "15151515",
					merchantType: data.merchantType,
					licenseCode: data.licenseCode,
					mcc: data.mcc,
					realName: data.realName,
					certificationNo: data.certificationNo,
					address: data.address,
					// cityNo: JSON.parse(data.cityNo),
					cityNo: data.cityNo,
					phoneNo: data.phoneNo,
					contactName: data.contactName,
					contactCertificationNo: data.contactCertificationNo,
					contactPhoneNo: data.contactPhoneNo
				};
				this.setFormDataKeep(fromData)
				return data;
			} else {
				return false;
			}
		},
		async selectPurchaseInfo() {
			let { code, data } = await ApiNzjcuserPurchase.selectPurchaseInfo();
			console.log(data);
			if(code == 10200) {
				let fromData = {
					name: data.name,
					// name: "15151515",
					merchantType: data.merchantType,
					licenseCode: data.licenseCode,
					mcc: data.mcc,
					realName: data.realName,
					certificationNo: data.certificationNo,
					address: data.address,
					// cityNo: JSON.parse(data.cityNo),
					cityNo: data.cityNo,
					phoneNo: data.phoneNo,
					contactName: data.contactName,
					contactCertificationNo: data.contactCertificationNo,
					contactPhoneNo: data.contactPhoneNo
				};
				this.setFormDataKeep(fromData)
				return data;
			} else {
				return false;
			}
		},
		async selectProcessInfo() {
			let { code, data } = await ApiNzjcuserProcess.selectProcessInfo();
			console.log(data);
			if(code == 10200) {
				let fromData = {
					name: data.name,
					// name: "15151515",
					merchantType: data.merchantType,
					licenseCode: data.licenseCode,
					mcc: data.mcc,
					realName: data.realName,
					certificationNo: data.certificationNo,
					address: data.address,
					// cityNo: JSON.parse(data.cityNo),
					cityNo: data.cityNo,
					phoneNo: data.phoneNo,
					contactName: data.contactName,
					contactCertificationNo: data.contactCertificationNo,
					contactPhoneNo: data.contactPhoneNo
				};
				this.setFormDataKeep(fromData)
				return data;
			} else {
				return false;
			}
		},
		selectAuthenticationInfo() {
			/*
				如何判定触发搜索当前用户是否上传了认证
			*/
			let typeList = [
				{
					type: 'cooperativeId',
					func: this.selectCooperativeInfo,
				},
				{
					type: 'purchaseId',
					func: this.selectPurchaseInfo,
				},
				{
					type: 'processId',
					func: this.selectProcessInfo,
				},
				{
					type: 'merchantId',
					func: this.selectMerchantInfo,
				}
			];
			let ref = this.formAuthenType;
			console.log(ref)
			if(!!ref) {
				for(let i in typeList) {
					if(ref == typeList[i].type) {
						return typeList[i].func();
					}
				}
			} else {
				this.message.error('查询类型错误');
				this.$routerUtil.toName('homePage')
			}
			console.log("搜索当前用户上传的认证信息，并储存")
		},
		async selectBankInfo(value) {
			this.loading = true;
			let params = {
				'bankName': value
			}
			let { code, data } = await ApiNzjcuserCooperative.selectBankInfo(params);
			this.selectHeadOffice = data;
			this.loading = false;
		},
		async selectBankInfoByCode(value) {
			this.loading = true;
			let params = {
				'bankCode': value
			}
			console.log(params)
			let { code, data } = await ApiNzjcuserCooperative.selectBankInfoByCode(params);
			this.selectHeadOffice = [data];
			// console.log(this.selectHeadOffice)
			this.loading = false;
		},
		async submitPurchaseInfo() {
			let params = {
				...this.Form,
				...this.formDataKeep
				// "cooperativeLv": 0,
			};
			console.log(params)
			console.log(this.userInfo)
			let id = this.userInfo['userOpenInfoObject']['processId'];
			let res;
			if(id>0) {
				res = await ApiNzjcuserPurchase.updatePurchaseInfo(params);
			} else {
				res = await ApiNzjcuserPurchase.postPurchaseInfo(params);
			}
			console.log("submitCooperativeInfo ",res)
			if (res.code == 10200) {
				// this.setFormDataKeep({});
				return true;
			} else {
				this.$message.warning(res.msg);
				return false;
			}
		},
		async submitProcessInfo() {
			let params = {
				...this.Form,
				...this.formDataKeep
				// "cooperativeLv": 0,
			};
			console.log(params)
			console.log(this.userInfo)
			let id = this.userInfo['userOpenInfoObject']['processId'];
			let res;
			if(id>0) {
				res = await ApiNzjcuserProcess.updateProcessInfo(params);
			} else {
				res = await ApiNzjcuserProcess.postProcessInfo(params);
			}
			console.log("submitCooperativeInfo ",res)
			if (res.code == 10200) {
				// this.setFormDataKeep({});
				return true;
			} else {
				this.$message.warning(res.msg);
				return false;
			}
		},
		async submitCooperativeInfo() {
			let params = {
				...this.Form,
				...this.formDataKeep
				// "cooperativeLv": 0,
			};
			console.log(params)
			console.log(this.userInfo)
			let id = this.userInfo['userOpenInfoObject']['cooperativeId'];
			let res;
			if(id>0) {
				res = await ApiNzjcuserCooperative.updateCooperativeInfo(params);
			} else {
				res = await ApiNzjcuserCooperative.postCooperativeInfo(params);
			}
			console.log("submitCooperativeInfo ",res)
			if (res.code == 10200) {
				// this.setFormDataKeep({});
				return true;
			} else {
				this.$message.warning(res.msg);
				return false;
			}
		},
		async submitMerchantInfo() {
			let params = {
				...this.Form,
				...this.formDataKeep
				// "cooperativeLv": 0,
			};
			params.cityNo = JSON.stringify(params.cityNo);
			let id = this.userInfo['userOpenInfoObject']['merchantId'];
			let res;
			if(id>0) {
				res = await ApiNzjcuserMerchant.updateMerchantInfo(params);
			} else {
				res = await ApiNzjcuserMerchant.postMerchantInfo(params);
			}
			if (res.code == 10200) {
				// this.setFormDataKeep({});
				return true;
			} else {
				this.$message.warning(res.msg);
				return false;
			}
		},
		/*
			cooperativeId 合伙企业
			purchaseId 采购商
			processId 加工企业
			merchantId 农资商
		*/
		submitType() {
			let typeList = [
				{
					type: 'cooperativeId',
					func: this.submitCooperativeInfo,
				},
				{
					type: 'purchaseId',
					func: this.submitPurchaseInfo,
				},
				{
					type: 'processId',
					func: this.submitProcessInfo,
				},
				{
					type: 'merchantId',
					func: this.submitMerchantInfo,
				}
			];
			let ref = this.formAuthenType;
			// console.log(ref)
			if(!!ref) {
				for(let i in typeList) {
					if(ref == typeList[i].type) {
						return typeList[i].func;
					}
				}
			} else {
				return function () {
					this.message.error('提交类型错误');
					this.$routerUtil.toName('homePage')
				};
			}

		},
		async submit($enent) {
			let submitFunc = this.submitType();
			// console.log("submitFunc",submitFunc)
			let res = await submitFunc();
			console.log('11111111',res)
			if (res) {
				// this.setFormDataKeep({});
				await this.getUserInfo();
				this.$emit('submit', 2);
			}
		},
		back() {
			this.$emit('submit', 0);
			this.setFormDataKeepAccount(this.Form)
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
.el-form {
	max-width: 37.5rem;
	margin: 3.75rem auto;
}
.el-form-item__content > *:not(:last-child) {
	margin-bottom: 1rem;
}
.el-form-item__content > .el-select {
	width: 100%;
}
</style>
