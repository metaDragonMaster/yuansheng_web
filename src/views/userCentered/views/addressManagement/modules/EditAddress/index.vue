<template>
	<el-dialog :title="dialogTitle" :visible.sync="show" top="6vh" width="900" :close-on-click-modal="false" @closed="close">
		<!-- {{ Form }} -->
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="120px">
			<el-form-item prop="userName" label="姓名"><el-input v-model="Form.userName" clearable /></el-form-item>
			<el-form-item prop="phoneNo" label="手机号"><el-input v-model="Form.phoneNo" onkeyup="value=value.replace(/[^\d]/g,'')" clearable /></el-form-item>
			<el-form-item prop="address" label="所在地址">
				<!-- <el-input v-model="Form.address" clearable /> -->
				<SelectAddress ref="SelectAddress" @emitCityNo="getAddressNo" @emitAddress="labels => (Form.address = labels)"></SelectAddress>
			</el-form-item>
			<el-form-item prop="detailAddress" label="详细地址">
				<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="Form.detailAddress"></el-input>
			</el-form-item>
			<el-form-item prop="defaultAddress" label="设为默认地址">
				<el-radio-group v-model="Form.defaultAddress">
					<el-radio :label="true">是</el-radio>
					<el-radio :label="false">否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="success" @click="submitData">确定</el-button>
				<el-button @click="show = false">返回</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
</template>
<script>
import SelectAddress from '@/components/SelectAddress/index.vue';
import RegExpUtil from '@/utils/RegExpUtil';
import ApiCenterAddress from '@/api/userCenterAddress.js';
import FormUtil from "@/utils/formUtil.js";
export default {
	data() {
		return {
			isChange: false,
			show: false,
			addressId: '',
			current: 1,
			Form: {
				userName: '',
				phoneNo: '',
				address: [],
				detailAddress: '',
				defaultAddress: true,
				areaCode: '',
				cityCode: '',
				provinceCode: ''
			},
			// Form: {
			// 	userName: '何赛花',
			// 	phoneNo: '15588886666',
			// 	address: [],
			// 	detailAddress: '北京东城',
			// 	defaultAddress: true,
			// 	areaCode: '',
			// 	cityCode: '',
			// 	provinceCode: ''
			// },
			Rules: {
				userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
				phoneNo: [
					{ required: true, message: '请输入手机号', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (!RegExpUtil.phone(this.Form.phoneNo)) {
								callback('请填写正确的电话号码格式');
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				address: [{ required: true, message: '请选择地址', trigger: 'blur' }],
				detailAddress: [{ required: true, message: '请输入详细地址', trigger: 'blur' }]
			}
		};
	},
	components: {
		SelectAddress
	},
	computed: {
		dialogTitle() {
			return !this.isChange ? '新增地址' : '修改地址';
		}
	},
	methods: {
		getAddressNo(Nos) {
			console.log(Nos);
			this.Form['provinceCode'] = Nos[0];
			this.Form['cityCode'] = Nos[1];
			this.Form['areaCode'] = Nos[2];
		},
		emptyForm() {
			//重置表单
			this.$nextTick(() => {
				this.clearValidate('Form');
				this.resetForm('Form');
			});
		},
		resetForm(formName) {
			//清空表单的验证结果
			this.$refs[formName].resetFields();
		},
		clearValidate(formName) {
			//移除该表单项的校验结果
			this.$refs[formName].clearValidate();
		},
		submitData() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let params = {
						...this.Form
					};
					let { code, data, msg } = await (this.isChange ? this.updateAddress(params) : this.addAddress(params));
					if (code == 10200) {
						let message = this.isChange ? '修改地址成功' : '添加地址成功';
						this.$notify({
							title: '成功',
							message: message,
							type: 'success',
							duration: 2000
						});
						this.$emit('success');
						this.show = false;
					} else {
						this.$notify({
							title: '错误',
							message: msg,
							type: 'error',
							duration: 2000
						});
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		updateAddress(data) {
			return ApiCenterAddress.updateAddress(this.addressId, data);
		},
		addAddress(data) {
			return ApiCenterAddress.addAddress(data);
		},
		open(formData) {
			this.show = true;
			if (formData) {
				console.log(formData);
				this.addressId = formData.addressId;
				this.Form = FormUtil.combineAttrs(this.Form, formData);
				let cityNos = [formData.provinceCode,formData.cityCode,formData.areaCode].map(item=>parseInt(item));
				console.log(cityNos)
				this.$nextTick(()=>{
					this.$refs['SelectAddress'].startAreas(cityNos)
				})
				this.isChange = true;
			}
		},
		close() {
			this.isChange = false;
			this.$refs['SelectAddress'].emptyData();
			this.emptyForm();
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.edit-address {
	.el-form {
		padding-right: 4.25rem;
	}
}
</style>
