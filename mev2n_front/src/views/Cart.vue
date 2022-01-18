<template>
  <div class="container">
    <h2 class="mt-5">Cart <font-awesome-icon icon="shopping-cart" /></h2>
    <template v-if="cartItems.length > 0">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, key) in cartItems" :key="key">
          {{ item.title }} - {{ item.price }}$
        </li>
      </ul>
      <div class="panel text-right mt-3">
        Quantity: {{ cartCount }} Total: {{ cartTotalPrice }}$
      </div>
    </template>
    <template v-else>Your cart is empty. Please add item</template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartCount: 'cartCount',
    }),
  },
  methods: {
    ...mapMutations({
      clearCart: 'clearCart',
    }),
  },
}
</script>

<style></style>
