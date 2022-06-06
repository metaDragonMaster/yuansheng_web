<template>
	<div class="easy-slid-select">
		<!-- 滑动选择器 -->
		<!-- v-show="moveIndex>0" -->
		<i class="el-icon-arrow-left" @click="moveSelectBox(false)" v-show="moveIndex > 0"></i>
		<div class="select-box" ref="selectBox">
			<ol class="select-ol" ref="selectOl">
				<li
					ref="lis"
					v-for="(item, index) in list"
					:key="index"
					:class="[{ active: currentIndex == index }]"
					@click="clickItem(index)"
					@mouseenter="enterAlive(index)"
					@mouseleave="leaveAlive(index)"
				>
					<span>{{ item }}</span>
				</li>
				<div class="label-alive" ref="labelAlive"></div>
			</ol>
		</div>
		<i class="el-icon-arrow-right" @click="moveSelectBox(true)" v-show="moveIndex <= maxMoveIndex"></i>
		<!-- v-show="moveIndex<=maxMoveIndex" -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			currentIndex: 0, // 当前选择的
			moveIndex: 0,
			maxMoveIndex: 0
		};
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		// this.$nextTick(() => {
		// 	this.enterAlive(0);
		// });
		this.setMaxMoveIndex();
	},
	methods: {
		setMaxMoveIndex() {
			this.$nextTick(() => {
				let selectOl = this.$refs['selectOl'];
				let lis = this.$refs['lis'];
				let maxShowLis = lis
					.map(item => {
						return selectOl.offsetWidth - item.offsetLeft >= 0;
					})
					.filter(item => {
						return item == true;
					}).length; //最多展示多少个
				// console.log(lis.length - maxShowLis);
				// return lis.length - maxShowLis;
				this.maxMoveIndex = lis.length - maxShowLis;
			});
		},
		moveSelectBox(boolean) {
			let selectOl = this.$refs['selectOl'];
			let lis = this.$refs['lis'];
			let moveIndex = this.moveIndex;
			let maxMoveIndex = this.maxMoveIndex;
			if ((!boolean && moveIndex <= 0) || (boolean && moveIndex > maxMoveIndex)) {
				console.log('不符合条件 退出');
				return;
			} else {
				boolean ? (moveIndex += 1) : (moveIndex -= 1);
				let selectBox = this.$refs['selectBox'];
				selectOl.style.right = lis[moveIndex].offsetLeft + 'px';
				this.moveIndex = moveIndex;
			}
		},
		clickItem(index) {
			this.currentIndex = index;
			this.$emit('change', { index });
			this.leaveAlive(index);
		},
		setCurrentIndex(index) {
			this.currentIndex = index;
		},
		getCurrentIndex() {
			return this.currentIndex;
		},
		enterAlive(index) {
			const width = this.$refs['lis'][index].children[0].offsetWidth;
			const left = this.$refs['lis'][index].children[0].offsetLeft;
			this.$refs['labelAlive'].style.width = width + 'px';
			this.$refs['labelAlive'].style.left = left + 'px';
			console.log(left);
		},
		leaveAlive(index) {
			if (index != this.currentIndex) {
				let labelAlive = this.$refs['labelAlive'];
				let ali = this.$refs['lis'][this.currentIndex].children[0];
				labelAlive.style.left = ali.offsetLeft + 'px';
				labelAlive.style.width = ali.offsetWidth + 'px';
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.easy-slid-select {
	display: flex;
	align-items: center;
	width: 100%;
	.el-icon-arrow-left,
	.el-icon-arrow-right {
		// line-height: ;
		font-size: 20px;
		cursor: pointer;
	}
	.select-box {
		width: 100%;
		margin-bottom: 1.25rem;
		overflow: hidden;
		border-bottom: 1px solid #f2f2f2;
	}
	.select-ol {
		position: relative;
		right: 0;
		display: flex;
		justify-content: space-between;
		transition: all 0.3s;
		// overflow: auto;
		li {
			flex: 1;
			text-align: center;
			cursor: pointer;
			padding: 1rem 0;
			min-width: 8rem;
			&:hover,
			&.active {
				color: $ThemeColor;
			}
		}
		.label-alive {
			position: absolute;
			bottom: 0;
			height: 1px;
			// width: 4rem;
			background-color: $ThemeColor;
			transition: left 0.3s, width 0.3s;
		}
	}
}

.out-in-enter {
	transform: translateY(-2rem);
	opacity: 0;
}
.out-in-enter-active {
	transition: all 0.5s;
}

.out-in-leave-to {
	transform: translateY(2rem);
	opacity: 0;
}
.out-in-leave-active {
	transition: all 0.5s;
}
</style>
