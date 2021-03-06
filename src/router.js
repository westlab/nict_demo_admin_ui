import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Flow from "./components/Flow";
import Relationship from "./components/Relationship";
import Reload from "./components/Reload";
import RetrieveSuccess from "./components/RetrieveSuccess";
import RetrieveError from "./components/RetrieveError";
import NotFound from "./components/404";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/reload", component: Reload },
  { path: "/flow", component: Flow },
  {
    path: "/relationship",
    component: Relationship,
    meta: { isTokenNeeded: false },
  },
  { path: "/success", component: RetrieveSuccess },
  { path: "/error", component: RetrieveError },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  base: "/",
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  // Token 有無を確認する処理
  if (to.matched.some((page) => page.meta.isTokenNeeded)) {
    let token = sessionStorage.getItem("accessToken");
    if (!token) {
      next({
        path: "/reload",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
