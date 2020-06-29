<template>
  <b-container>
    <b-row class="m-5">
      <div>
        Wyniki wyszukiwania dla: "{{ name }}."
      </div>
      <div
        v-if="results.length>0"
        class="ml-5"
      >
        Znaleziono: {{ results.length }} produktów.
      </div>
      <b-alert
        v-if="!results.length"
        class="m-5"
        show
        variant="warning"
      >
        Nie znaleziono produktu.
      </b-alert>
    </b-row>
    <b-row
      v-if="results.length"
      cols="5"
      align-h="around"
    >
      <product-card
        v-for="product in results"
        :key="product.id"
        :product="product"
      />
    </b-row>
    <b-spinner v-if="loading=true" />
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
      results: [],
      loading: false
    }
  },
  async mounted () {
    this.loading = true
    const res = await this.axios.get(`/products?q=${this.name}`)
    this.results = res.data
    this.loading = false
  }

}
</script>
