<template>
  <div id="nav">
    <b-navbar
      toggleable="lg"
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
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Products</em>
            </template>
            <b-dropdown-item
              v-for="i in 3"
              :key="i"
            >
              <router-link to="/products">
                Products
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>
            <router-link to="/category">
              Categories
            </router-link>
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
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            />
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
}
</script>
