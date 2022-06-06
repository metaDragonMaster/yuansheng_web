<template>
	<div id="change-user-password">
		<div class="sub-title"><p class="title">更改密码</p></div>
		<div class="ps-danger">登录密码用于以用户身份登录平台，请妥善管理.</div>
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
			<el-form-item prop="password" label="填写新密码"><el-input v-model="Form.password" clearable></el-input></el-form-item>
			<el-form-item prop="passwordAgain" label="确认新密码"><el-input v-model="Form.passwordAgain" clearable></el-input></el-form-item>
			<el-form-item prop="phoneNo" label="手机号码">{{ safePhoneNo(Form.phoneNo) }}</el-form-item>
			<el-form-item prop="verifyCode" label="验证方式"><VerifyElementInput v-model="Form.verifyCode"></VerifyElementInput></el-form-item>
			<el-form-item >
				<button class="submit-button">
					提交
				</button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import EasyStepForm from '@/components/EasyStepForm/index.vue';
import VerifyElementInput from '@/components/VerifyElementInput/index.vue';
import _safe from '@/utils/safe.js';
import {mapActions,mapGetters} from 'vuex';
export default {
	data() {
		return {
			Form: {
				// phoneNo: '15581609046',
				phoneNo: '',
				password: '',
				passwordAgain: '',
				verifyCode: ''
			},
			Rules: {
				password: [
					{ required: true, message: '请输入新密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value != this.Form.passwordAgain&& this.Form.passwordAgain !='') {
								this.$refs['Form'].validateField('passwordAgain');
							} else {
								this.$refs['Form'].clearValidate('passwordAgain');
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				passwordAgain: [
					{ required: true, message: '请输入再次新密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value != this.Form.password) {
								callback(new Error('两次密码不一致'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				verifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
			},
		};
	},
	components: {
		EasyStepForm,
		VerifyElementInput
	},
	computed: {
		...mapGetters([
			'userInfo'
		]),
		safePhoneNo() {
			return phoneNo => _safe.phoneNo(phoneNo);
		}
	},
	mounted() {
		console.log(this.userInfo)
	},
	methods: {
		stepNext(index) {
			this.currentIndex = index;
		},
		stepPrev(index) {
			this.currentIndex = index;
		},
	}
};
</script>

<style lang="scss" scoped="scoped">
@import '@/styles/transition/ease.scss';
#change-user-password {
	.el-input {
		max-width: 20rem;
	}
	.el-form {
		width: 28rem;
		margin: auto;
		.submit-button {
			width: 100%;
			background-color: $ThemeColor;
			color: #FFFFFF;
			padding: 0.5rem;
			border-radius: 0.125rem;
		}
	}
}
</style>
