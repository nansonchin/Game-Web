<template>
    <div class="nav-wrapper">
        <div class="nav-container">
            <div class="container">
                <b-row class="py-2">
                    <b-col cols="3" xl="3" lg="3" md="3">
                        <img @click="$router.push('/')" class="header-logo" src="@/assets/image/Header/hc.jpg" />
                        <span @click="$router.push('/')" class="container-header-hc">{{
                            $t("message.header.headTitle")
                        }}</span>
                    </b-col>

                    <b-col class="header-search-container" cols="5" xl="5" lg="5" md="5">
                        <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" :trigger-on-focus="false"
                            clearable class="search-bar inline-input w-100" placeholder="Search"
                            @select="handleSelect" />
                    </b-col>
                    <b-col class="header-dropdown-container" cols="1" xl="1" lg="1" md="1">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                <!-- <img class="header-dropdown-logo" src="@/assets/image/Header/menu.png"> -->
                                <i class="header-dropdown-logo fas fa-chess-queen-alt"></i>                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection1") }}
                                    </el-dropdown-item>
                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection2") }}
                                    </el-dropdown-item>
                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection3") }}
                                    </el-dropdown-item>

                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection4") }}
                                    </el-dropdown-item>

                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection5") }}
                                    </el-dropdown-item>

                                    <el-dropdown-item class="drop-down-menu">
                                        {{ $t("message.header.headSelection6") }}
                                    </el-dropdown-item>

                                    <el-dropdown-item class="drop-down-menu">{{
                                        $t("message.header.headSelection7")
                                    }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </b-col>
                    <b-col class="header-share-container" cols="2" xl="2" lg="2" md="2">
                        <!-- <img  class="header-user" src="@/assets/image/Header/user.png" /> -->
                        <i @click="$router.push('/signup')"
                            class="fas header-user fa-user">{{ $t("message.header.headerRegisterNLogin") }}</i>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>


</template>

<script setup>
// import { onMounted, ref } from 'vue'
// interface RestaurantItem {
//     value: string
//     link: string
// }

// const state2 = ref('')

// const restaurants = ref<RestaurantItem[]>([])
// const querySearch = (queryString: string, cb: any) => {
//     const results = queryString
//         ? restaurants.value.filter(createFilter(queryString))
//         : restaurants.value
//     // call callback function to return suggestions
//     cb(results)
// }
// const createFilter = (queryString: string) => {
//     return (restaurant: RestaurantItem) => {
//         return (
//             restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
//         )
//     }
// }
// const loadAll = () => {
//     return [
//         { value: 'mmorpg', link: 'https://github.com/vuejs/vue' },
//         { value: 'fps', link: 'https://github.com/ElemeFE/element' },
//         { value: 'sand', link: 'https://github.com/ElemeFE/cooking' },
//         { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
//         { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
//         { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
//         { value: 'babel', link: 'https://github.com/babel/babel' },
//     ]
// }

// const handleSelect = (item: RestaurantItem) => {
//     console.log(item)
// }

// onMounted(() => {
//     restaurants.value = loadAll()
// })
</script>

<script>
export default {
    data() {
        return {
            gameCatergory: [
                { name: "MMORPG" },
                { name: "Real-time strategy (RTS)" },
                { name: "Shooters (FPS and TPS)" },
                { name: "Multiplayer online battle arena (MOBA)" },
                { name: "Role-playing (RPG, ARPG, and More)" },
                { name: "Action-adventure" },
            ],
            isActive: true,
            show: true,
            number: 0,
            hidden: true,
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
};
</script>