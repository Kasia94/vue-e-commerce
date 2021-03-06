<template>
  <div id="nav">
    <b-navbar
      toggleable="md"
      type="dark"
      class="bg-navbar"
    >
      <b-navbar-brand class="brand-color">
        <router-link
          to="/"
        >
          Vue e-Commerce
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item>
            <router-link
              class="link-color"
              to="/category"
            >
              Categories
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">
              About us
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contact">
              Contact
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <searchField />
          <b-nav-item>
            <BasketNavBatton />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import BasketNavBatton from './BasketNavBatton'
import searchField from './searchField'
export default {
  components: {
    BasketNavBatton,
    searchField
  }
}
</script>
<style lang="scss">
@import '~@/scss/variables';

.bg-navbar {
  background-color: $baseColor;
}

.link-color {
  color: $silv;
}

</style>
