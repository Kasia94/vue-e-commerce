import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    products: null,
    category: [],
    homepageProducts: null
  },
  getters: {
    amountInBasket (state) {
      return state.basket.reduce((sum, basketProduct) => (sum += basketProduct.quantity), 0)
    },
    sumPrice (state) {
      return state.basket.reduce((sum, product) => sum + product.price * product.quantity, 0)
    },
    getProductsForBasket (state) {
      return state.basket.map(basketItem => {
        const product = state.products.find(item => item.id === basketItem.productId) || {}

        return {
          ...basketItem,
          name: product.name,
          url: product?.images?.[0]?.url,
          summary: basketItem.price * basketItem.quantity
        }
      })
    },
    getItemsForCategoryTree (state) {
      const nest = (items, id = null) =>
        items
          .filter(item => item.sub === id)
          .map(item => ({ ...item, children: nest(items, item.id) }))

      return nest(state.category)
    }
  },
  mutations: {
    addProductToBasket (state, payload) {
      state.basket.push(payload)
    },
    addCategory (state, payload) {
      state.basket.push(payload)
    },
    updateProductQuantity (state, payload) {
      const { productId, price, quantity } = payload
      const currentItem = state.basket.find(item => item.productId === productId && item.price === price)

      currentItem.quantity += quantity
    },
    setBasket (state, payload) {
      state.basket = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setHomepageProducts (state, payload) {
      state.homepageProducts = payload
    },
    setCategory (state, payload) {
      state.category = payload
    }
  },
  actions: {
    getBasket ({ commit }) {
      commit('setBasket', JSON.parse(localStorage.getItem('basket')) || [])
    },
    async getProducts ({ state, commit }) {
      if (state.products) return
      state.products = []
      const res = await this.axios.get('products')

      commit('setProducts', res.data)
    },
    async getHomepageProducts ({ dispatch, state, commit }) {
      await dispatch('getProducts')
      const count = state.products.length

      const limit = 8
      const start = Math.floor(Math.random() * (count - limit))

      const res = await this.axios.get(`products?_start=${start}&_limit=${limit}`)

      commit('setHomepageProducts', res.data)
    },
    getCategory ({ state, commit }) {
      if (state.category.length) return
      this.axios.get('categories').then(res => commit('setCategory', res.data))
    },
    async addToBasket ({ state, commit, dispatch }, payload) {
      const { productId } = payload
      const productInBasket = state.basket.find(item => item.productId === productId)

      productInBasket
        ? commit('updateProductQuantity', payload)
        : commit('addProductToBasket', payload)

      await dispatch('saveToLocalStorage')
    },
    async saveToLocalStorage ({ state }) {
      await localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    clearBasketInLocalStorage () {
      localStorage.removeItem('basket')
    },

    sendPostInformation (_, data) {
      return this.axios.post('orders', data)
    }
  }
})
