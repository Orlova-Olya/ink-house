import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins' // global vue methods
import router from './router'

import './styles/common.scss'
import './styles/fonts.scss'
import './styles/variables.css'

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

import UIButton from './components/UI/Button.vue'
import UICardPicture from './components/UI/CardPicture/index.vue'
import UICarousel from './components/UI/Carousel/index.vue'
import UIInputCountry from './components/UI/InputCountry/index.vue'
import UILinkBack from './components/UI/LinkBack.vue'

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.component('Header', Header)
app.component('Footer', Footer)
app.component('UIButton', UIButton)
app.component('UICardPicture', UICardPicture)
app.component('UICarousel', UICarousel)
app.component('UIInputCountry', UIInputCountry)
app.component('UILinkBack', UILinkBack)
app.mount('#app')
