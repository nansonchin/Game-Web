<template>
    <div class="sign-up-wrapper ">
        <div class="sign-up-bg-animated">
            <div class="center-signup">
                <div class="container">
                    <div class="container">
                        <b-row class="">
                            <b-col class="glass-signup sign-up-height1-padding" cols="6" lg="6" xl="6" md="6">
                                <div>
                                    <i @click="$router.push('/signup')" class="triangle-back fa-regular fa-chevron-left"></i>
                                </div>
                                <div class="sign-up-img">
                                    <img class="hc-sign-up-img" src="@/assets/image/Header/hc.jpg" />
                                    <p class="sign-up-text">HC's Analysis</p>
                                </div>

                            </b-col>
                            <b-col class=" glass-signup sign-up-height2-padding" cols="6" lg="6" xl="6" md="6">
                                <div class="sign-up-right-side-container" v-if="isActive">
                                    <div class="signup-container">
                                        <div class="signup-title-container text" data-text=" Forgot">
                                            Forgot Account?
                                        </div>
                                        <ForgotElement />
                                    </div>
                                    <b-row>
                                        <b-col class="btn-submit-signup-container" cols="12" lg="12" xl="12" md="12">
                                            <el-button class="btn-signup-submit" type="">Proceed</el-button>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-2">
                                        <ForgotResElement />
                                    </b-row>
                                    <b-row>
                                        <b-col class="btn-submit-signup-container" cols="12" lg="12" xl="12" md="12">
                                            <el-button class="btn-signup-submit" type="">Enter</el-button>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ForgotElement from "@/assets/components/forgotElement.vue"
import ForgotResElement from "@/assets/components/forgotResPassword.vue"
</script>

<script>
export default {
    data() {
        return {
            isActive: true,
        }

    },
}
</script>