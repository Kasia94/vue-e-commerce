<template>
  <b-card class="img-w ">
    <router-link
      :to="`/product/${product.id}`"
    >
      <b-card-img
        :height="imgHeight"
        :src="product.images[0].url"
        fluid
        img-top
        tag="article"
        class="mb-2"
      />
    </router-link>
    <router-link
      :to="`/product/${product.id}`"
      type="button"
      class="btn btn-primary btn-visible"
      v-text="'Pokaż'"
    >
      <b-card-img
        :img-height="imgHeight"
        :img-src="product.images[0].url"
        :img-alt="product.name"
        img="`/product/${product.id}`"
        fluid
        alt="Responsive image"
        img-top
        tag="article"
        class="img-w "
      />
    </router-link>
    <h7 class="d-block">
      {{ product.name }}
    </h7>
    <b-card-footer>{{ product.price | price }}</b-card-footer>
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
  border: none;
  margin-top: 4px;
}

.btn-visible {
  display: none;
}

.img-w:hover {
  border: solid silver;

  .btn-visible {
    display: inline-block;
    transition: color, ease;
  }

  .btn-visible:hover {
    background-color: rgb(42, 76, 90);
  }
}

</style>
