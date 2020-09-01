<template>
  <li class="category-list">
    <a
      class="category-name"
      @mouseover="changeClass"
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
        :rotate="open ? 270 : 90"
        icon="caret-right-fill"
        class="d-inline"
      />
    </a>

    <ListParent
      v-show="open"
      :item="item.children"
    />
  </li>
</template>
<script>
// import ListParent from '@/components/ListParent'

export default {
  name: 'ListItem',
  components: {
    // ListParent
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

.list-item {
  color: yellow;
}

</style>
