<template>
	<div class="easy-slid-select">
		<!-- 滑动选择器 -->
		<div class="select-box">
			<ol class="select-ol">
				<li v-for="(item,index) in list" :key="index" :class="[{'active':currentIndex == index}]" ref="lis" @click="currentIndex = index"  @mouseenter="enterAlive(index)" @mouseleave="leaveAlive(index)">
					<span>
						{{item.title}}
					</span>
				</li>
			</ol>
			<div class="label-alive" ref="labelAlive"></div>
		</div>
		<transition-group name="out-in" mode="out-in" tag='ul' class="transition-ul">
			<li v-for="(item,index) in list" :key="item.title" v-show="currentIndex == index">
				<slot :item="item"></slot>
			</li>
		</transition-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			currentIndex:0, // 当前选择的
		}
	},
	props:{
		list:{
			type:Array,
			default:()=>[]
		}
	},
	mounted() {
		this.enterAlive(0);
	},
	methods:{
		enterAlive(index) {
			const width = this.$refs['lis'][index].children[0].offsetWidth;
			const left =  this.$refs['lis'][index].children[0].offsetLeft;
			this.$refs['labelAlive'].style.width = width + 'px';
			this.$refs['labelAlive'].style.left = left + 'px';
		},
		leaveAlive(index) {
			if(index != this.currentIndex) {
				let labelAlive = this.$refs['labelAlive'];
				let ali = this.$refs['lis'][this.currentIndex].children[0];
				labelAlive.style.left = ali.offsetLeft + 'px';
				labelAlive.style.width = ali.offsetWidth + 'px';
			}
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.easy-slid-select {
	.select-box {
		position: relative;
		.label-alive {
			position: absolute;
			bottom: 0;
			height: 0.0625rem;
			// width: 4rem;
			background-color: $ThemeColor;
			transition: left 0.3s, width 0.3s; 
		}
	}
	.select-ol {
		display: flex;
		justify-content: space-between;
		border-bottom: 0.0625rem solid #f2f2f2;
		li {
			flex: 1;
			text-align: center;
			cursor: pointer;
			padding: 1rem 0;
			&:hover ,
			&.active {
				color: $ThemeColor;
			}
		}
	}
	.transition-ul {
		margin-top: 3.75rem;
		position: relative;
		li {
			position: absolute;
		}
	}
}

.out-in-enter {
  transform: translateY(-2rem);
  opacity: 0;
}
.out-in-enter-active {
  transition: all .5s ;
}

.out-in-leave-to {
	transform: translateY(2rem);
	opacity: 0;
}
.out-in-leave-active{
	transition: all .5s ;
}


</style>
