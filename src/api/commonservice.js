import request from "@/utils/request";

let Api = {};

/**
 * 获取大事记列表
 * */
Api.getEventList = function () {
    return request({
        url: '/commonservice/event/list',
        method: 'get',
    });
}

export default Api;
