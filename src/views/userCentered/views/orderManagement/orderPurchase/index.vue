<template>
	<div id="order-purchase">
		<div class="sub-title"><p class="title">采购订单</p></div>
		<!-- <el-empty description="order-management还没写"></el-empty> -->
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="102px" inline>
			<el-form-item label="订单编号" prop="cgOrderNo"><el-input clearable v-model="Form.cgOrderNo"></el-input></el-form-item>
			<el-form-item label="合同状态" prop="contractStatusId"><el-input clearable v-model="Form.contractStatusId"></el-input></el-form-item>
			<el-form-item label="商品名称" prop="goodsName"><el-input clearable v-model="Form.goodsName"></el-input></el-form-item>
			<el-form-item label="创建时间" prop="date">
				<el-date-picker v-model="Form.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
			</el-form-item>
			<el-form-item label="供应商名称" prop="ghMerchantName"><el-input clearable v-model="Form.ghMerchantName"></el-input></el-form-item>
			<el-form-item><el-button class="query-order-button" @click="startQuery">查询</el-button></el-form-item>
		</el-form>
		<el-table :data="tableData" v-loading="isLoading" ref="TableDom" :header-cell-style="{ 'background-color': '#F9F9F9', textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
			<el-table-column prop="ghMerchantName" label="供应商名称" width="160"></el-table-column>
			<el-table-column prop="goodsName" label="商品名称"  width="160"></el-table-column>
			<el-table-column prop="cgOrderNo" label="订单编号" width="220"></el-table-column>
			<el-table-column prop="createTime" label="创建时间" width="160"></el-table-column>
			<el-table-column prop="goodsNum" label="商品数量" width="160"></el-table-column>
			<el-table-column prop="contractStatus" label="合同状态" width="160"></el-table-column>
			<el-table-column prop="goodsUnitPrice" label="单价" width="160">
				<template v-slot="{row}"><span class="price">￥{{row.goodsUnitPrice}}</span></template>
			</el-table-column>
			<el-table-column prop="cgOrderGoodsId" label="采购商品ID"  width="160"></el-table-column>
			<el-table-column label="操作" min-width="160" :fixed="tableData.length>0?'right':false">
				<template v-slot="{row}">
					<el-link type="primary" @click="openDetails(row)">订单详情</el-link>
					<el-link type="danger" @click="orderDelete(row.cgOrderGoodsId)">删除</el-link>
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
		></TablePagination>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import ApiNzjcSystem from "@/api/nzjcSystem.js";
import $_Confirm from "@/utils/confirm.js";
import FormUtil from "@/utils/formUtil.js";
export default {
	data() {
		return {
			Form: {
				cgOrderNo: '',
				goodsName: '',
				startTime: '',
				ghMerchantName: '',
				contractStatusId: ''
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
	mounted() {
		this.getTableData()
	},
	methods: {
		startQuery() {
			this.tableQueryOption.current = 1;
			this.getTableData()
		},
		async getTableData() {
			let form = FormUtil.filterHasValue(this.Form);
			let params = {
				current: this.tableQueryOption.current,
				size: this.tableQueryOption.size,
				...form,
			}
			let {code,data} = await ApiNzjcSystem.getCgOrderList(params);
			console.log(data);
			if(code == 10200) {
				this.tableData = data.records;
				this.tableQueryOption.total = data.total;
			}
		},
		orderDelete(id) {
			$_Confirm({
				title:"删除订单",
				content:"确认删除该订单吗",
				thenFunc: async ()=>{
					let {code,data,msg} = await ApiNzjcSystem.cgOrderDelete(id);
					if(code == 10200) {
						this.getTableData();
					} else {
						this.$message.warning(msg)
					}
				},
			});
		},
		openDetails(row) {
			this.$routerUtil.toPath("/userCentered/orderPurchase/details",{orderId:'1'});

		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#order-purchase {
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
		margin-left: 1rem;
	}
	.el-link {
		margin-right: 10px;
	}
}
</style>
