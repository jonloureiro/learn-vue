<template lang="html">
  <footer :class="$options.name">
    <p :class="`${$options.name}__copyright`">{{ message }}</p>
  </footer>
</template>

<script>
module.exports = {
  name: 'Foo',
  data: function() {
    return {
      message: 'Copyright (c) 2019 Jonathan Loureiro'
    }
  }
}
</script>

<style lang="css" scoped>
.Foo {
  background: #556270
}

.Foo__copyright {
  margin: 0;
  color: #EFF0F2;
  font-size: 0.9rem;
  padding-left: 1rem;
  line-height: 1.5rem;
  vertical-align: middle;
}
</style>
