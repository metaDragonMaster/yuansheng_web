import ApiAuth from '@/api/auth.js';
import $routerUtil from "@/router/util.js"
import {
	getToken,
	setToken,
	removeToken
} from '@/utils/auth'

const state = {
	token: getToken(),
	userInfo:null,
	// isSign:true,
}

const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_USER_INFO: (state, userInfo) => {
		state.userInfo = userInfo
	},
}
const handleToken = () =>{

}
const actions = {
	async setUserInfo({
		commit
	},params) {
		commit('SET_USER_INFO', params)
	},
	async getUserInfo({
		commit,dispatch
	}) {
		if(getToken()) {
			let res = await ApiAuth.getUserInfo();
			if(res.code == 10200) {
				commit('SET_USER_INFO', res.data);
			} else {
				commit('SET_USER_INFO', null);
			}
			return res
		}
		return 'not token';
	},
	async pwLogin({
		commit,dispatch
	}, params) {
		console.log(params)
		let res = await ApiAuth.pwLogin(params);
		if(res.code == 10200) {
			let token = res.data.token_type + ' ' +res.data.access_token;
			setToken(token, res.data.expires_in);
			dispatch('getUserInfo');
		}
		return res;
	},
	async smsLogin({
		commit,dispatch
	}, params) {
		let res = await ApiAuth.smsLogin(params);
		if(res.code == 10200) {
			let token = res.data.token_type + ' ' +res.data.access_token;
			setToken(token, res.data.expires_in);
			dispatch('getUserInfo');
		}
		return res;
	},

	// user logout
	logout({
		commit,
		state,
		dispatch
	}) {
		// ApiAuth.logout().finally(()=>{
			commit('SET_TOKEN', '');
			commit('SET_USER_INFO', null);
			removeToken();
			$routerUtil.toPath('/userSign/login');
			console.log("用户登出")
		// })
	},
	// get user info
	async selectUserInfo({
		commit,
		state
	}) {
		// let {code,data,msg} = await ApiAuth.selectUserInfo();
		// if(code == 10200) {
		// 	console.log(data)
		// 	commit('SET_USER_INFO', data)
		// 	// return data
		// }
	},
	async removeUserInfo({
		commit,
		state
	}) {
		// commit('SET_USER_INFO', null)
		// commit('SET_TOKEN', '')
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
