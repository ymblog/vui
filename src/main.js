import Vue from 'vue'
import App from './App.vue'
import uutaka from './components/index'
import './assets/css/resets.css'
import MarkdownRun from 'vue-markdown-run';
import DemoBlock from "./views/demo-block.vue"
Vue.component("demo-block", DemoBlock)

import router from './router'
import store from './store'
Vue.use(uutaka)

Vue.use(MarkdownRun);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
