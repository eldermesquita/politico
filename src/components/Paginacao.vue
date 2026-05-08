<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

function mudarPagina(pagina) {
  if (pagina >= 1 && pagina <= props.total) {
    emit('update:modelValue', pagina)
  }
}
</script>

<template>
  <div class="page-nav-wrap mt-5 text-center fadeInUp" v-if="total > 1">
    <ul>
      <li v-if="modelValue > 1">
        <a class="page-numbers" href="javascript:void(0)" @click="mudarPagina(modelValue - 1)">
          <i class="far fa-angle-left"></i>
        </a>
      </li>
      <li v-for="page in total" :key="page">
        <a class="page-numbers" :class="{ 'current': page === modelValue }" href="javascript:void(0)" @click="mudarPagina(page)">
          {{ page < 10 ? '0' + page : page }}
        </a>
      </li>
      <li v-if="modelValue < total">
        <a class="page-numbers" href="javascript:void(0)" @click="mudarPagina(modelValue + 1)">
          <i class="far fa-angle-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page-numbers.current {
  background: #c8a35e; /* Valor padrão para var(--thm-base) se não definida */
  color: #fff;
  border-color: #c8a35e;
}
</style>
