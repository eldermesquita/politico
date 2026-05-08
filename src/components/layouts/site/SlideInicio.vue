<script setup>
import {nextTick, onMounted} from "vue";
import {useContato} from '@/composable/useContato'
import AOS from 'aos'

import heroBg21 from '@assets/img/hero/hero-bg-shape2-1.png'
import heroBg24 from '@assets/img/hero/hero-bg-shape2-4.png'
import heroBg25 from '@assets/img/hero/hero-bg-shape2-5.png'
import heroBg26 from '@assets/img/hero/hero-bg-shape2-6.png'
import heroBg28 from '@assets/img/hero/hero-bg-shape2-8.png'
import heroThumb21 from '@assets/img/hero/hero-thumb-shape2-1.png'
import heroBgShape23 from '@assets/img/hero/hero-bg-shape2-3.png'
import heroThumbShape21 from '@assets/img/hero/hero_thumb_1_1.png'

const {getWhatsappLink} = useContato()
onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()

  } catch (error) {
    console.error('Erro ao carregar o rodapé ', error)
  }
})
</script>

<template>
  <div class="th-hero-wrapper hero-2" id="hero" style="background-image: url('@assets/img/hero/hero_bg_2_1.png');"  data-overlay="gray">
    <div class="shape-mockup hero-shape-2-1 jump" data-top="14%" data-left="5%">
      <div class="color-masking">
        <div class="masking-src bg-mask" data-mask-src="assets/img/hero/hero-bg-shape2-1.png"></div>
        <img src="@assets/img/hero/hero-bg-shape2-1.png" alt="Turismo">
      </div>
    </div>
    <div class="shape-mockup hero-shape-2-2 jump-reverse" data-top="9%" data-left="45%">
      <img src="@assets/img/hero/hero-bg-shape2-2.png" alt="Cultura">
    </div>
    <div class="shape-mockup hero-shape-2-4 ripple-animation" data-bottom="48%" data-left="59%">
      <div class="color-masking">
        <div class="masking-src" data-mask-src="assets/img/hero/hero-bg-shape2-3.png"></div>
        <img src="@assets/img/hero/hero-bg-shape2-3.png" alt="Turismo">
      </div>
    </div>
    <div class="shape-mockup hero-shape-2-6" data-bottom="15%" data-left="33%">
      <div class="color-masking shake d-inline-flex">
        <div class="masking-src " data-mask-src="assets/img/hero/hero-bg-shape2-5.png"></div>
        <img src="@assets/img/hero/hero-bg-shape2-5.png" alt="Cultura">
      </div>
    </div>
    <div class="shape-mockup hero-shape-2-7" data-bottom="7%" data-left="10%">
      <img src="@assets/img/hero/hero-bg-shape2-7.png" alt="Empreendedor">
    </div>
    <div class="shape-mockup hero-shape-2-8" data-top="0%" data-right="0%">
      <div class="color-masking2">
        <div class="masking-src" data-mask-src="assets/img/hero/hero-bg-shape2-8.png"></div>
        <img src="@assets/img/hero/hero-bg-shape2-8.png" alt="shape">
      </div>
    </div>
    <div class="shape-mockup hero-shape-2-9" data-bottom="0%" data-left="0%" data-right="0">
      <img src="@assets/img/hero/hero-bg-shape2-9.png" alt="shape">
    </div>
        <div class="container">
          <div class="row gx-40 align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="hero-2-img">
                <img src="@assets/img/hero/hero_thumb_1_1.png" alt="Por Roraima">
                <div class="hero-2-shape" data-mask-src="assets/img/hero/hero-thumb-shape2-1.png"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-style2">
                <span class="sub-title after-none animate__rotateOutDownRight">Pré-candidato Deputado Estadual</span>
                <h1 class="hero-title">
                                    <span class="title1">Bruno<span class="text-theme2">Dantas</span>
                                        <div class="color-masking shake d-inline-flex">
                                       <div class="masking-src" data-mask-src="assets/img/icon/service-icon/service-card-icon1-2.svg"></div>
                                        <img src="@assets/img/icon/service-icon/service-card-icon1-2.svg" height="100px" alt="Educação">
                                        </div>
                                    </span>
                </h1>
                <p class="hero-text">Entre planos e caminhos, uma certeza: o propósito de Deus sempre prevalece. Seguimos confiando, trabalhando e fazendo a nossa parte. </p>
                <div class="btn-wrap">
                  <a href="#" class="th-btn"> Conheça as Propostas<i
                    class="fas fa-arrow-right  ms-2 "></i></a>
                  <a href="@assets/videos/1.mp4" class="play-btn style3 popup-video">
                    <i class="fas fa-play fa-beat  "></i>

                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>


