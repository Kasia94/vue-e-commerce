<template>
  <div id="app">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Menu from './components/Menu'
import Footer from './components/Footer'
export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style lang="scss">
@import '~@/scss/variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(218, 240, 247);
  background-size: cover;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: grey;
}
</style>
