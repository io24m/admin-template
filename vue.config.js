module.exports = {
    runtimeCompiler: true,
    css: {
      loaderOptions: {
        less: {
          // modifyVars: {
          //   'primary-color': '#1DA57A',// 全局主色
          //   'link-color': '#1DA57A',// 链接色
          //   'border-radius-base': '15px',// 组件/浮层圆角
          // },
          javascriptEnabled: true,
        }
      }
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }