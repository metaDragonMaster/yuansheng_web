<template>
	<div id="address-management">
		<div class="sub-title flex-center-js-sb">
			<p class="title">地址管理</p>
			<button @click="$refs['EditAddress'].open()">
				<i class="el-icon-plus"></i>
				新增地址
			</button>
		</div>
		<!-- <el-empty description="address-management还没写"></el-empty> -->
		<el-table
			class="handle"
			:data="tableData"
			border
			v-loading="isLoading"
			ref="TableDom"
			highlight-current-row
			:header-cell-style="{ textAlign: 'center', 'background-color': '#f9f9f9' }"
			:cell-style="{ textAlign: 'center' }"
		>
			<el-table-column prop="userName" label="姓名" width="120"></el-table-column>
			<el-table-column prop="phoneNo" label="手机号" width="120"></el-table-column>
			<el-table-column prop="detailAddress" label="地址" :formatter="row => `${row.address} - ${row.detailAddress}`"></el-table-column>
			<el-table-column label="操作" width="140">
				<template v-slot="{ row }">
					<el-link type="primary" @click="$refs['EditAddress'].open(row, tableQueryOption.current)">修改</el-link>
					<el-link type="danger" @click="deleteRow(row, row.$index)">删除</el-link>
				</template>
			</el-table-column>
		</el-table>
		<TablePagination
			v-if="false"
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
		<EditAddress ref="EditAddress" @success="getTableData()"></EditAddress>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import EditAddress from './modules/EditAddress/index.vue';
import ApiCenterAddress from '@/api/userCenterAddress.js';
import { setToken } from '@/utils/auth';
import FormUtil from '@/utils/formUtil.js';
export default {
	data() {
		return {
			isLoading: false,
			tableData: [
				// {
				// username: "123",
				// phoneNo: "15588888888",
				// address: "湖南省长沙市岳麓区麓谷企业广场F2栋1005室"
				// }
			],
			tableQueryOption: {
				current: 1,
				size: 10,
				total: 0
			}
		};
	},
	components: {
		TablePagination,
		EditAddress
	},
	mounted() {
		this.startGetTableData();
	},
	methods: {
		startGetTableData(val) {
			this.tableQueryOption.current = val || 1;
			this.getTableData()
		},
		async getTableData() {
			let params = FormUtil.excludeAttr(this.tableQueryOption, 'total');
			let { code, data, msg } = await ApiCenterAddress.showAddressList(params);
			if (code == 10200) {
				// this.tableData = data.records;
				this.tableData = data;
				// this.tableQueryOption.total = data.total;
			}
		},
		async deleteRow(row) {
			let { code, data } = await ApiCenterAddress.deleteAddress(row.addressId);
			code == 10200 && this.getTableData();
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#address-management {
}
</style>
