<template>
  <div class="h-100 d-flex align-center justify-md-space-between justify-center">
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
    Feito com
      <VIcon
        icon="ri-heart-line"
        color="error"
        size="1.25rem"
        class="mx-1"
      />  e

          <VIcon
              icon="ri-cup-fill"
              color="black"
              size="1.25rem"
              class="mx-1"
          />


      By <a
        href="https://eldermesquita.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >e-design</a>
    </span>

  </div>
</template>
<script setup lang="ts">
</script>
