<template>
	<div id="enterprise-info">
		<div class="sub-title flex">
			<p class="title">企业信息</p>
			<button class="drift-right" v-if="haveSettled" @click="$routerUtil.toName('memberManagement')">成员管理</button>
		</div>
		<!-- <companyKindInfo v-if="userInfo"></companyKindInfo>
		<notSettled v-else></notSettled> -->
		<!-- 
			这里的条件判断应该根据各个不同的id
		 -->
		<companyKindInfo v-if="haveSettled"></companyKindInfo>
		<notSettled v-else></notSettled>
	</div>
</template>
<script>
import notSettled from './notSettled/index.vue';
import companyKindInfo from './companyKindInfo/index.vue';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			haveSettled:false,
		};
	},
	components: {
		notSettled,
		companyKindInfo
	},
	computed: {
		...mapGetters(['userInfo']),
	},
	watch:{
		userInfo(newInfo) {
			if(newInfo) {
				this.setHaveSettled()
			}
		}
	},
	async created() {
		this.setHaveSettled();
	},
	methods:{
		setHaveSettled() {
			let _object = this.userInfo['userOpenInfoObject'];
			for (let key in _object) {
				if(_object[key]>0) {
					this.haveSettled =  true;
				}
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#enterprise-info {
	.title {
		font-size: 22px;
		color: #333333;
	}
}
</style>
