import axios from "axios";

const state = function () {
  return {
    fiwareToken: null,
    isError: false,
  };
};

const mutations = {
  updateAccessToken(state, fiwareToken) {
    state.fiwareToken = fiwareToken;
  },
  accessTokenReceiveError(state, isError) {
    state.isError = isError;
  },
};

const actions = {
  getAccessToken({ commit }, data) {
    axios
      .post("http://localhost/v1/auth/tokens", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        let token = res.headers["X-Subject-Token"];
        sessionStorage.setItem("fiwareToken", token);
        commit("updateAccessToken", token);
      })
      .catch((err) => {
        console.log(err);
        commit("accessTokenReceiveError", true);
      });
  },
  fetchAccessToken({ commit }) {
    commit("updateAccessToken", sessionStorage.getItem("fiwareToken"));
  },
};

export default {
  state,
  mutations,
  actions,
};
