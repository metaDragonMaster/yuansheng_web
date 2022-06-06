import request from "@/utils/request";

let Api = {};

/**
 *增加地址
 * */
Api.addAddress = function (data) {
    return request({
        url: '/commonservice/userCenter/address/addAddress',
        method: 'post',
        data:data
    });
}

/**
 *删除地址
 * */
Api.deleteAddress = function (addressId) {
    return request({
        url: '/commonservice/userCenter/address/deleteAddress/'+addressId,
        method: 'delete'
    });
}

/**
 *展示地址列表
 * */
Api.showAddressList = function () {
    return request({
        url: '/commonservice/userCenter/address/showAddressList',
        method: 'get'
    });
}

/**
 *修改地址
 * */
Api.updateAddress = function (addressId,data) {
    return request({
        url: '/commonservice/userCenter/address/updateAddress/'+addressId,
        method: 'put',
        data:data
    });
}

/**
 *查询父级行政单位
 * */
Api.selectRegionListById = function (regionNo) {
    return request({
        url: '/commonservice/userCenter/selectRegionListById/'+regionNo,
        method: 'post'
    });
}

/**
 *查询城市
 * */
Api.selectRegionListByType = function (type,regionNo,parentId) {
    return request({
        url: `/commonservice/userCenter/selectRegionListByType/${type}/${regionNo}/${parentId}`,
        method: 'post'
    });
}

export default Api;

