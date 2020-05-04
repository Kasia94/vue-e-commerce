<template>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card
      v-for="product in shopProducts"
      :key="product.id"
      :img-src="product.image"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        {{ product.description }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shopProducts: [
        {
          id: 0,
          image: 'https://placekitten.com/200/138',
          description: "Some quick example text to build on the card and make up the bulk of the card's content."
        },
        {
          id: 1,
          image: 'https://placekitten.com/200/138',
          description: "Some quick example text to build on the card and make up the bulk of the card's content."
        },
        {
          id: 2,
          image: 'https://placekitten.com/200/138',
          description: "Some quick example text to build on the card and make up the bulk of the card's content."
        }
      ]
    }
  }
}

</script>
