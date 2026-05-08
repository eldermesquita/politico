<script setup>
import {RouterLink} from "vue-router";
import {computed, nextTick, onMounted, ref} from "vue";
import AOS from 'aos'
import noticias from '@/dados/noticias.json'
import {formatarDataPtBr, primeiraLetraMaiuscula, slugUrl, textoComReticencias} from "@/utils/funcoes.js";
import Advogados from "@/dados/advogados.json";
import AreaAtuacao from "@/dados/areaAtuacao.json";
import {useContato} from '@/composable/useContato'
const {getWhatsappLink} = useContato()

const getImageUrl = (name) => {
  return new URL(`../../../assets/img/equipe/${name}`, import.meta.url).href
}
const props = defineProps({
  noticia: {
    type: Object,
    default: null
  }
})

const advogadoDaNoticia = computed(() => {
  if (props.noticia && props.noticia.advogados && props.noticia.advogados.length > 0) {
    const idAdvogado = props.noticia.advogados[0];
    return Advogados.find(adv => adv.id === idAdvogado);
  }
  return null;
});

const noticiasRandomicas = ref([]);

function embaralharNoticias(lista) {
  return [...lista].sort(() => Math.random() - 0.5).slice(0, 3);
}

onMounted(async () => {
  try {
    await nextTick()
    noticiasRandomicas.value = embaralharNoticias(noticias);

    AOS.refresh()

  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <div class="col-12 col-xxl-4 col-xl-5">
    <div class="main-sidebar">
      <div class="single-sidebar-widget  fadeInUp">
        <div class="blog-author-info text-center" v-if="advogadoDaNoticia">
          <div class="image">
            <img :src="getImageUrl(advogadoDaNoticia.foto)" :alt="`${advogadoDaNoticia.nome} - ${advogadoDaNoticia.area_atuacao}`">
          </div>
          <h5 class="mt-3">{{ advogadoDaNoticia.nome }}</h5>
          <p class="mt-1">{{ advogadoDaNoticia.area_atuacao }}</p>
          <div class="social-link mt-3" v-if="advogadoDaNoticia.instagram">
            <a :href="advogadoDaNoticia.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            <a target="_blank" :href="getWhatsappLink(`Olá, gostaria de falar com ${advogadoDaNoticia.nome} especialista em ${advogadoDaNoticia.area_atuacao || 'jurídico'}`)" title="Falar agora com especialista">
              <i class="fab fa-whatsapp fa-3x"></i></a>
          </div>
          </div>

      </div>
      <div class="single-sidebar-widget  fadeInUp">
        <div class="wid-title">
          <h3>Artigos mais recentes</h3>
        </div>
        <div class="popular-posts">
          <template v-for="(item,index) in noticiasRandomicas" :key="index">
            <div class="single-post-item">
              <div class="thumb bg-cover" :style="`background-image: url('${item?.imagem}')`">
              </div>
              <div class="post-content">
                <div class="post-date">
                  <i class="fi fi-br-calendar"></i>
                  {{ formatarDataPtBr(item.data) }}
                </div>

                <h5>
                  <router-link :title="item.titulo"
                               :to="`/noticia/${item.id}/${slugUrl(item.titulo)}`">
                    {{ textoComReticencias(item.titulo, 40) }}
                  </router-link>
                </h5>
                <div class="post-date">
                  {{ primeiraLetraMaiuscula(item.area_atuacao) }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="single-sidebar-widget  fadeInUp">
        <div class="wid-title">
          <h3>Àreas de atuação</h3>
        </div>
        <div class="widget_categories">
          <ul>
            <li v-for="menu in AreaAtuacao" :key="menu.name">
              <router-link v-if="menu.exibir" :to="`/areas-de-atuacao/${menu.id}/${slugUrl(menu.titulo)}`">
                {{ primeiraLetraMaiuscula(menu.titulo) }} <span> {{ menu.id }} </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


