<template>
  <b-container>
    <b-row align-h="between">
      <b-col
        class=" w-22 p-2 bg-info text-dark"
        cols="4"
      >
        <ul>
          <ListItem
            v-for="item in getItemsForCategoryTree"
            :key="item.id"
            :item="item"
          />
        </ul>
      </b-col>
      <b-col
        cols="8"
        class="p-0 "
      >
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    ListItem
  },
  props: {
    id: {
      type: [Number, null],
      default: null
    }
  },
  computed: {
    ...mapGetters(['getItemsForCategoryTree'])
  },
  mounted () {
    this.getCategory()
  },
  methods: {
    ...mapActions(['getCategory'])
  }
}
</script>
