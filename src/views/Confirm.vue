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
        {{ input.validate ? '' : input.error }}
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
          value: '',
          validate: true,
          error: 'Użyj minimum 2 znaków.',
          pattern: /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2}/
        },
        {
          id: 'surname',
          label: 'nazwisko',
          value: '',
          error: 'Użyj minimum 2 znaków.',
          validate: true,
          pattern: /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2}/
        },
        {
          id: 'address',
          label: 'adres',
          value: '',
          error: 'Użyj minimum 2 znaków.',
          validate: true,
          pattern: /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2}/
        },
        {
          id: 'city',
          label: 'miasto',
          value: '',
          error: 'Użyj minimum 2 znaków.',
          validate: true,
          pattern: /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2}/
        },
        {
          id: 'zipcode',
          label: 'kod pocztowy',
          value: '',
          error: 'Użyj odpowiedniego formatu (00-000).',
          validate: true,
          pattern: /^\d{2}-\d{3}$/
        },
        {
          id: 'country',
          label: 'kraj',
          value: '',
          error: 'Użyj minimum 2 znaków.',
          validate: true,

          pattern: /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2}/
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
      this.forms.forEach(el => {
        const regEx = new RegExp(el.pattern)
        el.validate = regEx.test(el.value)
      })

      if (this.forms.some(el => !el.validate)) return

      this.loading = true
      const data = Object.assign(
        {},
        ...this.forms.map(input => ({
          [input.id]: input.value
        })),
        {
          products: this.basket
        }
      )

      this.sendPostInformation(data)
        .then((res) => {
          this.forms.map(item => ([item.value] = ''))
          this.setBasket([])
          this.clearBasketInLocalStorage()
          this.$router.push(`/basket/summary/${res.data.id}`)
        })
    }
  }
}
</script>
