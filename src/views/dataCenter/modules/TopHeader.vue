<template>
	<div id="top-header">
		<p>
			<!-- <span class="button"></span> -->
			<button @click="$routerUtil.toPath('/')">返回首页</button>
			<span>今日访问次数:</span>
			<span>111</span>
		</p>
		<h1>{{title}}</h1>
		<p class="text-right">
			<span>{{ timeText }}</span>
		</p>
		<!-- 		<div>
			<span>{{ nowWeek }}</span>
			<span>{{ nowDate }}</span>
			<span>{{ nowTime }}</span>
		</div> -->
	</div>
</template>
<script>
import moment from 'moment';
export default {
	data() {
		return {
			timeText: '',
			timer: null,
			nowWeek: '',
			nowDate: '',
			nowTime: ''
		};
	},
	props:{
		title:{
			type:String,
		}
	},
	components: {},
	computed: {},
	mounted() {
		this.setNowTimes();
		// this.timeText = moment().format('yyyy-MM-DD hh:mm:ss').add(1,'m');
		this.timer = setInterval(() => {
			this.setNowTimes();
		}, 1000);
	},
	deactivated() {
		clearInterval(this.timer);
	},
	methods: {
		setNowTimes() {
			this.timeText = moment().format('yyyy-MM-DD hh:mm:ss');
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#top-header {
	height: 5rem;
	width: 100%;
	background-image: url(../../../assets/images/dataCenter/top.png);
	background-repeat: no-repeat;
	background-position: 0 16px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	h1 {
		text-align: center;
		color: transparent;
		// text-shadow: 0px 5px 5px rgba(0, 25, 110, 0.75);
		background: linear-gradient(0, #5197ff 20%, #80f2ff 60%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 50px;
		padding-top: 0.5rem;
	}
	p {
		color: #ffffff;
		padding-top: 2.75rem;
		padding-left: 1rem;
		padding-right: 1rem;
		button,
		span {
			font-size: 1rem;
			background: linear-gradient(0, #5197ff 10%, #ffffff 60%);
			margin-right: 1rem;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			// text-shadow: 0 4px 2px rgba($color: #ff1818, $alpha: 1);
		}
	}
}
</style>
