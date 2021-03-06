<template>
  <body class="bg-all">
    <b-container>
      <b-row align-h="between">
        <b-col
          class=" w-22 p-2 bg-category text-dark"
          cols="4"
        >
          <ListParent :item="getItemsForCategoryTree" />
        </b-col>
        <b-col
          cols="8"
          class="p-0 "
        >
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>

<script>
// import ListParent from '@/components/ListParent'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    // ListParent
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
<style lang="scss">
@import '~@/scss/variables';

body {
  background-color: $baseColor;
  background-size: cover;
}

.container-h {
  height: 100%;
}
</style>
