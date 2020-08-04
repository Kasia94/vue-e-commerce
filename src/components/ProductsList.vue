<template>
  <div class="d-flex flex-row flex-wrap justify-content-between  product-list">
    <template
      v-if="products.length"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <b-spinner v-if="loading" />
    </template>
    <EmptyList v-else />
  </div>
</template>
<script>
import EmptyList from '@/components/EmptyList'
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    EmptyList,
    ProductCard
  },
  props: {
    id: {
      type: [Number],
      default: null
    }
  },
  data () {
    return {
      products: [],
      loading: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler () {
        this.loading = true
        const res = await this.axios.get(`/products?category=${this.id}`)
        this.products = res.data
        this.loading = false
      }
    }
  }
}
</script>
<style lang="scss">
.product-list > article {
  flex: 0 48.6%;
}
</style>
