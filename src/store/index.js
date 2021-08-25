import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import fiwareToken from "@/store/modules/fiwareToken";
import http from "@/store/modules/http";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fiwareToken,
    http,
  },
  plugins: [
    createPersistedState({
      key: "example",
      storage: window.sessionStorage,
    }),
  ],
});
