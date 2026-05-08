<script setup>
import {computed, nextTick, onMounted, ref, watch} from "vue";
import AOS from 'aos'
import {slugUrl, formatarDataPtBr} from "@/utils/funcoes.js";
import noticias from '@/dados/noticias.json'
import Paginacao from '@components/Paginacao.vue'
import FalarAgora from "@/components/layouts/site/FalarAgora.vue";

const noticiasRandomicas = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;

function embaralharNoticias(lista) {
  return [...lista].sort(() => Math.random() - 0.5);
}

const noticiasPaginadas = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return noticiasRandomicas.value.slice(start, end);
});

const totalPaginas = computed(() => {
  return Math.ceil(noticiasRandomicas.value.length / itemsPerPage);
});

watch(currentPage, () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  nextTick(() => {
    AOS.refresh();
  });
});

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


  <section class="blog-wrapper blog-1 section-padding section-bg">

    <div class="container">
      <div class="section-title text-center">
        <div class="sub-title"><span>Artigos</span>
        </div>
        <h2>Artigos mais recentes
        </h2>
      </div>

      <div class="blog-inner">
        <div class="row">
          <template v-for="(item,index) in noticiasPaginadas" :key="index">
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="single-blog-item">
                <div class="image" style="background-color: #f4f4f4">
                  <img :src="item.imagem" :alt="item.titulo" width="374px" height="282px">
                </div>
                <div class="content">
                  <ul>
                    <li>{{ item.area_atuacao }}</li>
                    <li><i class="fas fa-circle"></i></li>
                    <li>
                      {{ formatarDataPtBr(item.data) }}
                    </li>
                  </ul>
                  <h3>
                    <router-link :title="item.titulo"
                                 :to="`/noticia/${item.id}/${slugUrl(item.titulo)}`">
                      {{ item.titulo }}
                    </router-link>
                  </h3>

                  <router-link class="link-btn" :title="item.titulo"
                               :to="`/noticia/${item.id}/${slugUrl(item.titulo)}`">
                    Saiba mais <i class="far fa-long-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>

          </template>

        </div>
        <Paginacao v-model="currentPage" :total="totalPaginas"/>
      </div>
    </div>
  </section>
  <FalarAgora :id="0" />
</template>

<style>

</style>
