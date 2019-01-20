<template lang="html">
  <div class="wrapper">
    <h2>PROFILE</h2>
    <p>usuário: {{ email }}</p>
    <button id="logout" @click="logout">sair</button>
  </div>
</template>

<script>
module.exports = {
  name: 'Profile',
  data: function() {
    return {
    }
  },
  computed: {
    email: function() {
      return this.$store.state.user.email;
    }
  },
  methods: {
    logout: function() {
      this.$auth
      .logout()
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
