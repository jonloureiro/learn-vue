var app = new Vue({
    el: '#app',
    components,
    router,
    data: {
        user: null,
        email: '',
        form_login: {
            email: '',
            senha: '',
            conf_senha: '',
        },
        fb: null
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

            this.fb.auth()
            .signInWithEmailAndPassword(email, password)
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

            this.fb.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                console.log(error.code);
                console.log(error.message);
            });
        },
        logout: function() {
            this.fb.auth()
            .signOut()
            .catch(function(error) {
              console.log(error.code);
              console.log(error.message);
            });
        },
        authUser: function(user) {
            this.user = user;
            if (user == null) {
                this.email = '';
            } else {
                this.email = user.email;
            }
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
        }
        this.fb = firebase.initializeApp(config);
        this.fb.auth().onAuthStateChanged(this.authUser);
    }
});
