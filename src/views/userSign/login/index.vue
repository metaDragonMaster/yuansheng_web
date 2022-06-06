<template>
	<div id="login-view" limit-max-width>
		<div class="login-form-box">
			<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px"  @submit.native.prevent>
				<el-form-item>
					<div class="login-type">
						<button type="button" :class="loginTpye == false ? 'alive' : ''" @click="changeLoginType(false)">短信登录</button>
						<button type="button" :class="loginTpye == true ? 'alive' : ''" @click="changeLoginType(true)">账户登录</button>
					</div>
				</el-form-item>
				<el-form-item v-show="loginTpye==true" prop="username" label="用户名"><el-input v-model="Form.username" clearable /></el-form-item>
				<el-form-item v-show="loginTpye==true" prop="password" label="密码"><el-input v-model="Form.password" clearable type="password" /></el-form-item>
				<el-form-item v-show="loginTpye==false" prop="phone" label="手机号"><el-input v-model="Form.phone" clearable /></el-form-item>
				<el-form-item v-show="loginTpye==false" prop="verifyCode" label="验证码">
					<VerifyElementInput action="login" v-model="Form.verifyCode" :bindPhoneNo="Form.phone" ref="sendVerifyDom"></VerifyElementInput>
				</el-form-item>
				<el-form-item>
					<el-button class="submit-bottom" @click="submit" :loading="loginLoading">提交</el-button>
					<p class="flex-js-sb" style="font-size: 0.75rem;padding-top: 1rem;">
						<button type="button" class="click-text" @click.stop="$routerUtil.toName('userRegister')">免费注册</button>
						<button type="button" class="click-text">忘记密码</button>
					</p>
				</el-form-item>
			</el-form>
			<img class="form-image" src="@/assets/images/userSign/form-bg.png" alt="" />
		</div>
	</div>
</template>
<script>
import REGEXP from '@/utils/RegExpUtil.js';
import VerifyElementInput from '@/components/VerifyElementInput/index.vue';
import { mapGetters } from "vuex"
export default {
	data() {
		return {
			loginLoading:false,
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
							if(this.loginTpye == true) {
								if (value === '' ) {
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
	components: {
		VerifyElementInput
	},
	computed:{
		...mapGetters(['userInfo']),
	},
	created() {
		if(this.userInfo) {
			this.$message.warning('用户已登录');
			this.$routerUtil.toName('homepage')
		}
	},
	methods: {
		changeLoginType(type) {
			this.loginTpye = type;
			if(type) {
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
					let {
						username,
						password,
						phone,
						verifyCode,
					} = this.Form
					let res = undefined;
					try{
						this.loginTpye ?
						res = await this.pwLogin({
							username,
							password,
						}):
						res = await this.smsLogin({
							phone,
							verifyCode,
						})
					}catch(e){
						//TODO handle the exception
						this.$refs['sendVerifyDom'].clearTimer();
						this.Form.verifyCode = '';
					}
					if(res.code == 10200) {
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
			console.log(name,typeof name == 'string')
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
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
#login-view {
	height: 44rem;
	background-image: url(../../../assets/images/userSign/view-bg.png);
	background-repeat: no-repeat;
	// background-size: cover;
	background-size: 100%;
	background-position: bottom left;
	padding-top: 140px;
	.login-form-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		border-radius: 0.25rem;
		max-width: 68.75rem;
		max-height: 34.375rem;
		margin: 0 auto;
		background-color: #ffffff;
		box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.3);
		.form-image {
			width: 31.25rem;
			height: 100%;
		}
		.el-input {
			width: 20.625rem;
		}
	}
	.login-type {
		// display: flex;
		button {
			margin-left: 1rem;
			margin-right: 5rem;
			padding-bottom: 0.75rem;
			font-weight: bold;
		}
		button.alive {
			color: $ThemeColor;
			border-bottom: 0.25rem solid $ThemeColor;
			padding-bottom: 0.5rem;
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
	}
}
</style>
