
const state = {
	scrollValue:0,
}

const mutations = {
	SET_SCROLL_VALUE: (state, num) => {
		state.scrollValue = num;
	},
}

const actions = {
	setScrollValue({
		commit
	},params) {
		commit('SET_SCROLL_VALUE', params);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
