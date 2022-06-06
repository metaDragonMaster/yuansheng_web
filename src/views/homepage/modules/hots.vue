<template>
	<div class="view hots limit-max-width">
		<ul class="hot-list">
			<li v-for="item in list" :class="{ active: active == item.id }" @mouseenter="active = item.id">
				<span class="font-hide">{{ item.title }}</span>
			</li>
		</ul>
		<div>
			<div class="buttons">
				<i class="prev el-icon-arrow-left drift-right" @click="prev"></i>
				<i class="next el-icon-arrow-right" @click="next"></i>
				<el-link>查看更多</el-link>
			</div>
			<img class="image drift-right" src="@/assets/imgs/homepage/hots/1.png" alt="" />
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			active: '1',
			list: [
				{
					id: '1',
					title: '如何建设美丽幸福临安？他这样作答哒哒哒'
				},
				{
					id: '2',
					title: '富阳高水平打造现代版富春山居图2'
				},
				{
					id: '3',
					title: '富阳高水平打造现代版富春山居图3'
				},
				{
					id: '4',
					title: '富阳高水平打造现代版富春山居图4'
				},
				// {
				// 	id: '5',
				// 	title: '富阳高水平打造现代版富春山居图5'
				// },
			]
		};
	},
	components: {},
	mounted() {},
	methods: {
		prev() {
			let list = this.list;
			if (list.length <= 0) return;
			if (this.active == list[0].id) {
				this.active = list[list.length - 1].id;
			} else {
				let length = 0;
				list.map((item, index) => {
					if (item.id == this.active) length = index;
				});
				this.active = list[length - 1].id;
			}
		},
		next() {
			let list = this.list;
			if (list.length <= 0) return;
			if(this.active == list[list.length - 1].id) {
				this.active = list[0].id;
			} else {
				let length = 0;
				list.map((item, index) => {
					if (item.id == this.active) length = index;
				});
				this.active = list[length + 1].id;
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	// display: flex;
	// justify-content: space-between;
	background-color: #f9faf7;
	padding: 30px 45px;
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.hot-list {
	$border: 1px solid #d8d8d8;
	border-left: $border;
	display: flex;
	flex-direction: column;
	li {
		// padding-left: 90px;
		flex: 1;
		display: flex;
		align-items: center;
		padding-left: 106px;
		position: relative;
		color: #666666;
		font-size: 22px;
		&::after,
		&::before {
			content: '';
			display: block;
			position: absolute;
		}
		&::after {
			background-color: #d8d8d8;
			height: 2px;
			width: 90px;
			left: 0;
		}
		&::before {
			height: 14px;
			width: 14px;
			left: -8px;
			border-radius: 50%;
		}
		&.active {
			padding-left: 230px;
			font-size: 24px;
			color: #333333;
			&::after {
				width: 214px;
				background-color: #6ab783;
			}
			&::before {
				background-color: #6ab783;
			}
		}
	}
}

.buttons {
	display: flex;
	align-items: center;
	margin-bottom: 48px;
	i {
		border-radius: 50%;
		border: 1px solid #d8d8d8;
		padding: 4px;
		margin-right: 15px;
		cursor: pointer;
		&:hover {
			color: #ffffff;
			background-color: #6ab783;
		}
	}
}
.image {
	width: 495px;
	height: 290px;
}
</style>
