const user = {
  state: {
    on: false,
    email: ''
  },
  mutations: {
    updateUser(state, {user}) {
      if (user != null) {
        state.on = true;
        state.email = user.email;
      } else {
        state.on = false;
        state.email = '';
      }
    }
  },
  actions: {
  },
  getters: {
    user: state => state.user
  }
};
