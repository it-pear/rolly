<template>
  <div id="tabs-nav">
    <div class="row">
      <div class="col-lg-12 text-center">
        <ul class="tabs-1 ico-55 red-tabs clearfix">
          <!-- <li
            class="tab-link "
            :class="{ 'current': !$route.params.category }"
          >
            <nuxt-link :to="{ name: 'index' }">
              All
            </nuxt-link>
          </li> -->
          <li
            v-for="category in categories"
            :key="category.id"
            class="tab-link"
            :class="{ 'current': $route.params.category === `${category.slug}-${category.id}` }"
          >
            <img class="categoryimg" :src="`${category.img}`" alt="">
            <h5 class="h5-sm">
              <nuxt-link :to="{name: 'categories-category', params: { category: `${category.slug}-${category.id}` }, hash: '#menu-6' }">
                {{ category.title }}
              </nuxt-link>
            </h5>
          </li>

        </ul>
      </div>
    </div>
  </div> <!-- END TABS NAVIGATION -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductsListFilter',
  computed: {
    ...mapState({
      categories: state => state.filters.categories
    })
  },
  created () {
    if (!this.categories) {
      this.$store.dispatch('filters/fetchCategories')
    }
  }
}
</script>

<style lang="scss">
  .categoryimg{
    max-height: 55px;
  }
</style>