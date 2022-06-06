<template>
	<div id="basic-management">
		<div class="sub-title">
			<p class="title">
				基础信息
			</p>
		</div>
		<!-- <el-empty description="security-management还没写"></el-empty> -->
		<!-- {{userInfo}} -->
		<ol>
			<li>
				<p>账号名</p>
				<div>
					<p>{{userInfo.username||"用户未登录"}}</p>
				</div>
			</li>
			<li>
				<p>登录密码</p>
				<div>
					<span>******</span>
				</div>
				<!-- <el-button @click="toName('changeUserPassword')">更改</el-button> -->
			</li>
			<li>
				<p>手机号码</p>
				<div>
					<p>{{userInfo.mobile||"用户未登录"}}</p>
					<span>用于接收短信验证码及联系平台，若停用请及时更改</span>
				</div>
				<!-- <el-button @click="toName('changeUserPhoneNo')">更改</el-button> -->
			</li>
		</ol>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
	data(){return{
		
	}},
	components: {
		
	},
	computed: {
		...mapGetters(['userInfo'])
	},
	mounted() {
		
	},
	methods:{
		toName(name) {
			this.$routerUtil.toName(name)
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#basic-management {
	.el-steps {
		max-width: 37.5rem;
		margin: 3.125rem auto 0 auto;
	}
	ol {
		li {
			display: grid;
			grid-template-columns: 13.5rem auto 4.375rem;
			align-items: center;
			padding: 30px 0;
			border-bottom: 1px solid #f9f9f9;
			span {
				color: #999999;
			}
		}
	}
}
</style>
