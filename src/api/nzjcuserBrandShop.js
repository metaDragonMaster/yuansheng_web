// 品牌馆

import request from '@/utils/request'
let Api = {};

/*
	大牌推荐
	merchantId	商户ID	query	false	integer(int32)
*/
Api.brandRecommendList = function(data) {
	return request({
		url: '/commonservice/brandShop/brandRecommendList',
		method: 'get',
		params : data
	})
}

/*
	热卖商品
	pageNum	当前页码	query	false	string
	pageSize	分页大小	query	false	string
*/
Api.hotGoodsList = function(data) {
	return request({
		url: '/commonservice/brandShop/hotGoodsList',
		method: 'get',
		params : data
	})
}

/*
	展示优质商家列表
	pageNum	当前页码	query	false	string
	pageSize	分页大小	query	false	string
*/
Api.showQualityMerchantList = function(data) {
	return request({
		url: '/commonservice/brandShop/showQualityMerchantList',
		method: 'get',
		params : data
	})
}

export default Api