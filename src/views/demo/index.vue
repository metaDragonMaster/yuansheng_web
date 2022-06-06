<template>
	<div id="demo-view" limit-max-width>
		<button class="button-cyberpunk">赛博朋克</button>
		<div class="glitch">
			<div class="glitch__item"></div>
			<div class="glitch__item"></div>
		</div>
		<div class="black-bg">
			<div class="neon">CYBER</div>
			<div class="flux">PUNK</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	components: {},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.button-cyberpunk {
	&,
	&::after {
		width: 300px;
		height: 86px;
		font-size: 40px;
		background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
		border: 0;
		color: #fff;
		letter-spacing: 3px;
		line-height: 88px;
		box-shadow: 6px 0px 0px #00e6f6;
		outline: transparent;
		position: relative;
	}
	&::after {
		--slice-0: inset(50% 50% 50% 50%);
		--slice-1: inset(80% -6px 0 0);
		--slice-2: inset(50% -6px 30% 0);
		--slice-3: inset(10% -6px 85% 0);
		--slice-4: inset(40% -6px 43% 0);
		--slice-5: inset(80% -6px 5% 0);
		content: '立即加入';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
		text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
		clip-path: var(--slice-0);
	}
	&:hover::after {
		animation: 1s glitch infinite;
		animation-timing-function: steps(2, end);
	}
	@keyframes glitch {
		0% {
			clip-path: var(--slice-1);
			transform: translate(-20px, -10px);
		}
		10% {
			clip-path: var(--slice-3);
			transform: translate(10px, 10px);
		}
		20% {
			clip-path: var(--slice-1);
			transform: translate(-10px, 10px);
		}
		30% {
			clip-path: var(--slice-3);
			transform: translate(0px, 5px);
		}
		40% {
			clip-path: var(--slice-2);
			transform: translate(-5px, 0px);
		}
		50% {
			clip-path: var(--slice-3);
			transform: translate(5px, 0px);
		}
		60% {
			clip-path: var(--slice-4);
			transform: translate(5px, 10px);
		}
		70% {
			clip-path: var(--slice-2);
			transform: translate(-10px, 10px);
		}
		80% {
			clip-path: var(--slice-5);
			transform: translate(20px, -10px);
		}
		90% {
			clip-path: var(--slice-1);
			transform: translate(-10px, 0px);
		}
		100% {
			clip-path: var(--slice-1);
			transform: translate(0);
		}
	}
}

.glitch {
	position: relative;
	height: 500px;
	width: 500px;
}
.glitch .glitch__item {
	--gap-horizontal: 10px;
	--gap-vertical: 5px;
	--time-anim: 4s;
	--delay-anim: 2s;
	--blend-mode-1: none;
	--blend-color-1: transparent;
	background: url(../../assets/demoImage/easy-demo.png) no-repeat 50% 50% / cover;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
}
.glitch .glitch__item:nth-child(1) {
	background-color: var(--blend-color-1);
	background-blend-mode: var(--blend-mode-1);
	animation-duration: var(--time-anim);
	animation-delay: var(--delay-anim);
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-name: glitch-anim-1;
}
@keyframes glitch-anim-1 {
	0% {
		opacity: 1;
		transform: translate3d(var(--gap-horizontal), 0, 0);
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}
	2% {
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	4% {
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	6% {
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	8% {
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	10% {
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	12% {
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	14% {
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	16% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	18% {
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	20% {
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
	21.9% {
		opacity: 1;
		transform: translate3d(var(--gap-horizontal), 0, 0);
	}
	22%,
	100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}
.black-bg {
	background-color: #000000;
}
.neon {
  text-shadow: 0 0 3vw #F4BD0A;
  animation: neon 2s ease-in-out infinite;
}
.flux {
  text-shadow: 0 0 3vw #179E05;
  animation: flux 2s linear infinite;
}
.neon,
.flux{
	font-size: 50px;
}
@keyframes neon {
  0%, 100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FFFC00;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}
@keyframes flux {
  0%, 100% {
    text-shadow: 0 0 1vw #10ff4c, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #03C03C;
  }
  50% {
    text-shadow: 0 0 .5vw #024218, 0 0 1.5vw #024713, 0 0 5vw #023812, 0 0 5vw #012707, 0 0 .2vw #022201, .5vw .5vw .1vw #011a06;
    color: #179E05;
  }
}
</style>
