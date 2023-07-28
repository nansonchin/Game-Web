<template>

    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{clickable: true,}" 
      :modules="modules" class="mySwiper v-swiper">   
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://wallpaperaccess.com/full/172735.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://assets.ppy.sh/beatmaps/1974195/covers/cover.jpg"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://lh3.googleusercontent.com/DYIaU37AgOoki1s5dPLfw-dsd724OHpVXsP41_9kpNeKl-LWx6Za0Nf6QeTT7iRsLTYgSppzkzRLkw=w2880-h1200-p-l90-rj"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://animecorner.me/wp-content/uploads/2022/01/Kobasolo-Collection-Vinyl.png"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://i.redd.it/36wjmok6an9a1.jpg"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://i.ytimg.com/vi/7u96uHP-DkA/maxresdefault.jpg"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://i.ytimg.com/vi/HCqT3VYV_Ec/maxresdefault.jpg"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe29HOJz55P8DgjrvEmPrfzr5ppaBmnpkxAQ&usqp=CAU"/>
        </div>
      </swiper-slide>
      <swiper-slide class="v-swiper" >
        <div class="v-swiper-banner">
          <img class="v-swiper-banner-img" src="https://lh3.googleusercontent.com/sBYflQGGM4FFLXMuac67U3-6p1iGHs531EiwaqLGmaBlNwjOjwT-LTWjiiCl4-VeIQGDxWjY4xjLm9w=w2880-h1200-p-l90-rj"/>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/pagination";
  
//   import "./style.css";
  
  // import required modules
  import { Mousewheel, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Mousewheel, Pagination],
      };
    },
  };
  </script>
  