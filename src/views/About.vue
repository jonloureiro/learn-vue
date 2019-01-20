<template lang="html">
  <div :class="$options.name">
    <article :class="`${$options.name}__article`">
      <h3 :class="`${$options.name}__title`">About</h3>
      <hr>
      <p :class="`${$options.name}__text`">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <hr>
      <p :class="`${$options.name}__text`">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <hr>
      <p :class="`${$options.name}__text`">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  </div>
</template>

<script>
module.exports = {
  name: 'About',
  data: function() {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.About {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 1.5rem
}

.About__article {
  background-color: #FFF;
  color: #444;
  padding: 2rem;
  border-radius: .5rem;
  width: 37.5rem
}

.About__text {
  text-align: justify;
}
</style>
