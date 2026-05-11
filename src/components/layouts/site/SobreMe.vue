<script setup>
import {slugUrl} from "@/utils/funcoes.js";

defineOptions({
  name: 'SobreMe',
})

import {useContato} from '@/composable/useContato'

const {getWhatsappLink} = useContato()
</script>

<template>
  <!--==============================
About Area
==============================-->
  <div class="overflow-hidden space" id="about-sec">
    <div class="shape-mockup about-bg-shape2-1 jump-reverse" data-top="10%" data-right="5%">
      <img src="@assets/img/shape/heart-shape1.png" alt="shape">
    </div>
    <div class="container">
      <div class="row gx-60 gy-60 align-items-center">
        <div class="col-xl-6 col-lg-10">
          <div class="img-box2">
            <div class="img1">
              <img src="@assets/img/normal/about_2_1.png"alt="Sobre o candidato">
            </div>
            <div class="img2 jump">
              <img src="@assets/img/normal/about_2_2.png"alt="Sobre o candidato">
            </div>
            <div class="img3 moving" data-mask-src="assets/img/normal/about_2_3-mask.png">
              <img data-mask-src="@assets/img/normal/about_2_3-mask.png" src="@assets/img/normal/about_2_3.png"
                   alt="Sobre o candidato">
            </div>
            <div class="about-shape2-1 jump">
              <div class="color-masking">
                <div class="masking-src" data-mask-src="@assets/img/shape/about_shape2_1.png"></div>
                <img src="@assets/img/shape/about_shape2_1.png" width="100px" alt="Bruno Dantas">
              </div>
            </div>
            <div class="about-shape2-2 jump-reverse">
              <div class="color-masking2">
                <div class="masking-src" data-mask-src="@assets/img/shape/about_shape2_2.png"></div>
                <img src="@assets/img/shape/about_shape2_2.png"  alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-wrap2">
            <div class="title-area mb-35">
              <span class="sub-title after-none before-none">Bruno Dantas</span>
              <h2 class="sec-title">Sobre o candidato?</h2>
              <p class="mt-30">Bruno Dantas Pereira nasceu no sertão da Paraíba, na cidade de Pombal. Ainda jovem,
                mudou-se para João Pessoa, até que o destino o levou a Roraima, onde construiu sua história e consolidou sua
                trajetória pessoal e profissional.</p>
            </div>
            <div class="about-feature-grid">
              <div class="media-body">
                <p class="box-text">Há 23 anos vivendo no estado, Bruno construiu uma carreira marcada pelo empreendedorismo, pela
                  resiliência e pela busca constante por oportunidades. Em Roraima, encontrou não apenas um lugar para viver, mas um território que o acolheu, o impulsionou e se tornou parte essencial de sua identidade.</p>
                <p class="box-text">Ao longo de sua jornada, fundou e desenvolveu diversos negócios, entre eles a Leslu, o Coruja Burger,
                  o La Ville, o Bar da Brahma e a 95 Viagens, atuando em diferentes segmentos e contribuindo para a geração de emprego
                  e renda no estado.</p>
              </div>
            </div>
            <div class="about-feature-grid">
              <div class="media-body">
                <p class="box-text"> Sempre movido pela visão de crescimento e desenvolvimento regional, Bruno segue investindo em novos projetos.
                  Seu mais recente empreendimento é a “Dona Bolacha”, uma fábrica com previsão de inauguração até o início de 2027, com potencial de gerar mais de 300 empregos diretos e indiretos.
                  A iniciativa nasce com o propósito de se tornar uma indústria modelo para o Norte do Brasil.</p>
                <p class="box-text"> Reconhecido por sua atuação prática e pelo compromisso com o desenvolvimento local, Bruno carrega uma forte conexão com Roraima, estado que considera sua casa, sua inspiração e a base de tudo o que construiu.
                </p>
              </div>
            </div>
            <div class="btn-wrap mt-40">
              <a href="https://www.instagram.com/reel/DXjkqRMgC9E/?igsh=MXdhMDIwMTV3aW1qcQ%3D%3D"  target="_blank" class="th-btn">Saiba mais<i class="fas fa-play ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
