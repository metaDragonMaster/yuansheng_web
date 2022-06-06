<template>
	<div class="register-view">
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right">
			<el-form-item prop="username">
				<el-input v-model="Form.username" placeholder="请输入用户名">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/user.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="Form.password" type="password" placeholder="请输入密码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/password.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="passwordAgain">
				<el-input v-model="Form.passwordAgain" type="password" placeholder="请确认密码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/passwordAgain.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="phone">
				<el-input v-model="Form.phone" placeholder="请输入手机号码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/phone.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="verifyCode">
				<!-- <el-input v-model="Form.verifyCode" placeholder="请输入验证码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/smsCode.png" />
					</template>
					<template slot="append">
						<div>获取验证码</div>
					</template>
				</el-input> -->
				<VerifyElementInput action="registry" v-model="Form.verifyCode" :bindPhoneNo="Form.phone" :maxtimer="60" ref="sendVerifyDom">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/smsCode.png" />
					</template>
				</VerifyElementInput>
			</el-form-item>
		</el-form>
		<el-button class="submit-bottom" @click="submit" :loading="loading">立即注册</el-button>
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
					},
					{
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
	mounted() {},
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
						this.Form.verifyCode = '';
					}
					this.loading = false;
				} else {
					return false;
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.register-view {
	display: flex;
	flex-direction: column;
}
</style>
