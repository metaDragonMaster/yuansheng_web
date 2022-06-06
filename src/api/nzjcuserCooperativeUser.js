// 合作社农户信息

import request from '@/utils/request'
let Api = {};

/*
	添加合作社成员信息
	{
		address	通讯地址		false	string
		age	年龄		false	integer(int32)
		certificationNo	身份证号码		false	string
		health	健康状况（0 健康 1一般 2 欠佳）		false	integer(int32)
		job	工作		false	string
		phoneNo	联系电话		false	string
		politicalStatus	政治面貌（0群众 1党员）		false	integer(int32)
		realName	真实姓名		false	string
		sex	性别 0女 1男		false	string
	}
*/
Api.postCooperativeUser = function(data) {
	return request({
		url: "/commonservice/cooperativeUser/postCooperativeUser",
		method: 'post',
		data : data
	})
}

/*
	查询合作社成员信息列表
	current	当前页面数据量	query	false	integer(int32)
	field	排序字段	query	false	string
	order	排序规则，asc升序，desc降序	query	false	string
	size	当前页码	query	false	integer(int32)

*/
Api.selectCooperativeUserList = function(data) {
	return request({
		url: "/commonservice/cooperativeUser/selectCooperativeUserList",
		method: 'get',
		params : data
	})
}
/*
	移除合作社成员信息
	cooperativeUserId	合作社成员id	query	true

*/
Api.removeCooperativeUser = function(cooperativeUserId) {
	return request({
		url: "/commonservice/cooperativeUser/removeCooperativeUser",
		method: 'put',
		params: {
			cooperativeUserId:cooperativeUserId
		},
	})
}
/*
	修改合作社成员信息
	cooperativeUserId	合作社成员id
	{
		address	通讯地址		false	string
		age	年龄		false	integer(int32)
		certificationNo	身份证号码		false	string
		health	健康状况（0 健康 1一般 2 欠佳）		false	integer(int32)
		job	工作		false	string
		phoneNo	联系电话		false	string
		politicalStatus	政治面貌（0群众 1党员）		false	integer(int32)
		realName	真实姓名		false	string
		sex	性别 0女 1男		false	string
	}
*/
Api.updateCooperativeUser = function(id,data) {
	return request({
		url: "/commonservice/cooperativeUser/updateCooperativeUser?cooperativeUserId=" + id,
		method: 'put',
		data : data
	})
}

/*
	设置合作社管理员
	adminLv	管理员等级	query	true	integer(int32)
	cooperativeUserId	合作社成员id	query	true	integer(int32)
*/
Api.setCooperativeAdmin = function(data) {
	return request({
		url: `/commonservice/cooperativeUser/setCooperativeAdmin`,
		method: 'put',
		params : data
	})
}
/*
	添加合作社成员信息
	{
		"address": "",
		"bankName": "",
		"bankNo": "",
		"bankUserName": "",
		"certificationNo": "",
		"cityNo": "",
		"contactCertificationNo": "",
		"contactName": "",
		"contactPhoneNo": "",
		"licenseCode": "",
		"mcc": "",
		"merchantType": 0,
		"name": "",
		"phoneNo": "",
		"realName": ""
	}
*/
Api.postMerchantInfo = function(data) {
	return request({
		url: `/commonservice/merchant/postMerchantInfo`,
		method: 'post',
		data : data
	})
}


export default Api
