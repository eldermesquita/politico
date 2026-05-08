
/*
<!--==============================
TODOS OS  JAVASCRIPT ARQUIVOS
============================== -->

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
*/

import '@assets/js/vendor/jquery-3.7.1.min.js'
import '@assets/js/swiper-bundle.min.js'
import '@assets/js/bootstrap.min.js';
import '@assets/js/jquery.magnific-popup.min.js'
import '@assets/js/jquery-ui.min.js'
import '@assets/js/imagesloaded.pkgd.min.js'
import '@assets/js/isotope.pkgd.min.js'


import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';


/*
<!--==============================
TODOS OS  CSS ARQUIVOS
============================== -->
  <!-- Fontawesome Icon -->
  <!-- Magnific Popup -->
  <!-- Swiper Js -->
  <!-- Theme Custom CSS -->
*/
import '@assets/css/bootstrap.min.css';

import '@assets/css/magnific-popup.min.css';
import '@assets/css/swiper-bundle.min.css';
import '@assets/css/style.css';


import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far, fab)
dom.watch()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
/*AOS.init()*/
import '@assets/js/main.js'
