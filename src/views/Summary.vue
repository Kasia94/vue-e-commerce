<template>
  <b-container>
    <h1 class="h2 text-center m-5">
      PODSUMOWANIE ZAMÓWIENIA
    </h1>

    <b-row>
      <b-col
        class="left-col"
        cols="6"
      >
        <b-row
          v-for="item in chosen"
          :key="item.prodctId"
          class="align-items-center"
        >
          <b-col cols="6">
            <div>
              <p>{{ item.name }}</p>

              <img
                class="img-fluid"
                :src="item.url"
              >
            </div>
          </b-col>
          <b-col cols="6">
            <p>cena: {{ item.price }}</p>
            <p>ilość: {{ item.quantity }}</p>
            <p>całkowity koszt: {{ item.summary }}</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6">
        <h4>
          Numer zamówienia: {{ order.id }}
        </h4>
        <h5>
          Dane do przesyłki:
        </h5>
        <p>imię i nazwisko: {{ order.name }} {{ order.surname }}</p>
        <p>adres: {{ order.address }}</p>
        <p>miasto: {{ order.city }}</p>
        <p>kod pocztowy: {{ order['zip-code'] }}</p>
        <p>kraj: {{ order.country }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      default: null
    }

  },
  data () {
    return {
      order: {
        products: []
      }
    }
  },
  computed: {
    ...mapState({
      products: 'products'
    }),
    chosen () {
      return this.order.products.map(orderItem => {
        const product = this.products.find(item => item.id === orderItem.productId) || {}
        return {
          ...orderItem,
          name: product.name,
          url: product.images[0].url,
          price: product.price,
          quantity: orderItem.quantity,
          summary: orderItem.price * orderItem.quantity

        }
      })
    }

  },
  mounted () {
    this.axios.get(`/orders/${this.id}`).then(res => { this.order = res.data })
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts'
    })
  }
}
</script>
