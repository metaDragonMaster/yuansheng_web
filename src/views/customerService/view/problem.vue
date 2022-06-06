<template>
    <div id="customer-service-problem">
        <LogoBanner title="客服中心">
            <div style="cursor: pointer;" @click="callUs">
                <img src="@/assets/iconImages/icon_lianxiwm.png" alt="">
                <p>联系我们</p>
            </div>
        </LogoBanner>
        <EasyBreadCrumb limit :breads="breads"></EasyBreadCrumb>
        <div class="flex limit-max-width">
            <move-sidebar class="sidebar" ref="Sidebar" :openBillDetail="openBillDetail" :menus="menus"></move-sidebar>
            <div class="sub-router-view flex-column-center">
                <div class="card limit-max-width-inset">
                    <div class="title">
                        <p>
                            {{showTitle}}
                        </p>
                    </div>
                    <ul class="content-1">
                        <li v-for="(item,index) in itemData" :key="index">
					<span @click="openDialog(item.id)">
						{{item.questionName}}
					</span>
                        </li>
                    </ul>
                    <div style="display: flex;justify-content: flex-end;margin:40px">
                        <el-pagination
                            background
                            :hide-on-single-page="paginationValue"
                            @current-change="handleCurrentChange"
                            :page-size="20"
                            :page-count="pagecount"
                            layout="prev, pager, next">
                        </el-pagination>
                    </div>
                </div>
                <div class="card limit-max-width-inset">
                    <div class="title">
                        <p>
                            快速引导
                        </p>
                    </div>
                    <ul class="content-2">
                        <li v-for="(item,index) in guideData" :key="index">
                            <ul>
                                <li><span @click="openDialog(item.id)">{{item.questionName}}</span></li>
                            </ul>
                        </li>
                    </ul>
                    <div style="display: flex;justify-content: flex-end;margin:40px">
                        <el-pagination
                            background
                            :hide-on-single-page="paginationguideValue"
                            @current-change="handleCurrentGuideChange"
                            :page-size="20"
                            :page-count="guidecount"
                            layout="prev, pager, next">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>

        <HtmlTextDislog ref="HtmlTextDislog"></HtmlTextDislog>
    </div>
</template>
<script>
import LogoBanner from "@/components/LogoBanner";
import EasySideBar from '@/components/EasySideBar';
import EasyBreadCrumb from '@/components/EasyBreadCrumb';
import HtmlTextDislog from "../modules/HtmlTextDialog.vue"
import apiCustomer from "@/api/customerService.js";
import MoveSidebar from "@/components/EasyMoveSideBar/MoveSidebar";

