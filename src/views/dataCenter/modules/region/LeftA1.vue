<template>
	<dv-border-box-7 :color="['', '#FFF']">
		<div class="query">
			<el-date-picker v-model="timeData" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
			<el-button class="query-button">查询</el-button>
			<ul>
				<li>
					<p>交易流水</p>
					<span>999.99</span>
				</li>
				<li>
					<p>土地流转(亩)</p>
					<span>999.99</span>
				</li>
				<li>
					<p>合作社(万)</p>
					<span>999.99</span>
				</li>
				<li>
					<p>农产品数量(吨)</p>
					<span>999.99</span>
				</li>
			</ul>
		</div>
		<dv-scroll-board :config="config" ref="scrollBoard" />
	</dv-border-box-7>
	<!-- <div></div> -->
</template>
<script>
export default {
	data() {
		return {
			timeData: '',
			config: {
				// header: ['合作社名称', '联系人', '电话', '收益流水(万)', '土地流转(亩)', '主要农作物'],
				// data: [
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// 	['开福区合作社','张三','15588888888','100','500','玉米'],
				// ],
				// rowNum: 8,
				// headerBGC: '#06076B',
				// oddRowBGC: '#02246C',
				// evenRowBGC: '#3755DA'
			}
		};
	},
	methods: {
		handleDataBase(dataBase) {
			let tabNames = ['cooperativeName','name','phone','income','land','item'];
			let data = [];
			let arr = new Array(6);
			let index = 0;
			dataBase.map(item=>{
				for(let i in item) {
					index = tabNames.indexOf(i);
					arr[index] = item[i];
				}
				data.push([...arr]);
			})
			this.config = {
				header: ['合作社名称', '联系人', '电话', '收益流水(万)', '土地流转(亩)', '主要农作物'],
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
	margin-bottom: 1rem;
	height: 800px;
	background-color: rgba($color: #0A1566, $alpha: 1.0);
}
::v-deep .dv-scroll-board {
	font-size: 12px;
	height: 590px;
	padding: 4px;
}
.query {
	padding: 32px 20px;
	ul{
		display: grid;
		grid-template-columns: repeat(4,1fr);
		height: 100px;
		padding-top: 2rem;
		p {
			color: #FFFFFF;
			font-size: 12px;
			margin-bottom: 1rem;
		}
		span {
			color: #FFC936;
			font-size: 20px;
		}
	}
}
</style>
