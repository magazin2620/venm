<template>
  <div class="row m-0">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 card-group"
      v-for="(product, key) in products"
      :key="key"
    >
      <ProductCard
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        @add-to-cart="addToCart(product)"
        :inCart="cartItemsIds.includes(product._id)"
        :description="product.description"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard: () => import('@/components/ProductCard'),
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems',
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations({
      addToCart: 'addToCart',
    }),
  },
}
</script>
