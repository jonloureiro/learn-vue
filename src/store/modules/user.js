const user = {
  state: {
    on: false
  },
  mutations: {
    updateUser(state, {user}) {
      state.on = (user != null);
    }
  },
  actions: {
  },
  getters: {
    user: state => state.user
  }
};
