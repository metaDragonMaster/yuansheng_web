// 合作社信息

import request from '@/utils/request'
let Api = {};

Api.testDelete = function(data) { //删除入驻信息
	return request({
		url: '/commonservice/test/delete',
		method: 'get',
		params:data,
		/*
			type 类型(1删除合作社 2删除供货商)
		*/
	})
}
/*
	查看合作社图片信息
*/
Api.getCooperativePhoto = function(/*data*/) {
	return request({
		url: '/commonservice/cooperative/getCooperativePhoto',
		method: 'get',
		// params : data
	})
}

/*
	添加合作社信息
	name			合作社名字		false	string
	mcc				经营类目		false	string
	realName		真实姓名		false	string
	certificationNo	身份证号码		false	string
	cityNo			所在城市		false	string
	address			详细地址		false	string
	phoneNo			电话号码		false	string
	
	bankUserName	开户人姓名		false	string
	bankName		开户行		false	string
	bankNo			银行账号		false	string
	//cooperativeLv	合作社等级		false	integer(int32)
	licenseCode		营业执照编号		false	string
*/
Api.postCooperativeInfo = function(data) {
	return request({
		url: '/commonservice/cooperative/postCooperativeInfo',
		method: 'post',
		// params : data
		data : data
	})
}
/*
	修改合作社信息
	id	true string
	
	{
		address			详细地址		false	string
		bankName		开户行		false	string
		bankNo			银行账号		false	string
		bankUserName	开户人姓名		false	string
		certificationNo	身份证号码		false	string
		cityNo			所在城市		false	string
		//cooperativeLv	合作社等级		false	integer(int32)
		licenseCode		营业执照编号		false	string
		mcc				经营类目		false	string
		name			合作社名字		false	string
		phoneNo			电话号码		false	string
		realName		真实姓名		false	string
	}
*/
Api.updateCooperativeInfo = function(data) {
	return request({
		url: `/commonservice/cooperative/updateCooperativeInfo`,
		method: 'put',
		data : data
	})
}

/*
	提交合作社图片信息
	bankCardFrontPhoto			银行卡正面	false	string
	legalCertificationBackPhoto	法人身份证反面		false	string
	legalCertificationFrontPhoto	法人身份证正面		false	string
	licenseCodePhoto			营业执照		false	string
*/
Api.postCooperativePhoto = function(data) {
	return request({
		url: `/commonservice/cooperative/postCooperativePhoto`,
		method: 'post',
		data : data
	})
}

/*
	修改合作社图片信息
	
	bankCardFrontPhoto				银行卡正面	false	string
	legalCertificationBackPhoto		法人身份证反面		false	string
	legalCertificationFrontPhoto	法人身份证正面		false	string
	licenseCodePhoto				营业执照		false	string
*/
Api.updateCooperativePhoto = function(data) {
	return request({
		url: "/commonservice/cooperative/updateCooperativePhoto",
		method: 'put',
		data : data
	})
}

/*
	查询银行信息
	bankName	bankName	query	true string
*/
Api.selectBankInfo = function(data) {
	return request({
		url: '/commonservice/cooperative/selectBankInfo',
		method: 'get',
		params : data
	})
}

/*
	查询银行信息
	bankCode	bankCode	query	true string
*/
Api.selectBankInfoByCode = function(data) {
	return request({
		url: '/commonservice/cooperative/selectBankInfoByCode',
		method: 'get',
		params : data
	})
}

/*
	查询经营类目信息
	id	true string
*/
Api.selectClassificationInfo = function(data) {
	return request({
		url: '/commonservice/cooperative/selectClassificationInfo',
		method: 'get',
		params : data
	})
}

/*
	查询合作社信息
	id	true string
*/
Api.selectCooperativeInfo = function() {
	return request({
		url: '/commonservice/cooperative/selectCooperativeInfo',
		method: 'get',
	})
}
/*
	提交合作社打款验证审核
	amount			验证金额
*/
Api.postCooperativeCheckMoney = function(data) {
	return request({
		url: '/commonservice/cooperative/postCooperativeCheckMoney',
		method: 'post',
		params: data
	})
}
/*
	提交合作社信息审核
*/
Api.postCooperativeInfoCheck = function() {
	return request({
		url: '/commonservice/cooperative/postCooperativeInfoCheck',
		method: 'post',
	})
}
//查询用户是否开通合作社
Api.selectUserCooperativeInfo = function() {
	return request({
		url: '/commonservice/cooperative/selectUserCooperativeInfo',
		method: 'get',
	})
}
//查询合作社审核进度
Api.selectCooperativeAuditSpeed = function() {
	return request({
		url: '/commonservice/cooperative/selectCooperativeAuditSpeed',
		method: 'get',
	})
}



export default Api