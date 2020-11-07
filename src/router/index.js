import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: { title: "首页", showTab: true, showInstall: true },
    component: () => import("@/views/index.vue")
  },
  {
    path: "/enlightening",
    name: "enlightening",
    meta: { title: "收徒赚钱", showTab: true, showInstall: true },
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
    meta: { title: "我的", showTab: true, showInstall: true },
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
    meta: { title: "支付宝提现", showTab: false },
    component: () => import("@/views/withdrawal/withdrawal.vue")
  },
  {
    path: "/withdrawalSuccess",
    name: "withdrawalSuccess",
    mate: { title : "提现成功", showTab: false},
    component: () => import("@/views/withdrawal/withdrawalSuccess.vue")
  },
  // tag: 绑定手机及微信页面路由
  {
    path: "/bindPhone",
    name: "bindPhone",
    meta: { title: "绑定手机", showTab: false },
    component: () => import("@/views/bind/bindPhone.vue")
  },
  {
    path: "/bindWeChat",
    name: "bindWeChat",
    meta: { title: "微信授权", showTab: false },
    component: () => import("@/views/bind/bindWeChat.vue")
  },
  // tag: 分享回流、安装证书等页面路由
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
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if (token !== 'null' && token !== null) {
//     if (to.path === '/') {
      
//     } else {
//       next()
//     }
//   }
//   else {
//     next({
//       path: '/login',
//     })
//   }
// })

export default router;
