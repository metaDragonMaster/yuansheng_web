import Vue from 'vue'
import '@/router/permission.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss';
Vue.use(Element, {
  size: 'medium' // set element-ui default size
});
import routerUtil from "@/router/util.js";
Vue.prototype.$routerUtil = routerUtil;

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import "./icons/index.js"