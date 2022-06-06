  |  模块   | 文件夹 / 文件 |
  |  ----  | ----  |
  | 静态资源 | assets |
  | 封装的组件 | components |
  | 网站总体布局 | layout |
  | 路由对象 | router |
  | vuex的对象 | store |
  | 样式 | styles |
  | js工具 | utils |
  | 项目页面  | views |
  | vue总页面  | App.vue |
  | 全局引入的js  | global.js |
  | vue对象 | main.js |

```

	项目规范
	组件 components 中的组件使用大驼峰命名
	class id 命名使用 sss-ccc-sss 这样的横线命名，不可混合使用各种命名方式，如：homePage-model，Hei-hallow
	assets静态资源
		iconImages 图标图片
			可以放在同一层级下
		images 静态图片资源
			根据文件夹层级存放图片
	页面 views 中
		文件夹命名使用小驼峰
		页面 index.vue 根dom 使用id
		页面使用文件名 > index.vue
		当前有子页面时，在文件夹下添加views，将子页面加入views中
		一个模块，如user下有注册和登录，就直接在user文件夹下加入login和register文件夹
		如果是只用在当前页面index.vue中的组件，在当前文件夹中创建modules文件夹放入
		
```
