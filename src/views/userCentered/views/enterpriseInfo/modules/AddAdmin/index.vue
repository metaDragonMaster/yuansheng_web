<template>
	<div class="add-admin">
		<el-dialog
			:title="dialogTitle"
			:visible.sync="show"
			top="6vh"
			:close-on-click-modal="false"
			@closed="close"
		>
			<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
				<el-form-item prop="userName" label="姓名"><el-input v-model="Form.userName" clearable /></el-form-item>
				<el-form-item prop="userName" label="联系电话"><el-input v-model="Form.userName" clearable /></el-form-item>
				<el-form-item prop="userName" label="权限密码"><el-input v-model="Form.userName" clearable /></el-form-item>
				<el-form-item prop="userName" label="确认密码"><el-input v-model="Form.userName" clearable /></el-form-item>
				<el-form-item prop="userName" label="身份证">
					<!--  -->
					<div class="flex">
						<uploadImg
							ref="uploadImgFront"
							immediately
							tipText="正面照"
							@imageUrls="
								urls => {
									Form.image = urls[0];
								}
							"
						></uploadImg>
						<uploadImg
							ref="uploadImgBack"
							immediately
							tipText="反面照"
							@imageUrls="
								urls => {
									Form.image = urls[0];
								}
							"
						></uploadImg>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="">提交</el-button>
					<el-button  @click="show = false">返回</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
import UploadImg from "@/components/UploadImg/index.vue"
export default {
	data(){return{
		isChange:false,
		show:false,
		Form: {
			userName:"",
			phoneNo:"",
			password:"",
			passwordAgain:"",
			photos:{
				front:"",//正面照片
				back:"",//反面照片
			},
		},
		Rules: {
			userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
		}
	}},
	components: {
		UploadImg
	},
	computed: {
		dialogTitle() {
			// return !this.isChange?"新增地址":"修改地址"
			return "新增管理员"
		}
	},
	mounted() {
		
	},
	methods:{
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
		open(formData) {
			if(formData) {
				console.log(formData)
				this.isChange = true;
			}
			this.show = true;
		},
		close() {
			this.isChange = false;
			this.emptyForm();
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.add-admin {
	.el-form {
		padding-right: 4.25rem;
	}
	
}
</style>
