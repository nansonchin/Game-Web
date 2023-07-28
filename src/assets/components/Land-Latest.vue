<template>
    <div class="land-latest-wrapper">
        <div class="container">
            <div class="land--title">
                <h2 class="land-new-bigtitle land-width" style="background-color:#fff;"><span class=""
                        style="color:red">{{ $t("message.landLatestNews.landRight.landTitle1") }} </span> {{ $t("message.landLatestNews.landRight.landTitle2") }}</h2>
            </div>
            <b-row>
                <b-col cols="12" xl="8" lg="8" md="8">
                    <b-row class="cursor" @click="$router.push('/inside')">
                        <b-col cols="12" xl="7" lg="7" md="7">
                            <b-row> 
                                <b-col cols="4" xl="2" lg="2" md="2">
                                    <p class="category-container">{{$t("message.landLatestNews.landRight.landR1.landCat")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">{{$t("message.landLatestNews.landRight.landR1.landTag1")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">">{{$t("message.landLatestNews.landRight.landR1.landTag2")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">">{{$t("message.landLatestNews.landRight.landR1.landTag3")}}</p>
                                </b-col>
                            </b-row>
                            <h5>"{{$t("message.landLatestNews.landRight.landR1.landTitle")}}</h5>
                            <p>"{{$t("message.landLatestNews.landRight.landR1.landDesc")}}</p>
                            <p>{{$t("message.landLatestNews.landRight.landR1.landBy")}} </p>
                        </b-col>
                        <b-col cols="4" xl="5" lg="5" md="5">
                            <img class="latest-image" src="@/assets/image/Land-latest/ff15.jpeg" />
                        </b-col>
                    </b-row>

                    <b-row class="cursor" @click="$router.push('/inside')">
                        <b-col cols="12" xl="7" lg="7" md="7">
                            <b-row>
                                <b-col cols="4" xl="2" lg="2" md="2">
                                    <p class="category-container">{{$t("message.landLatestNews.landRight.landR2.landCat")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">{{$t("message.landLatestNews.landRight.landR2.landTag1")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">{{$t("message.landLatestNews.landRight.landR2.landTag2")}}</p>
                                </b-col>
                                <b-col cols="2" lg="2" xl="2" md="2">
                                    <p class="tag-container">{{$t("message.landLatestNews.landRight.landR2.landTag3")}}</p>
                                </b-col>
                            </b-row>
                            <h5>{{$t("message.landLatestNews.landRight.landR2.landTitle")}}</h5>
                            <p>{{$t("message.landLatestNews.landRight.landR2.landDesc")}}</p>
                            <p>{{$t("message.landLatestNews.landRight.landR2.landBy")}} </p>
                        </b-col>
                        <b-col cols="4" xl="5" lg="5" md="5">
                            <img class="latest-image" src="@/assets/image/Land-latest/ff16.jpg" />
                        </b-col>
                    </b-row>

                    <b-row class="cursor" @click="$router.push('/inside')">
                        <b-col cols="12" xl="7" lg="7" md="7">
                            <b-row>
                                <b-col cols="4" xl="2" lg="2" md="2">
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
                            <h5>Yakuza : Lorem AHs Phhsieum asdrk lasii suiume sadk</h5>
                            <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis
                                a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat....</p>
                            <p>By : </p>
                        </b-col>
                        <b-col cols="4" xl="5" lg="5" md="5">
                            <img class="latest-image" src="@/assets/image/Land-latest/yakuza.jpg" />
                        </b-col>
                    </b-row>

                    <b-row class="cursor" @click="$router.push('/inside')">
                        <b-col cols="12" xl="7" lg="7" md="7">
                            <b-row>
                                <b-col cols="4" xl="2" lg="2" md="2">
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
                            <h5>Judgement : Lorem AHs Phhsieum asdrk lasii suiume sadk</h5>
                            <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis
                                a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat....</p>
                            <p>By : </p>
                        </b-col>
                        <b-col cols="4" xl="5" lg="5" md="5">
                            <img class="latest-image" src="@/assets/image/Land-latest/judge.jpeg" />
                        </b-col>
                    </b-row>

                    <b-row class="cursor" @click="$router.push('/inside')">
                        <b-col cols="12" xl="7" lg="7" md="7">
                            <b-row>
                                <b-col cols="4" xl="2" lg="2" md="2">
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
                            <h5>Persona 5 : Lorem AHs Phhsieum asdrk lasii suiume sadk</h5>
                            <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis
                                a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat....</p>
                            <p>By : </p>
                        </b-col>
                        <b-col cols="4" xl="5" lg="5" md="5">
                            <img class="latest-image" src="@/assets/image/Land-latest/p5.jpeg" />
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" xl="12" lg="12" md="12">
                            <div class="cursor land--more px-3 py-4">
                                <p class="land--more-text" style="color:#000" @click="$router.push('/morenews')">See More</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="side-latest" cols="12" xl="4" lg="4" md="4">
                    <div class="side-recent-game-banner">
                        <b-row class="game-board-text">
                            <b-col cols="5" xl="6" lg="6" md="6">
                                <p @click="isActive = true" :class="[isActive && 'game']"
                                    class="game-board-title recent-game text-center p-3">Recent Game</p>
                            </b-col>
                            <b-col cols="5" xl="6" lg="6" md="6">
                                <p @click="isActive = false" :class="[!isActive && 'game']"
                                    class="game-board-title top-game text-center p-3">Top Game</p>
                            </b-col>
                        </b-row>
                        <!-- recent game -->
                        <div class="recent-game-context " v-if="isActive">
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/elden.jpg" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>Elden Ring</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/sdo.jpeg" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>SDO</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/maple.jpg" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>Maple Story</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                        </div>

                        <!-- top game -->
                        <div class="recent-game-context" v-else>
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/ares.jpg" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>Ares Rise of Guardian</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/blue.jpg" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>Blue Protocol</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                            <b-row class="p-2">
                                <b-col cols="12" xl="4" lg="4" md="4">
                                    <img class="latest-side-image" src="@/assets/image/Land-latest/forza6.png" />
                                </b-col>
                                <b-col cols="12" xl="8" lg="8" md="8">
                                    <h6>Froza Horizon 5</h6>
                                    <p>Rate : 4.5/5.0</p>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                    <p class="latest-side-game-title mt-3 text-center">Banner</p>
                    <b-row class="p-2">
                        <b-col cols="12" xl="12" lg="12" md="12">
                            <div class="banner-wrapper">
                                <img class="latest-side-banner" src="@/assets/image/Land-latest/2b.jpg" />
                                <div class="side-banner-text">
                                    <h5 class="p-2">NIER AUTOMATA</h5>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            show: true,
            number: 0,
        }
    },
    methods: {
        checkShow() {
            if (this.show) {
                this.number = 1
            }
            else {
                this.number = 0
            }
        },
        checkHide() {
            if (this.hidden) {
                this.number = 0
            }
            else {
                this.number = 1
            }
        }
    }
}
</script>