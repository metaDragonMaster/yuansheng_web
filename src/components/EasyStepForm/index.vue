<template>
	<!-- 简易步骤条表单 -->
	<div class="easy-step-form">
		<el-steps style="margin-bottom: 1rem;" :active="currentIndex" align-center :process-status="processStatus" :finish-status="finishStatus">
			<el-step v-for="(step,index) in steps" :key="step.title" :title="step.title" :description="step.description" >
				<template #icon>
					{{ index + 1 }}
				</template>
			</el-step>
		</el-steps>
		<slot></slot>
		<div class="flex-center">
			<el-button @click="next()" v-show="steps.length > currentIndex">
				下一步
			</el-button>
			<el-button @click="prev()" type="" v-show="currentIndex > 1">
				{{steps.length <= currentIndex?"完成":"返回"}}
			</el-button>
		</div>
	</div>
</template>
<script>
export default {
	data(){return{
		// currentIndex:0,
	}},
	model:{
		prop:"currentIndex",
		event:"emitCurrentIndex"
	},
	props:{
		processStatus:{
			type:String,
			default:"wait",
			validator(value) {
				return ['wait', 'process', 'finish', 'error', 'success'].indexOf(value) !== -1
			}
		},
		finishStatus:{ // 步骤完成的状态
			type:String,
			default:"finish",
			validator(value) {
				return ['wait', 'process', 'finish', 'error', 'success'].indexOf(value) !== -1
			}
		},
		currentIndex:{
			type:Number,
			default:0,
		},
		steps:{
			/* 
				{
					title:"",
					description:""
				}
			 */
			type:Array,
			default:()=>[],
		},
	},
	mounted() {
	},
	methods:{
		emitCurrentIndex(index) {
			// this.currentIndex
			this.$emit('emitCurrentIndex', index);
		},
		next() {
			let nextIndex = this.currentIndex + 1;
			this.$emit('emitNext', nextIndex);
			// this.$emit('emitCurrentIndex', nextIndex);
			// this.emitCurrentIndex(this.currentIndex + 1);
		},
		prev() {
			let prevIndex;
			if(this.steps.length <= this.currentIndex) {
				prevIndex = 1;
			} else {
				prevIndex =  this.currentIndex - 1;
			}
			this.$emit('emitPrev', prevIndex);
			// this.$emit('emitCurrentIndex', prevIndex);
			// this.emitCurrentIndex(this.currentIndex - 1);
		}
	}
}
</script>
