<template>
	<dv-full-screen-container>
		<TopHeader title="区域数据中心"></TopHeader>
		<div class="SelectAddressCascader">
			<label>区域:</label>
			<el-cascader v-model="addressData" :options="options" @change="handleChange"></el-cascader>
			<!-- <SelectAddressCascader v-model="address"></SelectAddressCascader> -->
			<!-- <el-button class="query-button">查询</el-button> -->
		</div>
		<el-row class="content">
			<el-col :span="10"><LeftA1 ref="LeftA1"></LeftA1></el-col>
			<el-col :span="14">
				<div class="grid">
					<ChinaMap ref="chinaMap"></ChinaMap>
					<div class="flex-column-js-sb">
						<RightB1></RightB1>
						<RightB2></RightB2>
					</div>
				</div>
				<RightBottomC1></RightBottomC1>
			</el-col>
		</el-row>
	</dv-full-screen-container>
</template>
<script>
import TopHeader from './modules/TopHeader.vue';
import ChinaMap from './modules/region/ChinaMap.vue';
// import SelectAddressCascader from '@/components/SelectAddress/cascader.vue';
import LeftA1 from './modules/region/LeftA1.vue';
import RightB1 from './modules/region/RightB1.vue';
import RightB2 from './modules/region/RightB2.vue';
import RightBottomC1 from './modules/region/RightBottomC1.vue';

import Api from "@/api/dataCenter.js";

export default {
	data() {
		return {
			// address: '',
			addressData: [],
			options: [
				{
					value: '110000',
					label: '北京市',
					map:'北京',
				},
				{
					value: '120000',
					label: '天津市',
					map:'天津',
				},
				{
					value: '130000',
					label: '河北省',
					map:'河北',
				},
				{
					value: '140000',
					label: '山西省',
					map:'山西',
				},
				{
					value: '150000',
					label: '内蒙古自治区',
					map:'内蒙古',
				},
				{
					value: '210000',
					label: '辽宁省',
					map:'辽宁',
				},
				{
					value: '220000',
					label: '吉林省',
					map:'吉林',
				},
				{
					value: '230000',
					label: '黑龙江省',
					map:'黑龙江',
				},
				{
					value: '310000',
					label: '上海市',
					map:'上海',
				},
				{
					value: '320000',
					label: '江苏省',
					map:'江苏',
				},
				{
					value: '330000',
					label: '浙江省',
					map:'浙江',
				},
				{
					value: '340000',
					label: '安徽省',
					map:'安徽',
				},
				{
					value: '350000',
					label: '福建省',
					map:'福建',
				},
				{
					value: '360000',
					label: '江西省',
					map:'江西',
				},
				{
					value: '370000',
					label: '山东省',
					map:'山东',
				},
				{
					value: '410000',
					label: '河南省',
					map:'河南',
				},
				{
					value: '420000',
					label: '湖北省',
					map:'湖北',
				},
				{
					value: '430000',
					label: '湖南省',
					map:'湖南',
				},
				{
					value: '440000',
					label: '广东省',
					map:'广东',
				},
				{
					value: '450000',
					label: '广西壮族自治区',
					map:'广西',
				},
				{
					value: '460000',
					label: '海南省',
					map:'海南',
				},
				{
					value: '500000',
					label: '重庆市',
					map:'重庆',
				},
				{
					value: '510000',
					label: '四川省',
					map:'四川',
				},
				{
					value: '520000',
					label: '贵州省',
					map:'贵州',
				},
				{
					value: '530000',
					label: '云南省',
					map:'云南',
				},
				{
					value: '540000',
					label: '西藏自治区',
					map:'西藏',
				},
				{
					value: '610000',
					label: '陕西省',
					map:'陕西',
				},
				{
					value: '620000',
					label: '甘肃省',
					map:'甘肃',
				},
				{
					value: '630000',
					label: '青海省',
					map:'青海',
				},
				{
					value: '640000',
					label: '宁夏回族自治区',
					map:'宁夏',
				},
				{
					value: '650000',
					label: '新疆维吾尔自治区',
					map:'新疆',
				},
				{
					value: '710000',
					label: '台湾省',
					map:'台湾',
				},
				{
					value: '810000',
					label: '香港特别行政区',
					map:'香港',
				},
				{
					value: '820000',
					label: '澳门特别行政区',
					map:'澳门',
				}
			]
		};
	},
	components: {
		TopHeader,
		ChinaMap,
		// SelectAddressCascader,
		LeftA1,
		RightB1,
		RightB2,
		RightBottomC1
	},
	computed: {},
	mounted() {
		let name = this.$route.query.name;
		let options = this.options;
		let item = options.filter(item => item.map == name)[0];
		if(!item) {
			return this.$routerUtil.toPath("/dataCenter");
		}
		this.selectRegionDataBaseById(item.value)
		this.startAddressData(item.value);
	},
	methods: {
		async selectRegionDataBaseById(value) {
			let {code,data,msg} = await Api.selectRegionDataBaseById(value);
			this.$nextTick(()=>{
				this.$refs['LeftA1'].handleDataBase(data.cooperativeExchangeInfos);
			})
		},
		startAddressData(value) {
			this.addressData.push(value);
		},
		handleChange(addressData) {
			let value = addressData[0];
			let options = this.options;
			let item = options.filter(item => item.value == value)[0];
			let name = item.map;
			let regionNo = item.value;
			this.$routerUtil.toPath('/dataCenter/region',{name:name});
			let chinaMap = this.$refs['chinaMap'];
			chinaMap.chinaConfigure(name);
			this.selectRegionDataBaseById(regionNo)
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#dv-full-screen-container {
	background-image: url(../../assets/images/dataCenter/bg-1.png);
}
.content {
	padding: 0 1rem;
	& > .el-col:first-child {
		padding-right: 1rem;
	}
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
.SelectAddressCascader {
	margin: 0.5rem auto;
	width: 300px;
	display: grid;
	grid-template-columns: 3rem auto ;//100px
	align-items: center;
	label {
		color: #ffffff;
	}
}
::v-deep .query-button {
	background-color: #1ee6e2;
	margin-left: 1rem;
	color: #ffffff;
}
.grid {
	display: grid;
	grid-template-columns: auto 420px;
}
</style>
