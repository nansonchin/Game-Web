import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from '@/assets/plugin/router.js';
import element from 'element-plus';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'element-plus/dist/index.css'
import Carousel3d from 'vue-carousel-3d';
import i18n from '@/assets/language/lang.js'
// import VueAxios from './plugins/axios'
// vue
import '@/assets/components/Main.vue'
import '@/assets/components/Landing.vue'
import '@/assets/components/Header.vue'
import '@/assets/components/Land-FPS.vue'
import '@/assets/components/Land-Twitch.vue'
import '@/assets/components/Land-Latest.vue'
import '@/assets/components/Land-video.vue'
import '@/assets/components/Footer.vue'
import '@/assets/components/InsideContain.vue'
import '@/assets/components/Youtube.vue'
import '@/assets/components/InsideTwitch.vue'
import '@/assets/components/Twitch.vue'
import '@/assets/components/search.vue'
import '@/assets/components/MoreNews.vue'
import '@/assets/components/Category.vue'
import '@/assets/components/Signup.vue'
import '@/assets/components/signUpElement.vue'
import '@/assets/components/registerElement.vue'
import '@/assets/components/Register.vue'
import '@/assets/components/Forgot.vue'
import '@/assets/components/forgotElement.vue'
import '@/assets/components/forgotResPassword.vue'
import '@/assets/components/youtubeElement.vue'
import '@/assets/components/youtubeRight.vue'
import '@/assets/components/twitchElement.vue'
import '@/assets/components/Profile.vue'

// css
import '@/assets/css/background.css'
import '@/assets/css/header.css'
import '@/assets/css/landing.css'
import '@/assets/css/land-setting.css'
import '@/assets/css/search.css'
import '@/assets/css/land-mmorpg.css'
import '@/assets/css/land-fps.css'
import '@/assets/css/land-twitch.css'
import '@/assets/css/sign-in.css'
import '@/assets/css/animation.css'
import '@/assets/css/body.css'
import '@/assets/css/land-latest.css'
import '@/assets/css/advertisment.css'
import '@/assets/css/land-video.css'
import '@/assets/css/footer.css'
import '@/assets/css/insidecontain.css'
import '@/assets/css/cursor.css'
import '@/assets/css/youtube.css'
import '@/assets/css/insidetwitch.css'
import '@/assets/css/morenews.css'
import '@/assets/css/category.css'
import '@/assets/css/verticleswiper.css'
import '@/assets/css/signup.css'
import '@/assets/css/register.css'
import '@/assets/css/forgot.css'
import '@/assets/css/youtubeElement.css'
import '@/assets/css/youtube-right-sidebar.css'
import '@/assets/css/twitchElement.css'
import '@/assets/css/profile.css'

//font
import '@/assets/fonts/font-awesome/style.css'
const app = createApp(App)
app.use(Carousel3d);
app.use(BootstrapVue3)
app.use(router)
app.use(i18n)
app.use(element)
app.mount('#app')
