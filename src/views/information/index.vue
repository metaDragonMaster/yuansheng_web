<template>
	<div class="view">
		<!-- <el-carousel :interval="5000" arrow="never">
			<el-carousel-item v-for="item in banners" :key="item.key"><img :src="item.src" alt="" /></el-carousel-item>
		</el-carousel> -->
		<div class="banner limit-max-width"></div>
		<div id="anchor" ref="Anchor"></div>
		<!-- <div class="header limit-max-width">
			<div class="border">
				<ul class="tabs">
					<li v-for="item in tabs" :key="item.newsTypeId" :class="{ alive: tabAlive == item.newsTypeId }" @click="changeTable(item.newsTypeId)">{{ item.newsTypeName }}</li>
				</ul>
			</div>
		</div> -->
		<el-row class="content limit-max-width-inset">
			<el-col class="sticky" :span="6">
				<!-- <HotNews></HotNews> -->
				<ul class="tabs">
					<li v-for="item in tabs" :key="item.newsTypeId" :class="{ active: tabAlive == item.newsTypeId }" @click="tabAlive = item.newsTypeId">
						<div class="active-block">
							<p class="title">{{ item.title }}</p>
							<span>{{ item.subTitle }}</span>
						</div>
						<div class="default">
							<span class="title">{{ item.title }}</span>
							<i class="el-icon-arrow-right"></i>
						</div>
					</li>
				</ul>
			</el-col>
			<el-col class="informations" :span="18">
				<div class="infor-type-head" v-show="tabs.length > 0">
					<h3>{{ tabItem.title }}</h3>
					<span>{{ tabItem.subTitle }}</span>
				</div>
				<ul>
					<li v-for="item in tableData" @click="toDetails(item.newsId)">
						<img :src="item.newsTitleImage" alt="" />
						<div>
							<h1 class="font-hide">{{ item.newsTitle }}</h1>
							<p class="font-hide-2">{{ item.newsContent }}</p>
							<span>{{ item.createTime }}</span>
						</div>
					</li>
				</ul>
				<TablePagination
					layout="total, prev, pager, next"
					:style="{ visibility: tableData.length > 0 ? 'visible' : 'hidden' }"
					:total="tableQueryOption.total"
					:current="tableQueryOption.current"
					@currentChange="
						val => {
							tableQueryOption.current = val;
							getTableData(val);
						}
					"
					@sizeChange="
						val => {
							tableQueryOption.size = val;
							getTableData(val);
						}
					"
				/>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import ApiCommonNews from '@/api/commonNews.js';
import FormUtil from '@/utils/formUtil.js';

