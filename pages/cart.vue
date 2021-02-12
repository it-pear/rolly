<template>
  <div>
    <HeaderSingle :product="product" />
    <div
      v-show="status === statuses.creating"
      class="preloader preloader--fullpage"
    />
    <div v-show="status === statuses.success" class="cart-message text-center">
      <br /><br />
      <div class="cart-message__icon cart-message__icon__fail">
        <img src="~/assets/icons/check.svg" alt="success" />
      </div>
      <br />
      <div class="cart-message__title">
        <h2>
          Ваш заказ в обработке, наш менеджер в скором времени вам перезвонит
          для уточнения заказа
        </h2>
      </div>
      <br /><br />
    </div>
    <div class="cart" :class="{ loading: status === statuses.creating }">
      <div v-show="status !== statuses.success">
        <cart-products-list />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                v-show="status === statuses.fail"
                class="cart-message text-center"
              >
                <br />
                <div class="cart-message__icon">
                  <img src="~/assets/icons/x-circle.svg" alt="fail" />
                </div>
                <div class="cart-message__title">
                  Что-то пошло не так. Попробуйте оформить заказ еще раз или
                  свяжитесь с нами по телефону.
                </div>
              </div>
              <div class="cart-checkout form-holder">
                <form @submit.prevent="onSubmit" action="asdasd">
                  <div
                    class="field"
                    :class="{ 'field--invalid': isFullNameInvalid }"
                  >
                    <label class="field__label" name="">Ваше имя</label>
                    <input
                      v-model="fullName"
                      type="text"
                      class="field__input form-control"
                      required
                    />
                  </div>
                  <br />
                  <div
                    class="field"
                    :class="{ 'field--invalid': isEmailInvalid }"
                  >
                    <label class="field__label">Ваш телефон</label>
                    <input
                      v-model="email"
                      type="tel"
                      class="field__input form-control"
                      required
                    />
                  </div>
                  <div class="field">
                    <button
                      type="submit"
                      class="btn btn-md btn-red tra-red-hover btn--primary btn--large"
                    >
                      Заказать
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductsList from "~/components/cart/CartProductsList";
import HeaderSingle from "~/components/layouts/HeaderSingle";
const querystring = require("querystring");

const cartStatus = {
  init: 0,
  creating: 1,
  success: 2,
  fail: 3
};

export default {
  layout: "single",
  components: { CartProductsList, HeaderSingle },
  data() {
    return {
      product: {
        title: "Корзина"
      },
      fullName: "",
      email: "",
      isFullNameInvalid: false,
      isPhoneInvalid: false,
      status: cartStatus.init,
      statuses: cartStatus
    };
  },
  methods: {
    isValid() {
      let valid = true;
      if (this.fullName.length < 1) {
        this.isFullNameInvalid = true;
        valid = false;
      } else {
        this.isFullNameInvalid = false;
      }
      if (this.email.length < 10) {
        this.isEmailInvalid = true;
        valid = false;
      } else {
        this.isEmailInvalid = false;
      }
      return valid;
    },
    async onSubmit(e) {
      if (this.isValid()) {
        this.status = cartStatus.creating;
        const success = await this.$store.dispatch("cart/submit", {
          fullName: this.fullName,
          email: this.email
        });
        this.status = success ? cartStatus.success : cartStatus.fail;
        e.preventDefault();
        this.$axios
        .post(
          "/sendMail.php",
          querystring.stringify(this.fullName, this.email)
        )
        .then(res => {
          this.sent = true;
        });
      }
    }
  }
};
</script>

<style lang="scss">
@media (max-width: 772px) {
  .cart-product-img {
    float: none !important;
    width: 100%;
    text-align: center;
  }
  .cart-product-img img {
    max-height: 300px;
    max-width: 100%;
    margin: 20px auto;
  }
}
.cart-message__icon__fail img {
  width: 80px;
}
</style>
