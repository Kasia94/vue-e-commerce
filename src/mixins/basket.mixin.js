export default {
  computed: {
    amountInBasket () {
      return this.basket.reduce((sum, basketProduct) => (sum += basketProduct.quantity), 0)
    }
  },
  data () {
    return {
      basket: []
    }
  },
  beforeMount () {
    this.basket = JSON.parse(localStorage.getItem('basket')) || []
  },
  methods: {
    addToBasket (productId, price, quantity = 1) {
      const currentItem = this.basket.find(item => item.productId === productId && item.price === price)

      if (currentItem) {
        currentItem.quantity += quantity
      } else {
        this.basket.push({
          productId,
          price,
          quantity
        })
      }
      this.saveToLocalStorage()
    },
    saveToLocalStorage () {
      localStorage.setItem('basket', JSON.stringify(this.basket))
    },
    sumPrice () {
      return this.basket.reduce((sum, product) => sum + product.price * product.quantity, 0)
    }
  }
}
