<template lang="html">
  <div class="">
    <form @submit="register">
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
        id="pass2"
        v-model="pass2"
        type="password"
        placeholder="Confirme sua senha"
        required>
      <input
        type="submit"
        value="cadastrar">
    </form>
  </div>
</template>

<script>
module.exports = {
  name: 'Register',
  data: function() {
    return {
      email: '',
      pass: '',
      pass2: ''
    }
  },
  methods: {
    register: function(e) {
        e.preventDefault();

        if (this.pass != this.pass2) {
            console.log('Senhas precisam ser iguais.');
            return;
        }

        this.$auth
        .create(this.email, this.pass)
        .then(function (user) {
            console.log('Cadastro feito com sucesso');
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
