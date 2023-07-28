<template>
    <div class="background twitch-background">
        <div class="land-twitch-wrapper">
            <div class="px-1">
                <b-row>
                    <div class="container">
                        <div class="land--title">
                            <h2 class="land-new-bigtitle land-width"
                                style="background-color:rgb(37, 37, 37); color:#fff;"><span class=""
                                    style="color:#9146ff">{{$t("message.landTwitch.landTitle1")}} </span> {{$t("message.landTwitch.landTitle2")}}</h2>
                        </div>
                    </div>
                    <b-col cols="12" xl="12" lg="12" md="12">
                        <swiper :slidesPerView="3" :spaceBetween="10" :slidesPerGroup="3" :loop="true"
                            :loopFillGroupWithBlank="true" :pagination="{
                                clickable: true,
                            }" :navigation="true" :modules="modules" class="mySwiper">
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT1.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT1.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT1.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT2.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT2.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT2.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT3.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT3.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT3.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT4.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT4.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT4.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT5.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT5.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT5.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT6.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT6.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT6.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT7.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT7.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT7.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT8.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p id="twitch-paragraph">{{$t("message.landTwitch.lT8.lTStream")}}</p>
                                            <p class="category-container category-twitch" id="twitch-paragraph">{{$t("message.landTwitch.lT8.lTCategory")}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="twitch-container cursor">
                                    <img class="twitch-image" src="@/assets/image/Land-Twitch/twitch.png" />
                                    <div class="twitch-title">
                                        <h5>{{$t("message.landTwitch.lT9.lTTitle")}}</h5>
                                        <div class="twitch-detail">
                                            <p>{{$t("message.landTwitch.lT9.lTStream")}}</p>
                                            <p class="category-container category-twitch">{{$t("message.landTwitch.lT9.lTCategory")}}</p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-col>
                </b-row>
            </div>
            <div class="container">
                <b-row>
                    <b-col cols="12" xl="12" lg="12" md="12">
                        <div class="land--more px-3 py-4">
                            <p class="land--more-text cursor" style="color:#fff" @click="$router.push('/insidetwitch')">
                                {{$t("message.landTwitch.lTMore")}}</p>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script setup>
</script >

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
