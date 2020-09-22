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
    path: "/mine",
    name: "mine",
    meta: { title: "我的", showTab: true },
    component: () => import("@/views/mine/mine.vue")
  },
  {
    path: "/task",
    name: "task",
    meta: { title: "任务详情", showTab: false },
    component: () => import("@/views/task/index.vue")
  }
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
