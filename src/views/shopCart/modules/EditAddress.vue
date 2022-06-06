<template>
	<div class="">
		<el-dialog :title="dialogTitle" :visible.sync="show" top="6vh" width="680px" :close-on-click-modal="false" @closed="close">	
			<el-form ref="Form" :model="Form" :rules="Rules" label-width="90px">
				<el-form-item prop="userName" label="姓名">
					<el-input v-model="Form.userName" clearable />
				</el-form-item>
				<el-form-item prop="phoneNo" label="手机号">
					<el-input v-model="Form.phoneNo" clearable />
				</el-form-item>
				<el-form-item prop="cityNo" label="地址">
					<SelectAddress ref="SelectAddress" v-model="Form.cityNo" @emitAddress="val=> Form.address = val"></SelectAddress>
				</el-form-item>
				<el-form-item prop="detailAddress" label="详细地址">
					<el-input type="textarea" placeholder="请输入内容" v-model="Form.detailAddress" :autosize="{ minRows: 3, maxRows: 4 }" />
				</el-form-item>
				<el-form-item prop="defaultAddress" label="默认地址">
					<el-radio-group  v-model="Form.defaultAddress">
						<el-radio :label="true">是</el-radio>
						<el-radio :label="false">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="success" class="submit-bottom" @click="submit">确定</el-button>
					<el-button @click="show = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog> 
	</div>
</template>
<script>
import SelectAddress from "@/components/SelectAddress/index.vue"
import Api from '../../../api/commonserviceUserCenterAddress.js'
export default {
	data(){return{
		addressId:"",
		show:false,
		// Form:{
		// 	userName:"zzc",
		// 	phoneNo:"15581609046",
		// 	cityNo:[],
		// 	address:"",
		// 	detailAddress:'详细地址',
		// 	defaultAddress:true,
		// },
		Form:{
			userName:"",
			phoneNo:"",
			cityNo:[],
			address:"",
			detailAddress:'',
			defaultAddress:true,
		},
		Rules:{
			userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
			phoneNo: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
			cityNo: [{ required: true, message: '请选择地址', trigger: 'blur' }],
			detailAddress: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
		},
	}},
	components: {
		SelectAddress,
	},
	computed: {
		isChange() {
			return !!this.cooperativeUserId;
		},
		dialogTitle() {
			return !this.isChange?"新增地址":"修改地址"
		}
	},
	mounted() {
		
	},
	methods:{
		open(addressId) {
			if (addressId) {
				this.addressId = addressId;
			}
			this.show = true;
		},
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let {code,data,msg} = await this.addAddress();
					if(code == 10200){
						this.$emit('submit',data);
						this.show = false;
					} else {
						this.$message.warning(msg)
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		addAddress() {
			let params = {
				address:this.Form.address,
				areaCode:this.Form.cityNo[2],
				cityCode:this.Form.cityNo[1],
				provinceCode:this.Form.cityNo[0],
				defaultAddress:this.Form.defaultAddress,
				detailAddress:this.Form.detailAddress,
				phoneNo:this.Form.phoneNo,
				userName:this.Form.userName,
			}
			return Api.addAddress(params);
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
		close() {
			this.addressId = ''
			this.$refs['SelectAddress'].emptyData();
			this.emptyForm();
		},
	}
}
</script>
<style  lang="scss" scoped="scoped">
//EditAddress
</style>
