<template>
  <b-container class="basket my-1">
    <h1>koszyk</h1>
    <template v-if="products.length">
      <b-row
        v-for="item in getProductsForBasket"
        :key="item.productId"
        class="border rounded my-2 p-2 table-info "
      >
        <b-col class="m-auto">
          <img
            class="photo rounded m-auto"
            :src="item.url"
          >
        </b-col>
        <b-col>
          <h3>{{ item.name }}</h3>
          <p class="product-price">
            CENA: {{ item.price | price }}
          </p>
          <p>ILOŚĆ: {{ item.quantity }}</p>
          <p>SUMA: {{ item.summary | price }}</p>
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
      class="btn btn-info btn-block"
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
    })
  }

}
</script>
<style lang="scss">
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
}
</style>
