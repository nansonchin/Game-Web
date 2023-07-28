<template>
    <section class="Head-you">
        <Header />
    </section>
    <div class="twitch-background">
        <div class="inside-youtube-wrapper pt-5">
            <div class="youtube-element-container">
                <youtubeElement />
            </div>
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color: rgb(37, 37, 37);color:#fff;"><span
                            class="" style="color:red">GAME </span> VIDEO</h2>
                </div>
                <b-row class="you-big-left-container py-3">
                    <b-col cols="12" lg="8" xl="8" md="8">
                        <b-row>
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <Filter />
                            </b-col>
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <Search />
                            </b-col>
                            <b-col cols="4" xl="4" lg="4" md="4">
                                <SearchButton />
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="search-you-filter">Latest</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="search-you-filter">Trending</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="search-you-filter">Comment</p>
                            </b-col>
                            <b-col cols="3" xl="3" lg="3" md="3">
                                <p class="search-you-filter">View</p>
                            </b-col>
                        </b-row>
                        <b-row class="youtube-left-side-container">
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                        <b-row class="youtube-left-side-container">
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                        <b-row class="youtube-left-side-container">
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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

                        <b-row class="youtube-left-side-container">
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                            <b-col cols="12" lg="4" md="4" xl="4">
                                <div class="youtube-img-container">
                                    <img class="youtube-img" src="@/assets/image/Youtube/d5.jpg" />
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
                    <b-col cols="12" lg="4" md="4" xl="4">
                        <div class="youtube-thing-like-container">
                            <p class="something-like-youtube">SOMETHING YOU MAY LIKE</p>
                            <youtubeRight />
                        </div>
                        <div class="mt-5 youtube-thing-like-container">
                            <p class="something-like-youtube">OTHER PEOPLES ALSO INTERESETED</p>
                        </div>
                        <b-row class="mt-2">
                            <b-col cols="12" xl="4" md="4" lg="4">
                                <div class="youtube-sidebar-right-2nd-item-container">
                                    <img class="youtube-sidebar-right-2nd-img"
                                        src="https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-06a5af9381de.jpg" />
                                </div>
                            </b-col>
                            <b-col cols="12" xl="8" md="8" lg="8">
                                <p class="youtube-sidebar-right-2nd-title">Game Title</p>
                                <p class="youtube-sidebar-right-2nd-text">Game Desc</p>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2">
                            <b-col cols="12" xl="4" md="4" lg="4">
                                <div class="youtube-sidebar-right-2nd-item-container">
                                    <img class="youtube-sidebar-right-2nd-img"
                                        src="data:image/jpeg;base64,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" />
                                </div>
                            </b-col>
                            <b-col cols="12" xl="8" md="8" lg="8">
                                <p class="youtube-sidebar-right-2nd-title">Game Title</p>
                                <p class="youtube-sidebar-right-2nd-text">Game Desc</p>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2">
                            <b-col cols="12" xl="4" md="4" lg="4">
                                <div class="youtube-sidebar-right-2nd-item-container">
                                    <img class="youtube-sidebar-right-2nd-img"
                                        src="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/headline_17.jpg" />
                                </div>
                            </b-col>
                            <b-col cols="12" xl="8" md="8" lg="8">
                                <p class="youtube-sidebar-right-2nd-title">Game Title</p>
                                <p class="youtube-sidebar-right-2nd-text">Game Desc</p>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2">
                            <b-col cols="12" xl="4" md="4" lg="4">
                                <div class="youtube-sidebar-right-2nd-item-container">
                                    <img class="youtube-sidebar-right-2nd-img"
                                        src="https://twistedvoxel.com/wp-content/uploads/2022/08/the-callisto-protocol.jpeg" />
                                </div>
                            </b-col>
                            <b-col cols="12" xl="8" md="8" lg="8">
                                <p class="youtube-sidebar-right-2nd-title">Game Title</p>
                                <p class="youtube-sidebar-right-2nd-text">Game Desc</p>
                            </b-col>
                        </b-row>
                        <b-row class="mt-2">
                            <b-col cols="12" xl="4" md="4" lg="4">
                                <div class="youtube-sidebar-right-2nd-item-container">
                                    <img class="youtube-sidebar-right-2nd-img"
                                        src="https://blogs-images.forbes.com/olliebarder/files/2017/11/gundam_versus_atlas.jpg" />
                                </div>
                            </b-col>
                            <b-col cols="12" xl="8" md="8" lg="8">
                                <p class="youtube-sidebar-right-2nd-title">Game Title</p>
                                <p class="youtube-sidebar-right-2nd-text">Game Desc</p>
                            </b-col>
                        </b-row>
                        
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
import Filter from '@/assets/components/selection.vue'
import Search from '@/assets/components/search.vue'
import Footer from '@/assets/components/Footer.vue'
import SearchButton from '@/assets/components/searchbtn.vue'
import youtubeElement from '@/assets/components/youtubeElement.vue'
import youtubeRight from '@/assets/components/youtubeRight.vue'
</script>

<script>
export default{
    data(){
        return{
            config:{
                urlFull:'',
            },
            getDataArray:[],
            postData:{ data:'',language:'en'},
            submitForm:{response:''}
        };
    },
    methods:{
        getData(){
            const urlFunc='';
            this.postData.data=JSON.stringify(this.submitForm)
            const data=axios({
                url:this.config.urlFull+urlFunc,
                method:'post',
                data:this.postData,
            });
            data.then((reponse)=>{
                var data=response.data
                if(data.valid){
                    data=data.data
                    console.log(data);
                    this.getDataArray=data;
                }
            });
        }
    }
}
</script>