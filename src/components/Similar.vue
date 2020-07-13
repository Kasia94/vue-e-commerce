<template>
  <div class="d-flex flex-row flex-wrap justify-content-between item-position">
    <h3 class="d-block">
      "Podobne produkty:"
    </h3>
    <ProductCard
      v-for="item in similarProduct"
      :key="item.id"
      class="m-3 mt-5"
      :product="item"
      img-height="200rem"
    />
  </div>
</template>
<script>

import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard
  },

  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      similarProduct: []
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler () {
        const data = await this.axios.get(`/products?category=${this.id}`)
        this.products = data
        return data
      }
    }
  },
  async mounted () {
    const res = await this.axios.get('related')
    res.data.data.find(i => i.includes(this.id) || [])
      .filter(v => v !== this.id)
      .forEach(async element => {
        const res2 = await this.axios.get(`/products/${element}`)
        this.similarProduct.push(res2.data)
      })
  }
}
</script>
<style>
.item-position > article {
  flex: 0 48.6%;
  align-items: center;
  padding: 2px;
}

</style>
