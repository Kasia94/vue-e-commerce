<template>
  <b-card
    img-height="350rem"
    :footer="price"
    :title="product.name"
    :img-src="product.images[0].url"
    :img-alt="product.name"
    img-top
    tag="article"
    class="m-1"
  >
    <router-link
      :to="`/product/${product.id}`"
      type="button"
      class="btn btn-primary"
      v-text="'Pokaż'"
    />
  </b-card>
</template>

<script>
import PriceMixin from './../mixins/product.price.mixin'
export default {
  mixins: [
    PriceMixin
  ],
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
article .card-title {
  font-size: 1rem;
}
</style>
