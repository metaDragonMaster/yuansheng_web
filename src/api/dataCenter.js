import request from "@/utils/request";

let Api = {};

//数据中心数据

Api.getCenterDataBase = function() {
	return request({
		url: `/agricultureservice/dataCenter/homeInfo`,
		method: 'get'
	});
}
//区域
Api.selectRegionDataBaseById = function(regionNo) {
	return request({
		url: `/agricultureservice/dataCenter/regionHomeInfo/${regionNo}`,
		method: 'get'
	});
}


export default Api;
