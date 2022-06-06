<template>
	<div id="upload-certificates-photos">
		<!-- inline -->
		
		<!-- {{Form}} -->
		<el-form ref="Form" :model="Form" :rules="Rules"  label-position="right" label-width="120px">
			<el-form-item prop="bankCardFrontPhoto" label="银行卡正面">
				<uploadImg
					immediately
					moduleName="web"
					ref="bankCardFrontPhoto"
					@remove="Form.bankCardFrontPhoto = ''"
					@imageUrls="
						urls => {
							Form.bankCardFrontPhoto = urls[0];
						}
					"
				></uploadImg>
			</el-form-item>
			<!-- <br> -->
			<el-form-item prop="licenseCodePhoto" label="营业执照">
				<uploadImg
					immediately
					moduleName="web"
					ref="licenseCodePhoto"
					@remove="Form.licenseCodePhoto = ''"
					@imageUrls="
						urls => {
							Form.licenseCodePhoto = urls[0];
						}
					"
				></uploadImg>
			</el-form-item>
			<!-- <br> -->
			<el-form-item prop="legalCertificationFrontPhoto" label="法人身份证照(正面)">
				<uploadImg
					immediately
					moduleName="web"
					ref="legalCertificationFrontPhoto"
					@remove="Form.legalCertificationFrontPhoto = ''"
					tipText="正面照"
					@imageUrls="
						urls => {
							Form.legalCertificationFrontPhoto = urls[0];
						}
					"
				></uploadImg>
			</el-form-item>
			<el-form-item prop="legalCertificationBackPhoto" label="法人身份证照(反面)">
				<uploadImg
					immediately
					moduleName="web"
					ref="legalCertificationBackPhoto"
					@remove="Form.legalCertificationBackPhoto = ''"
					tipText="反面照"
					@imageUrls="
						urls => {
							Form.legalCertificationBackPhoto = urls[0];
						}
					"
				></uploadImg>
			</el-form-item>
			<el-form-item>
				<el-button class="submit-button" @click="submit">下一步</el-button>
				<el-button @click="$emit('back')">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import UploadImg from '@/components/UploadImg/index.vue';
import ApiNzjcuserMerchant from '@/api/nzjcuserMerchant.js';
import { mapGetters } from "vuex"
export default {
	data() {
		return {
			// Form: {
			// 	bankCardFrontPhoto: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', //			银行卡正面	false	string
			// 	licenseCodePhoto: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', //			营业执照		false	string
			// 	legalCertificationBackPhoto: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', //	法人身份证反面		false	string
			// 	legalCertificationFrontPhoto: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' //	法人身份证正面		false	string
			// },
			Form: {
				bankCardFrontPhoto: '', //			银行卡正面	false	string
				licenseCodePhoto: '', //			营业执照		false	string
				legalCertificationBackPhoto: '', //	法人身份证反面		false	string
				legalCertificationFrontPhoto: '' //	法人身份证正面		false	string
			},
			Rules: {
				bankCardFrontPhoto: [{ required: true, message: '请上传银行卡正面照', trigger: 'blur' }], //			银行卡正面	false	string
				licenseCodePhoto: [{ required: true, message: '请上传营业执照', trigger: 'blur' }], //			营业执照		false	string
				legalCertificationBackPhoto: [{ required: true, message: '请上传法人身份证反面', trigger: 'blur' }], //	法人身份证反面		false	string
				legalCertificationFrontPhoto: [{ required: true, message: '请上传法人身份证正面', trigger: 'blur' }] //	法人身份证正面		false	string
			}
		};
	},
	components: {
		UploadImg
	},
	computed:{
		...mapGetters(['userInfo']),
	},
	mounted() {
		this.getMerchantPhoto()
	},
	methods: {
		async getMerchantPhoto() {
			let { code, data } = await ApiNzjcuserMerchant.getMerchantPhoto();
			console.log("getMerchantPhoto",data)
			if(!!data) {
				this.$refs['bankCardFrontPhoto'].setFileList(data.bankCardFrontPhoto)
				this.$refs['licenseCodePhoto'].setFileList(data.licenseCodePhoto)
				this.$refs['legalCertificationBackPhoto'].setFileList(data.legalCertificationBackPhoto)
				this.$refs['legalCertificationFrontPhoto'].setFileList(data.legalCertificationFrontPhoto)
				Object.keys(this.Form).forEach(key=>{this.Form[key] = data[key]});
				console.log(this.Form)
			}
		},
		async submit($enent) {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					// let id = this.userInfo['userOpenInfoObject']['merchantId'];
					// console.log(id)
					let res;
					// if(id>0) {
					// 	res = await ApiNzjcuserMerchant.updateMerchantPhoto(this.Form);
					// } else {
						res = await ApiNzjcuserMerchant.postMerchantPhoto(this.Form);
					// }
					if (res.code == 10200) {
						let { code, data } = await ApiNzjcuserMerchant.postMerchantInfoCheck();
						code == 10200 && this.$emit('submit', 3);
					} else {
						this.$message.warning(res.msg);
					}
				} else {
					console.log('error submit!!');
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.el-form {
	max-width: 39.5rem;
	margin: 1rem auto;
}
</style>
