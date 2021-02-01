<template>
  <div>
    <HeaderSingle :product="product" />
    <common-products-list-page :load-products="loadProducts" />
  </div>
</template>

<script>
import CommonProductsListPage from '~/components/products-list/CommonProductsListPage'
import Product from '~/api/product'
import HeaderSingle from '~/components/layouts/HeaderSingle'

export default {
  layout: 'single',
  components: { CommonProductsListPage, HeaderSingle },
  data () {
    return {
      product: {
        title: 'Каталог'
      },
    }
  },
  computed: {
    categoryId () {
      return this.$route.params.category.split('-').slice(-1).pop()
    }
  },
  methods: {
    async loadProducts () {
      const filter = {
        category: this.categoryId
      }
      return await Product.list(filter)
    }
  }
}
</script>
