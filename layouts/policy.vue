<template>
  <div>
    <AppHeader />
    <div id="page" class="page">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Product from '~/api/product'
import AppHeader from '~/components/layouts/AppHeader'
import AppFooter from '~/components/layouts/AppFooter'



export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
  .menu-section{
    padding-top: 150px;
  }
</style>