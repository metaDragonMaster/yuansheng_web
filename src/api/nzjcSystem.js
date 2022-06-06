import request from "@/utils/request";

let Api = {};

//供货模块
Api.ghOrderDelete = function(OrderId) {
	return request({
		url: `/nzjcsystem/ghOrder/delete/${OrderId}`,
		method: 'delete'
	});
}

Api.getGhOrderList = function(data) {
	return request({
		url: `/nzjcsystem/ghOrder/ghOrderList`,
		method: 'get',
		params: data
	});
}

//采购模块
/*
	current	当前页码	query	false	integer(int32)
	size	当前页面数据量	query	false	integer(int32)
	field	排序字段	query	false	string
	ghMerchantName	查询条件-供应商名称	query	false	string
	goodsName	查询条件-商品名称	query	false	string
	order	排序规则，asc升序，desc降序	query	false	string
	startTime	查询条件-创建时间	query	false	string
*/
Api.cgOrderDelete = function(OrderId) {
	return request({
		url: `/nzjcsystem/cgOrder/delete/${OrderId}`,
		method: 'delete'
	});
}

Api.getCgOrderList = function(data) {
	return request({
		url: `/nzjcsystem/cgOrder/cgOrderList`,
		method: 'get',
		params: data
	});
}

export default Api;
