<template>
    <swiper :slidesPerView="2" :centeredSlides="false" :slidesPerGroupSkip="1" :grabCursor="true" :keyboard="{
        enabled: true,
    }" :breakpoints="{
    '769': {
        slidesPerView: 2,
        slidesPerGroup: 2,
    },
}" :scrollbar="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://i.gifer.com/fyAf.gif" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://media.tenor.com/wSTCtXPgkbwAAAAd/summit-streamer.gif" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://i.gifer.com/fyAk.gif" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVkQ5NahWyT74nlyPvuRqsVK7XVZI1wpyoA&usqp=CAU" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://thumbs.gfycat.com/UnselfishBelatedDinosaur-max-1mb.gif" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="twitch-head-gif-container">
                <img class="twitch-head-gif"
                    src="https://j.gifs.com/KRB49q.gif" />
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Keyboard, Scrollbar, Navigation, Pagination],
        };
    },
};
</script>
