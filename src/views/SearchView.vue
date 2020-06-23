<template>
  <div>
    {{ q }}
    {{ products }}
    <div />
    <div
      v-if="products.length"
    >
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard
  },
  props: {
    q: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      products: []
    }
  },
  watch: {
    $route: {
      searcher () {
        this.axios.get(`/products/?q=${this.name}`).then(res => { this.products = res.data })
      }
    }
  }
//   methods: {
//     searcher () {
//       console.log(this.name)
//       this.axios.get(`/products/?q=${name}`)
//     }
//   }
}
</script>
