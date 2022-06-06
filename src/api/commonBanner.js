import request from '@/utils/request'
let Api = {};

Api.getHomeBanner = function() {
	return request({
		url: '/commonservice/banner/homeBanner',
		method: 'get',
	});
}

export default Api;
