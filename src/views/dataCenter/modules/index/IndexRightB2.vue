<template>
	<dv-border-box-7 :color="['', '#FFF']">
		<div class="data-title"><span>成交数额走势</span></div>
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
				textStyle: {
					color: '#3398DB'
				},
				title: {
					text: '单位：万吨',
					// textAlign:'right',
					padding: [10, 0, 0, 1000],
					textStyle: {
						color: '#3398DB',
						fontWeight: 500,
						fontSize: 12
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [820, 932, 601, 54, 1290, 1330, 1320],
						type: 'line',
						areaStyle: {},
						smooth: true,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#1CD8D2' // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(0,0,0,0)' // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#ffffff' // 0% 处的颜色
									},
									{
										offset: 0.5,
										color: '#5865FF' // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#ffffff' // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							}
						}
					}
				],
				grid: {
					x: 20,
					y: 25,
					x2: 25,
					y2: 60,
					containLabel: true
				}
			};
			this.$refs['Echarts'].setOptions(option);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.dv-border-box-7 {
	height: 250px;
	width: 100%;
	margin-bottom: 1rem;
}
</style>
