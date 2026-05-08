<script setup>
defineOptions({
  name: 'FalaConosco',
})
import FalarAgora from "@/components/layouts/site/FalarAgora.vue";
import { useContato } from '@/composable/useContato'
const { getWhatsappLink } = useContato()

</script>

<template>
  <section class="contact-page-wrap section-padding">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-12">
          <a :href="getWhatsappLink()" target="_blank" class="single-contact-card d-flex align-items-center">
            <div class="icon">
              <i class="flaticon-telephone"></i>
            </div>
            <div class="title">
              <span>Telefone / Whatsapp</span>
              <h4>095981083779</h4>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-contact-card d-flex align-items-center">
          <a href="https://share.google/jE5AqTy68Pm0Dgbf4" target="_blank" >
            <div class="icon">
              <i class="flaticon-location"></i>
            </div>
            <div class="title">
              <span>Nossa Localização</span>
              <h4>R. Mte. Albano, 3730 - Asa Branca, Boa Vista - RR, 69312-298</h4>
            </div>
          </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-contact-card d-flex align-items-center">
            <div class="icon">
              <i class="flaticon-email"></i>
            </div>
            <div class="title">
              <span>Email</span>
              <h4>carvalhoadvocaciarr@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="office-google-map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31880.03680384443!2d-60.764821525683594!3d2.8147844999999907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9305f5691a6885%3A0x5904633dfa06d90b!2sCARVALHO%20ADVOCACIA!5e0!3m2!1spt-BR!2sbr!4v1773688812220!5m2!1spt-BR!2sbr"
      width="600" height="450" style="border:0;" title="Mapa do Google" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </div>
  <FalarAgora :id="0" />
</template>
