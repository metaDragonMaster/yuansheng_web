<template>
	<div class="about-us">
		<div class="gradual-top flex-center-js-sb limit-max-width" :class="[scrollValue >= 500 ? 'solid' : 'gradual']">
			<img src="@/assets/images/topnavbar/ysl-logo.png" class="ysl-logo" @click="$routerUtil.toName('homepage')" />
			<ul class="flex">
				<li v-for="(item, index) in menuList" :key="index" :class="{ active: active == index }" @click="toScroll(item.scrollTop, index)">{{ item.label }}</li>
			</ul>
		</div>
		<el-carousel class="banner-carousel" @change="val => (bannerActive = val)" :autoplay="true" :interval="5000" arrow="never" height="940px">
			<el-carousel-item class="banner banner-1" :class="{ 'is-active': bannerActive == 0 }">
				<h3 class="banner-title">价值观</h3>
				<h1 class="flex">
					<div>拥抱变化</div>
					<div>客户第一</div>
					<div>专业进取</div>
				</h1>
			</el-carousel-item>
			<el-carousel-item class="banner banner-2" :class="{ 'is-active': bannerActive == 1 }"></el-carousel-item>
		</el-carousel>
		<div class="limit-max-width">
			<div class="model-title">
				<h1>企业文化</h1>
				<div></div>
				<p>我们将以客户需求为导向，不懈努力研究、创造及生产出更多、更好的网络应用产品和服务。</p>
			</div>
			<el-carousel
				:interval="5000"
				:autoplay="false"
				type="card"
				class="card-carousel"
				@change="val => (cardActive = val)"
				indicator-position="none"
				arrow="always"
				height="326px"
			>
				<el-carousel-item v-for="(item, index) in images" :key="index">
					<div class="box">
						<img :src="item.src" alt="" />
						<div v-show="cardActive == index" class="mask">
							<h3>{{ item.dt }}</h3>
							<ul>
								<li v-for="dd in item.dds">{{ dd }}</li>
							</ul>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="limit-max-width no-3">
			<div class="model-title">
				<h1>大事记</h1>
				<div></div>
			</div>
			<Timeline class="time-line" :list="times" @change="TimelineChange"></Timeline>
			<div class="time-card">
				<transition-group tag="ul" name="out-in" mode="out-in">
					<!--  :key="index" -->
					<li v-for="(item, index) in timeCardList" :key="item.eventId" v-show="item.eventId == timeCardActive">
						<img :src="item.eventTitleImage" alt="" />
						<div class="card">
							<time>{{ item.eventTime }}</time>
							<p>{{ item.eventContent }}</p>
						</div>
					</li>
				</transition-group>
				<button class="prev" @click="prev"><i class="el-icon-arrow-left"></i></button>
				<button class="next" @click="next"><i class="el-icon-arrow-right"></i></button>
			</div>
		</div>
		<div class="limit-max-width call-us">
			<div class="model-title">
				<h1 class="color-fff">联系我们</h1>
				<div></div>
			</div>
			<ul class="flex-center-js-sb">
				<li v-for="item in callUs">
					<h3>{{ item.title }}</h3>
					<!-- <p>{{item.span}}</p> -->
					<p>{{ item.phoneNo }}</p>
				</li>
			</ul>
		</div>
		<BottomFooter other></BottomFooter>
	</div>
