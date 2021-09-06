import Vue from "vue";
import Vuex from "vuex";

import fiwareToken from "@/store/modules/fiwareToken";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    fiwareToken,
  },
});

export default store;
