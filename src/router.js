import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Network from "./components/Network";
import Anonymization from "./components/Anonymization";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/network", component: Network },
  { path: "/anonymization", component: Anonymization },
];

const router = new VueRouter({
  base: "/",
  routes,
  mode: "history",
});

export default router;
