<template>
    <swiper :effect="'cube'" :grabCursor="true" :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="youtube-right-sidebar-container">
                <img class="youtube-right-sidebar-img" src="https://i.pinimg.com/550x/58/d0/01/58d0011892038cb0b8efab89f714db08.jpg" />
                <div class="youtube-right-sidebar-text-container">
                    <p class="youtube-right-sidebar-text">Game Name</p>
                    <p >Game Name</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="youtube-right-sidebar-container">
                <img  class="youtube-right-sidebar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NnJ1hdaoDn_H4y9GIiNNfCYqyDZt4Pt4Iw&usqp=CAU" />
                <div class="youtube-right-sidebar-text-container">
                    <p class="youtube-right-sidebar-text">Game Name</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="youtube-right-sidebar-container">
                <img  class="youtube-right-sidebar-img" src="https://cellularnews.com/wp-content/uploads/2020/05/55-game-of-thrones-the-night-king-on-the-iron-throne-325x485.jpg" />
                <div class="youtube-right-sidebar-text-container">
                    <p class="youtube-right-sidebar-text">Game Name</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="youtube-right-sidebar-container">
                <img  class="youtube-right-sidebar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPcNHm1T7WFcL6f1DzhVyRKyd0cygclC-ug&usqp=CAU" />
                <div class="youtube-right-sidebar-text-container">
                    <p class="youtube-right-sidebar-text">Game Name</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="youtube-right-sidebar-container">
                <img  class="youtube-right-sidebar-img" src="https://cdn.mwallpapers.com/photos/celebrities/games/download-free-fire-wallpaper-hd-laura-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-ealcn.jpg" />
                <div class="youtube-right-sidebar-text-container">
                    <p class="youtube-right-sidebar-text">Game Name</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCube, Pagination],
        };
    },
};
</script>
