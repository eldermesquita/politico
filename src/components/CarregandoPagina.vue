<script setup>
import {useCarregandoStore} from '@/stores/carregandoStore'
import {onMounted} from 'vue'
import {useContato} from '@/composable/useContato'
import $ from "jquery";

const {getWhatsappLink} = useContato()
const Carregando = useCarregandoStore()

onMounted(() => {
  Carregando.abrir()
  setTimeout(() => {
    Carregando.fechar()
  }, 1200)


  /*---------- 01. On Load Function ----------*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });

  /*---------- 02. Preloader ----------*/
  if ($(".preloader").length > 0) {
    $(".preloaderCls").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".preloader").css("display", "none");
      });
    });
  }
})
</script>

<template>


  <!--==============================
    Preloader
 ==============================-->
  <div class="preloader ">
    <button class="th-btn style2 preloaderCls">Cancel Preloader</button>
    <div class="preloader-inner">
            <span class="loader">
                BD
                <span class="loading-text">Bruno Dantas</span>
            </span>
    </div>
  </div>
  <!--
    <div v-if="Carregando.carregando" id="preloader" class="preloader">
      <div class="animation-preloader">
        <div class="spinner">
        </div>
        <div class="txt-loading">
                  <span data-text-preloader="C" class="letters-loading">
                      C
                  </span>
          <span data-text-preloader="A" class="letters-loading">
                      A
                  </span>
          <span data-text-preloader="R" class="letters-loading">
                      R
                  </span>
          <span data-text-preloader="V" class="letters-loading">
                      V
                  </span>
          <span data-text-preloader="A" class="letters-loading">
                      A
                  </span>
          <span data-text-preloader="L" class="letters-loading">
                      L
          </span>
          <span data-text-preloader="H" class="letters-loading">
                      H
          </span>
          <span data-text-preloader="O" class="letters-loading">
                      O
          </span>
        </div>
        <p class="text-center">Advocacia</p>
      </div>
      <div class="progress" style="height: 1px;">
        <div class="progress-bar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
      <div class="progress" style="height: 20px;">
        <div class="progress-bar"  style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
      <div class="loader">
        <div class="row">
          <div class="col-3 loader-section section-left">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader-section section-left">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader-section section-right">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader-section section-right">
            <div class="bg"></div>
          </div>
        </div>
      </div>

    </div>

    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>

    &lt;!&ndash; Offcanvas Area Start &ndash;&gt;
    <div class="fix-area">
      <div class="offcanvas__info">
        <div class="offcanvas__wrapper">
          <div class="offcanvas__content">
            <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo">
                <router-link :to="{ name: 'Início' }">
                  <img src="@assets/img/logo/azul-logo.svg" width="250px" alt="Logo Carvalho Advocacia">
                </router-link>
              </div>
              <div class="offcanvas__close">
                <button>
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <p class="text d-none d-xl-block">
              Fundado em 2016, o Carvalho Advocacia é um dos promisor
              escritórios de advocacia de Boa Vista RR, com atuação em todo território nacional.
              Ao longo de sua trajetória, atuando no Direito Criminal, o escritório mantém ativa sua vocação
              em resolver conflitos, buscando a liberdade alheia com a advocacia artesanal e o mais alto
              padrão de qualidade e excelência.
            </p>
            <div class="mobile-menu fix mb-3"></div>
            <div class="offcanvas__contact">
              <h4> SOCIEDADE UNIPESSOAL DE ADVOCACIA - OAB/RR 127</h4>
              <ul>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a target="_blank" href="https://share.google/jE5AqTy68Pm0Dgbf4">Rua Mestre Albano, 3730, Asa branca, Boa Vista, RR, 69312-298</a>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon mr-15">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a href="#"><span
                      class="mailto:carvalhoadvocaciarr@gmail.com">carvalhoadvocaciarr@gmail.com</span></a>
                  </div>
                </li>

                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon mr-15">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a href="tel:+559598108-3779">(95) 98108-3779</a>
                  </div>
                </li>
              </ul>
              <div class="header-button mt-4">
                <a :href="getWhatsappLink()" target="_blank"  class="theme-btn  black-btn ">
                  whatsapp
                </a>
              </div>
              <div class="social-icon d-flex align-items-center">
                <a href="https://www.instagram.com/advvictor/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas__overlay"></div>
  -->

</template>
