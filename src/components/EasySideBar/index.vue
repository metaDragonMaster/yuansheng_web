<template>
	<ol class="easy-side-bar">
		<li v-for="(item,index) in sidebarlist" :key="item.label" :class="[{'side-bar-alive':defaultAlive == Number(index)}]"
			@click="sidebarItemClick(index)"
		>
			<span>
				{{item.label}}
			</span>
			<i class="side-bar-icon el-icon-arrow-down"></i>
		</li>
	</ol>
</template>
<script>
export default {
	model:{
		prop:"defaultAlive",
		event:"sidebarItemClick"
	},
	props:{
		sidebarlist:{ // 侧边栏数组
			type:Array,
			default:()=>[],
		},
		defaultAlive:{ // 默认展开
			type:Number,
			default:0
		},
	},
	methods:{
		sidebarItemClick(index) { //列表点击事件
			this.$emit("sidebarItemClick",index);
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.easy-side-bar {
	// background-color: #53afff;
	// max-width: 13.75rem;
	li {
		border-left: 5px solid #ffffff;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 1.5rem;
		padding-right: 1.25rem;
		height: 2.8125rem;
		cursor: pointer;
		transition: border-left-color .3s ;
		// span {
		// 	font-size: 0.75rem;
		// }
		&:hover {
			background-color: #F2FFF5;
			border-left-color: #F2FFF5;
			color: #00BF30;
		}
		&.side-bar-alive {
			border-left-color: #00BF30;
			background-color: #F2FFF5;
			color: #00BF30;
			.side-bar-icon {
				transform: rotateZ(-90deg);
			}
		}
		.side-bar-icon {
			color: #999999;
			transition: transform .3s ;
		}
	}
}
</style>
