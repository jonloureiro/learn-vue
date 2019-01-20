<template lang="html">
  <div class="wrapper">
    <div :class="$options.name">
      <h3 :class="`${$options.name}__title`">{{title}}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'Card',
  props: {
    title: String
  },
  data: function() {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.Card {
  padding: 1rem;
  width: 20rem;
  background-color: #556270;
  border-radius: .5rem;
}

.Card__title {
  color: #EFF0F2;
  margin: 0;
  text-align: center;
}

.Card__form {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.Card__input {
  margin-top: .5rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  width: 100%
}

.Card__wrapper {
  margin-top: .5rem;
}

.Card__button {
  padding: 0.125rem .75rem;
  font-weight: 400;
  color: #444;
  border-radius: .25rem;
}

.Card__link {
  text-decoration: none;
  color: #EFF0F2;
  margin-right: .5rem;
}
</style>
