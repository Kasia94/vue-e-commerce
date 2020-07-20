<template>
  <div class="w-100">
    <template v-if="similarProduct.length">
      <h3>
        Podobne produkty:
      </h3>
      <div class="d-flex justify-content-between item-position">
        <ProductCard
          v-for="item in similarProduct"
          :key="item.id"
          class="m-3 mt-5"
          :product="item"
          img-height="200rem"
        />
      </div>
    </template>
    <b-alert
      :show="!!(error)"
      variant="warning"
      block
    >
      {{ error }}
    </b-alert>
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
      similarProduct: [],
      error: null

    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler () {
        const res = await this.axios.get(`/products?category=${this.id}`)
        this.products = res.data
      }
    }
  },
  async mounted () {
    try {
      const res = await this.axios.get('related')
      res.data.data.find(i => i.includes(this.id) || [])
        .filter(v => v !== this.id)
        .forEach(async element => {
          const res2 = await this.axios.get(`/products/${element}`)
          this.similarProduct.push(res2.data)
        })
    } catch (e) {
      this.error = e.message
    }
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
