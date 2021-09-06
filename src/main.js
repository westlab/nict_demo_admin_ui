import Vue from "vue";

import VModal from "vue-js-modal";
import BootstrapVue from "bootstrap-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight,
  faExclamationCircle,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

import router from "./router";
import store from "./store";

// Bootstrap
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// VModal
Vue.use(VModal);

// Font awesome
const icons = [faUsersCog, faAngleDoubleRight, faExclamationCircle];
library.add(icons);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
