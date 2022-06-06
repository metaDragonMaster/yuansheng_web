<template>
	<dv-border-box-7 :color="['', '#FFF']">
		<div class="data-title"><span>全国商品交易中心</span></div>
		<dv-scroll-board :config="config" ref="scrollBoard" />
	</dv-border-box-7>
	<!-- <div></div> -->
</template>
<script>
export default {
	data() {
		return {
			config:{}
		};
	},
	methods: {
		handleDataBase(dataBase) {
			let tabNames = ['name','goodsName','goodsNum'];
			let data = [];
			let arr = new Array(3);
			let index = 0;
			dataBase.map(item=>{
				for(let i in item) {
					index = tabNames.indexOf(i);
					arr[index] = item[i];
				}
				data.push([...arr]);
			})
			// console.log(data)
			this.config = {
				header: ['企业', '商品', '数量'],
				columnWidth:[180,100,100],
				// columnWidth:['50%','25%','25%'],
				// align:['center','center','center'],
				data: data,
				rowNum: 8,
				headerBGC: '#06076B',
				oddRowBGC: '#02246C',
				evenRowBGC: '#3755DA'
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.dv-border-box-7 {
	// width: 300px;
	margin-bottom: 1rem;
	.dv-scroll-board {
		height: 512px;
	}
}
</style>
