<template lang="html">
  <div class="">
    <form @submit="login">
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Insira seu email"
        required>
      <input
        id="pass"
        v-model="pass"
        type="password"
        placeholder="Insira sua senha"
        required>
      <input
        type="submit"
        value="entrar">
    </form>
  </div>
</template>

<script>
module.exports = {
  name: 'Login',
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
