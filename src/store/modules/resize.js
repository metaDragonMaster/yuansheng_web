
const state = {
	resizeValue:0,
}

const mutations = {
	SET_RESIZE_VALUE: (state, num) => {
		state.resizeValue = num;
	},
}

const actions = {
	setResizeValue({
		commit
	},params) {
		commit('SET_RESIZE_VALUE', params);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
