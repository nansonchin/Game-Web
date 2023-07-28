<template>
        <div class="land-mmorpg-wrapper">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:#fff;"><span class=""
                    style="color:red">{{$t("message.landMMORPG.lM.lMtitle1")}} </span> {{$t("message.landMMORPG.lM.lMtitle2")}}</h2>
                </div>
                <b-row>
                    <b-col cols="12" xl="6" lg="6" md="6">
                        <div @click="$router.push('/inside')" class="land-mmorpg-first" @mouseover="toggleTest = true" @mouseout="toggleTest= false">
                            <img class="land-mmorpg-big" src="@/assets/image/Land-mmorpg/elesis.png" />
                            <div class="land-content-detail">
                                <h1 >{{ $t("message.landMMORPG.lMfirst.lMFirstTitle") }}</h1>
                                <div class="land-disappear" v-show="toggleTest">
                                    <p class="land-mmorpg-paragraph" >{{ $t("message.landMMORPG.lMfirst.lMFirstDesc1") }}</p>
                                    <p class="land-mmorpg-paragraph" >{{ $t("message.landMMORPG.lMfirst.lMFirstDesc2") }}</p>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="land-2nd" cols="12" xl="6" lg="6" md="6">
                        <b-row @click="$router.push('/inside')" class="land-space">
                            <b-col cols="12" xl="5" lg="5" md="5">
                                <img class="land-mmorpg-small" src="@/assets/image/Land-mmorpg/genshin.jpg" />
                            </b-col>
                            <b-col cols="12" xl="7" lg="7" md="7">
                                <h2>{{$t("message.landMMORPG.lMSide1.lMTitle")}}</h2>
                                <p class="land-mmorpg-paragraph"> {{$t("message.landMMORPG.lMSide1.lMDesc1")}}</p>
                                <p class="land-mmorpg-more">{{$t("message.landMMORPG.lMSide1.lMDesc2")}}</p>
                            </b-col>
                        </b-row>
                        <b-row @click="$router.push('/inside')" class="land-space">
                            <b-col cols="12" xl="5" lg="5" md="5">
                                <img class="land-mmorpg-small" src="@/assets/image/Land-mmorpg/genshin.jpg" />
                            </b-col>
                            <b-col cols="12" xl="7" lg="7" md="7">
                                <h2>{{$t("message.landMMORPG.lMSide2.lMTitle")}}</h2>
                                <p class="land-mmorpg-paragraph"> {{$t("message.landMMORPG.lMSide2.lMDesc1")}}</p>
                                <p class="land-mmorpg-more"> {{$t("message.landMMORPG.lMSide2.lMDesc2")}}</p>
                            </b-col>
                        </b-row>
                        <b-row @click="$router.push('/inside')" class="land-space"  @mouseover="toggleTest2=true" @mouseout="toggleTest2=false">
                            <b-col cols="12" xl="5" lg="5" md="5">
                                <img class="land-mmorpg-small" src="@/assets/image/Land-mmorpg/genshin.jpg" />
                            </b-col>
                            <b-col cols="12" xl="7" lg="7" md="7">
                                <h2>{{$t("message.landMMORPG.lMSide3.lMTitle")}}</h2>
                                <p class="land-mmorpg-paragraph"> {{$t("message.landMMORPG.lMSide3.lMDesc1")}}</p>
                                <div class="land-disappear">
                                    <p class="land-mmorpg-more " >{{$t("message.landMMORPG.lMSide3.lMDesc2")}}</p>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12"  xl="12" lg="12" md="12" >
                        <div class="land--more px-3 py-4">
                            <p class="land--more-text cursor" @click="$router.push('/morenews')">{{$t("message.landMMORPG.lmMore")}}</p>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
</template>

<script>
export default{
    data(){
        return{
            toggleTest:false,
            toggleTest2:false
        }
    }
};  
</script>