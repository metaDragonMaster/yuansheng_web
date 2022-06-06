<template>
	<div class="add-member">
		<el-dialog :title="dialogTitle" :visible.sync="show" top="6vh" width="680px" :close-on-click-modal="false" @closed="close">
			<!-- <p>
				{{Form}}
			</p> -->
			<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="120px">
				<el-form-item prop="realName" label="姓名"><el-input v-model="Form.realName" clearable /></el-form-item>
				<el-form-item prop="age" label="年龄">
					<el-input-number v-model="Form.age" :controls="false" :min="0"></el-input-number>
					<!-- <el-input v-model="Form.age" clearable /> -->
				</el-form-item>
				<el-form-item prop="phoneNo" label="手机号"><el-input v-model="Form.phoneNo" clearable /></el-form-item>
				<el-form-item prop="certificationNo" label="身份证号"><el-input v-model="Form.certificationNo" clearable /></el-form-item>
				<el-form-item prop="cityNo" label="所在地区"><SelectAddress ref="SelectAddress" v-model="Form.cityNo"></SelectAddress></el-form-item>
				<el-form-item prop="address" label="详细地址"><el-input v-model="Form.address" clearable type="textarea" :rows="4" /></el-form-item>
				<el-form-item prop="sex" label="性别">
					<el-radio-group v-model="Form.sex">
						<el-radio v-for="(item, index) in radioSex" :label="item.value" :key="item.value">{{ item.label }}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="health" label="健康状况">
					<el-radio-group v-model="Form.health">
						<el-radio v-for="(item, index) in radioHealth" :label="item.value" :key="item.value">{{ item.label }}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="politicalStatus" label="政治面貌">
					<el-radio-group v-model="Form.politicalStatus">
						<el-radio v-for="(item, index) in radioPoliticalStatus" :label="item.value" :key="item.value">{{ item.label }}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="job" label="职务"><el-input v-model="Form.job" clearable /></el-form-item>
				<el-form-item>
					<el-button class="submit-button" @click="submit">提交</el-button>
					<el-button @click="show = false">返回</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
// import SelectAddress from '@/components/SelectAddress/index.vue';
import SelectAddress from '@/components/SelectAddress/cascader.vue';
// import UploadImg from "@/components/UploadImg/index.vue"
import ApiNzjcuserCooperativeUser from '@/api/nzjcuserCooperativeUser.js';
export default {
	data() {
		return {
			cooperativeUserId: '',
			show: false,
			// Form: {
			// 	cityNo: [ "110000", "110100", "110101" ], //地址编码
			// 	age: 0, //年龄
			// 	certificationNo: '431023199806080019', //身份证
			// 	health: 0, //健康状况
			// 	job: '管理员', //职务
			// 	phoneNo: '15581609046', //手机号
			// 	realName: '哈哈哈', //名字
			// 	address: '湖南省常德市', //详细地址
			// 	sex: '1', //性别
			// 	politicalStatus: 1, //政治面貌
			// },
			Form: {
				cityNo: [], //地址编码
				age: '', //年龄
				certificationNo: '', //身份证
				health: '', //健康状况
				job: '', //职务
				phoneNo: '', //手机号
				realName: '', //名字
				address: '', //详细地址
				sex: '', //性别
				politicalStatus: '' //政治面貌
			},
			Rules: {
				realName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
				age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
				phoneNo: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
				certificationNo: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
				cityNo: [{ required: true, message: '请选择所在地', trigger: 'blur' }],
				address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
				sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
				health: [{ required: true, message: '请选择健康状况', trigger: 'blur' }]
			},
			radioSex: [{ value: '1', label: '男' }, { value: '0', label: '女' }],
			radioHealth: [{ value: 0, label: '良好' }, { value: 1, label: '一般' }, { value: 2, label: '欠佳' }],
			radioPoliticalStatus: [{ value: 1, label: '中共党员' }, { value: 0, label: '群众' }]
		};
	},
	components: {
		SelectAddress
		// UploadImg
	},
	computed: {
		isChange() {
			return !!this.cooperativeUserId;
		},
		dialogTitle() {
			return !this.isChange ? '新增成员' : '修改成员';
		}
	},
	mounted() {},
	methods: {
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let params = {
						...this.Form
					};
					params.cityNo = params.cityNo.join(',');
					// console.log(params);
					let res;
					this.isChange ? (res = await this.updateCooperativeUser(params)) : (res = await this.postCooperativeUser(params));
					if (res.code == 10200) {
						this.$message.success('用户录入完成');
						this.show = false;
						this.$emit('success');
					} else {
						this.$message.warning(res.msg);
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		postCooperativeUser(params) {
			return ApiNzjcuserCooperativeUser.postCooperativeUser(params);
		},
		updateCooperativeUser(params) {
			return ApiNzjcuserCooperativeUser.updateCooperativeUser(this.cooperativeUserId,params);
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
		open(row) {
			if (row) {
				console.log(row);
				Object.keys(this.Form).forEach(key => {
					this.Form[key] = row[key];
				});
				this.Form.cityNo = this.Form.cityNo.split(',').map(item => parseInt(item));
				console.log(this.Form.cityNo);
				this.cooperativeUserId = row.id;
			}
			this.show = true;
		},
		close() {
			this.cooperativeUserId = '';
			this.emptyForm();
			// this.$refs['SelectAddress'].startData('');
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.add-member {
	.el-input-number {
		width: 100%;
		::v-deep .el-input__inner {
			text-align: left;
		}
	}
	.submit-form-item {
		padding-left: 120px;
	}
	.submit-button {
		background-color: $ThemeColor;
		min-width: 120px;
		color: #ffffff;
		border: 0;
	}
}
</style>
