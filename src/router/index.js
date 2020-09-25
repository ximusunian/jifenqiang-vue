import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: { title: "首页", showTab: true },
    component: () => import("@/views/index.vue")
  },
  {
    path: "/enlightening",
    name: "enlightening",
    meta: { title: "收徒赚钱", showTab: true },
    component: () => import("@/views/enlightening.vue")
  },
  {
    path: "/task",
    name: "task",
    meta: { title: "任务详情", showTab: false },
    component: () => import("@/views/task/index.vue")
  },
  {
    path: "/mine",
    name: "mine",
    meta: { title: "我的", showTab: true },
    component: () => import("@/views/mine/mine.vue")
  },
  {
    path: "/mine/userInfo",
    name: "userInfo",
    meta: { title: "账户信息", showTab: false },
    component: () => import("@/views/mine/userInfo.vue")
  },
  {
    path: "/mine/accountDetails",
    name: "accountDetails",
    meta: { title: "收益明细", showTab: false },
    component: () => import("@/views/mine/accountDetails.vue")
  },
  {
    path: "/mine/helpCenter",
    name: "helpCenter",
    meta: { title: "帮助中心", showTab: false },
    component: () => import("@/views/mine/helpCenter.vue")
  },
  {
    path: "/withdrawal",
    name: "withdrawal",
    meta: { title: "微信提现", showTab: false },
    component: () => import("@/views/withdrawal/withdrawal.vue")
  },
  {
    path: "/shareDownload",
    name: "shareDownload",
    meta: { title: "试玩应用-轻松赚钱", showTab: false },
    component: () => import("@/views/validationModel/shareDownload.vue")
  },
  {
    path: "/installSuccess",
    name: "installSuccess",
    meta: { title: "验证成功", showTab: false },
    component: () => import("@/views/validationModel/installSuccess.vue")
  },
  {
    path: "/certificationBackPage",
    name: "certificationBackPage",
    meta: { title: "首页-描述文件", showTab: false },
    component: () => import("@/views/validationModel/certificationBackPage.vue")
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
