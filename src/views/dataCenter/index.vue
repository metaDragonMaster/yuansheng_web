<template>
	<dv-full-screen-container>
		<TopHeader title="原生联数据中心"></TopHeader>
		<el-row :gutter="10">
			<el-col :span="5">
				<IndexLeftA1 ref="IndexLeftA1"></IndexLeftA1>
				<IndexLeftA2></IndexLeftA2>
			</el-col>
			<el-col :span="14">
				<ChinaMap></ChinaMap>
				<IndexBottomC1></IndexBottomC1>
			</el-col>
			<el-col :span="5">
				<IndexRightB1  ref="IndexRightB1" ></IndexRightB1>
				<IndexRightB2></IndexRightB2>
				<IndexRightB3></IndexRightB3>
			</el-col>
		</el-row>
	</dv-full-screen-container>
</template>
<script>
import TopHeader from './modules/TopHeader.vue';
import ChinaMap from './modules/index/ChinaMap.vue';
import IndexLeftA1 from './modules/index/IndexLeftA1.vue';
import IndexLeftA2 from './modules/index/IndexLeftA2.vue';
import IndexRightB1 from './modules/index/IndexRightB1.vue';
import IndexRightB2 from './modules/index/IndexRightB2.vue';
import IndexRightB3 from './modules/index/IndexRightB3.vue';
import IndexBottomC1 from './modules/index/IndexBottomC1.vue';

import Api from "@/api/dataCenter.js";

export default {
	data() {
		return {
		};
	},
	components: {
		TopHeader,
		ChinaMap,
		IndexLeftA1,
		IndexLeftA2,
		IndexRightB1,
		IndexRightB2,
		IndexRightB3,
		IndexBottomC1
	},
	computed: {},
	created() {
		this.getCenterDataBase()
		// console.log('123')
	},
	methods: {
		async getCenterDataBase() {
			let {code,data,msg} = await Api.getCenterDataBase();
			this.$nextTick(()=>{
				this.$refs['IndexLeftA1'].handleDataBase(data.goodsExchangeInfos);
				this.$refs['IndexRightB1'].setOptions(data.hotGoodsCategoryRates);
			})
		}
	},
};
</script>
<style lang="scss" scoped="scoped">
#dv-full-screen-container {
	// display: flex;
	// display: grid;
	.el-row {
		padding: 0 16px;
	}
	background-image: url(../../assets/images/dataCenter/bg-1.png);
}
::v-deep .data-title {
	height: 40px;
	background: linear-gradient(90deg, #0825b7 0%, rgba(1, 180, 255, 0) 100%);
	// margin: 4px;
	position: relative;
	z-index: -1;
	span {
		background: linear-gradient(92deg, #0072ff 0%, #00eaff 0%, #01aaff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 40px;
		padding-left: 1rem;
		font-size: 22px;
	}
}
</style>
