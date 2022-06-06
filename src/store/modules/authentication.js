
const state = {
	formDataKeep:{},//资料上传表单
	formDataKeepAccount:{},//用户账户表单
	needStartForm:false,//需要搜索用户上传的数据吗
	mccOptions:[],
	authenType:"",
	toExamineType:"",//审核类型
	formFail:false,//打款失败了吗
	formMsg:"",//审核状态
}

const mutations = {
	SET_FORM_DATA_KEEP: (state, form) => {
		state.formDataKeep = form;
	},
	SET_FORM_DATA_KEEP_ACCOUNT: (state, form) => {
		state.formDataKeepAccount = form;
	},
	SET_NEED_START_FORM: (state, boolean) => {
		state.needStartForm = boolean;
	},
	SET_FORM_MCC_OPTIONS: (state, array) => {
		state.mccOptions = array;
	},
	SET_AUTHEN_TYPE: (state, type) => {
		state.authenType = type;
	},
	SET_TO_EXAMINE_TYPE: (state, type) => {
		state.toExamineType = type;
	},
	SET_FORM_FAIL: (state, type) => {
		state.formFail = type;
	},
	SET_FORM_MSG: (state, string) => {
		state.formMsg = string;
	},
}

const actions = {
	setFormDataKeep({
		commit
	},params) {
		commit('SET_FORM_DATA_KEEP', params);
	},
	setFormDataKeepAccount({
		commit
	},params) {
		commit('SET_FORM_DATA_KEEP_ACCOUNT', params);
	},
	setNeedStartForm({
		commit
	},params) {
		commit('SET_NEED_START_FORM', params);
	},
	setFormMccOptions({
		commit
	},params) {
		commit('SET_FORM_MCC_OPTIONS', params);
	},
	setAuthenType({
		commit
	},params) {
		//设置类型只能一次
		// if(state.authenType == ''||params == '') {
			
		// }
		commit('SET_AUTHEN_TYPE', params);
	},
	setToExamineType({
		commit
	},params) {
		commit('SET_TO_EXAMINE_TYPE', params);
	},
	setFormFail({
		commit
	},params) {
		if(typeof(params) == 'boolean') {
			commit('SET_FORM_FAIL', params);
		}
	},
	setFormMsg({
		commit
	},params) {
			commit('SET_FORM_MSG', params);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
