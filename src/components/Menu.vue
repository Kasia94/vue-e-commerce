<template>
  <div id="nav">
    <b-navbar
      toggleable="sm"
      type="dark"
      variant="info"
    >
      <b-navbar-brand>
        <router-link to="/">
          SkibiMarket
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/category">
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
