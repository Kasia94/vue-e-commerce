export default {
  filters: {
    price (value) {
      const nf = new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' })
      return nf.format(value)
    }
  }
}
