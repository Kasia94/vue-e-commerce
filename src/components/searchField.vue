<template>
  <div>
    <b-nav-form>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
      />
      <b-button
        size="sm"
        class="my-2 my-sm-0"
        type="submit"
      >
        Search
      </b-button>
    </b-nav-form>
    <b-nav-item>
      <BasketNavBatton />
    </b-nav-item>
  </div>
</template>
<script>
import BasketNavBatton from './BasketNavBatton'
export default {
  components: {
    BasketNavBatton
  }
}
</script>
