<template>
  <b-container>
    <b-row align-h="between">
      <b-col cols="4">
        <List :items="getItemsForCategoryTree" />
      </b-col>
      <b-col cols="8">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import List from '@/components/List.vue'
import { mapGetters, mapActions } from 'vuex'
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

  computed: {
    ...mapGetters(['getItemsForCategoryTree']),
    ...mapActions(['getCategory'])
  }

}
</script>
