<template>
  <b-card class="img-w">
    <router-link
      :to="`/product/${product.id}`"
    >
      <b-card-img
        v-for="(img, index) in product.images.filter((_, i) => i<2)"
        :key="img.url"
        :height="imgHeight"
        :src="img.url"
        :img-alt="product.name"
        fluid
        img-top
        tag="article"
        class="mb-2"
        :class="{
          'image-first': !index,
          'image--alternative': index
        }"
      />
    </router-link>
    <router-link
      :to="`/product/${product.id}`"
    >
      <h6 class="d-block">
        {{ product.name }}
      </h6>
    </router-link>
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
      default: '300rem'
    }

  }
}
</script>

<style lang="scss">
@import '~@/scss/variables';

article .card-title {
  font-size: 1rem;
}

.img-w {
  max-width: 15rem;
  border: 2px solid transparent;
  margin-top: 4px;
}

.btn-visible {
  display: none;
}

.image--alternative {
  display: none;
}

.img-w:hover {
  border-color: silver;

  .btn-visible {
    display: inline-block;
    margin-left: 3rem;
    transition: color, ease;
  }

  .btn-visible:hover {
    background-color: gray;
  }

  .image-first:not(:last-of-type) {
    display: none;
  }

  .image--alternative {
    display: block;
  }

  .btn-color {
    background-color: $silv;
  }
}

</style>
