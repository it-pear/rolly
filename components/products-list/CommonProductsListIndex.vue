<template>
  <section id="menu-6" class="wide-70 menu-section division">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section-title mb-60 text-center">
            <h2 class="h2-xl">Наше меню</h2>
          </div>
        </div>
      </div>

      <div id="catalogmenu"></div>
      <products-list-filter />
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
  data() {
    return {
      products: [],
      productsLoading: false,
    };
  },
  props: {
    loadProducts: {
      type: Function,
      required: true,
    },
    cateoryProduc: String
  },
  computed: {
    filteredPosts() {
      return this.products.filter(p => p.category == "5xAZjoE")
    }
  },
  

  async created() {
    this.productsLoading = false;
    this.products = await this.loadProducts();
    
  }
};
</script>
