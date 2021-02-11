<template>
  <ul class="top-list" id="navik-header-container-top-list">
    <li
      v-for="category in categories"
      :key="category.id"
      :class="{
        current: $route.params.category === `${category.slug}-${category.id}`,
      }"
    >
      <nuxt-link
        :to="{
          name: 'categories-category',
          params: { category: `${category.slug}-${category.id}` },
          hash: '#menu-6',
        }"
      >
        {{ category.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductsListFilter",
  computed: {
    ...mapState({
      categories: (state) => state.filters.categories,
    }),
  },
  created() {
    if (!this.categories) {
      this.$store.dispatch("filters/fetchCategories");
    }
  },
};
</script>

<style lang="scss">
.categoryimg {
  max-height: 55px;
}
@media (min-width: 772px) {
  #navik-header-container-top-list {
    flex: 0 0 70% !important;
    max-width: 70% !important;
    padding-left: 30px;
    li {
      a {
        font-size: 16px !important;
        line-height: auto !important;
        height: auto !important;
      }
    }
  }
  
}
</style>