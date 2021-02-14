<template>
  <VueSlickCarousel
    :arrows="false"
    :dots="true"
    :autoplay="true"
    :autoplaySpeed="3000"
    :swipe="false"
  >
    <!-- <div id="hero-12" class="bg-02 hero-section division" :style="`background-image: url(../images/bg-02.jpg);`">
      <div class="container text-center">
        <div class="row d-flex align-items-center">
          <div class="col-12 w-100">
            <div class="hero-12-txt white-color text-center">
              <h2 class="salmon-color">Holiday<br>Sushi</h2>
              <h4 class="p-xl lightgrey-color">
                Доставка суши и пиццы премиум-класса в Геленджике
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="slider"><img src="~/assets/img/bg1.jpg" alt=""><img src="~/assets/img/bg2mb.jpg" alt=""></div>
    <!-- <div class="slider"><img src="~/assets/img/bg2.jpg" alt=""><img src="~/assets/img/bg2mb.jpg" alt=""></div> -->
    
  </VueSlickCarousel>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
};
</script> 

<style>
.slider{
  height: 100vh;
}
.slider img {
  width: 100%;
}
.slider img:first-child{
    display: block;
  }
  .slider img:last-child{
    display: none;
  }
  .salmon-color{
    padding-top: 60px;
  }
@media (max-width: 772px){
  /* .slider img {
    width: auto;
  height: 100%;
} */
  .slider{
    height: 100vh;
    padding-top: 80px;
  }
  .slider img:first-child{
    display: none;
  }
  .slider img:last-child{
    display: block;
  }
  .salmon-color{
    padding-top: 120px;
  }
}
</style>