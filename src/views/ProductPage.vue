<template>
  <div>
    <b-container class="product">
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item :href="`/category/${product.category}`">
          {{ categoryName }}
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          {{ product.name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
      <marquee>Najlepsze okazje</marquee>
      <template v-if="product">
        <b-row>
          <b-col
            sm="12"
            md="6"
            lg="6"
            class="d-flex flex-row flex-wrap "
          >
            <div v-if="product.images.length ===1">
              <img
                v-for="image in product.images"
                :key="image.id"
                class="m-1 one-image"
                :src="image.url"
              >
            </div>
            <div v-if="product.images.length > 1">
              <b-carousel

                img-width="20px"
                img-height="40px"
                :interval="4000"
                fade
                indicators
              >
                <b-carousel-slide
                  v-for="image in product.images"
                  :key="image.id"
                  :img-src="image.url"
                  class="photo-carousel"
                />
              </b-carousel>
            </div>
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
        <b-row>
          <similar :id="id" />
          <b-spinner v-if="loading" />
          <b-alert
            v-else
            :show="!!error"
          >
            {{ error }}
          </b-alert>
        </b-row>

        <modalBasket
          v-if="product"
          ref="modalBasket"
          :product="product"
        />
      </template>
    </b-container>
  </div>
</template>
<script>
import modalBasket from './../components/modalBasket'
import similar from './../components/Similar.vue'
import PriceMixin from './../mixins/product.price.mixin'
import BasketMixin from './../mixins/basket.mixin'
export default {
  components: { modalBasket, similar },
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
      error: null,
      categoryName: ''

    }
  },

  async mounted () {
    this.loading = true
    try {
      const res = await this.axios.get(`/products/${this.id}`)
      this.product = res.data
      const res2 = await this.axios.get(`/categories/${this.product.category}`)
      this.categoryName = res2.data.name
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
  .one-image { width: 50%; }

  .photo-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60%;
    left: 5rem;
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
