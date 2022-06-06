<template>
	<div id="census-register">
		<div class="sub-title flex pointer">
			<p class="title " @click="$routerUtil.toName('memberManagement')">成员管理</p>
			<p class="title alive">户籍管理</p>
			<button class="drift-right" @click="openEdit()">新增户籍</button>
		</div>
		<el-table
			class="handle"
			:data="tableData"
			v-loading="isLoading"
			ref="TableDom"
			highlight-current-row
			:header-cell-style="{ textAlign: 'center', 'background-color': '#f9f9f9' }"
			:cell-style="{ textAlign: 'center' }"
		>
			<el-table-column prop="realName" label="户主" min-width="100"></el-table-column>
			<el-table-column prop="certificationNo" label="身份证号码" min-width="180"></el-table-column>
			<el-table-column prop="address" label="地址" min-width="160"></el-table-column>
			<el-table-column prop="phoneNo" label="手机号"  min-width="160"></el-table-column>
			<el-table-column prop="house" label="住房情况" min-width="160" :formatter="row => selectHouse.filter(item => item.value == row.house).label"></el-table-column>
			<el-table-column prop="houseArea" label="住房面积" min-width="160"></el-table-column>
			<el-table-column prop="annualIncome" label="家庭年收入" min-width="160"></el-table-column>
			<el-table-column prop="agriculturalIncome" label="农业收入" min-width="160"></el-table-column>
			<el-table-column label="操作" width="140" :fixed="tableData.length>0?'right':false">
				<template v-slot="{ row }">
					<el-link type="primary" @click="openEdit(row.id)">详情</el-link>
					<el-link type="danger">删除</el-link>
				</template>
			</el-table-column>
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
			@sizeChange="
				val => {
					tableQueryOption.size = val;
					getTableData();
				}
			"
		/>
		<EditCensusRegister ref="EditCensusRegisterDom" @success="startGetTableData"></EditCensusRegister>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import EditCensusRegister from '../modules/EditCensusRegister/index.vue';
import ApiNzjcuserCooperativeFarmer from '@/api/nzjcuserCooperativeFarmer.js';
export default {
	data() {
		return {
			isLoading: false,
			tableData: [],
			tableQueryOption: {
				current: 1,
				size: 10,
				total: 0
			},
			selectHouse: [
				{ value: 0, label: '无' },
				{ value: 1, label: '楼房' },
				{ value: 2, label: '平房' },
				{ value: 3, label: '瓦房' },
				{ value: 4, label: '危房' },
				{ value: 5, label: '其他' }
			]
		};
	},
	components: {
		TablePagination,
		EditCensusRegister
	},
	mounted() {
		this.startGetTableData();
	},
	methods: {
		openEdit(id) {
			console.log('openEdit', id);
			this.$refs['EditCensusRegisterDom'].open(id);
		},
		startGetTableData() {
			this.tableQueryOption.current = 1;
			this.getTableData();
		},
		async getTableData() {
			let params = {
				// cooperativeId:2,
				current: this.tableQueryOption.current,
				size: this.tableQueryOption.size
			};
			let { code, data, msg } = await ApiNzjcuserCooperativeFarmer.selectCooperativeFarmerInfoList(params);
			if (code == 10200) {
				this.tableData = data.records;
				this.tableQueryOption.total = data.total;
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped"></style>
