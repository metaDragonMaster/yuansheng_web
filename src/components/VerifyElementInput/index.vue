<template>
	<el-input v-model="codeValue" @input="updateVal" clearable class="verify-input" :maxlength="6">
		<template slot="prepend">
			<slot name="prepend"></slot>
		</template>
		<template slot="append">
			<div @click="appendClick()" :disabled="verifyType" :class="{'is-loading':loading==true,'is-disabled':verifyType}">
				<i :class="{'el-icon-loading':loading==true}" ></i>
				{{ verifyType ? `${timer}s` : '获取验证码' }}
			</div>
		</template>
	</el-input>
</template>
<script>
import ApiAuth from '@/api/auth.js';
export default {
	data() {
		return {
			loading:false,
			codeValue:'',
			timer: undefined
		};
	},
	computed: {
		verifyType() {
			return !!this.timer;
		}
	},
	props: {
		action: {
			type: String,
			validator: function(value) {
				// 这个值必须匹配下列字符串中的一个
				return ["login", "registry", "verify", "changePassword"].indexOf(value) !== -1;
			}
		},
		bindPhoneNo: {
			type: String,
			default: ''
		},
		value: {
			type:String,
			default:''
		},
		maxtimer: {
			type: Number,
			default: 60
		}
	},
	model: {
		prop: 'value',
		event: 'emitValue'
	},
	deactivated() {
		this.clearTimer()
	},
	methods: {
		clearTimer() {
			this.timer = 0;
		},
		setInputValue(val = ""){
			this.codeValue = val;
		},
		updateVal() {
			// this.codeValue.replace(/[^\d]/g/);
			this.$emit('emitValue',this.codeValue);
		},
		settimer() {
			this.timer = this.maxtimer;
			let time = setInterval(() => {
				--this.timer;
				if (this.timer <= 0) {
					this.timer = null;
					clearInterval(time);
				}
			}, 1000);
		},
		async appendClick() {
			console.log(this.bindPhoneNo)
			if (this.timer > 0) return;
			if (this.bindPhoneNo.length != 11) {
				return this.$message.warning('请输入十一位手机号');
			} else {
				this.loading = true;
				let {code,data,msg} = await this.smsSend();
				if(code == 10200) {
					this.$message.success(msg);
					if(data) {
						this.updateVal();
					}
					this.settimer();
				} else {
					this.$message.warning(msg);
				}
				this.loading = false;
			}
		},
		smsSend() {
			let params = {
				'action': this.action,
				'phone': this.bindPhoneNo,
			};
			return ApiAuth.smsSend(params);
		}
	}
};
</script>
<style lang="scss">
.el-input.verify-input {
	// 验证码的element el-input
	.el-input__inner {
		border-right: 0;
	}
	.el-input-group__append {
		background-color: #ffffff;
		position: relative;
		color: $ThemeColor;
		cursor: pointer;
		&:before {
			content: '|';
			color: #dfdfdf;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		div {
			width: 6rem;
			text-align: center;
			margin: 0.25rem;
			&.is-loading {
				opacity: 0.6;
				cursor: not-allowed;
			}
			&.is-disabled {
				cursor: not-allowed;
				&:hover {
					opacity: 0.6;
				}
			}
		}
	}

}
</style>
