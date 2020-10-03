import Vue from "vue"
import App from "./App"
import router from "./router"
import axios from 'axios';
import echarts from 'echarts'
import "./styles/index.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';   // 默认主题
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//开启js热更新
if (module.hot) {
  module.hot.accept();
}
