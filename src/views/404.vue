<template lang="html">
  <div :class="$options.name">
    <p :class="`${$options.name}__text`">404</p>
  </div>
</template>

<script>
module.exports = {
  name: 'NotFound',
  data: function() {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.NotFound {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 1.5rem
}

.NotFound__text {
  font-size: 4rem;
  font-weight: bolder;
  color: #444
}
</style>
