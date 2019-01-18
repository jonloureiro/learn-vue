Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    router,
    store,
    components: {
      'Foo':   httpVueLoader('src/components/layout/Foo.vue'),
      'Bar':   httpVueLoader('src/components/layout/Bar.vue')
    },
    data: {
        user: null,
        email: '',
        form_login: {
            email: '',
            senha: '',
            conf_senha: '',
        },
        hasAuth: false
    },
    computed: {
        hasUser: function() {
            return (this.user != null);
        }
    },
    methods: {
        login: function(e) {
            e.preventDefault();

            var email = this.form_login.email;
            var password = this.form_login.senha;

            this.$auth
            .login(email, password)
            .then(function (user) {
                console.log('Login feito com sucesso');
                console.log(user);
            })
            .catch(function(error) {
                console.log(error.code);
                console.log(error.message);
            });
        },
        cadastrar: function(e) {
            e.preventDefault();

            var email = this.form_login.email;
            var password = this.form_login.senha;

            if (password != this.form_login.conf_senha) {
                console.log('Senhas precisam ser iguais.');
                return;
            }

            this.$auth
            .create(email, password)
            .then(function (user) {
                // this.$router.replace('/');
                // console.log('Cadastro feito com sucesso');
                // console.log(user);
            })
            .catch(function(error) {
              this.$router,replace('/');
                console.log(error.code);
                console.log(error.message);
            });
        },
        logout: function() {
            this.$auth
            .logout()
            .catch(function(error) {
              console.log(error.code);
              console.log(error.message);
            });
        }
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
          this.hasAuth = true;
          this.user = user;
          if (user == null) {
              this.email = '';
              if (this.$route.meta.requiresAuth)
                this.$router.replace('/login');
          } else {
              this.email = user.email;
              if (this.$route.meta.requiresNonAuth)
                this.$router.replace('/')
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
          const currentUser = fb.auth().currentUser;
          const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
          const requiresNonAuth = to.matched.some(record => record.meta.requiresNonAuth);
          if (requiresAuth && !currentUser) next('login');
          else if (requiresNonAuth && currentUser) next('/');
          else next();
        });
    }
});
