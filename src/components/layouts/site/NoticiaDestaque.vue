<script setup>
import {nextTick, onMounted, ref} from "vue";
import noticiasData from "@/dados/noticias.json";

const noticias = ref([]);

const selecionarNoticiasAleatorias = () => {
  const shuffled = [...noticiasData].sort(() => 0.5 - Math.random());
  noticias.value = shuffled.slice(0, 5);
};

onMounted(async () => {
  try {
    selecionarNoticiasAleatorias();
    await nextTick()

  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <!--==============================
   Blog Area
   ==============================-->
  <section class="overflow-hidden space" id="blog-sec">
    <div class="shape-mockup blog-bg-shape2-1 jump-reverse d-xl-block d-none" data-top="20%" data-right="0">
      <img src="@assets/img/shape/footer-bg-shape3.png" alt="img">
    </div>
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title after-none before-none">Na Mídia</span>
        <h2 class="sec-title">Últimas Notícias
        </h2>
      </div>
      <div class="slider-area">
        <div class="swiper th-slider has-shadow" id="blogSlider2"
             data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>

          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="noticia in noticias" :key="noticia.id">
              <div class="blog-card">
                <div class="blog-img">
                  <a :href="noticia.fonte" target="_blank">
                    <div class="blog-img-shape1" data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
<!--                    <img :src="noticia.imagem" :alt="noticia.titulo">-->
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png">

                  </div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>{{ noticia.data }}</a>
                    <a href="#"><i class="fas fa-tags"></i>{{ noticia.categoria }}</a>
                  </div>
                  <h3 class="box-title"><a :href="noticia.fonte" target="_blank">{{ noticia.titulo }}</a></h3>
                  <a :href="noticia.fonte" target="_blank" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button data-slider-prev="#blogSlider2" class="slider-arrow slider-prev"><i class="fas fa-arrow-left"></i>
        </button>
        <button data-slider-next="#blogSlider2" class="slider-arrow slider-next"><i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
