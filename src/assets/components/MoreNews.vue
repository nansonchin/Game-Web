<template>
    <section class="header ">
        <Header />
    </section>
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
                    <p class="landing-title">{{ words.title }}</p>
                    <p class="landing-subtext">{{words.subtext }}</p>
                </div>
            </div>
        </div>

    </div>
    
    <div class="more-new-wrapper">
        <div class="container">
            <div class="land--title">
                <h2 class="land-new-bigtitle land-width" style="background-color:#fff;"><span class=""
                        style="color:red">Latest </span> Game</h2>
            </div>
            <b-row>
                <b-col class="p-5" cols="7" xl="7" lg="7" md="7">
                    <div class="inside-system-container">
                        <h4 class="more-new-text pt-2 mb-4">Latest Game</h4>
                    </div>
                    <b-row>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div  @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva1.jpg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva.jpg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva3.jpeg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva4.jpg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>

                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva5.jpg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" xl="6" lg="6" md="6">
                            <div @click="$router.push('/inside')" class="more-new-img-container">
                                <div class="container">
                                    <img class="more-new-img" src="@/assets/image/MoreNew/eva6.jpeg" />
                                    <h5 class="more-new-line1">Game Title</h5>
                                    <h6 class="more-new-line2">Title</h6>
                                    <b-row>
                                        <b-col cols="4" xl="3" lg="3" md="3">
                                            <p class="category-container">Category</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                        <b-col cols="2" lg="2" xl="2" md="2">
                                            <p class="tag-container">Tags</p>
                                        </b-col>
                                    </b-row>
                                    <p>Description ...</p>
                                </div>
                                <div class="container">
                                    <div class="more-new-morebtn">
                                        <p>More</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="more-news-loadmore">
                        <p class="more-news-loadmore-text">More</p>
                    </div>
                </b-col>
                <b-col class="p-5" cols="5" xl="5" lg="5" md="5">
                    <div>
                        <div class="inside-system-container">
                            <h4 class="more-new-text more-new-text-sm-size pt-2 mb-4">Recommend Game</h4>
                        </div>
                        <b-row @click="$router.push('/inside')" class="more-new-side my-2">
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <img class="more-side-image" src="@/assets/image/MoreNew/car1.jpeg" />
                            </b-col>
                            <b-col cols="4" xl="8" lg="8" md="8">
                                <p class="m-new-detail-side">Game Title</p>
                                <p class="m-new-detail-side">Title</p>
                                <p class="m-new-detail-side"> Desc</p>
                            </b-col>
                        </b-row>
                        <b-row @click="$router.push('/inside')" class="more-new-side my-2">
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <img class="more-side-image" src="@/assets/image/MoreNew/car1.jpeg" />
                            </b-col>
                            <b-col cols="4" xl="8" lg="8" md="8">
                                <p class="m-new-detail-side">Game Title</p>
                                <p class="m-new-detail-side">Title</p>
                                <p class="m-new-detail-side"> Desc</p>
                            </b-col>
                        </b-row>
                        <b-row @click="$router.push('/inside')" class="more-new-side my-2">
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <img class="more-side-image" src="@/assets/image/MoreNew/car1.jpeg" />
                            </b-col>
                            <b-col cols="4" xl="8" lg="8" md="8">
                                <p class="m-new-detail-side">Game Title</p>
                                <p class="m-new-detail-side">Title</p>
                                <p class="m-new-detail-side"> Desc</p>
                            </b-col>
                        </b-row>
                    </div>
                    <div>
                        <div class="inside-system-container">
                            <h4 class="more-new-text more-new-text-sm-size pt-2 mb-4">Top Categories</h4>
                        </div>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row class="more-new-category p-2">
                            <b-col cols="9" xl="9" lg="9" md="9">
                                <p class="more-new-side-category-text">Action</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="more-new-side-category-text">(3)</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col @click="$router.push('/category')">
                                <p class="more-new-side-category-loadmore">More</p>
                            </b-col>
                        </b-row>
                    </div>
                    <p class="latest-side-game-title mt-3 text-center">Video</p>
                    <b-row class="p-2">
                        <b-col cols="12" xl="12" lg="12" md="12">
                            <div class="banner-wrapper">
                                <img class="latest-side-banner" src="https://i.pinimg.com/originals/f8/34/a9/f834a95acde98541f7ef826e5f3664b9.gif" />
                                <div class=" px-2 side-banner-text">
                                    <img class="more-news-button-play" src="@/assets/image/InsideContain/button-play.png"/>
                                    <h5 class="p-3">NIER AUTOMATA</h5>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
    <section class="footer">
        <Footer />
    </section>
</template>

<script setup>
import Header from '@/assets/components/Header.vue'
import Footer from '@/assets/components/Footer.vue'
</script>

<script>
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
                { name: "https://www.latestanimenews.com/wp-content/uploads/2022/12/blueprotocol_axeguy.gif" },
                { name: "https://thumbs.gfycat.com/AcademicValuableCrayfish-size_restricted.gif" },
                { name: "https://media.tenor.com/1aoSeGNKnQMAAAAd/lich-king-power.gif" },
                { name: "https://media4.giphy.com/media/ZRouJhQpbhPzTJ2eBU/giphy.gif" },
                { name: "https://thumbs.gfycat.com/AmbitiousEuphoricCoelacanth-size_restricted.gif" },
                { name: "https://i.makeagif.com/media/8-09-2015/VjsiG0.gif" },
            ],
            words:{title:"Game",subtext:"Pellentesque habitant morbiPellentesque habitant morbi  Pellentesque habitant morbi  Pellentesque habitant morbi  tristique senectus et netus et malesuada fames ac turpis egestas."},
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