<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>
<script>
import Menu from './components/Menu'
export default {
  components: {
    Menu
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
  background-color: #fae4e8;
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
