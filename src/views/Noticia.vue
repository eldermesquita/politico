<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import LinkLadoDireito from '@components/Layouts/Site/NoticiaLadoDireito.vue'
import noticias from '@/dados/noticias.json'
import {formatarDataPtBr} from "@/utils/funcoes.js";
import {useContato} from "@/composable/useContato.js";
import FalarAgora from "@/components/layouts/site/FalarAgora.vue";

defineOptions({
  name: 'NoticiasDetalhes',
})
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  }
})

const {getCompartilharWhatsapp, getCompartilharFacebook, getCompartilharTwitter, getCompartilharInstagram} = useContato()

const noticia = computed(() => {
  return noticias.find(n => n.id === props.id)
})

const route = useRoute()
const urlAtual = computed(() => globalThis.location.href)
const semPadding = computed(() => route.path.startsWith('/noticia/'))
</script>

<template>
  <section :class="['blog-wrapper', { 'section-padding': !semPadding }]" v-if="noticia">
    <hr>
    <div class="container">
      <div class="news-area">
        <div class="row">
          <div class="col-12 col-xxl-8 col-xl-7">
            <div class="blog-post-details border-wrap mt-0">
              <div class="blog-details-image  fadeInUp">

                <img :src="noticia.imagem" :alt="noticia.titulo">
              </div>
              <div class="single-blog-post post-details mt-0  fadeInUp">

                <div class="post-content pt-0">
                  <div class="post-meta mt-3">
                    <span><i class="fi fi-br-calendar"></i>{{ formatarDataPtBr(noticia.data) }} </span>|
                    <span><i class="fi fi-bs-api"></i> {{ noticia.area_atuacao }}</span> |

                  </div>
                  <h3 class="mt-0">{{ noticia.titulo }}</h3>
                  <p>
                    {{ noticia.conteudo }}
                  </p>

                </div>
              </div>
              <div class="row tag-share-wrap  fadeInUp">
                <div class="col-lg-8 col-12">
                  <div class="tagcloud d-flex ">
                    <h4>Tag:</h4>
                    <a href="#">{{ noticia.area_atuacao }}</a>
                  </div>
                </div>
                <div class="col-lg-4 col-12 mt-3 mt-lg-0">
                  <div class="social-share d-flex align-items-center">
                    <h4>Compartilhar:</h4>
                    <a target="_blank" :href="getCompartilharFacebook(urlAtual)"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" :href="getCompartilharTwitter(urlAtual, noticia.titulo)"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" :href="getCompartilharInstagram()"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" :href="getCompartilharWhatsapp(urlAtual, noticia.titulo)"><i class="fab fa-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LinkLadoDireito :noticia="noticia"/>
        </div>
      </div>
    </div>
  </section>
  <section :class="{ 'section-padding': !semPadding }" v-else>
    <div class="container text-center">
      <h3>Notícia não encontrada</h3>
    </div>
  </section>
  <FalarAgora :id="0"/>
</template>

