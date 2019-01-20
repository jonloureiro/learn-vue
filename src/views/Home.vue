<template lang="html">
  <div class="content">
    <div :class="$options.name">
      <h1 :class="`${$options.name}__logo`">LOGO // HOME</h1>
      <section :class="`${$options.name}__section`">
        <h3 :class="`${$options.name}__title`">Section 1</h3>
        <p :class="`${$options.name}__text`">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <section :class="`${$options.name}__section`">
        <h3 :class="`${$options.name}__title`">Section 2</h3>
        <p :class="`${$options.name}__text`">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section :class="`${$options.name}__section`">
        <h3 :class="`${$options.name}__title`">Section 3</h3>
        <p :class="`${$options.name}__text`">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'Home',
  data: function() {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 1.5rem
}

.Home {
  display: grid;
  grid-template-columns: repeat(3, 12.5rem) ;
  grid-template-rows: 5rem 14rem;
  grid-gap: 2rem;
  color: #444;
  margin-bottom: 1.5rem;
}

.Home__logo {
  align-self: center;
  text-align: center;
  grid-column: 1 / -1
}

.Home__section {
  background-color: #FFF;
  border-radius: .5rem;
  padding: 1rem
}

.Home__title {
  text-align: center;
}

.Home__text {
  text-align: justify;
}


</style>
