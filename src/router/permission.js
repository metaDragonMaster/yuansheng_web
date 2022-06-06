import router from './index.js'
import routerUtil from "./util.js"
import {
	getToken
} from "../utils/auth.js";
import {
	Message
} from 'element-ui'
router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title ? to.meta.title : "原生联"
	// console.log('router--to.meta.title',to.meta.title)
	// console.log('router--to.meta.needLogin',to.needLogin)
	// console.log('router--getToken',getToken())
	if(to.meta.needLogin&&!getToken()) {
		Message.warning('请登录')
		routerUtil.toPath('/userSign/login');
		return;
	}
	next()
})
