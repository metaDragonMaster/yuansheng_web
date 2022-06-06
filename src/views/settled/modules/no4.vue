<template>
	<div class="page-model limit-max-width no-4 flex-center-js-sard" v-pre>
		<div class="model-text">
			<h1>寻源采购</h1>
			<p>多重寻源场景</p>
			<p>满足不同采购需求的流合规性</p>
			<ol>
				<li><span>询价采购：来源丰富、充分比价</span></li>
				<li><span>招标采购：在线合规、多方协同</span></li>
				<li><span>竞价采购：透明博弈、快速降本</span></li>
				<li><span>供应商招募：半径扩大、高效触达</span></li>
			</ol>
		</div>
		<div class="image-box"><img src="@/assets/imgs/settled/bg_banner3.png" alt="" /></div>
	</div>
</template>

<style lang="scss" scoped="scoped">
.no-4 {
	background-image: url(../../../assets/imgs/settled/mobg.png);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	.model-text {
		color: #fff;
		h1 {
			margin-bottom: 1rem;
		}
		p {
			font-size: 0.75rem;
			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}
		ol {
			margin-top: 1rem;
		}
		li {
			list-style: disc;
			list-style-position: inside;
			color: #0da056;
			span {
				color: #fff;
			}
			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}
	}
	.image-box {
		max-width: 520px;
	}
}
</style>
