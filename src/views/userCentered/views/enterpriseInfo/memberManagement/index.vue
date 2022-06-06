<template>
	<div id="member-management">
		<div class="sub-title flex pointer">
			<p class="title alive">成员管理</p>
			<p class="title" @click="$routerUtil.toName('censusRegister')">户籍管理</p>
			<button class="drift-right" @click="openEdit()">添加成员</button>
		</div>
		<el-table
			class="handle"
			:data="tableData"
			v-loading="isLoading"
			ref="TableDom"
			highlight-current-row
			:header-cell-style="{ textAlign: 'center', 'background-color': '#f9f9f9' }"
			:cell-style="{ textAlign: 'center' }"
		>
		<!--
			address: "bbb"
			certificationNo: "baaa"
			cityNo: "10021"
		-->
			<el-table-column prop="adminLv" label="成员等级" min-width="120">
				<template v-slot="{row}">
					{{getLabel(row.adminLv,adminLvs)}}
				</template>
			</el-table-column>
			<el-table-column prop="realName" label="姓名" min-width="100"></el-table-column>
			<el-table-column prop="sex" label="性别">
				<template v-slot="{row}">
					{{row.sex == 1?"男":"女"}}
				</template>
			</el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
			<el-table-column prop="phoneNo" label="手机号" min-width="160px"></el-table-column>
			<el-table-column prop="politicalStatus" label="政治面貌">
				<template v-slot="{row}">
					{{row.radioPoliticalStatus == 1?"中共党员":"群众"}}
				</template>
			</el-table-column>
			<el-table-column prop="job" label="职务"></el-table-column>
			<el-table-column prop="health" label="健康状态" >
				<template v-slot="{row}">
					{{getLabel(row.health,radioHealth)}}
				</template>
			</el-table-column>
			<el-table-column prop="certificationNo" label="身份证号码" min-width="200"></el-table-column>
			<el-table-column prop="address" label="通讯地址" min-width="200"></el-table-column>
			<el-table-column label="操作" width="200" :fixed="tableData.length>0?'right':false">
				<template v-slot="{ row }">
					<el-link type="primary" @click="openEdit(row)">详情</el-link>
					<el-dropdown @command="dropDown">
						<el-link type="primary">
							更多
							<i class="el-icon-arrow-down el-icon--right"></i>
						</el-link>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item :command="commandValue(1,row)">设为一级管理员</el-dropdown-item>
							<el-dropdown-item :command="commandValue(2,row)">设为二级管理员</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-link type="danger" @click="removeCooperativeUser(row.id)">删除</el-link>
					<!-- <el-link type="danger" @click="removeCooperativeUser(row)">删除</el-link> -->
				</template>
			</el-table-column>
		</el-table>
		<TablePagination
			:total="tableQueryOption.total"
			:current="tableQueryOption.current"
			@currentChange="
				val => {
					tableQueryOption.current = val;
					getTableData();
				}
			"
			@sizeChange="
				val => {
					tableQueryOption.size = val;
					getTableData();
				}
			"
		/>
		<EditMemberDialog ref="EditMemberDom" @success="startQuery"></EditMemberDialog>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import EditMemberDialog from '../modules/EditMember/index.vue';
import ApiNzjcuserCooperativeUser from "@/api/nzjcuserCooperativeUser.js"
export default {
	data() {
		return {
			isLoading: false,
			tableData: [
				// {
				// 	realName: '123',
				// 	sex: '男',
				// 	age: '42',
				// 	phoneNo: '15588888888'
				// }
			],
			tableQueryOption: {
				current: 1,
				size: 10,
				total: 0,
			},
			radioHealth: [
				{ value: 0, label: '良好' }, 
				{ value: 1, label: '一般' }, 
				{ value: 2, label: '欠佳' },
			],
			adminLvs:[
				{ value: 0, label: '普通成员' },
				{ value: 1, label: '一级管理员' }, 
				{ value: 2, label: '二级管理员' },
			]
		};
	},
	components: {
		TablePagination,
		EditMemberDialog
	},
	computed: {},
	mounted() {
		this.getTableData()
	},
	methods: {
		commandValue(value,row) {
			return {
				'adminLv':value,
				'cooperativeUserId':row.id
			}
		},
		getLabel(value,list) {
			let label='';
			for(let i in list) {
				if(list[i].value == value) {
					return list[i].label;
				}
			}
			return "空";
		},
		openEdit(row) {
			this.$refs['EditMemberDom'].open(row);
		},
		async dropDown({adminLv,cooperativeUserId}) {
			console.log('value',adminLv,cooperativeUserId)
			let params = {
				'adminLv':adminLv,
				// 'cooperativeId':2,
				'cooperativeUserId':cooperativeUserId,
			}
			let {code,data} = await ApiNzjcuserCooperativeUser.setCooperativeAdmin(params);
			code == 10200&&this.startQuery()
		},
		startQuery(current = 1) {
			this.tableQueryOption.current = current;
			this.getTableData();
		},
		async getTableData() {
			let {
				current,
				size
			} = this.tableQueryOption;
			let params = {
				current,
				size,
			}
			let id = 2;
			let {code,data,msg} = await ApiNzjcuserCooperativeUser.selectCooperativeUserList(id,params);
			if(code == 10200) {
				this.tableData = data.records;
				this.tableQueryOption.total = data.total;
			} else {
				this.$message.warning(msg)
			}
		},
		// async removeCooperativeUser(row) {
			// console.log(row)
		async removeCooperativeUser(cooperativeUserId) {
			let {code,data,msg} = await ApiNzjcuserCooperativeUser.removeCooperativeUser(cooperativeUserId);
			code == 10200&&this.startQuery();
			// this.$message.warning(msg)
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#member-management {
}
</style>
