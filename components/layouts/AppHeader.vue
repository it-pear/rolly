<template>
  <header
    id="header-3"
    class="header navik-header header-transparent header-shadow header-transparent-on"
  >
    <div class="container">
      <div class="navik-header-container">
        <div class="callusbtn">
          <a href="tel:89960501010"><i class="fas fa-phone"></i></a>
        </div>
        <div
          class="logo"
          data-mobile-logo="@/assets/img/logo.png"
          data-sticky-logo="@/assets/img/logo.png"
        >
          <nuxt-link to="/"
            ><img src="@/assets/img/logo.png" alt="header-logo"
          /></nuxt-link>
          <a href="tel:89960501010" class="tel-mb">+7 (996) 050-10-10</a>
          <div class="basket-ico basket-mb">
            <nuxt-link :to="{ name: 'cart' }">
              <span class="ico-holder">
                <span class="flaticon-shopping-bag"></span>
                <em class="roundpoint" v-if="qty > 0">{{ qty }}</em>
              </span>
            </nuxt-link>
          </div>
        </div>

        <div
          class="burger-menu"
          v-on:click="onclick"
          v-bind:class="{ menuopen: isActive }"
        >
          <div class="line-menu line-half first-line"></div>
          <div class="line-menu"></div>
          <div class="line-menu line-half last-line"></div>
        </div>

        <nav
          class="navik-menu menu-caret navik-yellow mb-0"
          v-bind:class="{ navikmenuactive: isActive }"
        >
          <ul class="top-list">
            <li
            v-for="category in categories"
            :key="category.id"
            class="tab-link"
            :class="{ 'current': $route.params.category === `${category.slug}-${category.id}` }"
          >


              <a href="">as
                <nuxt-link :to="{name: 'categories-category', params: { category: `${category.slug}-${category.id}` }, hash: '#menu-6' }">
                {{ category.title }}
              </nuxt-link>
              </a>

          </li>
            <!-- <li>
              <a href="#">Акции </a>
              <ul>
                <li><a href="">Супер выгодно</a></li>
                <li><a href="">Сеты</a></li>
                <li><a href="">На всю компанию</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Роллы</a>
              <ul>
                <li><a href="#">Роллы 1</a></li>
                <li><a href="#">Роллы 2</a></li>
                <li><a href="#">Роллы 3</a></li>
              </ul>
            </li>
            <li>
              <a href="">Пицца</a>
              <ul>
                <li><a href="">Lorem.</a></li>
                <li><a href="">Velit.</a></li>
                <li><a href="">Esse.</a></li>
              </ul>
            </li>
            <li>
              <a href="">Закуски</a>
              <ul>
                <li><a href="">Quia.</a></li>
                <li><a href="">Ducimus.</a></li>
                <li><a href="">Quis?</a></li>
              </ul>
            </li>
            <li>
              <a href="">Бургеры</a>
              <ul>
                <li><a href="">Consequatur!</a></li>
                <li><a href="">Tempore.</a></li>
                <li><a href="">Velit!</a></li>
              </ul>
            </li>
            <li>
              <a href="">Напитки</a>
              <ul>
                <li><a href="">Nam!</a></li>
                <li><a href="">Similique.</a></li>
                <li><a href="">Impedit.</a></li>
              </ul>
            </li> -->
            <li class="nav-btn yellow-color">
              <a href="tel:89960501010" class="tel-lg">+7 (996) 050-10-10</a>
            </li>
            <li class="basket-ico ico-30 basket-lg">
              <nuxt-link :to="{ name: 'cart' }">
                <span class="ico-holder">
                  <span class="flaticon-shopping-bag"></span>
                  <em class="roundpoint" v-if="qty > 0">{{ qty }}</em>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>



<script>
import { mapGetters } from "vuex";


export default {
  name: "AppHeader",
  computed: {
    ...mapGetters({
      qty: "cart/productsQty",
      categories: state => state.filters.categories
    }),
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onclick() {
      this.isActive = !this.isActive;
    },
  },
};
</script>


<style lang="scss">
.navikmenuactive {
  .top-list {
    display: block;
  }
}
</style>