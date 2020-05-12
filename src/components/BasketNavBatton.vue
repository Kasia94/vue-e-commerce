<template>
  <router-link to="/basket">
    Koszyk
    <template v-if="amountInBasket">
      ({{ amountInBasket }})
    </template>
    <img
      class="basket-menu"
      src="../assets/kosza.png"
    >
  </router-link>
</template>
<script>
import BasketMixin from './../mixins/basket.mixin'
export default {
  mixins: [
    BasketMixin
  ]
}
</script>
<style lang="scss">
  .basket-menu {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
