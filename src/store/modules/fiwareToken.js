export default {
  state: {
    accessToken: null,
  },
  mutations: {
    create(state, data) {
      state.accessToken = data.accessToken;
    },
    destroy(state) {
      state.accessToken = null;
    },
  },
  actions: {
    create({ commit, dispatch }, data) {
      dispatch(
        "http/post",
        { url: "/api/v1", data, error: "message.unauthorized" },
        { root: true }
      )
        .then((res) => commit("create", res.data))
        .catch((err) => err);
    },
    destroy({ commit, dispatch }, data) {
      dispatch("http/delete", { url: "atodekimeru", data }, { root: true })
        .then((res) => commit("create", res.data))
        .catch((err) => err);
    },
  },
};
