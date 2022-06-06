<template>
	<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
		<!-- <el-form-item label="采购商" ></el-form-item> -->
		<el-form-item prop="name" label="企业名称"><el-input v-model="Form.name" clearable /></el-form-item>
		<el-form-item prop="merchantType" label="商户类型">
			<el-radio-group v-model="Form.merchantType">
				<el-radio :label="0">个人</el-radio>
				<el-radio :label="1">企业</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item prop="licenseCode" label="营业执照编号"><el-input v-model="Form.licenseCode" clearable /></el-form-item>
		<el-form-item prop="mcc" label="经营范围">
			<el-input v-model="Form.mcc" clearable />
			<!-- <el-cascader v-model="Form.mcc" :options="mccOptions" :props="mccProps"></el-cascader> -->
		</el-form-item>
		<el-form-item prop="realName" label="法人代表姓名"><el-input v-model="Form.realName" clearable /></el-form-item>
		<el-form-item prop="certificationNo" label="法人代表身份证号码"><el-input v-model="Form.certificationNo" clearable /></el-form-item>
		<el-form-item prop="cityNo" label="所在地区"><SelectAddress ref="SelectAddressDom" v-model="Form.cityNo"></SelectAddress></el-form-item>
		<el-form-item prop="address" label="详细地址">
			<el-input type="textarea" placeholder="请输入内容" v-model="Form.address" :autosize="{ minRows: 3, maxRows: 4 }" />
		</el-form-item>
		<el-form-item prop="contactName" label="联系人姓名"><el-input v-model="Form.contactName" clearable /></el-form-item>
		<el-form-item prop="contactCertificationNo" label="联系人身份证号码"><el-input v-model="Form.contactCertificationNo" clearable /></el-form-item>
		<el-form-item prop="contactPhoneNo" label="联系人手机号"><el-input v-model="Form.contactPhoneNo" clearable /></el-form-item>
		<el-form-item>
			<ReadAgreement ref="readDom" agreement="《原生联用户协议》"></ReadAgreement>
			<el-button class="submit-button" @click="submit">下一步</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
import SelectAddress from '@/components/SelectAddress/cascader.vue';
import ReadAgreement from '@/components/ReadAgreement/index.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			Form: {
				name: '', //合作社名字		false	string
				merchantType: '', //商户类型（0 个人 1企业）
				licenseCode: '', //		营业执照编号		false	string
				mcc: '', //经营类目		false	string
				realName: '', //开户人姓名		false	string
				certificationNo: '', //身份证号码		false	string
				address: '', //详细地址		false	string
				cityNo: [], //所在城市		false	string
				contactName: '', //联系人姓名
				contactCertificationNo: '', //	联系人身份证号码
				contactPhoneNo: '' //联系人电话号码
			},
			Rules: {
				name: [{ required: true, message: '请输入合作社名称', trigger: 'blur' }],
				merchantType: [{ required: true, message: '请选择商户类型', trigger: 'change' }],
				licenseCode: [{ required: true, message: '请输入营业执照编号', trigger: 'blur' }],
				mcc: [{ required: true, message: '请选择经营范围', trigger: 'blur' }],
				realName: [{ required: true, message: '请输入开户人姓名', trigger: 'blur' }],
				certificationNo: [{ required: true, message: '请输入法人代表身份证号码', trigger: 'blur' }],
				address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
				cityNo: [{ required: true, message: '请选择所在城市', trigger: 'blur' }]
			}
		};
	},
	components: {
		SelectAddress,
		ReadAgreement
	},
	computed: {
		...mapGetters([
			'formDataKeep'
			// 'formMccOptions'
		])
	},
	mounted() {
		if (JSON.stringify(this.formDataKeep) !== '{}' || Object.keys(this.formDataKeep).length > 0) {
			this.Form = {
				...this.formDataKeep
			};
		}
	},
	methods: {
		...mapActions({ setAuthenType: 'authentication/setAuthenType' }),
		submit($enent) {
			this.$refs['Form'].validate(valid => {
				if (valid) {
					if (this.$refs['readDom'].read == true) {
						if (typeof this.Form.cityNo != 'string') {
							this.Form.cityNo = this.Form.cityNo.join(',');
						}
						this.$emit('submit', this.Form);
						this.setAuthenType('purchaseId');
					} else {
						this.$message.warning('请阅读《原生联用户协议》');
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.submit-button {
	width: 100%;
}
.el-form {
	max-width: 39.5rem;
	margin: 1rem auto;
	.el-cascader {
		width: 100%;
	}
}
</style>
