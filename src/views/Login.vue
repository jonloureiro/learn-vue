<template lang="html">
  <h2>{{ message}}</h2>
  <!-- <div class="" v-show="!hasUser">
    <form @submit="login">
      <input
        id="email"
        v-model="form_login.email"
        type="email"
        placeholder="email"
        required
      >
      <input
        id="senha"
        v-model="form_login.senha"
        type="password"
        placeholder="senha"
        required
      >
      <input
        type="submit"
        value="entrar"
      >
    </form>
  </div> -->
</template>

<script>
module.exports = {
  name: 'Login',
  data: function() {
    return {
      message: 'LOGIN',
    }
  }
}
</script>

<style lang="css" scoped>
</style>
