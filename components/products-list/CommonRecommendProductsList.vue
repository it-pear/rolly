<template>
  <section id="menu-6" class="wide-70 menu-section division">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section-title mb-60 text-center">
            <h2 class="h2-xl">Похожие продукты</h2>
          </div>
        </div>
      </div>

      <div id="catalogmenu"></div>

      <!-- <h3 class="text-center">Самый популярные блюда</h3><br><br> -->
      <div class="row">
        <products-list-card
          v-for="product in filteredPosts.slice(0, 8)" 
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- {{filteredPosts}} -->
    </div>
  </section>
</template>

<script>
import ProductsListCard from './ProductListCard'


export default {
  name: "CommonProductsListPage",
  components: { ProductsListCard },
  props: {
    loadProducts: {
      type: Function,
      required: true,
    },
    cateoryProduc: String
  },
  data() {
    return {
      products: [],
      productsLoading: false,
    };
  },
  computed: {
    filteredPosts() {
      return this.products.filter(p => p.category == this.cateoryProduc)
    }
  },

  async created() {
    this.productsLoading = false;
    this.products = await this.loadProducts();
    
  }
};
</script>
