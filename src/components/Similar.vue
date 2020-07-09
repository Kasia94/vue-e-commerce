<template>
  <div class="d-flex flex-row flex-wrap justify-content-between item-position">
    <h3 class="d-block">
      {{ "Podobne produkty:" }}
    </h3>
    <ProductCard
      v-for="item in other"
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
      other: []
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler () {
        this.axios.get(`/products?category=${this.id}`).then(res => { this.products = res.data })
      }
    }
  },
  mounted () {
    this.axios.get('related').then(res => {
      (res.data.data.find(i => i.includes(this.id)) || [])
        .filter(v => v !== this.id)
        .forEach(element => {
          this.axios.get(`/products/${element}`).then(res2 => { this.other.push(res2.data) })
        })
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
