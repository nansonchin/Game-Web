<template>
    <div class="sign-up-wrapper ">
        <div class="sign-up-bg-animated">
            <div class="center-signup">
                <div class="container">
                    <div class="container">
                        <b-row class="">
                            <b-col class="glass-signup sign-up-height1-padding" cols="6" lg="6" xl="6" md="6">
                                <div>
                                    <i @click="$router.push('/')" class="triangle-back fa-regular fa-chevron-left"></i>
                                </div>
                                <div class="sign-up-img">
                                    <img class="hc-sign-up-img" src="@/assets/image/Header/hc.jpg" />
                                    <p class="sign-up-text">HC's Analysis</p>
                                </div>
                                <b-row>
                                    <b-col cols="12" xl="12" lg="12" md="12">
                                        <div class="forgot-acc-container">
                                            <p>Forgot Your Account? <span @click="$router.push('/forgot')" class="forgot-click-btn">Click Here</span>
                                            </p>
                                        </div>
                                    </b-col>
                                    <b-col cols="12" xl="12" lg="12" md="12">
                                        <div class="forgot-acc-container">
                                            <p><span @click="$router.push('/register')" class="forgot-click-btn">CREATE AN ACCOUNT</span>
                                            </p>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class=" glass-signup sign-up-height2-padding" cols="6" lg="6" xl="6" md="6">
                                <div class="sign-up-right-side-container" v-if="isActive">
                                    <div class="signup-container">
                                        <div class="signup-title-container text" data-text="SignUp">
                                            Sign Up
                                        </div>
                                        <SignUpElement />
                                    </div>
                                    <b-row>
                                        <b-col cols="12" xl="12" md="12" lg="12">
                                            <RememberLogin />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col class="btn-submit-signup-container" cols="12" lg="12" xl="12" md="12">
                                            <el-button class="btn-signup-submit" type="">Log In</el-button>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <b-col cols="12" xl="12" lg="12" md="12">
                                            <p class="signup-selection-login-word">OR <span>LOGIN WITH</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12" xl="12" md="12">
                                            <div class="login-icon-container">
                                                <img class="login-with-icon" src="https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740&t=st=1673490834~exp=1673491434~hmac=81ecf968c5c43dfcde9c3aaf06a2251db77ee12b453298acde0269e3905f4d47"/>
                                                <img class="login-with-icon" src="https://cdn-icons-png.flaticon.com/512/733/733558.png?w=740&t=st=1673491107~exp=1673491707~hmac=44a4908a9f191d79b3be8fab695f29107d472d636aeef4d10a2877ea0a96da1c"/>
                                                <img class="login-with-icon" src="https://cdn-icons-png.flaticon.com/512/174/174879.png?w=740&t=st=1673491138~exp=1673491738~hmac=80e039704da756cc1cfcedc5a8490918e364ad8c59fc71a4a97bf81fd1f5e02c"/>
                                                <img class="login-with-icon" src="https://cdn-icons-png.flaticon.com/512/281/281781.png?w=740&t=st=1673491201~exp=1673491801~hmac=753854399c36cacf33a32c344c07334e924ffb6deb3a4f7daaf510934650700f"/>
                                            </div>
                                            
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
import SignUpElement from "@/assets/components/signUpElement.vue"
import RememberLogin from "@/assets/components/checkbox.vue"
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