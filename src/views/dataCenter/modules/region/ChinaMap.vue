<template>
	<div class="echarts-box" ref="EchartsBox"><div class="echarts" ref="Echarts"></div></div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js'; // 引入中国地图数据
import 'echarts/map/js/province/anhui.js'; 
import 'echarts/map/js/province/aomen.js'; 
import 'echarts/map/js/province/beijing.js'; 
import 'echarts/map/js/province/chongqing.js'; 
import 'echarts/map/js/province/fujian.js'; 
import 'echarts/map/js/province/gansu.js'; 
import 'echarts/map/js/province/guangdong.js'; 
import 'echarts/map/js/province/guangxi.js'; 
import 'echarts/map/js/province/guizhou.js'; 
import 'echarts/map/js/province/hainan.js'; 
import 'echarts/map/js/province/hebei.js'; 
import 'echarts/map/js/province/heilongjiang.js'; 
import 'echarts/map/js/province/henan.js'; 
import 'echarts/map/js/province/hubei.js'; 
import 'echarts/map/js/province/hunan.js'; 
import 'echarts/map/js/province/jiangsu.js'; 
import 'echarts/map/js/province/jiangxi.js'; 
import 'echarts/map/js/province/jilin.js'; 
import 'echarts/map/js/province/liaoning.js'; 
import 'echarts/map/js/province/neimenggu.js'; 
import 'echarts/map/js/province/ningxia.js'; 
import 'echarts/map/js/province/qinghai.js'; 
import 'echarts/map/js/province/shandong.js'; 
import 'echarts/map/js/province/shanghai.js'; 
import 'echarts/map/js/province/shanxi.js'; 
import 'echarts/map/js/province/shanxi1.js'; 
import 'echarts/map/js/province/sichuan.js'; 
import 'echarts/map/js/province/taiwan.js'; 
import 'echarts/map/js/province/tianjin.js'; 
import 'echarts/map/js/province/xianggang.js'; 
import 'echarts/map/js/province/xinjiang.js'; 
import 'echarts/map/js/province/xizang.js'; 
import 'echarts/map/js/province/yunnan.js'; 
import 'echarts/map/js/province/zhejiang.js'; 
// import china from "echarts/map/json/china.json";
// import hubei from "echarts/map/json/province/hubei.json";
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
		let name = this.$route.query.name;
		this.chinaConfigure(name);
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		chinaConfigure(regionName) {
			regionName = regionName || 'china';
			let Echarts = echarts.init(this.$refs['Echarts']); //这里是为了获得容器所在位置
			window.onresize = Echarts.resize;
			// console.log(Echarts);
			Echarts.setOption({
				// 进行相关配置
				geo: {
					// 这个是重点配置区
					map: regionName, // 表示中国省份地图
					// map: '浙江', // 表示中国地图
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
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.echarts-box {
	height: 500px;
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
