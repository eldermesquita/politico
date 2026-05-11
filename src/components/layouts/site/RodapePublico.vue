<script setup>
import {nextTick, onMounted} from 'vue'
import {RouterLink} from 'vue-router'

import {useContato} from '@/composable/useContato'

const {openContact, openSupport} = useContato()
</script>

<template>

  <div>
    <!--==============================
  Footer Area
  ==============================-->
    <footer class="footer-wrapper footer-layout1" id="contact-sec">
      <div class="shape-mockup footer-bg-shape1-1 jump" data-left="0" data-top="0">
        <img src="@assets/img/shape/footer-bg-shape1-1.png" alt="img">
      </div>
      <div class="shape-mockup footer-bg-shape1-2 jump-reverse" data-right="0" data-top="15%">
        <img src="@assets/img/shape/footer-bg-shape3.png" alt="img">
      </div>
      <div class="shape-mockup footer-bg-shape1-3 jump" data-right="0" data-bottom="0">
        <div class="color-masking2">
          <div class="masking-src" data-mask-src="assets/img/shape/footer-bg-shape1-2.png"></div>
          <img src="@assets/img/shape/footer-bg-shape1-2.png" alt="img">
        </div>
      </div>
      <div class="widget-area space-top">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 col-xl-auto">
              <div class="widget footer-widget">
                <div class="th-widget-about">
                  <div class="about-logo">
                    <a href="/"><img src="@assets/img/logo-white.svg" alt="Bruno Dantas"></a>
                  </div>
                  <p class="about-text mb-3"> Quero ouvir você. Suas ideias, suas demandas e seus sonhos para nosso estado são fundamentais para construirmos propostas reais e efetivas.</p>
                  <div class="info-card style2">
                    <div class="box-icon bg-theme">
                      <i class="fal fa-phone"></i>
                    </div>
                    <div class="box-content">
                      <p class="box-text">WhatsApp:</p>
                      <h4 class="box-title"><a href="tel:+55 95 8429-0606">+55 95 8429-0606</a></h4>
                    </div>
                  </div>
                  <div class="info-card style2">
                    <div class="box-icon bg-theme2">
                      <i class="fal fa-envelope-open"></i>
                    </div>
                    <div class="box-content">
                      <p class="box-text">Email:</p>
                      <h4 class="box-title"><a href="mailto:contatos@brunodantasrr.com.br">contatos@brunodantasrr.com.br</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-xl-auto">
              <div class="widget widget_nav_menu footer-widget">
                <h3 class="widget_title">Links Rápidos</h3>
                <div class="menu-all-pages-container">
                  <ul class="menu">
                    <li><a href="#hero">Página Inicial</a></li>
                    <li><a href="#about-sec">Sobre Mim</a></li>
                    <li><a href="#service-sec">propostas</a></li>
                    <li><a href="#blog-sec">Notícias</a></li>
                    <li><a href="#contact-sec">Contato</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xl-auto">
              <div class="widget newsletter-widget footer-widget">
                <h3 class="widget_title">Junte-se ao movimento</h3>
                <p class="footer-text mb-4">Faça parte dessa transformação
                </p>
                <p class="footer-text mb-4">Roraima muda quando o povo se une. Se você acredita num estado com
                  mais saúde, educação e oportunidades, venha fazer parte do nosso time.
                </p>
                <p class="footer-text mb-4">Quero apoiar Bruno Dantas
                </p>

                <div class="th-social style6">
                  <a href="https://www.threads.com/@brunodantasrr?xmt=AQG0oKEexpdQIUY6GtOjZ9WD8bcbrKD4fQ1-PxJvC4N4xKA"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/brunodantasrr/reels/" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="javascript:void(0); " @click.prevent="openSupport"  target="_blank"><i class="fab fa-whatsapp"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-wrap bg-theme text-center">
        <div class="container">
          <p class="copyright-text">© 2026
            <router-link :to="`/`">
             Bruno Dantas
            </router-link>
            — Deputado Estadual por Roraima |
            Material de pré-candidatura. CNPJ/CPF do candidato — Partido: MDB |
            Desenvolvido com
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-heart fa-w-16'>
              <path fill='currentColor'
                    d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
              ></path>
            </svg> &amp;
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'
                 class='svg-inline--fa fa-coffee fa-w-20'>
              <path fill='currentColor'
                    d='M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z'
              ></path>
            </svg>
            By <a href="javascript:void(0); " style="color:#FFFFFF" onclick="window.open('http://www.eldermesquita.com.br/');"> e-design </a>


          </p>
        </div>
      </div>
    </footer>


  </div>

  <!-- Scroll To Top -->
  <div class="scroll-top">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;">
      </path>
    </svg>
  </div>


</template>
