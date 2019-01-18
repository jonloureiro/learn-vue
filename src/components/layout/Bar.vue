<template lang="html">
  <header :class="$options.name">
      <router-link :class="`${$options.name}__link`" to="/">
        <h2 :class="`${$options.name}__title`">{{ title }}</h2>
      </router-link>
      <router-link :class="`${$options.name}__link`" to="/cart">Carrinho ({{ cart }})</router-link>
      <router-link :class="`${$options.name}__link`" to="/login">Login</router-link>
  </header>
</template>

<script>
module.exports = {
  name: 'Bar',
  data: function() {
    return {
      title: 'Mini E-Commerce',
      cart: 0
    }
  }
}
</script>

<style lang="css" scoped>
.Bar {
  display: grid;
  grid-template-columns: minmax(50%, 100%) repeat(2, 6rem);
  align-items: center;
  justify-items: center;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  background: linear-gradient(to left, #556270, #d18181);
  overflow: hidden;
}

.Bar__title {
  margin: 0px;
}

.Bar__link:first-child {
  justify-self: start;
}

.Bar__link {
  color: #EFF0F2;
  text-decoration: none;
}


</style>
