<template>
  <div>
    <HeaderSingle :product="product" />
    <div class="cart-message text-center">
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
  </div>
</template>

<script>
import HeaderSingle from "~/components/layouts/HeaderSingle";


export default {
  layout: "single",
  components: { HeaderSingle },
  data() {
    return {
      product: {
        title: "Спасибо за заявку!"
      }
    };
  },
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
