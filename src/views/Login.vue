<template lang="html">
  <Card title="Login">
    <form class="Card__form" @submit="login">
      <input
        class="Card__input"
        v-model="email"
        type="email"
        placeholder="Insira seu email"
        required
      >
      <input
        class="Card__input"
        v-model="pass"
        type="password"
        placeholder="Insira sua senha"
        required
      >
      <div class="Card__wrapper">
        <router-link
          class="Card__link"
          to="/register"
        >
          Registrar-se!
        </router-link>
        <input
          class="Card__button"
          type="submit"
          value="Entrar"
        >
      </div>
    </form>
  </Card>
</template>

<script>
module.exports = {
  name: 'Login',
  components: {
    'Card': httpVueLoader('src/components/Card.vue')
  },
  data: function() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    login: function(e) {
        e.preventDefault();

        this.$auth
        .login(this.email, this.pass)
        .then(function (user) {
            console.log('Login feito com sucesso');
            console.log(user);
        })
        .catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
