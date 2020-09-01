<template>
  <div class="home">
    <b-row class="m-5">
      <b-col
        v-for="item in homepageProducts"
        :key="item.name"
      >
        <b-card class="card">
          <img
            :src="item.images[0].url"
            class="photo img-fluid rounded"
          >
          <h6>{{ item.name }}</h6>
          <h3 class="price">
            {{ item.price|price }}
          </h3>
          <router-link
            :to="`/product/${item.id}`"
            type="button"
            class="btn btn-color"
            v-text="'Pokaż'"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PriceMixin from './../mixins/product.price.mixin'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  mixins: [
    PriceMixin
  ],
  props: {
    id: {
      type: Number,
      default: null
    }
  },

  computed: {
    ...mapState({
      homepageProducts: 'homepageProducts'
    })
  },
  mounted () {
    this.getHomepageProducts()
  },
  methods: {
    ...mapActions({
      getHomepageProducts: 'getHomepageProducts'
    })
  }
}
</script>
<style lang="scss">
@import '~@/scss/variables';

.home {
  height: 100%;
  background-size: cover;

  .photo {
    width: 120px;
    height: 170px;
  }

  .card {
    height: 450px;
    width: 200px;
    margin: 5px;
  }

  .btn {
    position: absolute;
    bottom: 40px;
    left: 65px;
  }

  .price {
    position: absolute;
    bottom: 80px;
    left: 60px;
  }

  .btn-color {
    background-color: $silv;
  }
}
</style>
