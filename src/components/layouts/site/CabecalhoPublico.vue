<script setup>
import {nextTick, onMounted} from "vue";
import $ from "@/assets/js/jquery-global.js";
import MenuPublico from '@components/layouts/site/MenuPublico.vue'

onMounted(async () => {
  try {
    await nextTick()

    /*---------- 03. Mobile Menu ----------*/
    $.fn.thmobilemenu = function (options) {
      let opt = $.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        options
      );

      return this.each(function () {
        let menu = $(this); // Select menu

        // Menu Show & Hide
        function menuToggle() {
          menu.toggleClass(opt.bodyToggleClass);

          // collapse submenu on menu hide or show
          let subMenu = "." + opt.subMenuClass;
          $(subMenu).each(function () {
            if ($(this).hasClass(opt.subMenuToggleClass)) {
              $(this).removeClass(opt.subMenuToggleClass);
              $(this).css("display", "none");
              $(this).parent().removeClass(opt.subMenuParentToggle);
            }
          });
        }

        // Class Set Up for every submenu
        menu.find("." + opt.subMenuParent).each(function () {
          let submenu = $(this).find("ul");
          submenu.addClass(opt.subMenuClass);
          submenu.css("display", "none");
          $(this).addClass(opt.subMenuParent);
          $(this).addClass(opt.thSubMenuParent); // Add th-item-has-children class
          $(this).children("a").append(opt.appendElement);
        });

        // Toggle Submenu
        function toggleDropDown($element) {
          let submenu = $element.children("ul");
          if (submenu.length > 0) {
            $element.toggleClass(opt.subMenuParentToggle);
            submenu.slideToggle(opt.toggleSpeed);
            submenu.toggleClass(opt.subMenuToggleClass);
          }
        }

        // Submenu toggle Button
        let itemHasChildren = "." + opt.thSubMenuParent + " > a";
        $(itemHasChildren).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            toggleDropDown($(this).parent());
          });
        });

        // Menu Show & Hide On Toggle Btn click
        $(opt.menuToggleBtn).each(function () {
          $(this).on("click", function () {
            menuToggle();
          });
        });

        // Hide Menu On outside click
        menu.on("click", function (e) {
          e.stopPropagation();
          menuToggle();
        });

        // Stop Hide full menu on menu click
        menu.find("div").on("click", function (e) {
          e.stopPropagation();
        });
      });
    };

    $(".th-menu-wrapper").thmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    $(globalThis).scroll(function () {
      let topPos = $(this).scrollTop();
      if (topPos > 500) {
        $('.sticky-wrapper').addClass('sticky');
        $('.category-menu').addClass('close-category');
      } else {
        $('.sticky-wrapper').removeClass('sticky')
        $('.category-menu').removeClass('close-category');
      }
    })

    $(".menu-expand").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $('.category-menu').toggleClass('open-category');
      });
    });

    /*----------- One Page Nav ----------*/
    function onePageNav(element) {
      if ($(element).length > 0) {
        $(element).each(function () {
          let link = $(this).find('a');
          $(this).find(link).each(function () {
            $(this).on('click', function () {
              let target = $(this.getAttribute('href'));
              if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: target.offset().top - 10
                }, 1000);
              }
            });
          });
        })
      }
    }

    onePageNav('.onepage-nav');
    onePageNav('.scroll-down');

    /*---------- 05. Scroll To Top ----------*/
    if ($('.scroll-top').length > 0) {

      let scrollTopbtn = document.querySelector('.scroll-top');
      let progressPath = document.querySelector('.scroll-top path');
      let pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      let updateProgress = function () {
        let scroll = $(globalThis).scrollTop();
        let height = $(document).height() - $(globalThis).height();
        progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
      }
      updateProgress();
      $(globalThis).scroll(updateProgress);
      let offset = 50;
      let duration = 750;
      $(globalThis).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
          $(scrollTopbtn).addClass('show');
        } else {
          $(scrollTopbtn).removeClass('show');
        }
      });
      $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    }


  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})


</script>

<template>
  <!--==============================
      Mobile Menu
    ============================== -->
  <div class="th-menu-wrapper">
    <div class="th-menu-area text-center">
      <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
      <div class="mobile-logo">
        <router-link :to="`/`">
          <img src="@assets/img/logo.svg" width="152px" alt="Logo Bruno Dantas">
        </router-link>
      </div>
      <div class="th-mobile-menu">
        <ul>
          <li> <a href="#hero">Página Inicial</a> </li>
          <li><a href="#about-sec">Quem Sou</a></li>
          <li><a href="#service-sec">Bandeiras</a></li>
          <li><a href="#blog-sec">Notícias</a></li>
          <li><a href="#contact-sec">Participe</a> </li>
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


