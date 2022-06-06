<template>
	<div id="order-management">
		<div class="sub-title"><p class="title">订单管理</p></div>
		<!-- <el-empty description="order-management还没写"></el-empty> -->
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="102px" inline>
			<el-form-item label="订单编号" prop="orderId"><el-input clearable v-model="Form.orderId"></el-input></el-form-item>
			<el-form-item label="合同状态" prop="static"><el-input clearable v-model="Form.static"></el-input></el-form-item>
			<el-form-item label="商品名称" prop="name"><el-input clearable v-model="Form.name"></el-input></el-form-item>
			<el-form-item label="创建时间" prop="date">
				<el-date-picker v-model="Form.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
			</el-form-item>
			<!-- <el-form-item label="发货单编号" prop="invoiceId"><el-input clearable v-model="Form.invoiceId"></el-input></el-form-item> -->
			<el-form-item label="供应商名称" prop="supplierName"><el-input clearable v-model="Form.supplierName"></el-input></el-form-item>
			<!-- <el-form-item label="我的备注" prop="myPs"><el-input clearable v-model="Form.myPs"></el-input></el-form-item> -->
			<el-form-item><el-button class="query-order-button" style="margin-left: 1rem;">查询</el-button></el-form-item>
		</el-form>
		<el-table :data="tableData" border v-loading="isLoading" ref="TableDom" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
			<el-table-column prop="orderId" label="订单编号"></el-table-column>
			<el-table-column prop="orderId" label="创建时间"></el-table-column>
			<el-table-column prop="orderId" label="供应商名称"></el-table-column>
			<el-table-column prop="orderId" label="商品名称"></el-table-column>
			<el-table-column prop="orderId" label="商品数量"></el-table-column>
			<el-table-column prop="orderId" label="合同状态"></el-table-column>
			<el-table-column prop="orderId" label="单价">
				<template v-slot="{row}"><span class="price">￥{{row.orderId}}</span></template>
			</el-table-column>
			<el-table-column prop="orderId" label="总价">
				<template v-slot="{row}"><span class="price">￥{{row.orderId}}</span></template>
			</el-table-column>
			<el-table-column label="操作" min-width="60" fixed="right">
				<el-link type="danger">删除</el-link>
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
		></TablePagination>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
export default {
	data() {
		return {
			Form: {
				orderId: '',
				invoiceId: '',
				name: '',
				date: '',
				supplierName: '',
				myPs: '',
				static: ''
			},
			Rules: {},
			isLoading: false,
			tableQueryOption: {
				current: 1,
				size: 10,
				total: 0
			},
			tableData: [
				{
					orderId: '123456',
				}
			]
		};
	},
	components: {
		TablePagination
	},
	computed: {},
	mounted() {},
	methods: {
		getTableData() {}
	}
};
</script>
<style lang="scss" scoped="scoped">
#order-management {
	.el-form {
		margin-top: 1rem;
		background-color: #F9F9F9;
		padding-top: 1rem;
		margin-bottom: 1rem;
	}
	.el-input {
		width: 200px;
	}
	.price {
		color: #FF3A33;
	}
	.query-order-button {
		background-color: #069B87;
		color: #FFFFFF;
	}
}
</style>
