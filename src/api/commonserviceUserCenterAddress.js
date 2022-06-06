import request from '@/utils/request'
let Api = {};

/*
	增加地址
	address	地址		false	 string
	areaCode	区县id		false	 string
	cityCode	市级id		false	 string
	provinceCode	省级id		false	 string
	defaultAddress	是否为默认地址(true：默认，false:非默认)		false	 boolean
	detailAddress	详细地址		false	 string
	phoneNo	收件人手机号码		false	 string
	userName	收件人名称		false	 string
*/
Api.addAddress = function(data) {
	return request({
		url: '/commonservice/userCenter/address/addAddress',
		method: 'post',
		data:data
	});
}
/*
	修改
*/
Api.updateAddress = function(addressId,data) {
	return request({
		url: `/commonservice/userCenter/address/updateAddress/${addressId}`,
		method: 'put',
		data: data
	});
}
/*
	删除
*/
Api.deleteAddress = function(addressId) {
	return request({
		url: `/commonservice/userCenter/address/deleteAddress/${addressId}`,
		method: 'delete'
	});
}
/*展示地址列表*/
Api.showAddressList = function() {
	return request({
		url: '/commonservice/userCenter/address/showAddressList',
		method: 'get',
	});
}



export default Api;
