<script setup>
import MenuPublico from '@components/layouts/site/MenuPublico.vue'
</script>

<template>
  <!--==============================
      Mobile Menu
    ============================== -->
  <div class="th-menu-wrapper">
    <div class="th-menu-area text-center">
      <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
      <div class="mobile-logo">
        <a href="index.html">
          <img src="@assets/img/logo.svg" width="152px" alt="Bruno Dantas logo">
        </a>
      </div>
      <div class="th-mobile-menu">
        <ul>
          <li class="menu-item-has-children">
            <a href="index.html">Página Inicial</a>
            <ul class="sub-menu">
              <li class="menu-item-has-children">
                <a href="#">Multipage</a>
                <ul class="sub-menu">
                  <li><a href="index.html">Página Inicial One</a></li>
                  <li><a href="Página Inicial-2.html">Página Inicial Two</a></li>
                  <li><a href="Página Inicial-3.html">Página Inicial Three</a></li>
                  <li><a href="Página Inicial-4.html">Página Inicial Four</a></li>
                  <li><a href="Página Inicial-5.html">Página Inicial Five</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Onepage</a>
                <ul class="sub-menu">
                  <li><a href="Página Inicial-1-op.html">Página Inicial One</a></li>
                  <li><a href="Página Inicial-2-op.html">Página Inicial Two</a></li>
                  <li><a href="Página Inicial-3-op.html">Página Inicial Three</a></li>
                  <li><a href="Página Inicial-4-op.html">Página Inicial Four</a></li>
                  <li><a href="Página Inicial-5-op.html">Página Inicial Five</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">RTL</a>
                <ul class="sub-menu">
                  <li><a href="Página Inicial-1-rtl.html">Página Inicial One</a></li>
                  <li><a href="Página Inicial-2-rtl.html">Página Inicial Two</a></li>
                  <li><a href="Página Inicial-3-rtl.html">Página Inicial Three</a></li>
                  <li><a href="Página Inicial-4-rtl.html">Página Inicial Four</a></li>
                  <li><a href="Página Inicial-5-rtl.html">Página Inicial Five</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="about.html">Sobre Mim</a></li>
          <li class="menu-item-has-children">
            <a href="#">Donations</a>
            <ul class="sub-menu">
              <li><a href="donation.html">propostas </a></li>
              <li><a href="donation-details.html">Donation Details</a></li>
              <li><a href="donate-now.html">Donate Now</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li class="menu-item-has-children">
                <a href="#">Shop</a>
                <ul class="sub-menu">
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="shop-details.html">Shop Details</a></li>
                  <li><a href="cart.html">Cart Page</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                </ul>
              </li>
              <li><a href="team.html">Volunteers</a></li>
              <li><a href="team-details.html">Volunteer Details</a></li>
              <li><a href="add-team.html">Become A Volunteer</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="faq.html">FAQS</a></li>
              <li><a href="testimonial.html">Testimonials</a></li>
              <li><a href="error.html">Error Page</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Blog</a>
            <ul class="sub-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!--==============================
    Header Area
  ==============================-->

  <header class="th-header header-layout1 onepage-nav">
    <div class="sticky-wrapper">
      <!-- Main Menu Area -->
      <MenuPublico/>
    </div>
  </header>


</template>


