<template>
  <b-container class="product">
    <b-row v-if="product.length">
      <b-col
        sm="12"
        md="6"
        lg="6"
        class="d-flex flex-row flex-wrap"
      >
        <img
          v-for="image in product.images"
          :key="image.id"
          class="m-1 img-fluid"
          :src="image.url"
        >
      </b-col>
      <b-col class="properties">
        <h1
          class="name h3"
        >
          {{ product.name }}
        </h1>
        <div>
          Rozmiar:
          <div
            v-for="size in product.size"
            :key="size"
            class="size display-9 h5"
          >
            {{ size }}
          </div>
        </div>
        <div class="buy">
          <div class="price">
            {{ product.price|price }}
          </div>
          <button
            class="btn"
            @click="clickAddToBasket({ productId: product.id, price: product.price, quantity: 1})"
          >
            Dodaj do koszyka
            <img
              class="basket"
              src="../assets/kosza.png"
            >
          </button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <p class="description">
        {{ product.description }}
      </p>
    </b-row>
    <b-spinner v-if="loading=true" />
    <b-alert
      v-else
      :show="true"
    >
      {{ error }}
    </b-alert>
    <modalBasket
      v-if="product"
      ref="modalBasket"
      :product="product"
    />
  </b-container>
</template>
<script>
import modalBasket from './../components/modalBasket'
import PriceMixin from './../mixins/product.price.mixin'
import BasketMixin from './../mixins/basket.mixin'
export default {
  components: { modalBasket },
  mixins: [
    PriceMixin,
    BasketMixin
  ],

  props: {
    id: {
      type: Number,
      default: null
    }

  },
  data () {
    return {
      product: {},
      loading: false,
      error: null

    }
  },
  async mounted () {
    this.loading = true
    try {
      const res = await this.axios.get(`/products/${this.id}`)
      this.product = res.data
    } catch (e) { this.error = e.message }
    this.loading = false
  },

  methods: {
    async clickAddToBasket (payload) {
      await this.addToBasket(payload)
      this.$refs.modalBasket.show()
    }
  }
}
</script>
<style lang="scss">
@import '~@/scss/variables';

.product {
  img {
    width: 48%;
  }

  .properties {
    > div {
      margin: $margin;
    }
  }

  .name {
    font-weight: bolder;
  }

  .size {
    display: inline;
    border: rgb(236, 228, 228) solid;
    background: rgb(240, 235, 235);
    margin: 2px;
  }

  .price {
    color: rgb(39, 160, 65);
    font-size: 1.5rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .btn {
    background-color: rgb(39, 160, 65);
    font-size: 15px;
  }

  .basket {
    width: 1.5rem;
    height: 1.5rem;
  }
}

</style>
