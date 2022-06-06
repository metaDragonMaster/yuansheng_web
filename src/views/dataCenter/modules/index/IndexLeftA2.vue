<template>
	<dv-border-box-7 :color="['', '#FFF']">
		<div class="data-title"><span>全国商品交易中心</span></div>
		<Echarts ref="Echarts"></Echarts>
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
	computed: {},
	mounted() {
		this.setOptions();
	},
	methods: {
		setOptions() {
			let option = {
				color: ['#3398DB'],
				textStyle:{
					color: '#3398DB'
				},
				title: {
					text:"单位：万吨",
					// textAlign:'right',
					padding:[ 10 ,0 ,0 ,300],
					textStyle:{
						color: '#3398DB',
						fontWeight: 500 ,
						fontSize: 12,
					}
				},
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar'
					}
				],
				grid: {
					x: 20,
					y: 25,
					x2: 25,
					y2: 60,
					containLabel:true,
				}
			};
			this.$refs['Echarts'].setOptions(option);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.dv-border-box-7 {
	height: 280px;
	width: 100%;
}
</style>
