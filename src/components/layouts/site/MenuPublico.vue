<script setup>
defineOptions({
  name: 'MenuNav',
})
import {onMounted} from 'vue'
import {useContato} from '@/composable/useContato'

const {openContact} = useContato()
onMounted(async () => {

})
</script>

<template>


  <div class="container">
    <div class="menu-area">
      <div class="header-logo">
        <router-link :to="`/`">
          <img src="@assets/img/logo.svg" width="152px" alt="Logo Bruno Dantas">
        </router-link>
      </div>
      <div class="menu-area-wrap">
        <nav class="main-menu d-none d-lg-block">
          <ul>
            <li> <a href="#hero">Página Inicial</a> </li>
            <li><a href="#about-sec">Quem Sou</a></li>
            <li><a href="#service-sec">Bandeiras</a></li>
            <li><a href="#blog-sec">Notícias</a></li>
            <li><a href="#contact-sec">Participe</a> </li>
          </ul>
        </nav>

      </div>
      <div class="header-button">
        <a href="#" @click="openContact" class="th-btn style3 d-xl-block d-none">
          <i class="fab fa-whatsapp  me-2"></i> Fale Comigo!</a>
        <button type="button" class="icon-btn th-menu-toggle d-lg-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </div>

</template>

