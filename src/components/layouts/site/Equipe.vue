<script setup>
import AOS from 'aos'
import {nextTick, onMounted} from "vue";
import Advogados from "@/dados/advogados.json";
import {useContato} from '@/composable/useContato'

const {getWhatsappLink} = useContato()

const getImageUrl = (name) => {
  return new URL(`../../../assets/img/equipe/${name}`, import.meta.url).href
}

onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()
  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <section class="team-wrapper team-1 section-padding">
    <div class="shape-1">
      <img src="@assets/img/shape/shape-15.png" alt="">
    </div>
    <div class="container">
      <div class="section-title text-center">
        <div class="sub-title"><span>Equipe</span>
        </div>
        <h2 class="split-text left" style="perspective: 400px;">
          <div class="split-line" style="display: block; text-align: center; position: relative;">
            <div style="position:relative;display:inline-block;">
              Nossos Advogados
            </div>
          </div>
        </h2>
      </div>
      <p class="text-center">Nosso time de advogados é composto por profissionais altamente qualificados e especializados em diversas áreas do Direito.</p>
      <div class="row">
        <template v-for="(item,index) in Advogados" :key="index">
          <div v-if="item.exibir" class="col-xl-3 col-lg-4 col-md-6">
            <div class="single-team-item">
              <div class="shape">
                <img class="shape-2" src="@assets/img/team/shape-1.png" alt="">
                <img class="shape-3" src="@assets/img/team/shape-2.png" alt="">
              </div>
              <div class="team-image">
                <div class="image">
                  <a target="_blank" :href="item.instagram" title="Seguir no instagram">
                    <img :src="getImageUrl(item.foto)" :alt="`${item.nome} - ${item.area_atuacao}`">
                  </a>
                </div>
                <div class="social-icon">
                  <a target="_blank" style="background: linear-gradient(84deg, #4fe07f, #0fd852 100%);  "
                     :href="getWhatsappLink(`Olá, gostaria de falar com ${item.nome} especialista em ${item.area_atuacao || 'jurídico'}`)" title="Falar agora com especialista">
                    <i class="fab fa-whatsapp fa-3x"></i> <span class="text-uppercase " style="margin-left: 8px;"> <b> Falar agora</b> </span> </a>
                </div>
              </div>
              <div class="content text-center pt-3">
                <p>
                  {{ item.area_atuacao }}
                </p>
                <h3>
                  <a target="_blank" class="text-uppercase" :href="item.instagram" title="Seguir no instagram">
                    {{ item.nome }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<style scoped>

.team-1 .single-team-item .social-icon a:hover {
  background: linear-gradient(84deg, #4fe07f, #0fd852 100%);
  color: var(--white);
}
</style>

