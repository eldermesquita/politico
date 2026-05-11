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
    <div class="preloader-inner">
            <span class="loader">
                BD
                <span class="loading-text">Bruno Dantas</span>
            </span>
    </div>
  </div>

</template>
