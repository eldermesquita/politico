<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import AreaAtuacao from '@/dados/areaAtuacao.json'
import Advogados from "@/dados/advogados.json";

const route = useRoute()
const area = computed(() => {
  const id = Number(route.params.id)
  return AreaAtuacao.find(item => item.id === id)
})

const advogado = computed(() => {
  if (!area.value) return null
  const advogadoId = area.value.servicos?.find(s => s.advogados?.length > 0)?.advogados?.[0]
  if (!advogadoId) return null
  return Advogados.find(item => item.id === advogadoId)
})

const rotas = useRoute()
const exibir = computed(() => {
  const rotasIgnoradas = ['Início', 'Noticias', 'Quem Somos', '/noticia/', 'advogados']

  return !rotasIgnoradas.some(item => rotas.name === item || rotas.path.startsWith(item))

})
const breadcrumbs = computed(() => {
  return route.matched.filter(r => r.meta?.titulo).map(r => ({
    name: r.meta?.titulo,
    path: r.path,
    title: r.name,
  }))
})

const bgBreadCrumb = computed(() => {
  switch (advogado.value?.id) {
    case 1:
      return 'bg-cover11'
    case 3:
      return 'bg-cover21'
    case 5:
      return 'bg-cover51'
    case 6:
      return 'bg-cover61'
    default:
      return 'bg-cover-contato'
  }
})

</script>

<template>
  <div :class="['breadcrumb-wrapper', bgBreadCrumb]">
    <div class="container">
      <div class="page-heading">
        <div class="breadcrumb-sub-title">

          <ul class="breadcrumb-items">
            <li>
              <RouterLink to="/">Início</RouterLink>
            </li>
            <template v-for="(item, index) in breadcrumbs" :key="index">
              <li v-if="index === breadcrumbs.length - 2" class="active">
                <i class="fi fi-br-arrow-alt-circle-right"></i>
              </li>

              <li v-if="breadcrumbs[0]?.name !== 'Áreas de atuação'">
                <i class="fi fi-br-arrow-alt-circle-right"></i>
              </li>
              <li v-if="index !== breadcrumbs.length - 2">
                <RouterLink to="">
                  {{ breadcrumbs[0]?.name }}
                </RouterLink>
              </li>
            </template>
          </ul>
          <h1>
            {{ area?.titulo || breadcrumbs[0]?.name }}
            <span v-if="advogado" class="advogado-nome"> {{ advogado.nome }}</span>
          </h1>
          <ul v-if="exibir" class="breadcrumb-items">
            <li class="active">
              <a target="_blank" class="text-uppercase" :href="advogado?.instagram" title="Seguir no instagram">
                <i class="fi fi-brands-instagram mr-3"> instagram</i>
              </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb-wrapper {
  position: relative;
  overflow: hidden;
  z-index: 9;
  padding: 89px 0;
}

.breadcrumb-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: -1;
}

.bg-cover1 {
  background-image: url('@assets/img/breadcrumb.jpg') !important;
}

.bg-cover11 {
  background-image: url('@assets/img/equipe/11.png') !important;
}

.bg-cover21 {
  background-image: url('@assets/img/equipe/21.png') !important;
}

.bg-cover51 {
  background-image: url('@assets/img/equipe/51.png') !important;
}

.bg-cover61 {
  background-image: url('@assets/img/equipe/61.png') !important;
}

.bg-cover-contato {
  background-image: url('@assets/img/breadcrumb-contato.png') !important;
}

.advogado-nome {
  font-size: 0.8em;
  font-weight: 400;
  display: block;
  margin-top: 5px;
}

</style>
