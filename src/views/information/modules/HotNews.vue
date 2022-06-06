<template>
	<div>
		<h1>
			热门
			<span>新闻</span>
		</h1>
		<ul @mouseleave="hotAlive = tableData[0].newsId">
			<li v-for="item in tableData" @click="toDetails(item.newsId)" @mouseenter="hotAlive = item.newsId">
				<div class="card" v-show="hotAlive == item.newsId">
					<img :src="item.newsTitleImage" alt="" />
					<div>
						<p class="font-hide">{{item.newsTitle}}</p>
						<span class="font-hide" style="--line-clamp:2">{{item.newsContent}}</span>
					</div>
				</div>
				<p class="font-hide" v-show="hotAlive != item.newsId">{{item.newsTitle}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import ApiCommonNews from '@/api/commonNews.js';
import FormUtil from "@/utils/formUtil.js"
export default {
	data() {
		return {
			hotAlive:0,
			tableData:[],
		};
	},
	created() {
		this.getHotNews()
	},
	methods: {
		toDetails(id) {
			this.$routerUtil.toPath('/information/details', { id: id });
		},
		async getHotNews() {
			let {code,data,msg} = await ApiCommonNews.getHotNews();
			let list = data.map(item=>{
				item.newsContent = FormUtil.htmlToText(item.newsContent);
				return item;
			})
			this.tableData = list;
			this.tableData = data;
			this.hotAlive = data[0].newsId;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
h1 {
	font-size: 24px;
	font-weight: 500;
	padding-bottom: 12px;
	// border-bottom: 1px solid #f2f2f2;
	span {
		color: #ff8000;
	}
}
li {
	margin: 8px 0;
	cursor: pointer;
	& > p {
		padding-left: 1rem;
		position: relative;
		&::before {
			position: absolute;
			left: 0;
			top: 50%;
			content: '';
			width: 4px;
			height: 4px;
			transform: translateY(-2px);
			border-radius: 50%;
			background-color: #999999;
			display: block;
		}
	}
	.card {
		display: grid;
		grid-template-columns: 120px auto;
		grid-column-gap: 16px;
		img {
		}
		p {
			margin-bottom: 1rem;
		}
		span {
			font-size: 12px;
		}
	}
}
</style>
