<template>
  <div>
    <AppHeader />
    <div id="page" class="page">
      <Sentence :products="products" />

      <Nuxt />
      <About />
      <Sales />
      <Contacts />
      <Delivery />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layouts/AppHeader'
import AppFooter from '~/components/layouts/AppFooter'
import About  from '~/components/layouts/About'
import Sales from '~/components/layouts/Sales'
import Contacts from '~/components/layouts/Contacts'
import Delivery from '~/components/layouts/Delivery'
import Sentence from '~/components/layouts/Sentence'
import Banner from '~/api/banners'

export default {
  components: {
    AppHeader,
    AppFooter,
    About,
		Sales,
		Contacts,
		Delivery,
		Sentence
  },
  methods: {
    async loadProducts () {
      return await Banner.list()
		}
  },
  // props: {
  //   loadProducts: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  async created() {
    this.products = await this.loadProducts();
  },
  data() {
    return {
      products: [],
      required: true,
    };
  }
}
</script>
