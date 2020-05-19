<template>
  <b-container fluid>
    <b-row
      v-for="input in forms"
      :key="input.id"
      class="my-1"
    >
      <b-col sm="3">
        <label :for="input.id">{{ input.label }}</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          :id="input.id"
          v-model="input.value"
          :disabled="loading"
        />
      </b-col>
    </b-row>
    <b-btn @click="send">
      DALEJ
    </b-btn>
  </b-container>
</template>
<script>
import BasketMixin from './../mixins/basket.mixin'
import { mapActions, mapMutations } from 'vuex'

export default {
  mixins: [
    BasketMixin
  ],
  data () {
    return {
      loading: false,
      forms: [
        {
          id: 'name',
          label: 'imię',
          value: ''
        },
        {
          id: 'surname',
          label: 'nazwisko',
          value: ''
        },
        {
          id: 'address',
          label: 'adres',
          value: ''
        },
        {
          id: 'city',
          label: 'miasto',
          value: ''
        },
        {
          id: 'zip-code',
          label: 'kod pocztowy',
          value: ''
        },
        {
          id: 'country',
          label: 'kraj',
          value: ''
        }
      ]
    }
  },
  methods: {

    ...mapActions({
      sendPostInformation: 'sendPostInformation',
      clearBasketInLocalStorage: 'clearBasketInLocalStorage'
    }),

    ...mapMutations({
      setBasket: 'setBasket'
    }),

    send () {
      const data = Object.assign(
        {},
        ...this.forms.map(input => ({
          [input.id]: input.value
        })),
        {
          products: this.basket
        }

      )

      this.loading = true
      this.sendPostInformation(data)
        .then((res) => {
          this.forms.map(item => ([item.value] = ''))
          this.setBasket([])
          this.clearBasketInLocalStorage()
          this.$router.push(`/summary/${res.data.id}`)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
