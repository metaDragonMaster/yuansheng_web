import axios from 'axios'
import $routerUtil from "@/router/util.js"
import store from '@/store'
import {
	getToken
} from '@/utils/auth';

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	// baseURL: 'https://code.yuanshengl.com/',
	// baseURL: 'http://192.168.1.249:8301/',
	// baseURL: 'http://18.138.34.209:8301/',

	// baseURL: 'http://192.168.1.73:8301/',
	// baseURL: 'http://192.168.1.21:8301/',
	timeout: 5000, // request timeout
	headers:{
		"Content-Type":"application/json"
	},
	paramsSerializer: function(params) {
		let result = [];
		for (let field in params) {
			if (params[field] === undefined) {
				result.push(`${field}=`);
				continue;
			}
			if (Array.isArray(params[field])) {
				result.push(params[field].map(item => `${field}=${item}`).join("&"));
			} else {
				result.push(`${field}=${params[field]}`);
			}
		}
		return result.join("&");
	}
})

// request interceptor
service.interceptors.request.use(
	config => {
		let token = getToken();
		if (token) {
			config.headers['Authorization'] = token;
		}
		// console.log(config.url)
		return config;
	},
	error => {
		console.log("请求错误",error); // for debug
		return Promise.reject(error);
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		const res = response.data;
		if (res.code !== 10200) {
		// 	if(res.code == 10800) {
		// 		return Promise.reject(new Error(res || 'Error'));
		// 	}
		// 	if(res.code == 10016) {
		// 		Dialog.confirm({
		// 		  title: '用户未登录',
		// 		  message: '未检测到用户信息，请登录',
		// 		}).then(() => {
		// 			store.dispatch('user/logout');
		// 			$routerUtil.toPath(`/login`);
		// 		});
		// 		// .catch(() => {

		// 		// });
		// 	}
			// if(res.code == 10401  || res.status == 401) {
			// 	store.dispatch('user/logout');
			// 	store.dispatch('user/removeUserInfo');
			// 	$routerUtil.toPath(`/userSign/login`);
			// 	return Promise.reject(new Error(res || 'Error'));
			// }
		// 	Notify({ type: 'danger', message: res.msg });
		// 	return Promise.reject(new Error(res || 'Error'));
		} else {
			return res;
		}
	},
	error => {
		// console.log("error:-->",error)
		// console.log("error:-->",error.response)
		// console.log("error:-->",error.response.status)
		// console.log("error:-->",error.response.data)
		// if(error.response.status == 10401 || error.response.status == 401) {
		// 	store.dispatch('user/logout');
		// 	store.dispatch('user/removeUserInfo');
		// 	$routerUtil.toPath(`/userSign/login`);
		// 	return ;
		// }
		// if(error.response.status == 500) {
		// 	$routerUtil.toPath(`/500`);
		// 	return ;
		// }
		// return Promise.reject(error)
		return error.response.data
	}
)

export default service
