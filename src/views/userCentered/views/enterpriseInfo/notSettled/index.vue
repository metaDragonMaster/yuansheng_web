<template>
    <div id="not-settled">
        <div class="flex-column-center-js-sb">
            <p class="not-settled-title">您还没有认证平台身份，请及时认证！</p>
            <p class="not-settled-msg">通过身份认证，可享受更多平台服务，拥有原生认证等级，提高信誉度。</p>
            <div class="not-settled-btngroup flex-column-js-sard">
                <button @click="$routerUtil.toName('settledCooperative')">我是合伙企业</button>
                <button @click="$routerUtil.toName('settledAgriculturalSuperEnterprise')">我是采购商</button>
                <button @click="$routerUtil.toName('settledAgriculturalEnterprise')">我是农资企业</button>
                <button @click="$routerUtil.toName('settledProcessingEnterprise')">我是加工企业</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        // intoCompanySet(kind) {
        //     // todo kind -- 1.我是合伙企业 2.我是采购商 3.我是农资商 4.我是加工企业
        //     switch (kind) {
        //         case 1:
        //             console.log("我是合伙企业");
        //             break;
        //         case 2:
        //             console.log("我是采购商");
        //             break;
        //         case 3:
        //             console.log("我是农资企业");
        //             break;
        //         case 4:
        //             console.log("我是加工企业");
        //             break;
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped="scoped">
#not-settled {
    margin-top: 73px;
    .not-settled-title {
        color: #333333;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
    }
    .not-settled-msg {
        color: #666666;
        font-size: 16px;
        margin-top: 20px;
    }
    .not-settled-btngroup {
        width: 430px;
        height: 110px;
        margin-top: 40px;
        flex-wrap: wrap;
        button {
            width: 200px;
            height: 40px;
            background: #069B87;
            color: #FFFFFF;
            font-size: 16px;
            border-radius: 2px;
        }
        button:active {
            background: #08917e;
        }
    }
}
</style>
