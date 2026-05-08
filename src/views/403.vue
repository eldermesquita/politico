<script setup>
defineOptions({
  name: 'PaginaNaoAutorizada',
})
</script>

<template>
  <section class="container text-center no-page-block">
    <div class="row">
      <div class="col-xs-12 col-sm-offset-2 col-sm-8">
        <h1>Acesso não autorizado!</h1>
        <p>
          Desculpe, você não tem permissão para acessar esta página.
          <br class="hidden-xs" />
          Por favor, entre em contato com o administrador do sistema ou volte para a
          <a href="/">página inicial</a>.
        </p>

        <strong class="element-block text-large"> 4<span class="text-bright">0</span>3 </strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-page-block {
  padding: 80px 0;
}
.text-large {
  font-size: 100px;
  font-weight: bold;
  display: block;
  margin-top: 30px;
}
.text-bright {
  color: #ff5252;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
