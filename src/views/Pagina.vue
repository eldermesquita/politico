<script setup>
import FalarAgora from "@/components/layouts/site/FalarAgora.vue";

defineOptions({
  name: 'PaginasConteudo',
})

import {computed, defineProps} from 'vue'
import AreaAtuacao from '@/dados/areaAtuacao.json'
import {useContato} from '@/composable/useContato'

const {getWhatsappLink} = useContato()

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    default: '',
  },
})

const area = computed(() => {
  return AreaAtuacao.find((item) => item.id === props.id) || null
})

const servicos = computed(() => {
  return area.value?.servicos?.filter((servico) => servico.exibir) || []
})

</script>

<template>
  <section class="section-bg-2 section-padding service-2 service-wrapper">
    <div class="container">
      <div class="service-inner">

        <div class="service-items">
          <div v-for="(servico, index) in servicos" :key="servico.id" class="signle-service-item"
               data-aos="fade"
               :data-aos-delay="index * 50"
               data-aos-offset="120"
               data-aos-easing="ease-in-out"
               data-aos-once="false"
               :data-aos-duration="`500`">
            <div class="title d-flex align-items-center">
              <div class="icon">
                <i :class="area.icone"></i>
              </div>
              <h3>{{ servico.nome }}</h3>
            </div>
            <p>{{ servico.descricao }}</p>
          </div>

        </div>
      </div>
    </div>

  </section>
  <FalarAgora :id="area?.id" :titulo="area?.titulo"/>
</template>
<style scoped>

.section-padding {
  padding: 120px 0px 2px 0px;
}

.service-2 .service-inner {
  padding-bottom: 98px !important;
}
</style>
