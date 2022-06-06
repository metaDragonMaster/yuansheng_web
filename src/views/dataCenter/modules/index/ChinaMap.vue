<template>
	<div class="echarts-box" ref="EchartsBox"><div class="echarts" ref="Echarts"></div></div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js'; // 引入中国地图数据
export default {
	name: 'echarts',
	props: ['userJson'],
	data() {
		return {
			chart: null
		};
	},
	mounted() {
		// this.$refs['EchartsBox'].addEventListener('mousewheel',function($event) {
		// 	// console.log($event)
		// })
		this.chinaConfigure();
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		chinaConfigure() {
			let Echarts = echarts.init(this.$refs['Echarts']); //这里是为了获得容器所在位置
			let $This = this;
			window.onresize = Echarts.resize;
			Echarts.setOption({
				// 进行相关配置
				geo: {
					// 这个是重点配置区
					map: 'china', // 表示中国地图
					// roam: true,
					label: {
						normal: {
							show: true, // 是否显示对应地名
							textStyle: {
								color: 'rgba(255, 255, 255, 0.6)'
							}
						}
					},
					emphasis: {
						// areaColor: '#3066ba',//鼠标滑过区域颜色
						itemStyle: {
							areaColor: 'rgba(48, 102, 186, 1.0)'
						},
						label: {
						    show: true,
						    textStyle: {
						        color: 'rgba(255, 255, 255, 1)'
						    }
						}
					},
					itemStyle: {
						normal: {
							color: 'rgba(9, 41, 91, 1.0)',
							borderColor: 'rgba(1, 243, 246, 1.0)'
						}
					},
				},
				series: [
					{
						type: 'scatter',
						coordinateSystem: 'geo' // 对应上方配置
					}
				]
			});
			Echarts.on('click', function(data) {
				// console.log(data,$This)
				$This.$routerUtil.toPath('/dataCenter/region',{name:data.region.name});
			});
			return Echarts;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.echarts-box {
	height: 550px;
	// width: 100%;
	margin-bottom: 1.25rem;
	.echarts {
		height: 100%;
		// width: 100%;
		// min-width: 33.125rem;
		// min-height: 33.125rem;
	}
}
</style>
