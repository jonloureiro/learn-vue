const route = {
  state: {
    previous: null
  },
  mutations: {
    updatePreviousRoute(state, {previous}) {
      state.previous = previous;
    }
  },
  actions: {
  },
  getters: {
    route: state => state.route
  }
};
