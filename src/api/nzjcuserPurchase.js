// commonservicePurchase 采购商
import request from "@/utils/request";

let Api = {};

/**
 * 查询采购商图片信息
 * */
Api.getPurchasePhoto = function() {
	return request({
		url: '/commonservice/purchase/getPurchasePhoto',
		method: 'get',
	});
}

/**
 * 提交采购商图片信息
 * {
		"bankCardFrontPhoto": "", 银行卡正面
		"legalCertificationBackPhoto": "", 法人身份证反面
		"legalCertificationFrontPhoto": "", 法人身份证正面
		"licenseCodePhoto": "" 营业执照
	}
 * */
Api.postPurchasePhoto = function(data) {
	return request({
		url: '/commonservice/purchase/postPurchasePhoto',
		method: 'post',
		data:data
	});
}
/*修改采购商图片信息*/
Api.updatePurchasePhoto = function(data) {
	return request({
		url: '/commonservice/purchase/updatePurchasePhoto',
		method: 'put',
		data:data
	});
}


/**
 * 提交采购商打款验证审核
 * 	{
		amount  string
	}
 * */
Api.postPurchaseCheckMoney = function(data) {
	return request({
		url: '/commonservice/purchase/postPurchaseCheckMoney',
		method: 'post',
		params:data
	});
}

/*
	提交采购商信息
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
Api.postPurchaseInfo = function(data) {
	return request({
		url: '/commonservice/purchase/postPurchaseInfo',
		method: 'post',
		data:data
	});
}
/*
	修改采购商信息
*/
Api.updatePurchaseInfo = function(data) {
	return request({
		url: '/commonservice/purchase/updatePurchaseInfo',
		method: 'put',
		data:data
	});
}

/*
	提交采购商信息审核
*/
Api.postPurchaseInfoCheck = function() {
	return request({
		url: '/commonservice/purchase/postPurchaseInfoCheck',
		method: 'post',
	});
}

/*
	查询货商审核进度
*/
Api.selectPurchaseAuditSpeed = function() {
	return request({
		url: '/commonservice/purchase/selectPurchaseAuditSpeed',
		method: 'get',
	});
}

/*
	查询采购商信息
*/
Api.selectPurchaseInfo = function() {
	return request({
		url: '/commonservice/purchase/selectPurchaseInfo',
		method: 'put',
	});
}



export default Api;