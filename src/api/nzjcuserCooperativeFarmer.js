// 合作社农户信息

import request from '@/utils/request'
let Api = {};

/*
	添加合作社农户信息
	{
		agriculturalIncome	农业收入(元)		false	string
		annualIncome	年总收入(元)		false	string
		dryLandArea	旱地面积(亩)		false	string
		grassLandArea	牧草地面积(亩)		false	string
		hostId	户主id		false	integer(int32)
		house	住房情况（0无 1楼房 2平房 3瓦房 4危房 5其他）		false	integer(int32)
		houseArea	住房面积（平方米）		false	string
		houseBaseArea	宅基地面积（平方米）		false	string
		irrigatedLandArea	灌溉地面积(亩)		false	string
		lakeArea	湖面面积(亩)		false	string
		nurseryArea	苗圃面积(亩)		false	string
		paddyFieldArea	水田面积(亩)		false	string
		poolArea	池塘面积		false	string
		shrubberyArea	灌木林面积（亩）		false	string
		sparseWoodlandArea	疏林地面积（亩）		false	string
		traceWoodlandArea	迹地面积（亩）		false	string
		userName	户主名字		false	string
	}
*/
Api.postCooperativeFarmer = function(data) {
	return request({
		url: '/commonservice/cooperativeFarmer/postCooperativeFarmer',
		method: 'post',
		data : data
	})
}
Api.updateCooperativeFarmer = function(farmerId,data) {
	return request({
		url: `/commonservice/cooperativeFarmer/updateCooperativeFarmer?farmerId=${farmerId}`,
		method: 'put',
		data : data
	})
}


/*
	添加农户成员/户主
	farmerId	农户id	query	true	integer(int32)
	id	合作社成员id	query	true	integer(int32)
	isHost	是否为户主	query	true	boolean
*/
Api.putCooperativeFarmerUser = function(data) {
	return request({
		url: '/commonservice/cooperativeFarmer/putCooperativeFarmerUser',
		method: 'put',
		params : data
	})
}

/*
	移除农户成员/户主
	farmerId	农户id	query	true	integer(int32)
	id	合作社成员id	query	true	integer(int32)

*/
Api.removeCooperativeFarmerUser = function(data) {
	return request({
		url: '/commonservice/cooperativeFarmer/removeCooperativeFarmerUser',
		method: 'put',
		params : data
	})
}

/*
	查看农户信息
	farmerId	农户id	query	true	integer(int32)
*/
Api.selectCooperativeFarmerInfo = function(data) {
	return request({
		url: '/commonservice/cooperativeFarmer/selectCooperativeFarmerInfo',
		method: 'get',
		params : data
	})
}
/*
	查看农户信息列表
	current	当前页码	query	false	
	size	当前页面数据量	query	false	
*/
Api.selectCooperativeFarmerInfoList = function(data) {
	return request({
		url: '/commonservice/cooperativeFarmer/selectCooperativeFarmerInfoList',
		method: 'get',
		params : data
	})
}


export default Api