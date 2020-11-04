import Vue from 'vue'
import Antd from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css';
//import 'ant-design-vue/dist/antd.less';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/l-ant-design-vue.less' // ant-design-vue
import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store/index'
import router from "./router"
import './router/router.config.js'
import './utils/axiosPlugin.js'


Vue.config.productionTip = false

// Vue.use(ElementUI);

Vue.use(Antd);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')