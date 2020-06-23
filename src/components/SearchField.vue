<template>
  <div class="container">
    <b-nav-form

      @submit.prevent="$router.push(`/search/?q=${name}`)"
    >
      <b-form-input

        v-model="name"
        size="sm"
        class="mr-sm-2 form-control"
        placeholder="Search"
        type="text"
      />
      <b-button
        size="sm"
        class="my-2 my-sm-0"
        type="submit"
      >
        Search
      </b-button>
    </b-nav-form>
    <!-- <ul>
      <li
        v-for="product in products"
        :key="product.name"
      >
        {{ name }}
        <router-link :to="`${name}`">
          {{ product.name }}
          <router-link />
        </router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      name: ''
    }
  }

}
</script>
