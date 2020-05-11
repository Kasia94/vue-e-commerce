<template>
  <b-container class="basket my-1">
    <h1>koszyk</h1>
    <template v-if="products.length">
      <b-row
        v-for="item in items"
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
        DO ZAPŁATY: {{ sumPrice() | price }}
      </p>
    </template>
    <div v-else>
      Loading...
    </div>
    <router-link
      tag="button"
      to="/basket/data"
      class="btn btn-info btn-block"
    >
      DALEJ
    </router-link>
  </b-container>
</template>

<script>
import BasketMixin from './../mixins/basket.mixin'
import PriceMixin from './../mixins/product.price.mixin'
export default {
  mixins: [BasketMixin, PriceMixin],
  data () {
    return {
      products: []
    }
  },
  computed: {
    items () {
      return this.basket.map(basketProduct => {
        const product = this.products.find(product => product.id === basketProduct.productId)
        return {
          ...basketProduct,
          name: product.name,
          url: product.images[0].url,
          summary: basketProduct.price * basketProduct.quantity
        }
      })
    }
  },
  mounted () {
    this.axios.get('/products').then(res => { this.products = res.data })
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
