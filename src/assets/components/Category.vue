<template>
    <section class="header pb-5">
        <Header />
    </section>
    <div class="category-wrapper my-5">
        <div class="twitch-background">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:rgb(37, 37, 37);color:#fff;"><span
                            class="" style="color:red">Latest </span> Game</h2>
                </div>
            </div>
        </div>
        <div class="category-half-bg-color">
            <div class="container">
                <b-row>
                    <b-col cols="8" lg="8" xl="8" md="8">
                        <b-row>
                            <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                                <img class="category-img"
                                    src="https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg" />
                                <h6 class="category-name">Category</h6>
                            </b-col>
                            <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                                <img class="category-img"
                                    src="https://img.jakpost.net/c/2020/11/16/2020_11_16_107403_1605523385._large.jpg" />
                                <h6 class="category-name">Category</h6>
                            </b-col>
                            <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                                <img class="category-img"
                                    src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/it-takes-two-game-of-the-year.jpg?w=1000&h=600&crop=1" />
                                <h6 class="category-name">Category</h6>
                            </b-col>
                        </b-row>
                    </b-col>

                    <b-col cols="4" lg="4" xl="4" md="4">
                        <b-row>

                            <div class="caterogy-swiper-veticle">
                                <Verticleswiper />
                            </div>
                        </b-row>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div class="container">
            <b-row>
                <b-col cols="8" lg="8" xl="8" md="8">
                    <b-row>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://img.jakpost.net/c/2020/11/16/2020_11_16_107403_1605523385._large.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/it-takes-two-game-of-the-year.jpg?w=1000&h=600&crop=1" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://img.jakpost.net/c/2020/11/16/2020_11_16_107403_1605523385._large.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/it-takes-two-game-of-the-year.jpg?w=1000&h=600&crop=1" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://img.jakpost.net/c/2020/11/16/2020_11_16_107403_1605523385._large.jpg" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                        <b-col class="p-2" cols="4" lg="4" xl="4" md="4">
                            <img class="category-img"
                                src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/it-takes-two-game-of-the-year.jpg?w=1000&h=600&crop=1" />
                            <h6 class="category-name">Category</h6>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="4" lg="4" xl="4" md="4">
                    <b-row>
                        <div class="category-wrapper-side">
                            <div class="container">
                                <p class="py-3 category-side-title">Top View Category</p>
                            </div>
                            <b-row class="p-2">
                                <b-col cols="4" lg="4" xl="4" md="4">
                                    <img class="side-category-top-img" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-875-en.jpg"/>
                                </b-col>
                                <b-col cols="8" lg="8" xl="8" md="8">
                                    <h5>Game Category</h5>
                                    <b-row>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Rate: 4.5/5</p>
                                        </b-col>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Views:300000</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="4" lg="4" xl="4" md="4">
                                    <img class="side-category-top-img" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-875-en.jpg"/>
                                </b-col>
                                <b-col cols="8" lg="8" xl="8" md="8">
                                    <h5>Game Category</h5>
                                    <b-row>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Rate: 4.5/5</p>
                                        </b-col>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Views:300000</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="4" lg="4" xl="4" md="4">
                                    <img class="side-category-top-img" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-875-en.jpg"/>
                                </b-col>
                                <b-col cols="8" lg="8" xl="8" md="8">
                                    <h5>Game Category</h5>
                                    <b-row>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Rate: 4.5/5</p>
                                        </b-col>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Views:300000</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="4" lg="4" xl="4" md="4">
                                    <img class="side-category-top-img" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-875-en.jpg"/>
                                </b-col>
                                <b-col cols="8" lg="8" xl="8" md="8">
                                    <h5>Game Category</h5>
                                    <b-row>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Rate: 4.5/5</p>
                                        </b-col>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Views:300000</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="4" lg="4" xl="4" md="4">
                                    <img class="side-category-top-img" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-875-en.jpg"/>
                                </b-col>
                                <b-col cols="8" lg="8" xl="8" md="8">
                                    <h5>Game Category</h5>
                                    <b-row>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Rate: 4.5/5</p>
                                        </b-col>
                                        <b-col cols="6" lg="6" xl="6" md="6">
                                            <p>Views:300000</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>
                    </b-row>
                </b-col>
                <b-col cols="8" lg="8" xl="8" md="8">
                    <div class="container">
                        <div class="more-category-btn">
                            <p>More</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
    <div class="container something-like-category">
        <h3>Something You May Like</h3>
    </div>
    <section class="category-more-Twitch">
        <Twitch/>
    </section>
    <section class="category-more-Video">
        <Video/>
    </section>
    <section class="category-more-Footer">
        <Footer/>
    </section>
</template>

<script setup>
import Header from '@/assets/components/Header.vue'
import Verticleswiper from '@/assets/components/verticleswiper.vue'
import Footer from '@/assets/components/Footer.vue'
import Twitch from '@/assets/components/Land-Twitch.vue'
import Video from '@/assets/components/Land-video.vue'
</script>
