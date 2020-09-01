<template>
  <ul>
    <ListItem
      v-for="some in item"
      :key="some.id"
      class="list-item"
      :item="some"
    />
  </ul>
</template>

<script>
// import ListItem from './ListItem'
export default {
  name: 'ListParent',
  components: {
    // ListItem
  },
  props: {
    item: {
      type: Array,
      required: true
    }
  }
}
</script>
