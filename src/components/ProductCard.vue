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
      <!-- <b-card-img
        v-if="product.images.length>1"
        :height="imgHeight"
        :src="product.images[0].url"
        :img-alt="product.name"
        fluid
        img-top
        tag="article"
        class="mb-2 image-first"
      />
      <b-card-img
        v-if="product.images.length>1"
        :height="imgHeight"
        :src="product.images[1].url"
        :img-alt="product.name"
        fluid
        img-top
        tag="article"
        class="mb-2  image-second"
      /> -->
    </router-link>
    <router-link
      :to="`/product/${product.id}`"
      type="button"
      class="btn btn-primary btn-visible"
      v-text="'Pokaż'"
    />
    <h6 class="d-block">
      {{ product.name }}
    </h6>
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

// .image-first {
//   display: inline;
// }
// .image-second { display: none; }

.image--alternative {
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

  // .image:not(:last-of-type):not(.image--alternative) {
  .image-first:not(:last-of-type) {
    display: none;
  }

  .image--alternative {
    display: block;
  }

  // .image-first {
  //   display: none;
  // }

  // .image-second {
  //   display: block;
  // }
}

</style>
