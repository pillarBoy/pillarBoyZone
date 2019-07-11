export const state = () => ({
  token: ""
});

export const mutations = {
  init(state, token) {
    state.token = token;
  }
};

export const actions = {
  login({commit}, payload) {
    return this.$login(payload)
      .then(res => {
        console.log(res);
        commit('init', '123456')
        return res
      })
  }
}