import TablePagination from '@/components/TablePagination/index.vue';
import HotNews from './modules/HotNews.vue';
// import scrollToMixin from "@/utils/scrollToMixin.js";
export default {
	// mixins:[scrollToMixin],
	data() {
		return {
			banners: [
				// {
				// 	key: 1,
				// 	src: require('@/assets/images/Information/bg_zixun.png'),
				// 	title: []
				// },
				// {
				// 	key: 2,
				// 	src: require('@/assets/images/Information/bg_zixun.png'),
				// 	title: []
				// },
				// {
				// 	key: 3,
				// 	src: require('@/assets/images/Information/bg_zixun.png'),
				// 	title: []
				// },
				// {
				// 	key: 4,
				// 	src: require('@/assets/images/Information/bg_zixun.png'),
				// 	title: []
				// }
			],
			tabs: [
				{
					newsTypeId: 1,
					title: '行业资讯',
					subTitle: 'Industry highlights'
				},
				{
					newsTypeId: 2,
					title: '行业要闻',
					subTitle: 'Industry highlights'
				},
				{
					newsTypeId: 3,
					title: '领导关怀',
					subTitle: 'Industry highlights'
				}
			],
			// tabs: [
			// {
			// 	alive: 0,
			// 	title: '资讯'
			// },
			// {
			// 	alive: 1,
			// 	title: '要闻'
			// },
			// {
			// 	alive: 2,
			// 	title: '领导关怀'
			// }
			// ],
			tabAlive: 1,
			tableQueryOption: {
				current: 1,
				size: 10,
				total: 0
			},
			tableData: []
		};
	},
	components: {
		TablePagination,
		HotNews
	},
	computed:{
		tabItem() {
			let tab = {
				title:'',
				subTitle:'',
			};
			this.tabs.map(item=> {
				if(this.tabAlive == item.newsTypeId) tab = item
			});
			return tab;
		},
	},
	methods: {
		scrollTo() {
			this.$nextTick(() => {
				let dom = this.$refs['Anchor'];
				// console.log(this.$refs);
				let top = dom.offsetTop - 150;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			});
		},
		async getTableData() {
			this.scrollTo();
			let params = {
				...FormUtil.excludeAttr(this.tableQueryOption, 'total'),
				newsTypeId: this.tabAlive
			};

			let { code, data, msg } = await this.selectNewsList(params);
			if (code == 10200) {
				let list = data.records.map(item => {
					item.newsContent = FormUtil.htmlToText(item.newsContent);
					return item;
				});
				this.tableData = data.records;
				this.tableQueryOption.total = data.total;
			} else {
				this.$message.warning(msg);
			}
		},
		changeTable(id) {
			this.tabAlive = id;
			this.tableQueryOption.current = 1;
			this.getTableData();
		},
		toDetails(id) {
			this.$routerUtil.toPath('/information/details', { id: id });
		},
		selectNewsList(params) {
			return ApiCommonNews.selectNewsList(params);
		},
		async getNewsTypeList() {
			let { code, data, msg } = await ApiCommonNews.getNewsTypeList();
			if (code == 10200) {
				this.tabs = data;
				this.tabAlive = data[0].newsTypeId;
				this.getTableData();
			} else {
				this.$message.warning(msg);
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
::v-deep .el-carousel__indicators--horizontal {
	bottom: 80px;
}
::v-deep .el-carousel__container {
	height: 500px;
	img {
		height: 500px;
	}
}
.view {
	padding-top: 72px;
}
.banner {
	background-image: url(../../assets/imgs/information/banner.png);
	height: 200px;
}
.tabs {
	& > li {
		width: 248px;
		height: 82px;
		position: relative;
		overflow: hidden;
		&:not(:last-child) {
			border-bottom: 2px solid #e7e7e7;
		}
		&.active {
			height: 110px;
			.default {
				opacity: 0;
				left: -100%;
			}
			.active-block {
				opacity: 1;
				left: 0;
			}
		}
		.default,
		.active-block {
			width: 100%;
			height: 100%;
			display: inline-block;
			position: absolute;
			transition: opacity 0.1s, left 0.1s;
		}
		.default {
			font-size: 20px;
			padding: 0 0 0 34px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			left: 0;
		}
		.active-block {
			opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 34px;
			color: #ffffff;
			left: -100%;
			font-size: 20px;
			background-image: url(../../assets/imgs/information/news.png);
			background-repeat: no-repeat;
			background-position: center;
			p {
				margin-bottom: 8px;
			}
			span {
				font-size: 14px;
			}
		}
	}
}
// .header {
// 	// padding-bottom: 25px;
// 	position: sticky;
// 	top: 72px;
// 	left: 0;
// 	z-index: 100;
// 	.border {
// 		margin-top: -79px;
// 		background-color: #ffffff;
// 		border-top-left-radius: 4px;
// 		border-top-right-radius: 4px;
// 	}
// 	.tabs {
// 		min-height: 80px;
// 		margin: 0 30px;
// 		padding-top: 25px;
// 		border-bottom: 1px solid #069b87;
// 		display: flex;
// 		border-top-right-radius: 4px;
// 		border-top-left-radius: 4px;
// 		li {
// 			padding: 16px 48px;
// 			cursor: pointer;
// 			&.alive {
// 				background-color: #069b87;
// 				color: #ffffff;
// 			}
// 		}
// 	}
// }
.content {
	min-height: 800px;
	// box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
	padding: 40px 30px 0 30px;
	margin-bottom: 80px;
}
.sticky {
	position: sticky;
	top: 120px;
	left: 0;
	::v-deep h1 {
		padding: 30px;
	}
}
.informations {
	padding-right: 60px;
	.infor-type-head {
		display: flex;
		align-items: flex-end;
		padding: 14px 0;
		border-bottom: 2px solid #e7e7e7;
		h3 {
			font-size: 24px;
		}
		span {
			font-size: 18px;
			color: #666666;
			padding-left: 16px;
		}
	}
	li {
		// display: flex;
		display: grid;
		grid-template-columns: 220px auto;
		grid-gap: 20px;
		padding: 25px 0;
		border-bottom: 1px solid #f2f2f2;
		&:hover {
			cursor: pointer;
			h1 {
				color: #ff8000;
			}
		}
		img {
			width: 220px;
			height: 150px;
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		h1 {
			font-size: 24px;
			font-weight: 500;
		}
		span,
		p {
			color: #999999;
		}
		// h1,
		// span,
		// p {
		// 	margin-bottom: 1rem;
		// }
	}
}
.table-pagination {
	padding-bottom: 1rem;
}
</style>
