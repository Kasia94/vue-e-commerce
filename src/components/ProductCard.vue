<template>
  <b-card
    :img-height="imgHeight"
    :footer="product.price | price"
    :title="product.name"
    :img-src="product.images[0].url"
    :img-alt="product.name"
    fluid
    alt="Responsive image"
    img-top
    tag="article"
    class="img-w "
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
    },
    imgHeight: {
      type: String,
      default: '350rem'
    }

  }
}
</script>

<style lang="scss">
article .card-title {
  font-size: 1rem;
}

.img-w {
  max-width: 15rem;
}
</style>
