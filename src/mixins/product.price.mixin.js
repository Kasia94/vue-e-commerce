export default {
  computed: {
    price () {
      const nf = new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' })
      return nf.format(this.product.price)
    }
  }
}
