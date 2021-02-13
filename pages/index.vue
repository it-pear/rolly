<template>
  <div>
		<CommonProductsListIndex :load-products="loadProducts" />
  </div>
  
</template>

<script>
import CommonProductsListIndex from '~/components/products-list/CommonProductsListIndex'
import Product from '~/api/product'

export default {
  components: {
		CommonProductsListIndex,
	},
  methods: {
    async loadProducts () {
      return await Product.list()
		}
  }
}

</script>