export default {
    data() {
        return {
            showTitle:'常见问题',
            qqurl:'',
            paginationValue:true,
            paginationguideValue:true,
            pagecount:0,
            guidecount:0,
            menus: [{"title":"一级分类1","index":"0","id":1,"subs":[{"title":"二级分类1","index":"00","id":3}]},{"title":"一级分类2","index":"1","id":2,"subs":[]}],
            itemData:[],
            guideData:[],
            breads: [
                {
                    label: "客服中心",
                    to: "/customerService"
                },
            ],
        }
    },
    components: {
        LogoBanner,
        EasyBreadCrumb,
        HtmlTextDislog,
        EasySideBar,
        MoveSidebar
    },
    created() {
        // console.log("this.$route.params.title",this.$route.params.title)
        this.breads.push({
            "label": this.$route.query.title
        });
        // apiCustomer.questionCategory(this.$route.query.id).then((res) => {
        //     if (res.code === 10200) {
        //         res.data.forEach((item, index) => {
        //
        //             let sub = item['sysQuestionCategoryVOS'] == null ? [] : item['sysQuestionCategoryVOS'];
        //             sub.forEach((subItem, subindex) => {
        //                 sub[subindex] = {
        //                     'title': subItem['name'],
        //                     'index': index + '' + subindex,
        //                     'id': subItem['id']
        //                 }
        //             });
        //             this.menus.push({
        //                 'title': item['name'],
        //                 'index': index + '',
        //                 'id': item['id'],
        //                 'subs': sub
        //             });
        //             console.log(JSON.stringify(this.menus))
        //         });
        //     }
        // });
        //
        // apiCustomer.questionHomeInfo(this.$route.query.id).then((res) => {
        //     if (res.code === 10200) {
        //         this.showTitle = '常见问题';
        //         this.itemData = res.data.questionVos;
        //         this.paginationValue = true;
        //         this.qqurl = res.data.officialServiceMemberVos[0].qqCompanyUrl;
        //     }
        // });
        //
        // apiCustomer.guideQuestionList(this.$route.query.id,{current:1, size:20}).then((res) => {
        //     if(res.code === 10200) {
        //         this.guideData = res.data.records;
        //         this.paginationguideValue = res.data.pages < 2 ? true : false;
        //         this.guidecount = res.data.pages;
        //     }
        // });
        // this.next = true
    },
    mounted() {

    },
    methods: {
        callUs() {
            window.open(`http://wpa.qq.com/msgrd?v=3&uin=${this.qqurl}&site=qq&menu=yes`);
        },
        openDialog(id) {
            apiCustomer.questionDetail(this.$route.query.id,id).then((res) => {
                if (res.code === 10200) {
                    this.$refs['HtmlTextDislog'].open(res.data);
                }
            })
        },
        openBillDetail(id,name) {
            apiCustomer.findQuestionList(this.$route.query.id,id,{current:1,size:20}).then((res) => {
                if (res.code === 10200) {
                    this.showTitle = name;
                    this.itemData = res.data.records;
                    this.paginationValue = res.data.pages < 2 ? true : false;
                    this.pagecount = res.data.pages;
                }
            });
        },
        handleCurrentChange(val) {
            // apiCustomer.questionList(this.$route.query.id,{current:val,size:20}).then((res) => {
            //     if (res.code == 10200) {
            //         this.itemData = res.data.records;
            //     }
            // })
        },
        handleCurrentGuideChange(val) {
            apiCustomer.guideQuestionList(this.$route.query.id,{current:val, size:20}).then((res) => {
                if(res.code === 10200) {
                    this.guideData = res.data.records;
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped="scoped">
#customer-service-problem {
    background-color: #F9F9F9;
    padding-bottom: 1.875rem;

    ::v-deep .logo-banner .drift-right {
        padding-right: 1rem;

        img {
            width: 1.625rem;
            height: 1.625rem;
            margin: 0 auto;
            display: block;
        }

        p {
            font-size: 0.875rem;
        }
    }

    .sub-router-view {
        width: calc(100% - 222px);
    }

    .sidebar {
        width: 220px;
    }

    .card {
        background-color: #FFFFFF;
        min-height: 200px;
        &:not(:last-child) {
            margin-bottom: 1.25rem;
        }

        .title {
            padding: 1rem 0;
            border-bottom: 1px solid #F2F2F2;
            font-size: 1.375rem;

            p {
                border-left: 3px solid #069B87;
                padding-left: 1rem;
            }
        }
    }

    .content-1,
    .content-2 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 1.875rem;
        grid-gap: 1.25rem;
    }

    .content-1,
    .content-2 > li ul {
        li {
            list-style: disc;
            list-style-position: inside;
            color: #666666;

            span {
                cursor: pointer;
            }

            span:hover {
                color: #FF8000;
            }
        }
    }

    // .content-1 {

    // }
    /*
      <ul class="content-2">
        <li v-for="item in 3" :key="item">
          <h4>账号与安全</h4>
          <ul>
            <li>注册账号</li>
            <li>认证合伙企业</li>
            <li>手机号/密码修改</li>
          </ul>
        </li>
      </ul>
    */
    .content-2 > li ul li,
    .content-2 > li h4 {
        margin-bottom: 1.25rem;
    }
}
</style>
