<template>
        <div class="land-fps-wrapper">
            <div class="container">
                <div class="land--title">
                    <h2 class="land-new-bigtitle land-width" style="background-color:#fff;"><span class=""
                    style="color:red">{{ $t("message.fpsGame.fpsGameTitle1") }}</span>{{ $t("message.fpsGame.fpsGameTitle2") }}</h2>
                </div>
                <b-row class="p-2">
                    <b-col class="cursor" @click="$router.push('/inside')" cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/apex.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame1.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame1.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="cursor" @click="$router.push('/inside')" cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/Cod.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame2.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame2.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="cursor" @click="$router.push('/inside')"  cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/mat.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame3.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame3.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="p-2">
                    <b-col class="cursor" @click="$router.push('/inside')" cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/ow2.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame4.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame4.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="cursor" @click="$router.push('/inside')" cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/uber.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame5.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame5.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="cursor" @click="$router.push('/inside')" cols="12"  xl="4" lg="4" md="4">
                        <div class="fps-container">
                            <img class="fps-image" src="@/assets/image/Land-Fps/valorant.jpg"/>
                            <div class="fps-text">
                                <h4 class="fps-title">{{$t("message.fpsGame.fpsGame6.fpsGameTitle")}}</h4>
                                <p class="category-container">{{$t("message.fpsGame.fpsGame6.fpsCategory")}}</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12"  xl="12" lg="12" md="12" >
                        <div class="land--more px-3 py-4">
                            <p class="land--more-text cursor" @click="$router.push('/morenews')">{{ $t("message.fpsGame.fpsMore") }}</p>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
</template>
<script setup>
</script>