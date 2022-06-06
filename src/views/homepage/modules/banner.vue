<template>
	<div class="homepage-banner-model">
		<div class="swiper-container">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="(item, index) in banners" :key="index">
					<img class="banner" :src="item.src" />
					<!-- <div class="swiper-info limit-max-width">
						<div :class="item.className" v-html="item.info"></div>
					</div> -->
				</li>
			</ul>
			<div class="swiper-pagination limit-max-width"></div>
		</div>
		<div class="swiper-info limit-max-width">
			<ul>
				<li class="info-1">
					<p style="font-size: 60px;margin-bottom: 20px;">
						原生联
						<span style="font-size: 34px;">产业互联网服务平台</span>
					</p>
					<p>
						以原生农业国标为核心要素，运用产业互联网平台化整合赋能模式，利用供应链金融服务杠杆，归集碎片化农业生产资源，联合农业龙头企业优势互补、抱团发展，形成新的产业价值链生态系统，提升农业产业的集约化、品牌化和产业化水平，推进农业供给侧结构性改革和高质量发展，助力乡村振兴。
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
export default {
	data() {
		return {
			_swiper: null,
			banners: [
				{
					src: require('@/assets/imgs/homepage/banner/1.png')
				},
				{
					src: require('@/assets/imgs/homepage/banner/1.png')
				},
				{
					src: require('@/assets/imgs/homepage/banner/1.png')
				}
			],
			active: 0
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.swiperInit();
		});
	},
	methods: {
		swiperInit() {
			// const that = this;
			this._swiper = new Swiper('.swiper-container', {
				el: '.swiper-container',
				// loop: true, //循环
				// autoplay: {
				// 	delay: 3000 //自动切换的时间间隔，单位ms
				// },
				pagination: {
					//分页符
					el: '.swiper-pagination',
					clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
					bulletElement: 'li'
				},
				// grabCursor: true,
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				on: {
					paginationRender: function() {
						console.log('paginationRender')
						const pages = document.getElementsByClassName('swiper-pagination-bullet')
						for (let i = 0; i < pages.length; i++) {
							pages[i].onmouseover = function(e) {
								e.target.click()
							}
						}
					},
					// 	slideChangeTransitionStart:(swiper)=>{
					// 		//切换结束时，告诉我现在是第几个slide
					// 		console.log(swiper.activeIndex);
					// 		// console.log(swiper);
					// 		this.active = swiper.activeIndex
					// 	},
				},
			});
		},
		slideTo(index) {
			this._swiper.slideTo(index, 1000);
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
// .banner {
// background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
// }
.homepage-banner-model {
	height: 600px;
	width: 100%;
	position: relative;
	.swiper-info {
		// width: 520px;
		position: absolute;
		top: 200px;
		left: 0;
		z-index: 100;
	}
}
.swiper-container {
	--swiper-pagination-color: #ffffff;
	height: 100%;
	.swiper-slide {
		padding-top: 200px;
		position: relative;
	}
	.banner {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 1920px;
	}
	::v-deep .swiper-pagination {
		bottom: 100px;
		left: 0;
		text-align: left;
		width: fit-content;
		.swiper-pagination-bullet {
			width: 60px;
			height: 4px;
			border-radius: 0;
			margin-right: 16px;
			cursor: pointer;
		}
	}
}
.info-1 {
	width: 520px;
	color: #ffffff;
}
</style>
