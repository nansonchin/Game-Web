<template>
    <div class="landing-wrapper">
        <div class="landing-swiper" @mouseover="toggleTest = true" @mouseout="toggleTest= false">
            <swiper :effect="'fade'" :loop="true" :autoplay="true" :navigation="true" :pagination="{
                clickable: true,}" :modules="modules" class="mySwiper">
                <swiper-slide v-for="c in caro">
                    <img class="landing-image" :src="c.name" />
                </swiper-slide>
            </swiper>
            <div class="landing-word" v-show="toggleTest">
                <div class="landing-text" v-binds="words"  >
                    <p class="landing-title">{{$t("message.landing.landingTitle") }}</p>
                    <p class="landing-subtext">{{$t("message.landing.landingDesc") }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay, A11y } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            caro: [
                { name: "./src/assets/image/Landing/apex.jpg" },
                { name: "./src/assets/image/Landing/ares.jpg" },
                { name: "./src/assets/image/Landing/blue.jpg" },
                { name: "./src/assets/image/Landing/call.jpg" },
                { name: "./src/assets/image/Landing/ddt.jpg" },
                { name: "./src/assets/image/Landing/xdefiant.jpg" },
            ],
            toggleTest:false,
        }

    },
    setup() {
        return {
            modules: [EffectFade, Navigation, Pagination, Autoplay, A11y],
        };
    },
};
</script>
  