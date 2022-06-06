<template>
	<div class="information-details limit-max-width" ref="Anchor">
		<!-- <EasyBreadCrumb limit :breads="breads"></EasyBreadCrumb> -->
		<el-breadcrumb separator=">">
			<el-breadcrumb-item to="/information">原生资讯</el-breadcrumb-item>
			<el-breadcrumb-item>{{ newsTypeName }}</el-breadcrumb-item>
			<el-breadcrumb-item>{{ newsTitle }}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-row>
			<el-col class="html" :span="17">
				<h1>{{ newsTitle }}</h1>
				<time>{{ createTime }}</time>
				<div class="hr"></div>
				<div v-html="newsContent"></div>
			</el-col>
			<el-col class="sticky" :span="7"><HotNews top="80px"></HotNews></el-col>
		</el-row>
		<p class="font-hide prev">
			上一篇：
			<button @click="jump(preNewsId)">{{ preNewsTitle }}</button>
		</p>
		<p class="font-hide next">
			下一篇：
			<button @click="jump(nextNewsId)">{{ nextNewsTitle }}</button>
		</p>
	</div>
</template>
<script>
import ApiCommonNews from '@/api/commonNews.js';

import HotNews from './modules/HotNews.vue';
export default {
	// mixins:[scrollToMixin],
	data() {
		return {
			createTime: '',
			newsAuthor: '',
			newsContent: '',
			newsId: '',
			newsTitle: '',
			newsTypeName: '',

			nextNewsId: '',
			nextNewsTitle: '',
			preNewsId: '',
			preNewsTitle: ''
		};
	},
	components: {
		// EasyBreadCrumb,
		HotNews
	},
	watch: {
		$route(to, form) {
			this.getNewsDetailById();
			this.scrollTo();
		}
	},
	created() {
		// this.setBreadsLabel()
		if (!this.$route.query.id) {
			this.$routerUtil.toName('information');
			this.$message.warning('未检测到该咨询');
		} else {
			this.getNewsDetailById();
		}
	},
	mounted() {
		this.scrollTo();
	},
	methods: {
		scrollTo() {
			this.$nextTick(() => {
				let dom = this.$refs['Anchor'];
				let top = dom.offsetTop - 40;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			});
		},
		async jump(id) {
			if (!id) return;
			let res = await this.getNewsDetailById();
			res && this.$routerUtil.toPath('/information/details', { id: id });
		},
		async getNewsDetailById() {
			let id = this.$route.query.id;
			let { code, data, msg } = await ApiCommonNews.getNewsDetailById(id);
			if (code == 10200) {
				this.createTime = data.createTime;
				this.newsAuthor = data.newsAuthor;
				this.newsContent = data.newsContent;
				this.newsId = data.newsId;
				this.newsTitle = data.newsTitle;
				this.newsTypeName = data.newsTypeName;
				this.nextNewsId = data.nextNewsId;
				this.nextNewsTitle = data.nextNewsTitle;
				this.preNewsId = data.preNewsId;
				this.preNewsTitle = data.preNewsTitle;
				return true;
			} else {
				this.$message.warning(msg);
				return false;
			}
			// else {
			// 	this.createTime = '';
			// 	this.newsAuthor = '';
			// 	this.newsContent = '';
			// 	this.newsId = '';
			// 	this.newsTitle = '';
			// 	this.newsTypeName = data.newsTypeName;
			// 	this.nextNewsId = data.nextNewsId;
			// 	this.nextNewsTitle = data.nextNewsTitle;
			// 	this.preNewsId = data.preNewsId;
			// 	this.preNewsTitle = data.preNewsTitle;
			// }
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.information-details {
	padding-bottom: 50px;
}
.el-breadcrumb {
	padding: 30px 0;
}
.content {
}
.html {
	box-shadow: 0 0 4px 0 rgba($color: #000000, $alpha: 0.3);
	border-radius: 4px;
	padding: 50px;
	min-height: 800px;
	h1,
	time {
		text-align: center;
		margin-bottom: 30px;
	}
	time {
		display: block;
		color: #999999;
	}
	.hr {
		border-bottom: 1px dashed #e6e6e6;
		margin-bottom: 1rem;
	}
}
.sticky {
	position: sticky;
	top: 80px;
	left: 0;
	padding-left: 40px;
	::v-deep h1 {
		border-bottom: 1px solid #f2f2f2;
	}
}
.prev,
.next {
	margin-top: 16px;
	button {
		color: #069b87;
		font-size: 1rem;
	}
}
</style>
