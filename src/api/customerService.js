import request from '@/utils/request'
let Api = {};


// Api.onlineServiceInfo = function (data) {
//     return request({
//         url: '/commonservice/customerService/onlineServiceInfo/'+data,
//         method: 'get'
//     });
// }

/**
 *展示快捷引导问题
 * */
Api.guideQuestionList = function (serviceId,data) {
    return request({
        url: '/commonservice/customerService/guideQuestionList/'+serviceId,
        method: 'get',
        params:data
    });
}

/**
 * 展示问题类目
 * */
Api.questionCategory = function (data) {
    return request({
        url: '/commonservice/customerService/questionCategory/'+data,
        method: 'get'
    });
}

/**
 *查看问题详情，并更新点击量

 * */
Api.questionDetail = function (questionId,serviceId) {
    return request({
        url: `/commonservice/customerService/questionDetail/${questionId}/${serviceId}`,
        method: 'get',
        params : ''
    });
}

/**
 *展示问题home信息
 * */
Api.questionHomeInfo = function (id) {
    return request({
        url: `/commonservice/customerService/questionHomeInfo/${id}`,
        method: 'get',
        params : ''
    });
}

/**
 *展示客服服务home信息
 * */
Api.serviceHomeInfo = function () {
    return request({
        url: '/commonservice/customerService/serviceHomeInfo',
        method: 'get',
        params : ''
    });
}

/**
 * 查询问题列表
 * */
Api.findQuestionList = function (serviceId,categoryId,data) {
    return request({
        url: `/commonservice/customerService/findQuestionList/${serviceId}/${categoryId}`,
        method: 'get',
        params : data
    });
}

export default Api;