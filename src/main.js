import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VModal from "vue-js-modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight,
  faExclamationCircle,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Bootstrap
Vue.use(BootstrapVue);
Vue.config.productionTip = false;


// Font awesome
library.add(faUsersCog);
library.add(faAngleDoubleRight);
library.add(faExclamationCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// VModal
Vue.use(VModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
