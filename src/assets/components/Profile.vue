<template>
    <div class="profile-wrapper">
        <div class="header-container-profile">
            <Header />
        </div>

        <div class="profile-upload-big-img-container">
            <img class="profile-big-img"
                src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220721181916-01-stray-video-game.jpg" />
            <div class="big-profile-edit-container">
                <i class="big-profile-edit-icon far fa-edit"></i>
            </div>
        </div>
        <div class="container">
            <b-row>
                <b-col cols="12" xl="12" md="12">
                    <p class="profile-title">Profile</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="7" xl="7" md="7" lg="7">
                    <div class="profile-left-side-container">
                        <p class="dashboard-text">Dashboard</p>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Name: </p>
                                <div class="profile-dash-detail-container">
                                    <p class="profile-context">ABCXXX</p>
                                    <i class=" icon-edit-profile mx-5 far fa-edit"></i>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Gender: </p>
                                <div class="profile-dash-detail-container">
                                    <p class="profile-context">Male</p>
                                    <i class=" icon-edit-profile mx-5 far fa-edit"></i>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Date: </p>
                                <div class="block">
                                    <el-date-picker v-model="value1" type="date" placeholder="Pick a date"
                                        :default-value="new Date(2010, 9, 1)" />
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Email: </p>
                                <div class="profile-dash-detail-container">
                                    <p class="profile-context">abc********@gmail.com</p>
                                    <i class=" icon-edit-profile mx-5 far fa-edit"></i>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p @click="isActive = true" class="profile-account-setting">Change Password? </p>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="mt-5 profile-left-side-container" v-if="isActive">
                        <p class="dashboard-text">Change Password</p>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Token Have sent to your email > abc********@gmail.com</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Token: </p>
                                <div class="profile-change-password-container">
                                    <el-input v-model="token" placeholder="Please input token" />
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Enter Your New Password: </p>
                                <div class="profile-change-password-container">
                                    <el-input type="password" v-model="changePassword" placeholder="Please input password" />
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="dash-name-container" cols="12" xl="12" lg="12" md="12">
                                <p>Enter Your New 2nd-Password: </p>
                                <div class="profile-change-password-container">
                                    <el-input type="password" v-model="changePassword2" placeholder="Please input new 2nd-password" />
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="mt-3 profile-change-password-confirm-btn-container " cols="12" xl="12" lg="12"
                                md="12">
                                <p class="profile-change-password-confirm-btn">Confirm </p>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col cols="5" xl="5" md="5" lg="5">
                    <b-row>
                        <b-col class="profile-right" cols="12" md="12" lg="12">
                            <div class="profile-right-side-container">
                                <div class="profile-right-image-container">
                                    <img class="user-profile-picture"
                                        src="https://i.pinimg.com/originals/64/9e/2d/649e2db7018ef32322ae9838cc00ad4a.jpg" />
                                    <div class="profile-change-image">
                                        <i class="fal fa-plus-circle"></i>
                                    </div>
                                </div>
                                <div class="profile-username-container">
                                    <p class="profile-username-text">UserName</p>
                                    <i class="profile-username-edit-icon far fa-edit"></i>
                                </div>
                                <div class="profile-username-container">
                                    <p class="profile-username-text">Status</p>
                                    <el-dropdown class="profile-status">
                                        <p class="profile-button ">Online <i class="online-circle fas fa-circle"></i>
                                        </p>
                                        <span class="el-dropdown-link">
                                            <el-icon class="el-icon--right">
                                                <arrow-down />
                                            </el-icon>
                                        </span>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <p class=" profile-button">Away <i
                                                        class="away-circle fas fa-circle"></i> </p>
                                                <p class=" profile-button">Busy <i
                                                        class="busy-circle fas fa-minus-circle"></i> </p>
                                                <p class="profile-button">Offline <i
                                                        class="offline-circle fas fa-circle"></i> </p>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script setup>
import Header from '@/assets/components/Header.vue'
</script>

<script>
export default {
    data() {
        return {
            isActive: false,
            token:'',
            changePassword:'',
            changePassword2:'',
        }
    }
}
</script>