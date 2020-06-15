<template>
  <b-modal
    ref="modalBasket"
    title="DODANO DO KOSZYKA"
    header-bg-variant="info"
    ok-title="Przejdź do koszyka"
    cancel-title="Kontynuuj zakupy"
    ok-variant="danger"
    cancel-variant="success"
    @ok="$router.push('/basket')"
  >
    <p class="my-4">
      Produkt {{ product.name }} został dodany do koszyka!
    </p>
  </b-modal>
</template>

<script>
import BasketMixin from './../mixins/basket.mixin'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  mixins: BasketMixin,
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState(['basket'], ['products']),
    ...mapGetters(['getProductsForBasket'], ['amountInBasket']),
    ...mapActions(['addToBasket'])
  },
  methods: {
    show () {
      this.$refs.modalBasket.show()
    }
  }

}
</script>
