<template>
  <ul class="list pl-3 text-left bg-info ">
    <li
      v-for="item in items"
      :key="item.id"
    >
      <router-link
        :to="`/category/${item.id}`"
        :class="{ 'text-dark font-weight-bold': item.id == $route.params.id }"
      >
        <a class="h5">
          {{ item.name }}
        </a>
      </router-link>
      <List
        :items="item.children"
        class="text-dark "
      />
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
<style>
.list {
  list-style: none;
}

a {
  color: #2c3e50;
}
</style>
