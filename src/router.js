import Vue from "vue";
import VueRouter from "vue-router";
import Store from "vuex";

import Home from "./components/Home";
import Network from "./components/Network";
import Anonymization from "./components/Anonymization";
import Reload from "./components/Reload";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/reload", component: Reload },
  { path: "/network", component: Network, meta: { isTokenNeeded: true } },
  {
    path: "/anonymization",
    component: Anonymization,
    meta: { isTokenNeeded: true },
  },
];

const router = new VueRouter({
  base: "/",
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  // Token 有無を確認する処理
  if (to.matched.some((page) => page.meta.isTokenNeeded)) {
    if (!Store.state.fiwareToken.accessToken) {
      next({
        path: "/reload",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
