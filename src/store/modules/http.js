import axios from "axios";

export default {
  namespaced: true,
  actions: {
    async request({ dispatch, rootState }, { method, url, data, error }) {
      const headers = {};
      headers["Content-Type"] = "application/json";
      if (rootState.fiwareToken.accessToken) {
        headers[
          "Authorization"
        ] = `Bearer ${rootState.fiwareToken.accessToken}`;
      }

      // TODO: baseurlを決める
      const options = {
        method,
        url: `${"base_url"} ${url}`,
        headers,
        data,
        timeout: 10,
      };

      return axios(options)
        .then((res) => res)
        .catch((err) => {
          dispatch("message/create", { error: error, err }, { root: true });
        });
    },
    async post({ dispatch }, requests) {
      requests.method = "post";
      return dispatch("request", requests);
    },
    async delete({ dispatch }, requests) {
      requests.method = "delete";
      return dispatch("request", requests);
    },
  },
};
