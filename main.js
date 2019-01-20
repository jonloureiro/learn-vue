Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    router: new VueRouter({routes}),
    store: new Vuex.Store({modules}),
    components: {
      'Foo':   httpVueLoader('src/components/layout/Foo.vue'),
      'Bar':   httpVueLoader('src/components/layout/Bar.vue')
    },
    created: function() {
      const config = {
        apiKey: "AIzaSyA5Z7hfhGNoTBADcusyhhzPvu5Kgnin_nc",
        authDomain: "admin-e-users.firebaseapp.com",
        databaseURL: "https://admin-e-users.firebaseio.com",
        projectId: "admin-e-users",
        storageBucket: "",
        messagingSenderId: "451591112883"
      };

      const fb = firebase.initializeApp(config);

      fb.auth().onAuthStateChanged((user) => {
        this.$store.commit('updateUser', {user});

        if (user == null) {
          if (this.$route.meta.requiresAuth) this.$router.replace('/login');
        } else {
          if (this.$route.meta.requiresNonAuth) {
            const previous = this.$store.state.route.previous;
            if (previous != null) {
              this.$router.replace(previous.fullPath)
            } else this.$router.replace('/');
          }
        }
      });

      Vue.prototype.$auth = {
        login: async (email, pass) => {
          return await fb.auth().signInWithEmailAndPassword(email, pass);
        },
        create: async (email, pass) => {
          return await fb.auth().createUserWithEmailAndPassword(email, pass);
        },
        logout: async () => {
            return await fb.auth().signOut();
        }
      };

      this.$router.beforeEach((to, from, next) => {
        if (from.name != 'register' && from.name != 'login') {
          const previous = from
          this.$store.commit('updatePreviousRoute', {previous});
        }

        const currentUser = fb.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const requiresNonAuth = to.matched.some(record => record.meta.requiresNonAuth);

        if (requiresAuth && !currentUser) next('login');
        else if (requiresNonAuth && currentUser) next(from.fullPath);
        else next();
      });
    }
});
