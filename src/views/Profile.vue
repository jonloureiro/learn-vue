<template lang="html">
  <Card title="Profile">
    <p class="Card__text">usuário: <i>{{ email }}</i></p>
    <p class="Card__text">admin: <i>não</i></p>
    <div class="Card__content">
      <button class="Card__button" @click="logout">sair</button>
    </div>
  </Card>
</template>

<script>
module.exports = {
  name: 'Profile',
  components: {
    'Card': httpVueLoader('src/components/Card.vue')
  },
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
