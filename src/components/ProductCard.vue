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
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    price () {
      const nf = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })
      return nf.format(this.product.price)
    }
  }
}
</script>

<style lang="scss">
article .card-title {
    font-size: 1rem;
}
article .card-img {

}
</style>
