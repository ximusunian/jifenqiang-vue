import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Field, CellGroup, Cell, Button, Dialog } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(Dialog);

import "amfe-flexible/index.js";

// import Vant from 'vant'
import "vant/lib/index.css";
// Vue.use(Vant)
// import Vue from 'vue';

import http from "../src/request/http";
import api from "../src/request/api";
import md5 from "js-md5";
Vue.prototype.$md5 = md5;

router.beforeEach((to, from, next) => {
  //动态设置网页标题
  document.title = to.meta.title;
  next();
});

// use
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
