<template>
  <b-container class="basket my-1">
    <h1>koszyk</h1>
    <template v-if="products">
      <b-row
        v-for="product in getProductsForBasket"
        :key="product.productId"
        class="border rounded my-2 p-2 baseColor-col"
      >
        <b-col class="m-auto">
          <img
            class="photo rounded m-auto"
            :src="product.url"
          >
        </b-col>
        <b-col>
          <h3>{{ product.name }}</h3>
          <p class="product-price">
            CENA: {{ product.price | price }}
          </p>
          <b-row class="quantity-position">
            <p>ILOŚĆ: {{ product.quantity }}</p>
            <div class="btns">
              <button @click="changeAmount({ productId: product.productId, price: product.price, quantity: 1})">
                +
              </button>
              <button
                v-if="product.quantity>0"
                @click="changeAmount({ productId: product.productId, price: product.price, quantity: -1})"
              >
                -
              </button>
            </div>
          </b-row>
          <p>SUMA: {{ product.summary | price }}</p>
        </b-col>
      </b-row>
      <p class="summary-price">
        DO ZAPŁATY: {{ sumPrice | price }}
      </p>
    </template>
    <div v-else>
      Loading...
    </div>
    <router-link
      tag="button"
      to="/basket/confirm"
      class="btn btn-block btn-bg"
    >
      DALEJ
    </router-link>
  </b-container>
</template>

<script>
import BasketMixin from './../mixins/basket.mixin'
import PriceMixin from './../mixins/product.price.mixin'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  mixins: [BasketMixin, PriceMixin],
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['getProductsForBasket'])
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts'

    }),
    changeAmount (payload) { this.addToBasket(payload) }
  }
}
</script>
<style lang="scss">
@import '~@/scss/variables';

.basket {
  background: rgb(234, 239, 240);

  h1 {
    font-size: 1rem;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .product {
    &-price {
      color: green;
    }
  }

  .summary-price {
    color: black;
  }

  .baseColor-col {
    background-color: $baseColor;
  }

  .btn-bg {
    background-color: grey;
  }
}
</style>
