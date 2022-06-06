<template>
	<div id="change-user-phone-no">
		<div class="sub-title">
			<p class="title">
				更改手机号
			</p>
		</div>
		<div class="ps-danger">
			登录密码用于以用户身份登录平台，请妥善管理.
		</div>
		<EasyStepForm :steps="steps" v-model="currentIndex" @emitNext="stepNext" @emitPrev="stepPrev">
			<div v-if="currentIndex == 1">
				<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
					<el-form-item prop="phoneNo" label="手机号码">
						{{safePhoneNo(Form.phoneNo)}}
					</el-form-item>
					<el-form-item prop="verifyCode" label="验证方式">
						<VerifyElementInput v-model="Form.verifyCode"></VerifyElementInput>
					</el-form-item>
				</el-form>
			</div>
			<div v-else-if="currentIndex == 2">
				<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
					<el-form-item prop="verifyCode" label="验证方式">
						<VerifyElementInput v-model="Form.verifyCode"></VerifyElementInput>
					</el-form-item>
				</el-form>
			</div>
			<div v-else-if="currentIndex == 3">
				完成了
			</div>
		</EasyStepForm>
	</div>
</template>

<script>
import EasyStepForm from "@/components/EasyStepForm/index.vue";
import VerifyElementInput from "@/components/VerifyElementInput/index.vue";
import _safe from '@/utils/safe.js';
export default {
	data(){return{
		value:"",
		currentIndex:1,
		testToEmail:false,
		Form: {
			// phoneNo:"15581609406",
			phoneNo:"",
			verifyCode:"",
		},
		Rules: {
		},
		steps:[
			{title:"安全验证"},
			{title:"新手机号码"},
			{title:"设置完成"},
		]
	}},
	components: {
		EasyStepForm,
		VerifyElementInput,
	},
	computed: {
		safePhoneNo() {
			return phoneNo => _safe.phoneNo(phoneNo);
		}
	},
	mounted() {
		
	},
	methods:{
		stepNext(index) {
			this.currentIndex = index;
		},
		stepPrev(index) {
			this.currentIndex = index;
		}
	}
}
</script>

<style  lang="scss" scoped="scoped">
@import "@/styles/transition/ease.scss";
#change-user-phone-no {
	.easy-step-form {
		max-width: 37.5rem;
		margin: 3.125rem auto 0 auto;
	}
	.el-input {
		max-width: 20rem;
	}
}
</style>
