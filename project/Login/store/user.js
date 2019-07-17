export const state = () => ({
  token: ""
});

export const mutations = {
  init(state, token) {
    console.log('token init');
    
    state.token = token;
  }
};

export const actions = {
  login({commit}, payload) {
    return this.$login(payload)
      .then(res => {
        commit('init', '123456')
        return res
      })
  }
}