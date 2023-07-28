<template>
  <div class="youtube-element-wrapper">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 10,
      stretch: 100, depth: 50, modifier: 4,
      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="youtuber-swiper-container">
          <img class="you-img" src="https://i.ytimg.com/vi/UwJAAy7tPhE/maxresdefault.jpg" />
          <div class="youtube-detail-container">
            <div class="youtube-detail-container2">
              <p class="youtube-time">30:00</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="youtuber-swiper-container">
          <img class="you-img" src="https://statics.9458.com/sites/igg/www/placard/2022/07/11/225315_62ccf02b3eff93729.jpg" />
          <div class="youtube-detail-container">
            <div class="youtube-detail-container2">
              <p class="youtube-time">30:00</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="youtuber-swiper-container">
          <img class="you-img" src="https://cdn.akamai.steamstatic.com/steam/apps/1976440/capsule_616x353.jpg?t=1673248654" />
          <div class="youtube-detail-container">
            <div class="youtube-detail-container2">
              <p class="youtube-time">30:00</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="youtuber-swiper-container">
          <img class="you-img" src="https://static.zerochan.net/NIKKE%3A.The.Goddess.Of.Victory.full.3824565.jpg" />
          <div class="youtube-detail-container">
            <div class="youtube-detail-container2">
              <p class="youtube-time">30:00</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="youtuber-swiper-container">
          <img class="you-img" src="https://cdn.cloudflare.steamstatic.com/steam/apps/582660/capsule_616x353_alt_assets_16.jpg?t=1671510670" />
          <div class="youtube-detail-container">
            <div class="youtube-detail-container2">
              <p class="youtube-time">30:00</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
