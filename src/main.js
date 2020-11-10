import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import './assets/iconfonts/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
Vue.prototype.$http = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
