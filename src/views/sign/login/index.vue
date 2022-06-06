<template>
	<div class="login-view">
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" @submit.native.prevent>
			<el-form-item>
				<div class="login-type">
					<button type="button" :class="loginTpye == false ? 'active' : ''" @click="changeLoginType(false)"><span>短信登录</span></button>
					<button type="button" :class="loginTpye == true ? 'active' : ''" @click="changeLoginType(true)"><span>账户登录</span></button>
				</div>
			</el-form-item>
			<el-form-item v-show="loginTpye == true" prop="username">
				<el-input v-model="Form.username" placeholder="请输入用户名">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/user.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item v-show="loginTpye == true" prop="password">
				<el-input v-model="Form.password" type="password" placeholder="请输入密码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/password.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item v-show="loginTpye == false" prop="phone">
				<el-input v-model="Form.phone" placeholder="请输入手机号码">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/phone.png" />
					</template>
				</el-input>
			</el-form-item>
			<el-form-item v-show="loginTpye == false" prop="verifyCode">
				<VerifyElementInput action="login" v-model="Form.verifyCode" :bindPhoneNo="Form.phone" ref="sendVerifyDom">
					<template slot="prepend">
						<img class="icon" src="@/assets/imgs/sign/icons/smsCode.png" />
					</template>
				</VerifyElementInput>
				<!-- <el-input v-model="Form.verifyCode" clearable /> -->
			</el-form-item>
		</el-form>
		<el-button class="submit-bottom" @click="submit" :loading="loginLoading">提交</el-button>
	</div>
</template>
<script>
import REGEXP from '@/utils/RegExpUtil.js';
import VerifyElementInput from '@/components/VerifyElementInput/index.vue';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			loginLoading: false,
			loginTpye: true, // true 账户登录，false 短信登录
			// Form: {
			// 	username: 'zeng111', //string
			// 	password: '123456', //string
			// 	phone: '15581609046', //string
			// 	verifyCode: '' //string
			// },
			Form: {
				username: '', //string
				password: '', //string
				phone: '', //string
				verifyCode: '' //string
			},
			Rules: {
				username: [
					// { required: true, message: '请输入用户名', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value === '' && this.loginTpye == true) {
								callback(new Error('请输入用户名'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				password: [
					{
						validator: (rule, value, callback) => {
							if (this.loginTpye == true) {
								if (value === '') {
									callback(new Error('请输入密码'));
								} else if (!REGEXP.password(value)) {
									callback(new Error('请输入6-20位的英文、数字或下划线'));
								} else {
									callback();
								}
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				phone: [
					// { required: true, message: '请输入手机号', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value === '' && this.loginTpye == false) {
								callback(new Error('请输入手机号'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				verify: [
					// { required: true, message: '请输入验证码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (value === '' && this.loginTpye == false) {
								callback(new Error('请输入验证码'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				]
			}
		};
	},
	computed: {
		...mapGetters(['userInfo'])
	},
	components: {
		VerifyElementInput
	},
	created() {
		if (this.userInfo) {
			this.$message.warning('用户已登录');
			this.$routerUtil.toName('homepage');
		}
	},
	mounted() {},
	methods: {
		changeLoginType(type) {
			this.loginTpye = type;
			if (type) {
				this.$refs['sendVerifyDom'].clearTimer();
				this.$refs['sendVerifyDom'].setInputValue('');
			}
			this.emptyForm('Form');
		},
		submit() {
			// TODO 提交注册
			this.loginLoading = true;
			this.$refs['Form'].validate(async valid => {
				// console.log('submit!!',valid);
				if (valid) {
					console.log('submit!!');
					let { username, password, phone, verifyCode } = this.Form;
					let res = undefined;
					try {
						this.loginTpye
							? (res = await this.pwLogin({
									username,
									password
							  }))
							: (res = await this.smsLogin({
									phone,
									verifyCode
							  }));
					} catch (e) {
						//TODO handle the exception
						this.$refs['sendVerifyDom'].clearTimer();
						this.Form.verifyCode = '';
					}
					if (res.code == 10200) {
						this.$message.success('用户登录成功');
						this.$routerUtil.toPath('/');
					} else {
						console.log(res);
						this.$message.warning(res.msg);
						this.$refs['sendVerifyDom'].clearTimer();
						this.Form.verifyCode = '';
					}
				} else {
					console.log('error submit!!');
					// this.$message.warning("错误的登录。");
					return false;
				}
				this.loginLoading = false;
			});
		},
		pwLogin(params) {
			return this.$store.dispatch('user/pwLogin', params);
			// return await ApiAuth.pwLogin(params);
		},
		smsLogin(params) {
			return this.$store.dispatch('user/smsLogin', params);
			// return await ApiAuth.smsLogin(params);
		},
		emptyForm(name) {
			let formName;
			console.log(name, typeof name == 'string');
			typeof name == 'string' ? (formName = name) : (formName = 'Form');
			//重置表单
			this.$nextTick(() => {
				this.clearValidate(formName);
				this.resetForm(formName);
			});
		},
		resetForm(formName) {
			//清空表单的验证结果
			// console.log('resetForm',formName);
			this.$refs[formName].resetFields();
		},
		clearValidate(formName) {
			//移除该表单项的校验结果
			// console.log('clearValidate',formName);
			this.$refs[formName].clearValidate();
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.login-view {
	display: flex;
	flex-direction: column;
	.login-type {
		display: flex;
		justify-content: center;
		margin-bottom: 70px;
		button {
			position: relative;
			// z-index: 10;
			line-height: 20px;
			&:first-child {
				margin-right: 70px;
			}
			&.active {
				span {
				}
				&::after {
					content: '';
					display: block;
					width: 120%;
					height: 8px;
					background-color: #53b753;
					margin-top: -8px;
					margin-left: -10%;
				}
			}
		}
	}
}
</style>
