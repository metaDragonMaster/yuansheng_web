<template>
	<ul class="flex-js-sb  limit-max-width introduce-card">
		<li v-for="item in data">
			<img :src="item.image" alt="" />
			<div class="info">
				<h3>{{item.title}}</h3>
				<ol>
					<li v-for="item in item.subs"><span>{{item}}</span></li>
				</ol>
				<!-- <button type="button" @click="item.btnClick">{{item.btnText}}</button> -->
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		data: {
			type: Array,
			default: ()=>[],
		},
	},
	components: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.introduce-card {
	padding-top: 100px;
	padding-bottom: 100px;
	& > li {
		// width: 520px;
		flex: 1;
		padding: 35px 0;
		box-shadow: 0 0 0.5rem -0.125rem rgba($color: #3b8f3e, $alpha: 0.3);
		// border: 1px solid #f2f2f2;
		transition: box-shadow 0.3s;
		display: grid;
		grid-template-columns: 167px 1fr;
		border-radius: 3px;
		&:first-child {
			margin-right: 46px;
		}
		&:hover {
			box-shadow: 0 0 1rem -0.125rem rgba($color: #3b8f3e, $alpha: 0.3);
			img {
				animation: 0.6s imgMove infinite alternate ease-in-out;
			}
		}
		img {
			width: fit-content;
			margin: 0 auto;
		}
		@keyframes imgMove {
			0% {
				margin-top: 0;
			}
			100% {
				margin-top: -10px;
			}
		}
		h3 {
			margin-bottom: 20px;
			font-size: 24px;
		}
		ol {
			display: grid;
			// grid-template-columns: 1fr 1fr;
			padding-right: 16px;
			li {
				list-style-type: disc;
				list-style-position: inside;
				margin-bottom: 20px;
				color: #53b753;
				font-size: 14px;
				span {
					color: #666666;
				}
			}
		}
		button {
			background-color: #53b753;
			color: #ffffff;
			padding: 10px 44px;
			margin-top: 6px;
		}
	}
}
</style>
