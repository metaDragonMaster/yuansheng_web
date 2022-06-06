import request from '@/utils/request'
let Api = {};
// 安全模块

/*
	用户注册
	code		短信验证码 	string
	mobile		手机号码	 	string
	password	密码	 		string
	username 	用户名 		string
*/
Api.registerUser = function(data) {
	data.password = window.btoa(data.password)
	return request({
		url: '/auth/registerUser',
		method: 'post',
		params : data
	})
}


/*
	密码登录
	password 密码 string
	username 用户名/手机号/邮箱 string
*/
Api.pwLogin = function(data) {
	data.password = window.btoa(data.password)
	return request({
		url: '/auth/pwLogin',
		method: 'post',
		params : data
	})
}
/*
	短信登录
	code 验证码 string
	phone 手机号 string
*/
Api.smsLogin = function(data) {
	// data.verifyCode = window.btoa(data.verifyCode)
	return request({
		url: '/auth/smsLogin',
		method: 'post',
		params : data
	})
}
//获取用户信息
//登录之后才有用。
Api.getUserInfo = function() {
	return request({
		url: '/auth/userCenter',
		method: 'get',
	})
}
//退出登录
Api.logout = function() {
	return request({
		url: '/auth/userCenter/logout',
		method: 'post',
	})
}

/*
	获取图形验证码
	key		获取图形验证码	string
*/
Api.captcha = function(key) {
	return request({
		url: '/auth/captcha/' + key,
		method: 'get',
	})
}
/*
	获取邮箱验证码
	action	类型		string
	email	邮箱		string
*/
Api.emailSend = function(data) {
	return request({
		url: '/auth/emailSend',
		method: 'post',
		params : data
	})
}
/*
	获取短信验证码
	action	类型 	string
	phone	手机号	string
*/
Api.smsSend = function(data) {
	return request({
		url: '/auth/smsSend',
		method: 'post',
		params : data
	})
}

/*
	验证邮箱验证码
	action	类型 	string
	code	验证码	string
	email	邮箱		string
*/
Api.verifyEmailCode = function(data) {
	return request({
		url: '/auth/verifyEmailCode',
		method: 'post',
		params : data
	})
}
/*
	验证手机验证码
	action	类型 	string
	code	验证码	string
	phone	手机号	string
*/
Api.verifySmsCode = function(data) {
	return request({
		url: '/auth/verifySmsCode',
		method: 'post',
		params : data
	})
}

//展示特色服务列表
Api.specialServiceList = function() {
	return request({
		url: '/commonservice/specialService/specialServiceList',
		method: 'get',
	})
}
/*
	获取ossPolicy
	fileType	文件类型,可用值:image	query	true	string
	moduleName	模块名,可用值:nzjc,ncq,web	query	true	string
*/
Api.getOssPolicy = function(data) {
	return request({
		url: '/auth/oss/getOssPolicy',
		method: 'get',
		params: data
	})
}






export default Api
