<template>
    <section class="header">
        <Header />
    </section>
    <div class="inside-wrapper">
        <div class="inside-image-container">
            <img class="inside-image" src="@/assets/image/InsideContain/pso.jpeg" />
            <div class="btn-play">
                <span class="left-btn">
                    <img class="btn-left-image" src="@/assets/image/InsideContain/button-left.png" />
                    <img class="btn-left-fill" src="@/assets/image/InsideCOntain/btn-left-fill.png" />
                </span>
                <img class="btn-play-image" src="@/assets/image/InsideContain/button-play.png" />
                <span class="right-btn">
                    <img class="btn-right-image" src="@/assets/image/InsideContain/button-right.png" />
                    <img class="btn-right-fill" src="@/assets/image/InsideCOntain/btn-right-fill.png" />
                </span>
            </div>
            <p class="inside-btn">To Official Page</p>
        </div>
        <div class="container pt-4">
            <b-row class="py-4">
                <!-- text-side -->
                <b-col cols="5" lg="8" xl="8" md="8">
                    <div class="inside-image-text">
                        <h4 class="inside-title">Phantasy Star Online 2 New Genesis</h4>
                    </div>
                    <b-row>
                        <b-col cols="2" lg="2" xl="2" md="2">
                            <p class="c-category">Category</p>
                        </b-col>
                        <b-col cols="1" lg="1" xl="1" md="1">
                            <p class="c-tag">Tags</p>
                        </b-col>
                        <b-col cols="1" lg="1" xl="1" md="1">
                            <p class="c-tag">Tags</p>
                        </b-col>
                        <b-col cols="1" lg="1" xl="1" md="1">
                            <p class="c-tag">Tags</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" lg="12" xl="12" md="12">
                            <swiper :pagination="{
                                type: 'progressbar',
                            }" :navigation="true" :modules="modules" class="mySwiper">
                                <swiper-slide v-for="i in insideImage">
                                    <img class="inside-slider-image" :src="i.src" />
                                </swiper-slide>
                            </swiper>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" lg="12" xl="12" md="12">
                            <p class="py-3">Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
                                amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                                Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                                Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
                                fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
                                lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
                                dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                                facilisis luctus, metus</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" lg="12" xl="12" md="12">
                            <h4 class="py-3 inside-title">Platform</h4>
                            <b-row>
                                <b-col cols="3" lg="3" xl="3" md="3">
                                    <i class="f-icon fab fa-windows"></i>
                                </b-col>
                                <b-col cols="3" lg="3" xl="3" md="3">
                                    <i class="f-icon fab fa-playstation"></i>
                                </b-col>
                                <b-col cols="3" lg="3" xl="3" md="3">
                                    <i class="f-icon fab fa-steam"></i>
                                </b-col>
                                <b-col cols="3" lg="3" xl="3" md="3">
                                    <i class="f-icon fab fa-xbox"></i>
                                </b-col>

                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="pt-5" cols="12" lg="12" xl="12" md="12">
                            <div class="inside-system-container">
                                <b-row>
                                    <b-col cols="6" lg="6" xl="6" md="6">
                                      <h4  @click="isActive = true" :class="[isActive && 'insideactive']" class="inside-system pt-2 ">Minimun System Requirement :</h4>
                                    </b-col>
                                    <b-col cols="6" lg="6" xl="6" md="6">
                                      <h4  @click="isActive = false" :class="[!isActive && 'insideactive']" class="inside-system pt-2"> Recommend System Requirement :</h4>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="inside-system-detail-wrapper">
                                <div class="minimun-system py-3" v-if="isActive">
                                    <!-- <h6 class="inside-system-minimun">Minimun System Requirement :</h6> -->
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/cpu.png"/>
                                        CPU : Intel Core i5-9600K (3.7 GHz) OR AMD Ryzen 5
                                        3600 (3.60 GHz)</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/ram.png"/>
                                        RAM : 8 GB RAM</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/gpu.png"/>
                                        GPU : NVIDIA GeForce GTX 1660 Ti OR AMD Radeon RX 590
                                    </p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/dx.png"/>
                                        DX : Version 12</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/os.png"/>
                                        OS : Windows 10 64-bit</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/sto.png"/>
                                        STO : 45 GB available space</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/res.png"/>
                                        RES : 1080p / 60fps / Low Quality Settings</p>
                                </div>
                                <div class="recommend-system py-3" v-else>
                                    <!-- <h6 class="inside-system-recommend">Recommend System Requirement :</h6> -->
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/cpu.png"/>
                                        CPU : Intel Core i7-10700K (3.8 GHz) or AMD Ryzen 5
                                        5600X (3.7 GHz)</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/ram.png"/>
                                        RAM : 16 GB RAM</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/gpu.png"/>
                                        GPU : NVIDIA GeForce RTX 2070 or AMD Radeon RX 5700
                                        XT</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/dx.png"/>
                                        DX : Version 12</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/os.png"/>
                                        OS : Windows 10 64-bit</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/sto.png"/>
                                        STO : 45 GB available space</p>
                                    <p class="system-require-text">
                                        <img class="inside-system-image-logo" src="@/assets/image/InsideContain/res.png"/>
                                        RES : 1080p / 60fps / Low Quality Settings</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>

                </b-col>

                <!-- sidebar -->
                <b-col class="text" cols="4" lg="4" xl="4" md="4">
                    <b-row class="py-4">
                        <b-col cols="12" lg="12" xl="12" md="12">
                            <div class="game-detail p-2">
                                <h6>Released Date : dd/mm/yyyy</h6>
                                <h6>Developer : name</h6>
                                <h6>Publisher : name</h6>
                                <h6>Player Played : 111111</h6>
                                <h6>Review : Mostly Positive</h6>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="rating-wrapper">
                        <b-row>
                            <!-- circle side -->
                            <b-col class="circle-wrapper" cols="6" lg="6" xl="6" md="6">
                                <div class="circle">
                                    <h4 class="data-text white-color w-50">Rating</h4>
                                    <p class="data-text white-color inside-num"><span class="inside-big-num">7.</span>0</p>
                                </div>
                            </b-col>
                            <!-- rating number side -->
                            <b-col cols="12" lg="6" xl="6" md="6">
                                <h6 class="data-text pt-3 white-color" >Overall Rating</h6>
                                <div class="rating-data">
                                    <b-row>
                                        <b-col col="4" lg="4" md="4">
                                            <p class="data-text white-color ">Design</p>
                                        </b-col>
                                        <b-col col="2" lg="2" md="2">
                                            <p class="data-text white-color ">4.0</p>
                                        </b-col>
                                        <b-col class="center-bar" col="5" lg="5" md="5">
                                            <div class="bar-wrapper">
                                                <span class="bar">
                                                    <s data-value="40" style="width: 50.37px;"></s>
                                                </span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col col="4" lg="4" md="4">
                                            <p class="data-text white-color">Play</p>
                                        </b-col>
                                        <b-col col="2" lg="2" md="2">
                                            <p class="data-text white-color">3.0</p>
                                        </b-col>
                                        <b-col class="center-bar" col="5" lg="5" md="5">
                                            <div class="bar-wrapper">
                                                <span class="bar">
                                                    <s data-value="40" style="width: 30.37px;"></s>
                                                </span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col col="4" lg="4" md="4">
                                            <p class="data-text white-color">Story</p>
                                        </b-col>
                                        <b-col col="2" lg="2" md="2">
                                            <p class="data-text white-color">4.0</p>
                                        </b-col>
                                        <b-col class="center-bar" col="5" lg="5" md="5">
                                            <div class="bar-wrapper">
                                                <span class="bar">
                                                    <s data-value="40" style="width: 50.37px;"></s>
                                                </span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col col="4" lg="4" md="4">
                                            <p class="data-text white-color">Value</p>
                                        </b-col>
                                        <b-col col="2" lg="2" md="2">
                                            <p class="data-text white-color">4.0</p>
                                        </b-col>
                                        <b-col class="center-bar" col="5" lg="5" md="5">
                                            <div class="bar-wrapper">
                                                <span class="bar">
                                                    <s data-value="40" style="width: 50.37px;"></s>
                                                </span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col col="4" lg="4" md="4">
                                            <p class="data-text white-color">Features</p>
                                        </b-col>
                                        <b-col col="2" lg="2" md="2">
                                            <p class="data-text white-color">4.0</p>
                                        </b-col>
                                        <b-col class="center-bar" col="5" lg="5" md="5">
                                            <div class="bar-wrapper">
                                                <span class="bar">
                                                    <s data-value="40" style="width: 50.37px;"></s>
                                                </span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <b-row>
                        <b-col class="py-5" col="12" lg="12" md="12" xl="12">
                            <div class="form-container  ">
                                <h5 class="inside-latest">Latest Game Form</h5>
                                <div class="latest-game-list-wrapper">
                                    <p class="latest-game-list">World Of Tank</p>
                                    <p class="latest-game-list">World Of Tank</p>
                                    <p class="latest-game-list">World Of Tank</p>
                                    <p class="latest-game-list">World Of Tank</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="py-5" cols="12" lg="12" xl="12" md=12>
                    <div class="inside-system-container">
                        <h4 class="inside-related-title pt-2">Related Game</h4>
                    </div>
                    <b-row>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other1.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other2.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other3.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other4.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other5.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other6.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other7.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
                            </div>
                        </b-col>
                        <b-col col="12" lg="3" xl="3" md="3">
                            <div class="inside-related-container">
                                <img class="inside-related-game" src="@/assets/image/InsideContain/other8.jpg" />
                                <h4 class="inside-related-name">Game Name</h4>
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
    data() {
        return {
            isActive:true,
            insideImage: [
                { src: "src/assets/image/InsideContain/pso2.jpg" },
                { src: "src/assets/image/InsideContain/pso3.jpg" },
                { src: "src/assets/image/InsideContain/pso4.png" },

            ]
        }
    }
};
</script>
