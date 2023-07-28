import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/assets/components/Main.vue"
import Inside from "@/assets/components/InsideContain.vue"
import MoreNews from "@/assets/components/MoreNews.vue"
import InsideYoutube from "@/assets/components/Youtube.vue"
import InsideTwitch from "@/assets/components/InsideTwitch.vue"
import Category from "@/assets/components/Category.vue"
import Login from "@/assets/components/Signup.vue"
import Register from "@/assets/components/Register.vue"
import Forgot from "@/assets/components/Forgot.vue"

const routes = [
    { path: '/', component: Home, name: 'Homepage' },
    { path: '/inside', component: Inside, name: 'Inside' },
    { path: '/insideyoutube', component: InsideYoutube, name: 'InsideYoutube' },
    { path: '/morenews', component: MoreNews, name: 'MoreNews' },
    { path: '/insidetwitch', component: InsideTwitch, name: 'InsideTwitch' },
    { path: '/category', component: Category, name: 'Category' },
    { path: '/signup', component: Login, name: 'Login' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/forgot', component: Forgot, name: 'Forgot' },

    // { path: '/newinformation', component: NewContain, name: 'NewInformation'},
]   

const router = createRouter({ history: createWebHistory(), routes })
export default router