<template>
  <li class="category-list">
    <a
      class="category-name"
      @click="changeClass"
    >
      <router-link
        :to="`/category/${item.id}`"
        :class="{ 'text-dark font-weight-bold category-list': item.id == $route.params.id }"
        class="color-link"
      >
        {{ item.name }}
      </router-link>

      <b-icon
        v-if="item.children.length"
        icon="caret-down-fill "
        class="d-inline"
      />
    </a>

    <ul>
      <ListItem
        v-for="some in item.children"
        v-show="open"
        :key="some.name"
        :item="some"
      />
    </ul>
  </li>
</template>
<script>
import ListItem from '@/components/ListItem'

export default {
  name: 'ListItem',
  components: {
    ListItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      open: false
      // level: 'level-2'

    }
  },
  methods: {
    changeClass () {
      event.preventDefault()
      this.open = !this.open
    }
  }
}
</script>
<style>
.category-list {
  list-style: none;
  width: 7rem;
  padding-right: 20rem;
  color: #2c3e50;
}

a.category-name {
  color: black;
}

.color-link {
  color: #2c3e50;
}

.level-on {
  display: block;
}

</style>
