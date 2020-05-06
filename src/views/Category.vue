<template>
  <b-container>
    <b-row align-h="between">
      <b-col cols="4">
        <List :items="category" />
      </b-col>
      <b-col cols="8">
        <router-view :key="$router.path" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import List from '@/components/List.vue'
const nest = (items, id = null) =>
  items
    .filter(item => item.sub === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))

export default {
  components: {
    List
  },
  props: {
    id: {
      type: [Number, null],
      default: null
    }
  },
  data () {
    return {
      category: []
    }
  },
  mounted () {
    this.axios.get('/categories').then(res => { this.category = nest(res.data) })
  }
}
</script>
