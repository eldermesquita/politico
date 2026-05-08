<script setup>
import AreaAtuacao from '@/dados/areaAtuacao.json'
import {slugUrl} from '@/utils/funcoes'
</script>
<template>
  <section class="features-wrapper features-1">
    <div class="container">
      <div class="row">
        <template v-for="(area,index) in AreaAtuacao" :key="index">
          <div v-if="area.exibir" class="col-xl-3 col-lg-6 col-md-6 col-12">
            <router-link
              :to="`/areas-de-atuacao/${area.id}/${slugUrl(area.titulo)}`">
              <div class="single-feature-item">
                <div class="icon">
                  <i :class="area.icone"></i>
                </div>
                <h4>
                  {{ area.titulo }}
                </h4>
                <p>{{ area.descricao }}</p>
                <ul>
                  <li><i class="fas fa-check-circle"></i> Falar com Advogado</li>
                </ul>
              </div>
            </router-link>

          </div>
        </template>
      </div>
    </div>
  </section>


</template>

<style>
.bg-cover {
  background-image: url('@assets/img/hero/hero-1-1-bg.png');
}
</style>
