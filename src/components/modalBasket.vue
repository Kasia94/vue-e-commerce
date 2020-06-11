<template>
  <b-modal
    ref="modalBasket"
    title="DODANO DO KOSZYKA"
  >
    <p class="my-4">
      Produkt {{ product.name }} został dodany do koszyka!
    </p>
    <template v-slot:modal-footer="{ OK, cancel }">
      <router-link to="/basket">
        <b-button
          size="sm"
          variant="info"
          @click="OK"
        >
          Przejdź do koszyka
        </b-button>
      </router-link>
      <b-button
        size="sm"
        variant="success"
        @click="cancel()"
      >
        Kontynuuj zakupy
      </b-button>
    </template>
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
