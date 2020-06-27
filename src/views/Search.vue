<template>
  <b-container>
    <b-row class="m-5">
      <div>
        Wyniki wyszukiwania dla: "{{ name }}."
      </div>
      <div
        v-if="results"
        class="ml-5"
      >
        Znaleziono:   {{ results.length }}
      </div>
    </b-row>
    <b-row
      cols="5"
      align-h="around"
    >
      <product-card
        v-for="product in results"
        :key="product.id"
        :product="product"
      />
    </b-row>
  </b-container>
</template>
<script>
import ProductCard from '@/components/ProductCard'

export default {
  components: {
    ProductCard
  },
  props: {
    name: {
      type: String,
      default: 'Błąd'
    }
  },
  data: function () {
    return {
      results: []
    }
  },
  async mounted () {
    const res = await this.axios.get(`/products?q=${this.name}`)
    this.results = res.data
  }
}
</script>
