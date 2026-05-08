<script setup>
defineOptions({
  name: 'LayoutSite',
})
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Cabecalho from '@components/layouts/site/CabecalhoPublico.vue'
//import CarregandoPagina from "@components/CarregandoPagina.vue"
import Rodape from '@components/layouts/site/RodapePublico.vue'
//import BreadCrumb from "@components/layouts/site/BreadCrumb.vue"

const rotas = useRoute()
const exibirBreadcrumb = computed(() => {
  const rotasIgnoradas = ['Início','/noticia/']
  return !rotasIgnoradas.some(item => rotas.name === item || rotas.path.startsWith(item))
  //return rotas.name !== 'Início'
})
</script>

<template>

  <div>
    <Cabecalho/>
    <RouterView v-slot="{ Component }">
      <component :is="Component"/>
    </RouterView>
    <Rodape/>
  </div>
</template>

