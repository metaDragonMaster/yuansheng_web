<template>
	<dv-border-box-7 :color="['', '#FFF']">
		<div class="data-title"><span>热门商品交易统计</span></div>
		<Echarts ref="Echarts" height="280px"></Echarts>
	</dv-border-box-7>
</template>
<script>
import Echarts from '@/components/Echarts/index.vue';
export default {
	data() {
		return {};
	},
	components: {
		Echarts
	},
	methods: {
		setOptions(dataBase) {
			// console.log(dataBase)
			let data = [];
			let cellTitle = [];
			dataBase.map(item=>{
				data.push({
					// value:parseInt(item.rate),
					value:parseFloat(item.rate),
					name:item.goodsName
				})
				cellTitle.push(item.goodsName)
			})
			let option = {
				title: {
					left: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)'
				},
				legend: {
					icon: 'circle',
					left: 'center',
					bottom: '15%',
					textStyle: {
						color: '#069DFD'
					},
					data: ['大米', '小麦', '猪肉', '蔬菜', '农机', '其他'],
					// data: cellTitle,
					formatter:(name) =>{
						let count = 0;
						data.forEach(item => {
							count = count + item.value;
						});
						//找到data中name和文本name值相同的对象
						const val = data.filter(item => item.name == name);
						return name + '  ' + ((val[0].value / count) * 100).toFixed(2) + '%';
					}
				},
				series: [
					{
						name: '类型',
						type: 'pie',
						radius: [30, 60],
						center: ['50%', '36%'],
						roseType: 'radius',
						label: {
							show: false
						},
						emphasis: {
							label: {
								show: true
							}
						},
						data: data
					}
				]
			};
			this.$refs['Echarts'].setOptions(option);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.dv-border-box-7 {
	height: 288px;
	margin-bottom: 1rem;
}
</style>
