<template>
    <div id="customer-service">
        <LogoBanner title="客服中心"></LogoBanner>
        <div class="customer-service-content limit-max-width">
            <img class="title drift-right" :src="imgSrc">
            <div class="sub-title drift-right flex-center-js-sard">
<!--                <div></div>-->
                <span>
					{{title}}
				</span>
            </div>
            <ul>
                <li v-for="(item,index) in list" :key="index" :style="{'background-color':item.color}"
                    @click="$routerUtil.toPath('customerServiceProblem',{'title':item.serviceName,'id':item.id})">
                    <img :src="item.icon" alt="">
                    <span>{{ item.serviceName }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import LogoBanner from "@/components/LogoBanner/index.vue";
import apiCustomer from "@/api/customerService.js";
export default {
    data() {
        return {
            imgSrc:'',
            title:'',
            list: [
                {
                    icon: require("@/assets/iconImages/icon_caigs.png"),
                    color: "#22A3E6",
                },
                {
                    icon: require("@/assets/iconImages/icon_nongzs.png"),
                    color: "#2CD6A2",
                },
                {
                    icon: require("@/assets/iconImages/icon_hezuoqy.png"),
                    color: "#67C23A",
                },
                {
                    icon: require("@/assets/iconImages/icon_jiagongqy.png"),
                    color: "#E6A23C",
                },
            ]
        }
    },
    components: {
        LogoBanner,
    },
    created() {
        let res = {
            "code": 10200,
            "msg": "操作成功",
            "data": {
                "customerServiceVos": [
                    {
                        "id": 1,
                        "serviceName": "采购商客服中心"
                    },
                    {
                        "id": 2,
                        "serviceName": "农资企业客服中心"
                    },
                    {
                        "id": 3,
                        "serviceName": "合伙企业客服中心"
                    },
                    {
                        "id": 4,
                        "serviceName": "加工企业客服中心"
                    }
                ]
            }
        };

        this.title = '用心极智---只为更好的服务';
        this.imgSrc = require('@/assets/images/customerService/title.png'); // todo 暂时性放着
        let customerVos = res.data.customerServiceVos;
        for (let i = 0; i < this.list.length; i++){
            this.list[i]['id'] = customerVos[i].id;
            this.list[i]['serviceName'] = customerVos[i].serviceName;
        }


        // todo 暂时隐藏
        // apiCustomer.serviceHomeInfo().then((res) => {
        //     if (res.code == 10200) {
        //         //console.log(res.data)
        //         this.title = res.data.customerServiceHomeInfoVo.introduction;
        //         // this.imgSrc = res.data.customerServiceHomeInfoVo.backdropImage;
        //         this.imgSrc = require('@/assets/images/customerService/title.png'); // todo 暂时性放着
        //         let customerVos = res.data.customerServiceVos;
        //         for (let i = 0; i < this.list.length; i++){
        //             this.list[i]['id'] = customerVos[i].id;
        //             this.list[i]['serviceName'] = customerVos[i].serviceName;
        //         }
        //     }
        // }).catch((err) => {
        //     console.log('错误：%s',err);
        // });
    },
    computed: {},
    mounted() {

    },
    methods: {}
}
</script>
<style lang="scss" scoped="scoped">
.customer-service-content {
    background-image: url(../../assets/images/customerService/bg-index.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 38.75rem;
    // margin-bottom: 7.875rem;
    color: #FFFFFF;

    .title {
        width: 31.25rem;
        padding-top: 7.75rem;
    }

    .sub-title {
        font-size: 2.5rem;

        div {
            width: 3.125rem;
            height: 0.0625rem;
            background-color: #FFF;
            margin-right: 1rem;
        }
    }

    ul {
        margin-top: 7.875rem;
        padding: 0 8rem;
        display: flex;
        justify-content: space-between;

        li {
            cursor: pointer;
            display: flex;
            justify-content: center;
            padding: 1rem;
            border-radius: 4px;
            width: 100%;

            &:not(:last-child) {
                margin-right: 1.25rem;
            }

            img {
                width: fit-content;
                margin-right: 0.25rem;
            }
        }
    }
}
</style>
