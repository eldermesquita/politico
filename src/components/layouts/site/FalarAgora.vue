<script setup>
defineOptions({
  name: 'FalarAgora',
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


</script>

<template>

  <section class="cta-wrapper cta-2 style-3 section-padding pb-0 section-bg">
    <div class="container">
      <div class="cta-inner "
           data-aos-offset="120"
           data-aos-easing="ease-in-out"
           data-aos-once="true"
           data-aos="slide-left"
           data-aos-delay="300"
           data-aos-duration="300">
        <div class="icon"><i class="flaticon-customer-support"></i></div>
        <div class="title">
          <h3 class="split-text right">
            <div class="split-line">
              Você está enfrentando problemas?
            </div>
          </h3>
          <p>Atendimento especializado de forma Online em todo brasil</p>
          <p> e presencial em todo Estado de Roraima </p>
        </div>
        <a :href="getWhatsappLink(`Olá, gostaria de falar com um especialista sobre ${area?.titulo || 'jurídico'}`)"
           target="_blank" class="theme-btn white-btn">Falar agora com especialista</a>
      </div>
    </div>
  </section>


</template>
<style scoped>
.cta-2.style-3 .cta-inner {
  background: linear-gradient(84deg, var(--theme) 0%, #1379df 100%);
}

.section-padding {
  padding: 120px 0px 2px 0px;
}

.cta-2 {
  margin-top: -176px;
}

.cta-2.style-3 {
  margin-bottom: -50px;
}

.section-bg {
  background-color: #f3f8ff00 !important;
}

</style>
