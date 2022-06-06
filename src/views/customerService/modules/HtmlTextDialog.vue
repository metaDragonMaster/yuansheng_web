<template>
	<el-dialog
		:title="dialogTitle"
		center
		:visible.sync="show"
		top="6vh"
		width="1000px"
		@closed="close"
	>
		<div class="hr"></div>
		<div class="htmltext">
        {{htmltext}}
		</div>
		<div slot="footer">
			<el-button @click="show = false">
				确认
			</el-button>
		</div>
	</el-dialog>
</template>
<script>
import UploadImg from "@/components/UploadImg/index.vue"
export default {
	data(){return{
		show:false ,
      htmltext:'',
      dialogTitle:''
	}},
	components: {
		UploadImg
	},
	computed: {
		// dialogTitle() {
		// 	// return !this.isChange?"新增地址":"修改地址"
		// 	return "问题文本"
		// }
	},
	mounted() {
		
	},
	methods:{
		
		open(formData) {
			this.dialogTitle = formData.questionName;
			this.htmltext = formData.content;
			this.show = true;
		},
		close() {
			
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.hr {
	height: 1px;
	width: 90%;
	margin: 0 auto;
	background-color: #F3F3F3;
}
.htmltext {
	min-height: 600px;
}
</style>
