<template>
	<el-dialog :title="dialogTitle" :visible.sync="show" :destroy-on-close="true" top="6vh" width="980px"  :close-on-click-modal="false" @closed="close">
		<el-form ref="Form" inline :model="Form" :rules="Rules">
			<el-form-item label="用户姓名" prop="username"><el-input v-model="Form.username" placeholder="用户姓名"></el-input></el-form-item>
			<el-form-item label="身份证号码" prop="idNo"><el-input v-model="Form.idNo" placeholder="身份证号码"></el-input></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
				<el-button type="warning" @click="emptyForm">重置</el-button>
			</el-form-item>
		</el-form>
		<!-- {{isAddOne}} -->
		<el-table
			ref="TableDom"
			:data="tableData"
			show-overflow-tooltip
			tooltip-effect="dark"
			:header-cell-style="{ textAlign: 'center', 'background-color': '#f9f9f9', color: '#333333' }"
			:cell-style="{ textAlign: 'center' }"
		>
			<el-table-column width="55" >
				<template v-slot="{row}">
					<el-radio v-model="radioValue" :label="row.id"></el-radio>
				</template>
			</el-table-column>
			<el-table-column label="姓名" prop="realName"></el-table-column>
			<el-table-column label="性别" prop="sex" :formatter="(row, column, cellValue, index)=>{
				cellValue==1?'男':'女'
			}"></el-table-column>
			<el-table-column label="身份证号码" prop="certificationNo"></el-table-column>
			<el-table-column label="手机号" prop="phoneNo" ></el-table-column>
			<el-table-column label="地址" prop="address"></el-table-column>
			<el-table-column label="操作"><el-link type="danger">删除</el-link></el-table-column>
		</el-table>
		<TablePagination
			:total="tableQueryOption.total"
			:current="tableQueryOption.current"
			@currentChange="
				val => {
					tableQueryOption.current = val;
					getTableData();
				}
			"
			:sizes="[3]"
			@sizeChange="
				val => {
					tableQueryOption.size = val;
					getTableData();
				}
			"
		>
			<el-button class="submit-button" @click="emitValues">确认</el-button>
		</TablePagination>
	</el-dialog>
</template>
<script>
import REGEXP from '@/utils/RegExpUtil.js';
import TablePagination from '@/components/TablePagination/index.vue';
import ApiNzjcuserCooperativeUser from "@/api/nzjcuserCooperativeUser.js"
export default {
	data() {
		return {
			show: false,
			tableData: [],
			tableQueryOption: {
				current: 1,
				size: 3,
				total: 0
			},
			// isAddOne:true,
			radioValue:"",
			Form: {
				username: '',
				idNo: '',
				field:"",//排序字段
				order:"",//排序规则，asc升序，desc降序
			},
			Rules: {
				username: [
					{
						validator: (rule, value, callback) => {
							!!!value && callback();
							if (!REGEXP.only.chinses(value)) {
								return callback(new Error('请输入中文'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				idNo: [
					{
						validator: (rule, value, callback) => {
							!!!value && callback();
							if (!REGEXP.idNo(value)) {
								return callback(new Error('请输入正确的身份证号码'));
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
		TablePagination
	},
	computed: {
		dialogTitle() {
			return '添加户籍';
		},
	},
	mounted() {
	},
	methods: {
		open() {
			// this.isAddOne = isAddOne;
			this.show = true;
			this.startGetTableData();
		},
		close() {
			this.emptyForm();
		},
		onSubmit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					this.getTableData()
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		emitValues() {
			let row = this.tableData.map(item=>{
				if(item.id == this.radioValue) {
					return item;
				}
			}).filter(item=>item)
			console.log(row)
			this.$emit('emitAll',row)
			this.show = false;
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
		startGetTableData() {
			this.tableQueryOption.current = 1;
			this.radioValue = ''
			this.getTableData()
		},
		async getTableData() {
			let id = 2;
			let params = {
				current:this.tableQueryOption.current,
				size:this.tableQueryOption.size,
				hostId:0,
			}
			let {code,data,msg} = await ApiNzjcuserCooperativeUser.selectCooperativeUserList(id,params);
			if(code == 10200) {
				this.tableData = data.records;
				this.tableQueryOption.total = data.total
			}
		},
		
	}
};
</script>
<style lang="scss" scoped="scoped">
.submit-button {
	background-color: $ThemeColor;
	min-width: 120px;
	color: #ffffff;
	border: 0;
}
::v-deep .el-radio__label {
	display: none;
}
</style>