</template>
<script>
import { debounce } from '@/utils/debounce.js';
import Timeline from '@/components/EasySlidSelect/timeline.vue';
import BottomFooter from '@/layout/modules/BottomFooter/index.vue';
import Api from "@/api/commonservice.js"
// import BottomFooter from './modules/BottomFooter/index.vue';
export default {
	data() {
		return {
			active: 0,
			menuList: [
				{
					label: '关于我们',
					scrollTop: 0,

				},
				{
					label: '企业文化',
					scrollTop: 800
				},
				{
					label: '大事记',
					scrollTop: 1400
				},
				{
					label: '联系我们',
					scrollTop: 2200
				}
			],
			scrollValue: 0,
			scrollFunc: null,
			bannerActive: 0,
			cardActive: 0,
			images: [
				{
					src: require('@/assets/images/aboutUs/img_01.png'),
					dt: '追求极致',
					dds: ['不断提高自己，延迟满足感', '在更大范围内找最优解', '不放过问题，思考本质', '持续学习和成长']
				},
				{
					src: require('@/assets/images/aboutUs/img_02.png'),
					dt: '追求极致',
					dds: ['不断提高自己，延迟满足感', '在更大范围内找最优解', '不放过问题，思考本质', '持续学习和成长']
				},
				{
					src: require('@/assets/images/aboutUs/img_03.png'),
					dt: '追求极致',
					dds: ['不断提高自己，延迟满足感', '在更大范围内找最优解', '不放过问题，思考本质', '持续学习和成长']
				}
			],
			times: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
			timeCardActive: 0,
			timeCardList: [
				// {
				// 	src: require('@/assets/images/aboutUs/img_01.png'),
				// 	time: '2021年3月',
				// 	info: '常德市人民政府杨成英副市长、市场监督管理局董明辉局长、曾遥副局长一行到我公司视察工作，公司总裁罗朝晖给杨成英副市长一行汇报原生农业项目转化成果。'
				// },
				// {
				// 	src: require('@/assets/images/aboutUs/img_02.png'),
				// 	time: '2021年3月',
				// 	info: '常德市人民政府杨成英副市长、市场监督管理局董明辉局长、曾遥副局长一行到我公司视察工作，公司总裁罗朝晖给杨成英副市长一行汇报原生农业项目转化成果。'
				// },
				// {
				// 	src: require('@/assets/images/aboutUs/img_03.png'),
				// 	time: '2021年3月',
				// 	info: '常德市人民政府杨成英副市长、市场监督管理局董明辉局长、曾遥副局长一行到我公司视察工作，公司总裁罗朝晖给杨成英副市长一行汇报原生农业项目转化成果。'
				// },
				// {
				// 	src: require('@/assets/images/aboutUs/img_04.png'),
				// 	time: '2021年3月',
				// 	info: '常德市人民政府杨成英副市长、市场监督管理局董明辉局长、曾遥副局长一行到我公司视察工作，公司总裁罗朝晖给杨成英副市长一行汇报原生农业项目转化成果。'
				// }
			],
			callUs: [
				{
					title: '商务合作',
					phoneNo: '0736-7716841'
				},
				{
					title: '广告合作',
					phoneNo: '0736-7716841'
				},
				{
					title: '媒体问询',
					phoneNo: '0736-7716841'
				},
				{
					title: '招聘相关',
					phoneNo: '0736-7716841'
				}
			]
		};
	},
	components: {
		Timeline,
		BottomFooter
	},
	computed: {},
	mounted() {
		let that = this;
		this.getEventList()
		that.scrollFunc = debounce(() => {
			let NavTop = document.getElementById('AppMain');
			let _scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			that.scrollValue = _scroll;
			for (let index in that.menuList) {
				if (that.menuList[index].scrollTop >= _scroll) {
					return that.active = index;
				}
			}
		}, 100);
		that.scrollFunc()
		window.addEventListener('scroll', that.scrollFunc);
	},
	beforeDestroy() {
		let that = this;
		window.removeEventListener('scroll', that.scrollFunc);
	},
	methods: {
		TimelineChange({index}) {
			// console.log()
			this.timeCardActive = this.timeCardList[index].eventId;
		},
		async getEventList() {
			let {code,data} = await Api.getEventList();
			// console.log(data)
			this.timeCardActive = data[0].eventId;
			this.timeCardList = data;
			this.times = data.map(item=>item.eventTime);
		},
		toScroll(topValue, index) {
			this.active = index;
			window.scroll(0, topValue);
		},
		next() {
			let maxLength = this.timeCardList.length;
			if(this.timeCardActive<maxLength -1) {
				++this.timeCardActive;
			} else {
				this.timeCardActive = 0;
			}
			this.$refs['time-line'].setCurrentIndex(this.timeCardActive);
		},
		prev() {
			let maxLength = this.timeCardList.length;
			if(this.timeCardActive > 0) {
				--this.timeCardActive;
			} else {
				this.timeCardActive = maxLength -1;
			}
			this.$refs['time-line'].setCurrentIndex(this.timeCardActive);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.gradual-top {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	transition: all 0.3s;
	z-index: 2800;
	&.gradual {
		color: #ffffff;
		background-image: linear-gradient(180deg, rgba(0, 15, 26, 0.95) 0%, rgba(0, 15, 26, 0.5) 60%, rgba(0, 15, 26, 0) 100%);
	}
	&.solid {
		// color: #FFFFFF;
		background-image: none;
		background-color: #ffffff;
		box-shadow: 0 1px 4px 0 rgba($color: #000000, $alpha: 0.1);
	}
	.ysl-logo {
		// width: 11.25rem;
		// height: 6.875rem;
		// margin-right: 6.25rem;
		width: 92px;
		height: 56px;
		margin: 22px;
		cursor: pointer;
	}
	ul {
		li {
			border-bottom: 2px solid transparent;
			margin: 0 50px;
			padding: 12px 0;
			cursor: pointer;
			&.active {
				color: #069b87;
				border-color: #069b87;
			}
		}
	}
}

.banner-carousel {
	// min-width: 1903px;
	.banner {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 100%;
	}
	.banner-1 {
		background-image: url(../../assets/images/aboutUs/img_1.png);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		& > * {
			transition: all 1.5s;
		}
		&.is-active {
			.banner-title {
				margin-top: 0;
			}
		}
		.banner-title {
			margin-top: -500px;
			font-size: 36px;
			position: relative;
			margin-bottom: 62px;
			&::after {
				content: '';
				width: 70px;
				height: 2px;
				background-color: #ff8000;
				position: absolute;
				bottom: -30px;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		h1 {
			font-size: 60px;
			div:not(:last-child) {
				margin-right: 2.25rem;
				position: relative;
				&::after {
					content: '';
					width: 0.25rem;
					height: 0.25rem;
					background-color: #ffffff;
					border-radius: 50%;
					position: absolute;
					right: -1.25rem;
					top: 50%;
				}
			}
		}
	}
	.banner-2 {
		background-image: url(../../assets/images/aboutUs/img_2.png);
	}
}
.card-carousel {
	.el-carousel__item {
		width: 680px;
	}
	::v-deep .el-carousel__arrow:hover {
		background-color: #069b87;
	}
	.box {
		position: relative;
		.mask {
			position: absolute;
			right: 0;
			top: 0;
			background-color: rgba($color: #ffffff, $alpha: 0.96);
			height: 100%;
			padding: 64px 38px;
			li {
				list-style-type: disc;
				list-style-position: inside;
			}
			h3 {
				margin-bottom: 26px;
			}
		}
	}
}

.model-title {
	text-align: center;
	padding-top: 60px;
	h1 {
		font-size: 32px;
	}
	div {
		height: 1px;
		background-color: #eeeeee;
		position: relative;
		margin-top: 20px;
		margin-bottom: 46px;
		&::before {
			position: absolute;
			left: 50%;
			top: -1px;
			content: '';
			display: block;
			height: 2px;
			width: 60px;
			transform: translateX(-50%);
			background-color: #ff8000;
		}
	}
	p {
		margin-bottom: 50px;
		color: #666666;
	}
}
.color-fff {
	color: #ffffff;
}
.no-3 {
	background-color: #fcfcfc;
	padding-bottom: 110px;
	.time-line {
		// width: 900px;
	}
}
.time-card {
	position: relative;
	background-color: #ffffff;
	button {
		background-color: #ececec;
		padding: 6px;
		position: absolute;
		bottom: 0;
		&:hover {
			background-color: #069b87;
			color: #ffffff;
		}
	}
	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}
	ul {
		overflow: hidden;
		position: relative;
		height: 450px;
	}
	li {
		position: absolute;
		display: grid;
		grid-template-columns: 650px auto;
		img {
			height: 450px;
			width: 650px;
		}
		.card {
			padding: 70px 60px 0 60px;
			time {
				font-size: 26px;
			}
			p {
				margin-top: 34px;
				font-size: 16px;
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
}
.call-us {
	padding-top: 30px;
	background-color: rgba($color: #1f2326, $alpha: 0.9);
	h3 {
		color: #ffffff;
		margin-bottom: 26px;
	}
	p {
		color: #069b87;
	}
	ul {
		padding-bottom: 80px;
	}
}
</style>
