<template>
	<div id="shop-cart" limit-max-width>
		<ol class="select-goods-type-ol flex">
			<li>全部商品</li>
			<!-- <div class="label-alive"></div> -->
		</ol>
		<el-table
			ref="TableDom"
			:data="tableData"
			show-overflow-tooltip
			tooltip-effect="dark"
			@select-all="selectAll"
			@selection-change="handleSelectionChange"
			:header-cell-style="{ textAlign: 'center', 'background-color': '#f9f9f9', color: '#333333' }"
			:cell-style="{ textAlign: 'center' }"
		>
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column label="商品信息" prop="goodInfo" min-width="300">
				<template v-slot="{ row }">
					<div class="good-info-card">
						<img :src="row.goodInfo.image" alt="" />
						<p class="font-hide-2">{{ row.goodInfo.title }}</p>
						<span>{{ row.goodInfo.subTitle }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="单价(元)" prop="goodPrice"></el-table-column>
			<el-table-column label="商品数量" prop="goodNum"></el-table-column>
			<el-table-column label="金额(元)" prop="goodAmount">
				<template v-slot="{ row }">
					<span style="color: #FF3A33;">{{ row.goodAmount }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作"><el-link type="danger">删除</el-link></el-table-column>
		</el-table>
		<div class="shop-cell flex">
			<div class="select-all"><el-checkbox v-model="checked" ref="checkAllDom" @change="checkSelectAll"></el-checkbox></div>
			<div class="select-address flex">
				<!-- {{address}} -->
				
				<!-- <p>地址：张三 15188888888 湖南省常德市武陵区德山镇经济技术开发区桃林路627号中通快递运转中心</p> -->
				<p>地址：{{defaultLabel}}</p>
				<el-popover placement="top" width="740" trigger="click">
					<el-form label-width="48px">
						<el-form-item label="地址">
							<el-select v-model="addressId" @change="setDefaultLabel">
								<!--  @change="selectAddress" -->
								<el-option v-for="(item,index) in addressList" :value="item.addressId" :label="item.address +'-'+ item.detailAddress" :key="item.addressId">
									<!-- <span>{{item.address + item.detailAddress}}</span> -->
								</el-option>
							</el-select>
						</el-form-item>
					</el-form>
					<button class="add-address" @click="openEditAddress">新增地址</button>
					<i class="select-i" slot="reference"></i>
				</el-popover>
			</div>
			<div class="drift-right flex-align-center">
				<p>
					已选商品
					<span>{{ multipleSelection.length }}</span>
					件
				</p>
				<!-- <p>
					合计： <span>￥4000.00</span>
				</p> -->
				<button>购买</button>
			</div>
		</div>
		<EditAddress ref="EditAddress" @submit="showAddressList"></EditAddress>
	</div>
</template>
<script>
import EditAddress from "./modules/EditAddress.vue"
import Api from "@/api/commonserviceUserCenterAddress.js"
export default {
	data() {
		return {
			tableData: [
				{
					// goodInfo:"这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称",
					goodInfo: {
						image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						title: '鑫颖达 2021新式四驱微耕机多功能农用汽油柴油开沟起垄除草播种家用旋耕',
						subTitle: '170汽油机手拉款7.5马力全套配件'
					},
					goodPrice: '￥10000.00',
					goodNum: '2',
					goodAmount: '￥20000.00'
				},
				{
					goodInfo: {
						image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						title: '鑫颖达 2021新式四驱微耕机多功能农用汽油柴油开沟起垄除草播种家用旋耕',
						subTitle: '170汽油机手拉款7.5马力全套配件'
					},
					goodPrice: '￥10000.00',
					goodNum: '2',
					goodAmount: '￥20000.00'
				}
				// {
				// 	goodInfo:"这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称",
				// 	goodPrice:"￥10000.00",
				// 	goodNum:"2",
				// 	goodAmount:"￥20000.00",
				// }
			],
			checked: false,
			multipleSelection: [],
			
			addressId:'',
			// address:{},
			defaultLabel:"",
			addressList: []
		};
	},
	components: {
		EditAddress,
	},
	computed: {
		
 	},
	mounted() {
		this.showAddressList()
	},
	methods: {
		async showAddressList(addressId) {
			let {code ,data} = await Api.showAddressList();
			console.log(data)
			this.addressList = data;
			if(addressId) {
				this.addressId = addressId;
			} else {
				this.addressId = data.filter(item=>item.defaultAddress == true)[0].addressId || '';
			}
			// console.log(this.addressId);
			// this.selectAddress(this.addressId)
			this.setDefaultLabel(this.addressId)
		},
		setDefaultLabel(addressId) {
			let {
				userName,
				phoneNo,
				address,
				detailAddress
			} = this.addressList.filter(item=>item.addressId == addressId)[0];
			this.defaultLabel =  `${userName} ${phoneNo} ${address} ${detailAddress}`
		},
		selectAll(selection) {
			this.isIndeterminate = false;
		},
		checkSelectAll() {
			this.$refs['TableDom'].toggleAllSelection();
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
			let isSelectAll = val.length == this.tableData.length;
			let isIndeterminate = val.length > 0 && val.length < this.tableData.length;
			if (!isSelectAll && isIndeterminate) {
				let isIndeterminateInputClassList = this.$refs['checkAllDom'].$el.children[0].classList;
				isIndeterminate ? isIndeterminateInputClassList.add('is-indeterminate') : isIndeterminateInputClassList.remove('is-indeterminate');
			} else {
				this.checked = isSelectAll;
			}
		},
		openEditAddress() {
			this.$refs['EditAddress'].open()
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
body {
	.el-select {
		width: 100%;
	}
	.add-address {
		background-color: #069B87;
		color: #FFFFFF;
		padding: 8px 16px;
		border-radius: 2px;
		margin-left: 3rem;
	}
}
#shop-cart {
	$color: #ff3a33;
	.shop-cell {
		background-color: #f9f9f9;
		.select-all {
			padding: 0.625rem 1.25rem;
		}
		.select-address {
			& > * {
				line-height: 42px;
				font-size: 14px;
			}
			& > p {
				margin-right: 0.5rem;
			}
			.select-i {
				width: 0;
				height: 0;
				cursor: pointer;
				display: block;
				margin-top: 18px;
				border-left: 6px solid transparent;
				border-right: 6px solid transparent;
				border-top: 6px solid #069B87;
				border-radius: 2px;
			}
		}
		
		.flex-align-center {
			p {
				font-size: 0.875rem;
				margin-right: 2.5rem;
				span {
					color: $color;
				}
			}
			button {
				background-color: $color;
				color: #ffffff;
				width: 150px;
				height: 100%;
			}
		}
	}
	.select-goods-type-ol {
		margin-bottom: 1rem;
		margin-top: 1rem;
		border-bottom: 0.125rem solid #f2f2f2;
		li {
			padding: 0.75rem 0.25rem;
			border-bottom: 0.125rem solid $ThemeColor;
			margin-bottom: -0.125rem;
			font-weight: bold;
		}
	}
	.good-info-card {
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
			'a b b'
			'a b b'
			'a b b'
			'a c c';
		text-align: left;
		img {
			grid-area: a;
			max-width: 80px;
			max-height: 80px;
		}
		p {
			grid-area: b;
			font-weight: bold;
		}
		span {
			grid-area: c;
			color: #999999;
		}
	}
}
</style>
