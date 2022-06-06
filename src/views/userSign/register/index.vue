<template>
	<div id="register-view" limit-max-width>
		<div class="register-form-box">
			<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
				<el-form-item prop="username" label="用户名"><el-input v-model="Form.username" /></el-form-item>
				<el-form-item prop="password" label="密码"><el-input v-model="Form.password" type="password" /></el-form-item>
				<el-form-item prop="passwordAgain" label="确认密码"><el-input v-model="Form.passwordAgain" type="password" /></el-form-item>
				<el-form-item prop="phone" label="手机号"><el-input v-model="Form.phone" /></el-form-item>
				<el-form-item prop="verifyCode" label="验证码">
					<VerifyElementInput action="registry" v-model="Form.verifyCode" :bindPhoneNo="Form.phone" :maxtimer="60" ref="sendVerifyDom"></VerifyElementInput>
				</el-form-item>
				<el-form-item>
					<p flex style="font-size: 0.75rem;">
						<span>
							注册即同意
							<button type="button" class="click-text">《原生联用户协议》</button>
						</span>
						<span drift-right>
							已有账号,
							<button type="button" class="click-text" @click="$routerUtil.toPath('/userSign/login')">立即登录</button>
						</span>
					</p>
				</el-form-item>
				<el-form-item><el-button class="submit-bottom" @click="submit" :loading="loading">提交</el-button></el-form-item>
			</el-form>
			<img class="form-image" src="@/assets/images/userSign/form-bg.png" alt="" />
		</div>
	</div>
</template>
<script>
import ApiAuth from '@/api/auth.js';
import REGEXP from '@/utils/RegExpUtil.js';
import $_Confirm from '@/utils/confirm.js';
import VerifyElementInput from '@/components/VerifyElementInput/index.vue';
export default {
	data() {
		return {
			timer: 0,
			loading: false,
			// Form: {
			// 	username: 'zeng596178924', //string
			// 	password: '123456', //string
			// 	passwordAgain: '123456', //string
			// 	phone: '15581609046', //string
			// 	verifyCode: '' //string
			// },
			Form: {
				username: '', //string
				password: '', //string
				passwordAgain: '', //string
				phone: '', //string
				verifyCode: '' //string
			},
			Rules: {
				username: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},{
						validator: (rule, value, callback) => {
							if (!REGEXP.username(value)) {
								callback(new Error('请输入3-20位的中文、英文、数字或下划线'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						validator: (rule, value, callback) => {
							if (!REGEXP.password(value)) {
								callback(new Error('请输入6-20位的英文、数字或下划线'));
							} else if (value != this.Form.passwordAgain && this.Form.passwordAgain != '') {
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
					// { required: true, trigger: 'blur' },
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						validator: (rule, value, callback) => {
							if (value != this.Form.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				phone: [
					{ required: true, message: '请输入手机号', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (!REGEXP.phone(value)) {
								callback(new Error('请输入正确的大陆手机号!'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				verifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
			}
		};
	},
	components: {
		VerifyElementInput
	},
	methods: {
		async submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					this.loading = true;
					let { passwordAgain, ...form } = this.Form;
					let { code, msg } = await ApiAuth.registerUser({
						...form
					});
					if (code == 10200) {
						$_Confirm({
							title: msg,
							content: `是否立即登录`,
							thenFunc: async () => {
								this.$routerUtil.toPath('/userSign/login');
							}
						});
					} else {
						this.$message.warning(msg);
						this.$refs['sendVerifyDom'].clearTimer();
						this.Form.verifyCode = ''
					}
					this.loading = false;
				} else {
					return false;
				}
			});
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
#register-view {
	height: 44rem;
	background-image: url(../../../assets/images/userSign/view-bg.png);
	background-repeat: no-repeat;
	// background-size: cover;
	background-size: 100%;
	background-position: bottom left;
	padding-top: 140px;
	.register-form-box {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		border-radius: 0.25rem;
		max-width: 68.75rem;
		max-height: 34.375rem;
		margin: 0 auto;
		background-color: #ffffff;
		box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.3);
		.el-form {
			padding-top: 5rem;
		}
		.form-image {
			width: 31.25rem;
			height: 100%;
		}
		.el-input {
			min-width: 20rem;
		}
	}
	.submit-bottom {
		background-color: $ThemeColor;
		color: #ffffff;
		width: 100%;
		border: 0;
	}
	.click-text {
		color: $ThemeColor;
		font-size: 0.75rem;
	}
}
</style>
