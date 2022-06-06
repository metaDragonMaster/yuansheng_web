<template>
	<div id="payment-authentication">
		<EasyStepOver v-if="fail" statusType="warning"  :succressText="succressText"></EasyStepOver>
		<div class="form" v-else>
			<h3>
				<img src="@/assets/iconImages/icon_tip.png" alt="" />
				帮助提示
			</h3>
			<p>
				打款成功，等待验款。您已成功提交银行账户，网商银行将于
				<span>3个工作日</span>
				内向您的账户汇出
				<span>0.1-2元以内</span>
				的确认金额，
			</p>
			<p>请认真确认您的收款账户及联系方式是否正确。</p>
			<p>公司名称： 湖南天和运筹电子商务有限公司</p>
			<p>收款银行： xxxx银行</p>
			<p>对公银行账户： 459686321047525681002</p>
			<p>手机号码： 15112468888</p>
			<el-form ref="Form" :model="Form" :rules="Rules" inline>
				<el-form-item prop="amount" label="打款认证">
					<div class="flex">
						<!-- <el-input v-model="Form.amount"></el-input> -->
						<el-input-number v-model="Form.amount" :controls="false" :min="0"></el-input-number>
						<span class="pd-left-10">元</span>
					</div>
				</el-form-item>
			</el-form>
			<p>
				(如收到
				<span>1角</span>
				，请填写
				<span>0.1</span>
				；如收到
				<span>1元2角</span>
				，请填写
				<span>1.2</span>
				)
			</p>
			<el-button class="submit-button" @click="submit">打款认证</el-button>
		</div>
	</div>
</template>
<script>
import ApiNzjcuserCooperative from '@/api/nzjcuserCooperative.js';
import ApiNzjcuserMerchant from '@/api/nzjcuserMerchant.js';
import ApiNzjcuserProcess from '@/api/nzjcuserProcess.js';
import ApiNzjcuserPurchase from '@/api/nzjcuserPurchase.js';
import EasyStepOver from '@/components/EasyStepOver/index.vue';
import { mapActions , mapGetters } from "vuex"
export default {
	data(){return{
		Form:{
			amount:''
		},
		Rules:{
			amount: [{required: true,message: '请输入金额',trigger: 'blur'}]
		},
		succressText:'打款验证失败,请联系平台',
		statusList:[
			{
				value: 0,
				label: '待审核',
			},
			{
				value: 1,
				label: '已经提交人工审核',
			},
			{
				value: 2,
				label: '审核成功待打款验证',
			},
			{
				value: 3,
				label: '成功',
			},
			{
				value: -1,
				label: '审核失败',
			},
			{
				value: -2,
				label: '打款验证失败',
			},
			{
				value: -3,
				label: '冻结',
			},
		],
		fail:false,
	}},
	components: {
		EasyStepOver,
	},
	computed: {
		...mapGetters(['formFail','formMsg','formAuthenType']),
	},
	created() {
		this.handleFail(this.formFail);
		this.handleMsg(this.formMsg);
	},
	mounted() {
		
	},
	methods:{
		handleFail(type) {
			this.fail = type
		},
		handleMsg(msg) {
			this.succressText = msg
		},
		async postCheckMoney() {
			let list = [
				{
					formAuthenType:'cooperativeId',
					selectSpeed: ApiNzjcuserCooperative.postCooperativeCheckMoney,
				},
				{
					formAuthenType:'purchaseId',
					selectSpeed:ApiNzjcuserPurchase.postPurchaseCheckMoney,
					
				},
				{
					formAuthenType:'merchantId',
					selectSpeed:ApiNzjcuserMerchant.postMerchantCheckMoney
				},
				{
					formAuthenType:'processId',
					selectSpeed:ApiNzjcuserProcess.postProcessCheckMoney
				}
			];
			let func;
			list.map(item => {
				if(item.formAuthenType == this.formAuthenType) {
					func = item.selectSpeed;
				}
			});
			let params = {
				amount:this.Form.amount,
			}
			let {code,data} = await func(params);
			if(code == 10200) {
				if(data == 3) {
					return true;
				} else {
					this.handleFail(true);
					let msg=''
					this.statusList.map(item=>{
						if(item.value == data) {
							msg = item.label
						}
					});
					this.succressText = msg;
					this.$message.warning(msg)
				}
			} else {
				this.handleFail(true)
				this.$message.warning(msg)
				return false;
			}
		},
		submit($enent) {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let res = await this.postCheckMoney();
					console.log(res)
					res&&this.$emit('submit', 5);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#payment-authentication{
	.form {
		max-width: 46rem;
		margin: 3.75rem auto;
		font-size: 0.875rem;
		h3 img {
			width: 1.25rem;
			margin-top: -0.25rem;
		}
		h3,
		p {
			margin-bottom: 1rem;
		}
		& > p > span {
			color: #f94100;
		}
		::v-deep .el-input__inner {
			text-align: left;
		}
	}
	
}

</style>
