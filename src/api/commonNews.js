import request from '@/utils/request'
let Api = {};

//获取热门资讯
Api.getHotNews = function() {
	return request({
		url: '/commonservice/news/hotNews',
		method: 'get',
	});
}
//获取资讯详情
Api.getNewsDetailById = function(id) {
	return request({
		url: `/commonservice/news/newsDetail/${id}`,
		method: 'get',
	});
}
/*
	current	当前页码	query	false	integer(int32)
	size	当前页面数据量	query	false	integer(int32)
	newsTypeId	资讯类型ID	query	false	integer(int32)
*/
Api.selectNewsList = function(data) {
	return request({
		url: '/commonservice/news/newsList',
		method: 'get',
		params: data,
	});
}

//获取资讯类型列表
Api.getNewsTypeList = function() {
	return request({
		url: '/commonservice/news/newsTypeList',
		method: 'get',
	});
}

export default Api;
