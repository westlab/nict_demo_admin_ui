import axios from "axios";

const state = function () {
  return {
    accessToken: null,
    isError: false,
  };
};

const mutations = {
  updateAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  accessTokenReceiveError(state, isError) {
    state.isError = isError;
  },
};

const actions = {
  async getAccessToken({ commit }, data) {
    await axios
      // TODO: デモの時用に変える必要あり
      .post("http://10.24.129.208/v1/auth/tokens", data, {
        timeout: 5000,
        headers: { "Content-Type": "application/json" },
      })
      .then(async (res) => {
        let token = res.headers["x-subject-token"];
        if (token != undefined) {
          sessionStorage.setItem("accessToken", token);
        }
        await commit("updateAccessToken", token);
      })
      .catch((err) => {
        console.log(err);
        commit("accessTokenReceiveError", true);
      });
  },
  fetchAccessToken({ commit }) {
    commit("updateAccessToken", sessionStorage.getItem("accessToken"));
  },
};

export default {
  state,
  mutations,
  actions,
};
