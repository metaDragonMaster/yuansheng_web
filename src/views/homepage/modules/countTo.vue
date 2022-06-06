<template>
	<div class="view limit-max-width">
		<ul class="flex" @mouseleave="active = ''">
			<li v-for="item in list" :key="item.id" @mouseenter="active = item.id">
				<div class="image"><img :src="active == item.id ? item.activeImg : item.img" /></div>
				<div class="info">
					<p>{{item.title}}</p>
					<p>
						<countTo :startVal="0" :endVal="item.num" separator="" suffix="+" :duration="3000"></countTo>
						<span>{{item.sub}}</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
	data() {
		return {
			active: "",
			list:[
				{
					id:"1",
					num:1000,
					title:"成交规模",
					sub:"亿元",
					img:require("@/assets/imgs/homepage/countTo/1.png"),
					activeImg:require("@/assets/imgs/homepage/countTo/1-active.png"),
				},
				{
					id:"2",
					num:1000,
					title:"入驻合作社",
					sub:"家",
					img:require("@/assets/imgs/homepage/countTo/2.png"),
					activeImg:require("@/assets/imgs/homepage/countTo/2-active.png"),
				},
				{
					id:"3",
					num:1000,
					title:"平台供应商",
					sub:"家",
					img:require("@/assets/imgs/homepage/countTo/3.png"),
					activeImg:require("@/assets/imgs/homepage/countTo/3-active.png"),
				},
				{
					id:"4",
					num:1000,
					title:"农超企数",
					sub:"家",
					img:require("@/assets/imgs/homepage/countTo/4.png"),
					activeImg:require("@/assets/imgs/homepage/countTo/4-active.png"),
				},
			]
		};
	},
	components: {
		countTo
	},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	background-color: #f9faf7;
	ul.flex {
		li {
			flex: 1;
			border-right: 1px solid #eaebed;
			padding: 0 0 28px 42px;
			display: flex;
			&:hover .info p:first-child {
				color: #53B753;
			}
			.image {
				width: 46px;
				height: 46px;
				border-radius: 50%;
				border: 1px solid #eaebed;
				margin-top: 48px;
				margin-right: 22px;
			}
			.info {
				margin-top: 36px;
				p:first-child {
					font-size: 22px;
					font-weight: 500;
				}
				span:first-child {
					font-size: 40px;
					white-space: nowrap;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: bold;
				}
				span:last-child {
					font-size: 12px;
				}
			}
		}
	}
}
</style>
