<template>
  <ul class="pl-3 text-left">
    <li
      v-for="item in items"
      :key="item.id"
    >
      <router-link
        :to="`/category/${item.id}`"
        :class="{ 'text-success font-weight-bold': item.id == $route.params.id }"
      >
        {{ item.name }}
      </router-link>
      <List :items="item.children" />
    </li>
  </ul>
</template>
<script>
import List from '@/components/List'

export default {
  name: 'List',
  components: {
    List
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">

</style>
