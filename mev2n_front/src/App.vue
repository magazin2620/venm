<template>
  <div id="app">
    <MevnHeader :categories="categories" :cartCount="cartCount" />
    <div class="container">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    MevnHeader: () => import('@/components/layouts/Header'),
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount',
    }),
  },
}
</script>

<style lang="scss">
body {
  padding-top: 56px;
}
.margin-s {
  margin-top: 95px;
}
</style>
