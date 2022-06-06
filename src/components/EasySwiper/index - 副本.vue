<template>
	<div class="swiper-content" @mouseenter="removeTimer()" @mouseleave="setUpTimer()">
		<swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
			<template v-for="(item, index) in images">
				<swiper-slide :key="index">
					<img :src="item.src || item" alt="" />
				</swiper-slide>
			</template>
		</swiper>
	</div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
export default {
	name: '',
	data() {
		return {
			swiperOption: {
				// slidesPerView: 'auto',
				speed: 600, //切换时间
				effect:this.isEffect?'coverflow':'slide',
				// 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
				slidesPerView: this.isEffect?1.6:'auto',
				centeredSlides: true, // 网格居中
				// centeredSlidesBounds: true,
				loop: !this.isEffect, //是否循环
				loopPreventsSlide: true, //默认true，阻止
				init: false, // 当你创建一个Swiper实例时是否立即初始化，这里我们手动初始化
				preventClicksPropagation: false, //拖动时阻止点击事件
				watchSlidesProgress: true,
				freeMode: false,
				preventInteractionOnTransition: true, //等待过渡动画结束才能继续切换
				observer: true,
				observeParents: true,
				roundLengths:true,
				observeSlideChildren: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				keyboard: {
					enabled: true //开启键盘切换
				},
			},
			waitFor: null,
			waitForTime: 0
		};
	},
	components: {
		swiper: Swiper,
		'swiper-slide': SwiperSlide
	},
	props: {
		images: {
			type: Array,
			default: () => {
				return [];
			},
			validator(arr) {
				return arr instanceof Array;
			}
		},
		isEffect :{
			type:Boolean,
			default:false,
		},
		isTimer: {
			//是否自动
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			}
		},
		second: {
			//自动秒
			type: Number,
			default: 3,
			validator(value) {
				return value <= 6 && value >= 1;
			}
		},
		inverse: {
			//是否反方向自动旋转
			type: Boolean, //true为反方向自动旋转
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			}
		},
		alive:{ // 初始化显示第几个
			type:Number,
			default:0,
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		}
	},
	mounted() {
		this.initSwiper();
		this.$nextTick(() => {
			document.addEventListener('keydown', this.setKeyUp);
			if (this.isTimer) {
				this.setUpTimer();
			}
		});
	},
	beforeDestroy() {
		this.swiper.destroy(false); //组件销毁时释放
		document.removeEventListener('keydown', this.setKeyUp);
	},
	methods: {
		initSwiper() {
			this.$nextTick(async () => {
				await this.swiper.init(); // 现在才初始化
				await this.swiper.slideTo(this.alive);
			});
		},
		prev() {
			this.swiper.slidePrev();
		},
		next() {
			this.swiper.slideNext();
		},
		clearWaitFor() {
			clearInterval(this.waitFor);
			this.waitFor = null;
		},
		setKeyUp(e) {
			this.removeTimer();
			this.clearWaitFor();
			switch (e.keyCode) {
				case 39:
					this.next();
					break;
				case 37:
					this.prev();
					break;
				default:
					return;
			}
			// this.isTimer=false;
			this.waitFor = setInterval(() => {
				++this.waitForTime;
				if (this.waitForTime >= 3) {
					this.setUpTimer();
					this.clearWaitFor();
				}
			}, 1000);
			return;
		},
		removeTimer() {
			if (this.isTimer != true) {
				return;
			}
			clearInterval(this.timer);
			this.timer = null;
		},
		setUpTimer() {
			if (this.isTimer != true) {
				return;
			}
			if (this.second > 6) {
				this.second = 6;
			}
			if (this.second < 1) {
				this.second = 1;
			}
			this.timer = setInterval(() => {
				this.inverse ? this.prev() : this.next();
			}, this.second * 1000);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.swiper-content {
	position: relative;
	img{
		width:100%;
	}
	.show-swiper {
		position: relative;
		width: 100%;
		height: 100%;
		.swiper-slide,
		.swiper-slide-duplicate {
			// 表示所有属性都有动作效果，过度时间为0.4s，以慢速开始和结束的过渡效果
			// opacity: 0;
			transition: all 0.6s ease-in-out;
			cursor: grab;
		}
		// .swiper-monse-down{
		// 	cursor: grabbing;
		// }
		.swiper-slide-active,
		.swiper-slide-duplicate-active {
			opacity: 1;
			z-index: 20;
		}
	}
	.swiper-button-next,
	.swiper-button-prev {
		img {
			width: 48px;
		}
		&::after {
			content: '';
		}
	}
}
</style>
