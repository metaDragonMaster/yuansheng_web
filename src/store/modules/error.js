
const state = {
	errorText:'',
}

const mutations = {
	SET_ERROR_TYPE: (state, str) => {
		state.errorText = str;
	},
}

const actions = {
	setErrorType({
		commit
	},params) {
		commit('SET_ERROR_TYPE', params);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
