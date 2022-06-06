<template>
    <div class="easy-sidebar">
        <el-menu :default-active="$route.path" :unique-opened="true" text-color="#333333" active-text-color="#0DA056">
            <template v-for="item in menus">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">
                                    <span>{{ subItem.title }}</span>
                                </template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index" @click="openBillDetail(subItem.id,subItem.title)">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <p slot="title" class="flex-center-js-sb">
                            {{ item.title }}
                            <i class="side-bar-icon el-icon-arrow-down"></i>
                        </p>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    // data() {
    // 	return {
    // 		items: [
    // 			{
    // 				// icon:'',
    // 				index: '/gameManage/index',
    // 				title: '游戏管理',
    // 				subs:[
    // 					{
    // 						icon:'',
    // 						index: '/gameManage/index',
    // 						title: '游戏管理',
    // 					}
    // 				]
    // 			},
    // 		],
    // 	};
    // },
    props: {
        menus: {
            type: Array,
            default: () => [],
        },
        openBillDetail: {
            type:Function,
            default:null
        }
    },
    methods: {

    }
};
</script>
<style type="text/css" lang="scss" scoped>
.easy-sidebar {
    // .el-submenu ,
    .el-menu-item {
        border-left: 0.3125rem solid transparent;
    }

    .el-menu-item:hover {
        background-color: #F7FFFB;
    }

    .el-menu-item.is-active {
        background-color: #F7FFFB;
        border-color: #069B87;
    }

    // .el-submenu:hover,
    // .el-submenu:hover .el-submenu__title {
    // 	background-color: #ffb217;
    // }
    .side-bar-icon {
        transition: transform .3s;
        font-size: .75rem;
        color: #909399;
    }

    .is-active .side-bar-icon {
        transform: rotateZ(-90deg);
    }

}
</style>
<style lang="scss">
.easy-sidebar {
    .el-submenu .el-submenu__title span {
        padding-left: 5px;
    }
}
</style>