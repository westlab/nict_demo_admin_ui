import axios from "axios";

const state = function() {
    return { 
        accessToken: null,
        isError: false,
    }
}

const mutations = {
    updateAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    accessTokenReceiveError(state, isError) {
      state.isError = isError;
    }
}

const actions = {
    getAccessToken({ commit }, data) {
        axios.post("http://10.24.129.208/v1/auth/tokens", data,
        { headers: { "Content-Type": "application/json"
        }
      })
        .then((res) => {
          let token = res.headers['x-subject-token'];
          console.log(token);
          sessionStorage.setItem("accessToken", token);
          commit("updateAccessToken", token);
        })
        .catch((err) => {
          console.log(err);
          commit("accessTokenReceiveError", true);
        });
    },
    fetchAccessToken({ commit }) {
      commit("updateAccessToken", sessionStorage.getItem("accessToken"));
    }
    
}

export default {
    state,
    mutations,
    actions,
};
