<template>
        <div class="land-twitch-wrapper">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:#fff; color:#000;"><span
                            class="" style="background-color:#000;color:purple">Twitch </span> GAME</h2>
                </div>
            </div>
            <div class="px-1">
                <b-row>
                    <b-col cols="12" xl="12" lg="12" md="12">
                        <swiper :slidesPerView="3" :spaceBetween="10" :slidesPerGroup="3" :loop="true"
                            :loopFillGroupWithBlank="true" :pagination="{
                                clickable: true,
                            }" :navigation="true" :modules="modules" class="mySwiper">
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">Streamer Name</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">Category
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>Game Name</h5>
                                        <div class="twitch-detail">
                                            <p>Streamer Name</p>
                                            <p class="category-container category-twitch">Category</p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-col>
                </b-row>
            </div>
        </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>
