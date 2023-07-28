<template>
    <div class="twitch-background">
        <div class="land-vider-wrapper">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:rgb(37, 37, 37);color:#fff"><span
                            class="" style="color:red">GAME </span> Trailer</h2>
                </div>
                <b-row>
                    <b-col>
                        <swiper :loop="true" :slidesPerView="4" :spaceBetween="30"
                            :centeredSlides="true" :pagination="{clickable: true,}" :modules="modules" class="mySwiper"
                            :autoplay="autoplay">
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/1.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/2.jpeg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/3.jpeg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/4.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/5.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/6.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/7.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/8.jpg" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="land-videro-container">
                                    <img class="land-video-image" src="@/assets/image/Land-video/9.jpeg" />
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" xl="12" lg="12" md="12">
                        <div class="land--more px-3 py-4">
                            <p @click="$router.push('/insideyoutube')" class="land--more-text cursor" style="color:#fff">See More</p>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y, Autoplay } from "swiper";

const onSwiper = (swiper) => {
}
const onSlideChange = () => {
}
let swiper_options = {
    autoplay: {
        delay: 700,
        disableOnInteraction: false
    },

    loop: true,
    speed: 500,
}

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, A11y, Autoplay],
            autoplay: {
                delay: 500,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false
            },
            isPauseSlider:false
        };
    },
    methods:{
        stopSwiperMouseEnter(){
            this.isPauseSlider = !this.isPauseSlider
            if(this.isPauseSlider){
                this.autoplay.stop()
            }else{
                this.autoplay.start()
            }
        }
    }
};

</script>
  