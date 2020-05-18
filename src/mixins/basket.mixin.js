import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['basket']),
    ...mapGetters(['amountInBasket', 'sumPrice'])
  },
  beforeMount () {
    this.getBasket()
  },
  methods: {
    ...mapActions({
      addToBasket: 'addToBasket',
      getBasket: 'getBasket'
    })
  }
}
