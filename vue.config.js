const path = require('path')

function resolveRealPath(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: '',
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		// proxy: process.env.VUE_APP_DEV_REQUEST_DOMAIN_PREFIX,
		port: 8975,
	},
	css: {
		loaderOptions: {
			//   // 给 sass-loader 传递选项
			//   sass: {
			//     // @/ 是 src/ 的别名
			//     // 所以这里假设你有 `src/variables.scss` 这个文件
			//     data: `@import "@/assets/sass/_variables.sass", "@/assets/sass/_mixins.sass", "@/assets/sass/_extends.sass"`
			//   }
			sass: {
				prependData: `@import "@/styles/variables.scss";`,
			}
		}
	},

	chainWebpack: config => {
		config.module
		  .rule('svg')
		  .exclude.add(resolveRealPath('src/icons'))
		  .end()
		config.module
		  .rule('icons')
		  .test(/\.svg$/)
		  .include.add(resolveRealPath('src/icons'))
		  .end()
		  .use('svg-sprite-loader')
		  .loader('svg-sprite-loader')
		  .options({
		    symbolId: 'icon-[name]'
		  })
		  .end()
		// config.resolve.alias
		// .set('vue$', 'vue/dist/vue.esm.js')
		// .set('@', resolveRealPath('src'))
		// .set('@utils', resolveRealPath('src/utils'))
		// .set('@views', resolveRealPath('src/views'))
		// .set('@assets', resolveRealPath('src/assets'))
		// .set('@styles', resolveRealPath('src/assets/sass'))
		// .set('@img', resolveRealPath('src/assets/images'))
		// .set('@components', resolveRealPath('src/components'))
		// svg loader
		// const svgRule = config.module.rule('svg') // 找到svg-loader
		// svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
		// svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
		// svgRule // 添加svg新的loader处理
		//   .test(/\.svg$/)
		//   .use('svg-sprite-loader')
		//   .loader('svg-sprite-loader')
		//   .options({
		//     symbolId: 'icon-[name]'
		//   })

		// 修改images loader 添加svg处理
		// const imagesRule = config.module.rule('images')
		// imagesRule.exclude.add(resolveRealPath('src/icons'))
		// config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
	},
	// configureWebpack: config => {
	//   config.plugins.push(new PurifyCSSPlugin({
	//     paths: glob.sync([
	//       path.join(__dirname, './src/index.html'),
	//       path.join(__dirname, './**/*.vue'),
	//       path.join(__dirname, './src/**/*.js')
	//     ])
	//   }))
	// }
}
