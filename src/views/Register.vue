<template lang="html">
  <Card title="Registrar">
    <form class="Card__form" @submit="register">
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
      <input
        class="Card__input"
        v-model="pass2"
        type="password"
        placeholder="Confirme sua senha"
        required
      >
      <div class="Card__wrapper">
        <input
          class="Card__button"
          type="submit"
          value="cadastrar"
        >
      </div>
    </form>
  </Card>
</template>

<script>
module.exports = {
  name: 'Register',
  components: {
    'Card': httpVueLoader('src/components/Card.vue')
  },
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
