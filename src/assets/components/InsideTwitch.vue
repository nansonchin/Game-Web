<template>
    <section class="backgroundhead">
        <Header />
    </section>
    <div class="inside-twitch-wrapper">
        <b-row class="top-height-twitch">
            <twitchElement />
        </b-row>
        <section class="twitch pb-5">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:white; color:#black;"><span
                            class="" style="color:#9146ff">Twitch </span> GAME</h2>
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
        </section>
        <div class="twitch-background">
            <div class="container">
                <b-row class="py-5">
                    <b-col cols="3" lg="3" md="3" xl="3">
                        <div class="twitch-category-container">
                            <b-row class="twitch-wrapper">
                                <b-col cols="6" xl="6" lg="6" md="6">
                                    <p @click="isActive = true" :class="[isActive && 'twitch-active']"
                                        class="twitch-category"> Category</p>
                                </b-col>
                                <b-col cols="6" xl="6" lg="6" md="6">
                                    <p @click="isActive = false" :class="[!isActive && 'twitch-active']"
                                        class="twitch-search"> Search</p>
                                </b-col>
                            </b-row>
                            <b-row v-if="isActive">
                                <div class="category-twitch-list">
                                    <ul>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                        <li class="t-category-list p-1">Category List</li>
                                    </ul>
                                </div>
                                <div class="twitch-page">
                                    <el-pagination small layout="prev, pager, next" :total="50" />
                                </div>
                            </b-row>
                            <b-row v-else>
                                <Search />
                            </b-row>
                        </div>
                    </b-col>
                    <b-col cols="9" lg="9" md="9" xl="9">
                        <b-row class="py-3">
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="py-3">
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="py-3">
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch1.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="py-3">
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="3" md="3" xl="3">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/InsideTwitch/twitch2.png" />
                                    <div class="youtube-btn-container">
                                        <b-row class="youtube-btn-wrapper">
                                            <b-col cols="4" lg="4" xl="4" md="4">
                                                <img class="youtube-btn" src="@/assets/image/Youtube/button-play.png" />
                                            </b-col>
                                            <b-col class="d-flex justify-content-center" cols="7" lg="7" xl="7" md="7">
                                                <h5 class="youtube-gameName">Game Name</h5>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="loadMore p-3">
                            <p class="no-more">No More Content To Shows</p>
                        </div>
                    </b-col>
                </b-row>
            </div>

        </div>
    </div>
    <section class="footer">
        <Footer />
    </section>
</template>
<script setup>
import Header from '@/assets/components/Header.vue'
import Search from '@/assets/components/search.vue'
import Footer from '@/assets/components/Footer.vue'
import twitchElement from '@/assets/components/twitchElement.vue'
</script>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Navigation} from "swiper";

export default {
    components: {
            Swiper,
            SwiperSlide,
    },
    data() {
        return {
            isActive: "true",
        }
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },

}
</script>