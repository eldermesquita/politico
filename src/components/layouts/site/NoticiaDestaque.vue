<script setup>
import {nextTick, onMounted} from "vue";
import AOS from 'aos'


onMounted(async () => {
  try {
    await nextTick()


    AOS.refresh()

  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <!--==============================
   Blog Area
   ==============================-->
  <section class="overflow-hidden space" id="blog-sec">
    <div class="shape-mockup blog-bg-shape2-1 jump-reverse d-xl-block d-none" data-top="20%" data-right="0">
      <img src="@assets/img/shape/footer-bg-shape3.png" alt="img">
    </div>
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title after-none before-none">Na Mídia</span>
        <h2 class="sec-title">Últimas Notícias
        </h2>
      </div>
      <div class="slider-area">
        <div class="swiper th-slider has-shadow" id="blogSlider2"
             data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_1.jpg" alt="image">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>July 16, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">See Your Impact: Transparent Donation
                    Tracking</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_2.jpg" alt="image">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>March 24, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">Every Contribution Counts: Make a
                    Difference</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_3.jpg" alt="image">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>June 30, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">Real Stories, Real Impact: Your
                    Donations at Work</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_1.jpg" alt="image">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>July 16, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">See Your Impact: Transparent Donation
                    Tracking</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_2.jpg" alt="Education">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>March 24, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">Every Contribution Counts: Make a
                    Difference</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="blog-card">
                <div class="blog-img">
                  <a href="#">
                    <div class="blog-img-shape1"
                         data-mask-src="assets/img/blog/blog-card-bg-shape1-2.png"></div>
                    <img src="@assets/img/blog/blog_1_3.jpg" alt="blog">
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-card-shape"
                       data-mask-src="assets/img/blog/blog-card-bg-shape1-1.png"></div>
                  <div class="blog-meta">
                    <a href="#"><i class="fas fa-calendar"></i>June 30, 2025</a>
                    <a href="#"><i class="fas fa-tags"></i>Education</a>
                  </div>
                  <h3 class="box-title"><a href="#">Real Stories, Real Impact: Your
                    Donations at Work</a></h3>
                  <a href="#" class="th-btn">Leia Mais<i
                    class="fas fa-play ms-2"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button data-slider-prev="#blogSlider2" class="slider-arrow slider-prev"><i class="fas fa-arrow-left"></i>
        </button>
        <button data-slider-next="#blogSlider2" class="slider-arrow slider-next"><i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
