import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import fiwareToken from "@/store/modules/fiwareToken";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    fiwareToken,
  },
  plugins: [
    createPersistedState({
      key: "fiwareToken",
      paths: ["fiwareToken.fiwareToken"],
      storage: window.sessionStorage,
    }),
  ],
});

export default store;
