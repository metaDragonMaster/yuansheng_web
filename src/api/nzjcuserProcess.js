// commonserviceProcess 加工企业
import request from "@/utils/request";

let Api = {};

/**
 * 查询加工企业图片信息
 * */
Api.getProcessPhoto = function() {
	return request({
		url: '/commonservice/process/getProcessPhoto',
		method: 'get',
	});
}

/**
 * 提交加工企业图片信息
 * {
		"bankCardFrontPhoto": "", 银行卡正面
		"legalCertificationBackPhoto": "", 法人身份证反面
		"legalCertificationFrontPhoto": "", 法人身份证正面
		"licenseCodePhoto": "" 营业执照
	}
 * */
Api.postProcessPhoto = function(data) {
	return request({
		url: '/commonservice/process/postProcessPhoto',
		method: 'post',
		data:data
	});
}
/*修改加工企业图片信息*/
Api.updateProcessPhoto = function(data) {
	return request({
		url: '/commonservice/process/updateProcessPhoto',
		method: 'put',
		data:data
	});
}


/**
 * 提交加工企业打款验证审核
 * 	{
		amount  string
	}
 * */
Api.postProcessCheckMoney = function(data) {
	return request({
		url: '/commonservice/process/postProcessCheckMoney',
		method: 'post',
		params:data
	});
}

/*
	提交加工企业信息
	{
		address	地址		false	string
		certificationNo	法人身份证号		false	string
		cityNo	所在城市		false	string
		contactCertificationNo	联系人身份证号码		false	string
		contactName	联系人姓名		false	string
		contactPhoneNo	联系人电话号码		false	string
		licenseCode	统一社会信用代码		false	string
		mcc	经营类目		false	string
		merchantType	商户类型（0 个人 1企业）		false	integer(int32)
		name	商户名称		false	string
		realName	法人姓名		false	string

		bankUserName: '123', //	开户人姓名		false	string
		bankName: '102362023993', //		开户行		false	string
		bankNo: '123', //			银行账号		false	string
		bankPhoneNo: '123', //开户预留手机号
		phoneNo: '123', //法人手机号
		smsCode: '123345'
	}
*/
Api.postProcessInfo = function(data) {
	return request({
		url: '/commonservice/process/postProcessInfo',
		method: 'post',
		data:data
	});
}
/*
	修改加工企业信息
*/
Api.updateProcessInfo = function(data) {
	return request({
		url: '/commonservice/process/updateProcessInfo',
		method: 'put',
		data:data
	});
}

/*
	提交加工企业信息审核
*/
Api.postProcessInfoCheck = function() {
	return request({
		url: '/commonservice/process/postProcessInfoCheck',
		method: 'post',
	});
}

/*
	查询货商审核进度
*/
Api.selectProcessAuditSpeed = function() {
	return request({
		url: '/commonservice/process/selectProcessAuditSpeed',
		method: 'get',
	});
}

/*
	查询加工企业信息
*/
Api.selectProcessInfo = function() {
	return request({
		url: '/commonservice/process/selectProcessInfo',
		method: 'put',
	});
}



export default Api;
