<template>
  <div>
    <HeaderSingle :product="product" />
    <section id="product-1" class="pt-100 single-product division pb-4">
      <div class="container">
        <div class="row">
          <!-- PRODUCT IMAGE -->
          <div class="col-lg-7">
            <product-gallery :product="product" />
          </div>	<!-- END PRODUCT IMAGE -->

          <!-- PRODUCT DISCRIPTION -->
          <div class="col-lg-5">
            <div class="product-description">

              <!-- TITLE -->
              <div class="project-title">

                <!-- Title -->
                <h2 class="h2-lg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{ product.title }}</font></font></h2>
                <!-- Price -->
                <div class="project-price">
                  <h4 class="h4-xl yellow-color">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        {{ product.price }} ₽ублей
                      </font>
                    </font>
                  </h4>
                </div>

              </div>

              <div class="product-txt">

                <!-- Text -->
                <p class="p-md grey-color">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      {{product.description}}
                    </font>
                  </font>
                </p>

                <!-- Product Data -->
                <div class="product-info">

                  <div v-if="product.variants && product.variants.length > 0">
                    <div class="product-info__color">
                      <div class="field" :class="{ 'field--invalid': isSelectedColorInvalid }">
                        <label class="field__label">Select a color:</label>
                        <select v-model="selectedColor" class="field__input">
                          <option
                            v-for="variant in product.variants"
                            :key="variant.id"
                            :value="variant.color"
                          >
                            {{ variant.color }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div v-if="sizes.length > 0" class="product-info__size">
                      <div class="radio-buttons" :class="{ 'radio-buttons--invalid': isSelectedSizeInvalid }">
                        <div class="radio-buttons__header">
                          Select a size:
                        </div>
                        <div
                          v-for="size in sizes"
                          :key="size"
                          class="radio-buttons__option"
                        >
                          <input :id="`size-${size}`" v-model="selectedSize" type="radio" name="size" :value="size">
                          <label :for="`size-${size}`">{{ size }}</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Размер порции: 
                      </font>
                    </font>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          390 г
                        </font>
                      </font>
                    </span>
                  </p>

                  <p>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Калорий: 
                      </font>
                    </font>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          680 кДж
                        </font>
                      </font>
                    </span>
                  </p>

                  <p>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Аллергии: 
                      </font>
                    </font>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Лактоза, Глютен, Горчица
                        </font>
                      </font>
                    </span>
                  </p>

                  <p>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Теги: 
                      </font>
                    </font>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Бургеры, Фастфуд, Testo
                        </font>
                      </font>
                    </span>
                  </p>

                </div>

                <!-- <input class="qty" type="number" min="1" max="20" value="1"> -->

                <!-- Add To Cart -->
                <a class="add-to-cart-btn bg-yellow ico-20 text-center" @click="addToCart">
                  <span class="flaticon-shopping-bag">
                  </span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      Добавить в корзину
                    </font>
                  </font>
                </a>

              </div>

            </div>
          </div>

        </div>	  
      </div>	  
    </section>
  </div>

</template>

<script>
import Product from '~/api/product'
import ProductGallery from '~/components/product-details/ProductGallery'
import HeaderSingle from '~/components/layouts/HeaderSingle'

export default {
  layout: 'single',
  components: { ProductGallery, HeaderSingle },
  data () {
    return {
      product: {},
      loading: false,
      selectedColor: null,
      selectedSize: null,
      isSelectedColorInvalid: false,
      isSelectedSizeInvalid: false
    }
  },
  computed: {
    productId () {
      return this.$route.params.product.split('-').slice(-1).pop()
    },
    sizes () {
      if (!this.selectedColor) {
        return []
      }
      const variant = this.product.variants.find(variant => variant.color === this.selectedColor)
      return variant.available_sizes.split(', ')
    }
  },
  created () {
    this.loadProduct()
  },
  methods: {
    async loadProduct () {
      this.loading = true
      this.product = await Product.get(this.productId)
      this.loading = false
    },
    isValid () {
      let valid = true
      if (this.product.variants && this.product.variants.length) {
        if (!this.selectedColor) {
          this.isSelectedColorInvalid = true
          valid = false
        } else {
          this.isSelectedColorInvalid = false
        }
        if (!this.selectedSize) {
          this.isSelectedSizeInvalid = true
          valid = false
        } else {
          this.isSelectedSizeInvalid = false
        }
      }
      return valid
    },
    addToCart () {
      if (this.isValid()) {
        this.$store.commit('cart/addProduct', {
          product: this.product,
          color: this.selectedColor,
          size: this.selectedSize,
          price: this.product.price
        })
      }
    }
  },
  head () {
    return {
      title: `${this.product.title} | Clothing Store`
    }
  }
}
</script>

<style scoped lang="scss">
  .add-to-cart-btn{
    cursor: pointer;
  }
</style>
