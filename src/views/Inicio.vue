<script setup>

import QuemSomos from "@/views/Advogados.vue";

defineOptions({
  name: 'InicioHome',
})
import {nextTick, onMounted} from "vue";
import AOS from 'aos'
import $ from "@/assets/js/jquery-global.js";
import 'magnific-popup';
import imagesLoaded from 'imagesloaded';
import 'jquery-waypoints/waypoints.js';
import Swiper from "swiper";

imagesLoaded.makeJQueryPlugin($);

import SlideInicio from "@/components/layouts/site/SlideInicio.vue";
import NoticiaDestaque from "@/components/layouts/site/NoticiaDestaque.vue";

onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()


    /*---------- 01. On Load Function ----------*/
    $(globalThis).on("load", function () {
      $(".preloader").fadeOut();
    });

    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
      $(".preloaderCls").each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          $(".preloader").css("display", "none");
        });
      });
    }

    /*---------- 03. Mobile Menu ----------*/
    $.fn.thmobilemenu = function (options) {
      var opt = $.extend(
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
        var menu = $(this); // Select menu

        // Menu Show & Hide
        function menuToggle() {
          menu.toggleClass(opt.bodyToggleClass);

          // collapse submenu on menu hide or show
          var subMenu = "." + opt.subMenuClass;
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
          var submenu = $(this).find("ul");
          submenu.addClass(opt.subMenuClass);
          submenu.css("display", "none");
          $(this).addClass(opt.subMenuParent);
          $(this).addClass(opt.thSubMenuParent); // Add th-item-has-children class
          $(this).children("a").append(opt.appendElement);
        });

        // Toggle Submenu
        function toggleDropDown($element) {
          var submenu = $element.children("ul");
          if (submenu.length > 0) {
            $element.toggleClass(opt.subMenuParentToggle);
            submenu.slideToggle(opt.toggleSpeed);
            submenu.toggleClass(opt.subMenuToggleClass);
          }
        }

        // Submenu toggle Button
        var itemHasChildren = "." + opt.thSubMenuParent + " > a";
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
      var topPos = $(this).scrollTop();
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
          var link = $(this).find('a');
          $(this).find(link).each(function () {
            $(this).on('click', function () {
              var target = $(this.getAttribute('href'));
              if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: target.offset().top - 10
                }, 1000);
              }
              ;

            });
          });
        })
      }
    };
    onePageNav('.onepage-nav');
    onePageNav('.scroll-down');

    /*---------- 05. Scroll To Top ----------*/
    if ($('.scroll-top').length > 0) {

      var scrollTopbtn = document.querySelector('.scroll-top');
      var progressPath = document.querySelector('.scroll-top path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      var updateProgress = function () {
        var scroll = $(globalThis).scrollTop();
        var height = $(document).height() - $(globalThis).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();
      $(globalThis).scroll(updateProgress);
      var offset = 50;
      var duration = 750;
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

    /*---------- 06. Set Background Image Color & Mask ----------*/
    if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
      });
    }

    if ($('[data-bg-color]').length > 0) {
      $('[data-bg-color]').each(function () {
        var color = $(this).attr('data-bg-color');
        $(this).css('background-color', color);
        $(this).removeAttr('data-bg-color');
      });
    }
    ;

    if ($('[data-theme-color]').length > 0) {
      $('[data-theme-color]').each(function () {
        var $color = $(this).attr('data-theme-color');
        $(this).get(0).style.setProperty('--theme-color', $color);
        $(this).removeAttr('data-theme-color');
      });
    }
    ;

    $('[data-border]').each(function () {
      var borderColor = $(this).data('border');
      $(this).css('--th-border-color', borderColor);
    });

    if ($('[data-mask-src]').length > 0) {
      $('[data-mask-src]').each(function () {
        var mask = $(this).attr('data-mask-src');
        $(this).css({
          'mask-image': 'url(' + mask + ')',
          '-webkit-mask-image': 'url(' + mask + ')'
        });
        $(this).addClass('bg-mask');
        $(this).removeAttr('data-mask-src');
      });
    }
    ;

    /*----------- 07. Global Slider ----------*/
    $('.th-slider').each(function () {
      var thSlider = $(this);
      var settings = $(this).data('slider-options') || {};

      // Store references to the navigation buttons
      var prevArrow = thSlider.find('.slider-prev');
      var nextArrow = thSlider.find('.slider-next');
      var paginationEl1 = thSlider.find('.slider-pagination').get(0);
      var paginationEl2 = thSlider.find('.slider-pagination2');
      var progressBarEl = thSlider.find('.slider-pagination-progressbar2 .slider-progressbar-fill');

      var sliderDefault = {
        slidesPerView: 1,
        spaceBetween: settings.spaceBetween || 24,
        loop: settings.loop !== false,
        speed: settings.speed || 1000,
        autoplay: settings.autoplay || {delay: 6000, disableOnInteraction: false},
        navigation: {
          prevEl: prevArrow.get(0),
          nextEl: nextArrow.get(0),
        },
        pagination: {
          el: paginationEl1,
          type: settings.paginationType || 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            var number = index + 1;
            var formattedNumber = number < 10 ? '0' + number : number;
            return '<span class="' + className + '" aria-label="Go to Slide ' + formattedNumber + '"></span>';
          },
        },
        on: {
          init: function () {
            updatePagination(this);
            updateProgressBar(this);
          },
          slideChange: function () {
            updatePagination(this);
            updateProgressBar(this);
          },
        },
      };

      var options = $.extend({}, sliderDefault, settings);
      var swiperInstance = new Swiper(thSlider.get(0), options);

      // Update Pagination and other UI elements
      function updatePagination(swiper) {
        var activeIndex = swiper.realIndex + 1;
        var totalSlides = swiper.slides.length;
        paginationEl2.html(
          '<span class="current-slide">' +
          (activeIndex < 10 ? '0' + activeIndex : activeIndex) +
          '</span> <span class="divider"></span> <span class="total-slides">' +
          (totalSlides < 10 ? '0' + totalSlides : totalSlides) +
          '</span>'
        );
      }

      function updateProgressBar(swiper) {
        var progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
        progressBarEl.css('height', progress + '%');
      }

      if ($('.slider-area').length > 0) {
        $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
      }

    });

    // Function to add animation classes
    function animationProperties() {
      $('[data-ani]').each(function () {
        var animationName = $(this).data('ani');
        $(this).addClass(animationName);
      });

      $('[data-ani-delay]').each(function () {
        var delayTime = $(this).data('ani-delay');
        $(this).css('animation-delay', delayTime);
      });
    }

    animationProperties();

    // Add click event handlers for external slider arrows based on data attributes
    $('[data-slider-prev], [data-slider-next]').on('click', function () {
      var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
      var targetSlider = $(sliderSelector);

      if (targetSlider.length) {
        var swiper = targetSlider[0].swiper;

        if (swiper) {
          if ($(this).data('slider-prev')) {
            swiper.slidePrev();
          } else {
            navigator,
              swiper.slideNext();
          }
        }
      }
    });


    /*--------------. Slider Tab -------------*/
    function activateGlobalSliderTabs(tabSelector, sliderSelector) {
      var $tabs = $(tabSelector).find('.tab-btn');
      var $line = $('<span class="indicator"></span>').appendTo(tabSelector);
      var $sliders = $(sliderSelector);

      var swipers = $sliders.map(function () {
        return this.swiper;
      }).get();

      $tabs.on('click', function (e) {
        e.preventDefault();
        var $clicked = $(this);
        var index = $clicked.index();

        // Highlight active tab
        $clicked.addClass("active").siblings().removeClass("active");
        linePos($clicked, $(tabSelector));

        // Slide all sliders to the same index
        swipers.forEach(function (swiper) {
          if (swiper) swiper.slideToLoop(index);
        });
      });

      // Sync tab state when any slider changes
      swipers.forEach(function (swiper) {
        if (swiper) {
          swiper.on("slideChange", function () {
            var index = swiper.realIndex;
            var $activeTab = $tabs.eq(index);
            $activeTab.addClass("active").siblings().removeClass("active");
            linePos($activeTab, $(tabSelector));
          });
        }
      });

      // Initial state
      var initialIndex = swipers[0]?.realIndex || 0;
      var $initial = $tabs.eq(initialIndex);
      $initial.addClass("active").siblings().removeClass("active");
      linePos($initial, $(tabSelector));

      function linePos($el, $wrap) {
        var offset = $el.position();
        var marginTop = parseInt($el.css('margin-top')) || 0;
        var marginLeft = parseInt($el.css('margin-left')) || 0;

        $line.css("--height-set", $el.outerHeight() + "px");
        $line.css("--width-set", $el.outerWidth() + "px");
        $line.css("--pos-y", offset.top + marginTop + "px");
        $line.css("--pos-x", offset.left + marginLeft + "px");
      }
    }

    $(globalThis).on('load', function () {
      if ($('.hero-thumb-tab').length && $('.hero-slider4').length) {
        activateGlobalSliderTabs('.hero-thumb-tab', '.hero-slider4');
      }
    });


    /*---------- 10. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
      // Sidebar Popup
      $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
      });
      $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
      });
      var sideMenuChild = $sideMenu + ' > div';
      $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
      });
      $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
      });
    };
    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');

    /*----------- 11. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
      type: "image",
      mainClass: 'mfp-zoom-in',
      removalDelay: 260,
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: 'mfp-zoom-in',
    });

    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
      type: "inline",
      midClick: true,
    });

    /*---------- 12. Section Position ----------*/

    // Interger Converter
    function convertInteger(str) {
      return parseInt(str, 10);
    }

    $.fn.sectionPosition = function (mainAttr, posAttr) {
      $(this).each(function () {
        var section = $(this);

        function setPosition() {
          var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
            posData = section.attr(mainAttr), // where to position
            posFor = section.attr(posAttr), // On Which section is for positioning
            topMark = "top-half", // Pos top
            bottomMark = "bottom-half", // Pos Bottom
            parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
            parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

          if (posData === topMark) {
            $(posFor).css(
              "padding-bottom",
              parentPB + sectionHeight + "px"
            );
            section.css("margin-top", "-" + sectionHeight + "px");
          } else if (posData === bottomMark) {
            $(posFor).css(
              "padding-top",
              parentPT + sectionHeight + "px"
            );
            section.css("margin-bottom", "-" + sectionHeight + "px");
          }
        }

        setPosition(); // Set Padding On Load
      });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
      $(postionHandler).imagesLoaded(function () {
        $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
      });
    }

    /*----------- 14. Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
      var $filter = ".filter-active",
        $filterItem = ".filter-item",
        $filterMenu = ".filter-menu-active";

      if ($($filter).length > 0) {
        var $grid = $($filter).isotope({
          itemSelector: $filterItem,
          filter: "*",
          masonry: {
            // use outer width of grid-sizer for columnWidth
            // columnWidth: 1,
          },
        });

        // filter items on button click
        $($filterMenu).on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({
            filter: filterValue,
          });
        });

        // Menu Active Class
        $($filterMenu).on("click", "button", function (event) {
          event.preventDefault();
          $(this).addClass("active");
          $(this).siblings(".active").removeClass("active");
        });
      }
    });

    $(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(function () {
      var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
        $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

      if ($($filter).length > 0) {
        $($filter).isotope({
          itemSelector: $filterItem,
          filter: "*",
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
          },
        });
      }
      $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        $($filter).isotope({
          filter: "*",
        });
      });
    });


    /*----------- 15. Shape Mockup ----------*/
    $.fn.shapeMockup = function () {
      var $shape = $(this);
      $shape.each(function () {
        var $currentShape = $(this),
          shapeTop = $currentShape.data("top"),
          shapeRight = $currentShape.data("right"),
          shapeBottom = $currentShape.data("bottom"),
          shapeLeft = $currentShape.data("left");
        $currentShape
          .css({
            top: shapeTop,
            right: shapeRight,
            bottom: shapeBottom,
            left: shapeLeft,
          })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    };

    if ($(".shape-mockup")) {
      $(".shape-mockup").shapeMockup();
    }

    /*  /!*----------- 16. Progress Bar Animation ----------*!/
      $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
          animation: "animate-positive 1.8s",
          opacity: "1"
        });
      }, { offset: '100%' });*/

    /*----------- 17. Countdown ----------*/
    $.fn.countdown = function () {
      $(this).each(function () {
        var $counter = $(this),
          countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
          exprireCls = "expired";

        // Finding Function
        function s$(element) {
          return $counter.find(element);
        }

        // Update the count down every 1 second
        var counter = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Check If value is lower than ten, so add zero before number
          days < 10 ? (days = "0" + days) : null;
          hours < 10 ? (hours = "0" + hours) : null;
          minutes < 10 ? (minutes = "0" + minutes) : null;
          seconds < 10 ? (seconds = "0" + seconds) : null;

          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(counter);
            $counter.addClass(exprireCls);
            $counter.find(".message").css("display", "block");
          } else {
            // Output the result in elements
            s$(".day").html(days);
            s$(".hour").html(hours);
            s$(".minute").html(minutes);
            s$(".seconds").html(seconds);
          }
        }, 1000);
      });
    };

    if ($(".counter-list").length) {
      $(".counter-list").countdown();
    }

    /*---------- 18. Image to SVG Code ----------*/
    const cache = {};

    $.fn.inlineSvg = function fnInlineSvg() {
      this.each(imgToSvg);

      return this;
    };

    function imgToSvg() {
      const $img = $(this);
      const src = $img.attr("src");

      // fill cache by src with promise
      if (!cache[src]) {
        const d = $.Deferred();
        $.get(src, (data) => {
          d.resolve($(data).find("svg"));
        });
        cache[src] = d.promise();
      }

      // replace img with svg when cached promise resolves
      cache[src].then((svg) => {
        const $svg = $(svg).clone();

        if ($img.attr("id")) $svg.attr("id", $img.attr("id"));
        if ($img.attr("class")) $svg.attr("class", $img.attr("class"));
        if ($img.attr("style")) $svg.attr("style", $img.attr("style"));

        if ($img.attr("width")) {
          $svg.attr("width", $img.attr("width"));
          if (!$img.attr("height")) $svg.removeAttr("height");
        }
        if ($img.attr("height")) {
          $svg.attr("height", $img.attr("height"));
          if (!$img.attr("width")) $svg.removeAttr("width");
        }

        $svg.insertAfter($img);
        $img.trigger("svgInlined", $svg[0]);
        $img.remove();
      });
    }

    $(".svg-img").inlineSvg();

    /*---------- 19. Circle Progress ----------*/
    document.addEventListener("DOMContentLoaded", function () {
      const progressBars = document.querySelectorAll('.circular-progress');

      progressBars.forEach(progressBar => {
        const circle = progressBar.querySelector('.circle');
        const percentageDisplay = progressBar.querySelector('.percentage');
        const target = parseInt(progressBar.getAttribute('data-target'), 10);
        let progressValue = 0;

        const animateProgress = () => {
          if (progressValue <= target) {
            const offset = 100 - (progressValue * 100) / 100;
            circle.style.strokeDashoffset = offset;
            percentageDisplay.textContent = progressValue + "%";
            progressValue++;
            requestAnimationFrame(animateProgress);
          }
        };

        animateProgress();
      });
    });

    /*----------- 00. Woocommerce Toggle ----------*/
    // Ship To Different Address
    $("#ship-to-different-address-checkbox").on("change", function () {
      if ($(this).is(":checked")) {
        $("#ship-to-different-address")
          .next(".shipping_address")
          .slideDown();
      } else {
        $("#ship-to-different-address").next(".shipping_address").slideUp();
      }
    });

    // Login Toggle
    $(".woocommerce-form-login-toggle a").on("click", function (e) {
      e.preventDefault();
      $(".woocommerce-form-login").slideToggle();
    });

    // Coupon Toggle
    $(".woocommerce-form-coupon-toggle a").on("click", function (e) {
      e.preventDefault();
      $(".woocommerce-form-coupon").slideToggle();
    });

    // Woocommerce Shipping Method
    $(".shipping-calculator-button").on("click", function (e) {
      e.preventDefault();
      $(this).next(".shipping-calculator-form").slideToggle();
    });

    // Woocommerce Payment Toggle
    $('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show();
    $('.wc_payment_methods input[type="radio"]').each(function () {
      $(this).on("change", function () {
        $(".payment_box").slideUp();
        $(this).siblings(".payment_box").slideDown();
      });
    });

    // Woocommerce Rating Toggle
    $(".rating-select .stars a").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).parent().parent().addClass("selected");
        $(this).addClass("active");
      });
    });

    // Quantity Plus Minus ---------------------------
    $(".quantity-plus").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        var $qty = $(this).siblings(".qty-input");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
          $qty.val(currentVal + 1);
        }
      });
    });

    $(".quantity-minus").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        var $qty = $(this).siblings(".qty-input");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
          $qty.val(currentVal - 1);
        }
      });
    });

    // /*----------- 00.Color Scheme ----------*/
    $('.color-switch-btns button').each(function () {
      // Get color for button
      const button = $(this);
      const color = button.data('color');
      button.css('--theme-color', color);

      // Change theme color on click
      button.on('click', function () {
        const clickedColor = $(this).data('color');
        $(':root').css('--theme-color', clickedColor);
      });
    });

    $(document).on('click', '.switchIcon', function () {
      $('.color-scheme-wrap').toggleClass('active');
    });

    $('.secondary-color-switch-btns button').each(function () {
      // Get color for button
      const button = $(this);
      const color = button.data('secondary-color');
      button.css('--theme-color2', color);

      // Change theme color on click
      button.on('click', function () {
        const clickedColor = $(this).data('secondary-color');
        $(':root').css('--theme-color2', clickedColor);
      });
    });

    /*----------- Count pricing ----------*/
    $(document).on('click', '.donate-amount-button-list li', function () {
      // Get the clicked button's amount
      let amount = $(this).data('amount');

      // Set the value of the input to the clicked amount
      $('.donate_amount').val(amount);

      // Remove 'active' class from all buttons
      $('.donate-amount-button').removeClass('active');

      // Add 'active' class to the clicked button
      $(this).addClass('active');
    });

    // Optional: Update the active button on input change for custom amount
    $(document).on('keyup', '.donate_amount', function () {
      let inputAmount = $(this).val();

      // Remove 'active' class from all buttons
      $('.donate-amount-button').removeClass('active');

      // If the input is a custom amount, you may want to handle it differently
      if (inputAmount && inputAmount !== '20' && inputAmount !== '50' && inputAmount !== '100' && inputAmount !== '150' && inputAmount !== '200') {
        // Add a custom class or handle the custom input
        $('.donate-amount-button:last-child').addClass('active'); // Assuming the last button is for Custom Amount
      }
    });

    /************lettering js***********/
    function injector(t, splitter, klass, after) {
      var a = t.text().split(splitter), inject = '';
      if (a.length) {
        $(a).each(function (i, item) {
          inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
        });
        t.empty().append(inject);
      }
    }

    var methods = {
      init: function () {

        return this.each(function () {
          injector($(this), '', 'char', '');
        });

      },

      words: function () {

        return this.each(function () {
          injector($(this), ' ', 'word', ' ');
        });

      },

      lines: function () {

        return this.each(function () {
          var r = "eefec303079ad17405c889e092e105b0";
          // Because it's hard to split a <br/> tag consistently across browsers,
          // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
          // (of the word "split").  If you're trying to use this plugin on that
          // md5 hash string, it will fail because you're being ridiculous.
          injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
        });

      }
    };

    $.fn.lettering = function (method) {
      // Method calling logic
      if (method && methods[method]) {
        return methods[method].apply(this, [].slice.call(arguments, 1));
      } else if (method === 'letters' || !method) {
        return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
      }
      $.error('Method ' + method + ' does not exist on jQuery.lettering');
      return this;
    };


    $(".circle-title-anime").lettering();

    /*----------- 00. Right Click Disable ----------*/
    /* globalThis.addEventListener('contextmenu', function (e) {
           // do something here...
           e.preventDefault();
         }, false);

     /*----------- 00. Inspect Element Disable ----------
         document.onkeydown = function (e) {
           if (event.keyCode == 123) {
             return false;
           }
           if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
             return false;
           }
           if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
             return false;
           }
           if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
             return false;
           }
           if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
             return false;
           }
         }*/


  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})


</script>

<template>
  <SlideInicio/>
  <QuemSomos/>

  <!--==============================
  Service Area
  ==============================-->
  <section class="space-bottom overflow-hidden" id="service-sec">
    <div class="service-wrap1 space th-radius overflow-hidden" data-bg-src="assets/img/bg/gray-bg2.png"
         data-overlay="gray" data-opacity="5">
      <div class="shape-mockup service-bg-shape1-5 d-xxl-inline-block d-none z-index-3 spin" data-top="15%"
           data-left="18%">
        <div class="color-masking">
          <div class="masking-src" data-mask-src="assets/img/shape/service_shape2_1.png"></div>
          <img src="@assets/img/shape/service_shape2_1.png" alt="img">
        </div>
      </div>
      <div class="shape-mockup service-bg-shape1-6 d-xxl-inline-block d-none z-index-3 jump" data-bottom="28%"
           data-right="5%">
        <div class="color-masking2">
          <div class="masking-src" data-mask-src="assets/img/shape/service_shape2_2.png"></div>
          <img src="@assets/img/shape/service_shape2_2.png" alt="img">
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="title-area text-center">
              <span class="sub-title after-none before-none">Propostas</span>
              <h2 class="sec-title">O que Bruno vai defender.</h2>
            </div>
          </div>
        </div>
        <div class="row gy-30 gx-30 justify-content-center">
          <div class="col-xl-4 col-md-6">
            <div class="service-card style2">
              <div class="box-thumb">
                <img src="@assets/img/service/service_card_1_1.png" alt="img">
              </div>
              <div class="box-icon">
                <img src="@assets/img/icon/service-icon/service-card-icon1-1.svg" alt="Icon">
              </div>
              <div class="box-content">
                <h3 class="box-title"><a href="#">Emprego & Renda</a></h3>
                <p class="box-text">Criar ambiente favorável ao empreendedorismo, desburocratizar e incentivar micro e pequenas empresas para gerar mais empregos em Roraima.</p>
                <a href="#" class="th-btn">Saiba Mais<i class="fas fa-play ms-2"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-card style2">
              <div class="box-thumb">
                <img src="@assets/img/service/service_card_1_2.png" alt="img">
              </div>
              <div class="box-icon">
                <img src="@assets/img/icon/service-icon/service-card-icon1-2.svg" alt="Icon">
              </div>
              <div class="box-content">
                <h3 class="box-title"><a href="#">Educação</a></h3>
                <p class="box-text">Defender escolas de qualidade, formação técnica e profissional, bolsas de estudo e acesso ao ensino superior para a juventude roraimense.</p>
                <a href="#" class="th-btn">Saiba Mais<i class="fas fa-play ms-2"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-card style2">
              <div class="box-thumb">
                <img src="@assets/img/service/service_card_1_3.png" alt="img">
              </div>
              <div class="box-icon">
                <img src="@assets/img/icon/service-icon/service-card-icon1-3.svg" alt="Icon">
              </div>
              <div class="box-content">
                <h3 class="box-title"><a href="#">Saúde Pública</a></h3>
                <p class="box-text">Ampliar UBSs no interior, garantir médicos nas comunidades mais remotas, e fiscalizar o investimento em saúde para que cada roraimense tenha atendimento digno.</p>
                <a href="#" class="th-btn">Saiba Mais<i class="fa fa-arrow-up-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--==============================
  Video Area
  ==============================-->
  <div class="video-area-2 space bg-theme-dark">
    <div class="shape-mockup video-bg-shape2-1" data-top="0" data-left="0" data-bottom="0">
      <img src="@assets/img/shape/video_shape2_1.png" alt="img">
    </div>
    <div class="container">
      <div class="row gy-40 gx-80 justify-content-between">
        <div class="col-xl-6">
          <div class="title-area mb-35">
            <span class="sub-title after-none before-none">Make a Donations </span>
            <h2 class="sec-title text-white">Give Time, Change Lives
              Become a Donate Now</h2>
            <p class="text-light">Volunteers are the heart of our organization. Join our team to make a hands-on
              difference in your community. Whether you have a few hours or a few days, your time and skills
              can help us achieve our goals.</p>
          </div>
          <div class="donation-card style2">
            <div class="box-thumb">
              <img src="@assets/img/donation/donation2-1.png" alt="image">
            </div>
            <div class="box-content">
              <h3 class="box-title"><a href="blog-details.html">Big charity: build school for poor
                children</a></h3>
              <p>Stay informed about our upcoming events and campaigns.</p>
              <div class="donation-card_progress-wrap">
                <div class="progress">
                  <div class="progress-bar" style="width: 85%;">
                    <div class="progress-value">85%</div>
                  </div>
                </div>
                <div class="donation-card_progress-content">
                  <span class="donation-card_raise">$5,00.00 Raised</span>
                  <span class="donation-card_goal text-theme2">Goal - $10,00.00</span>
                </div>
              </div>
              <a href="blog-details.html" class="th-btn style6">Donate Now <i
                class="fas fa-play ms-2"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="video-thumb2-1 video-box-center">
            <img src="@assets/img/normal/video-thumb2-1.png" alt="img">
            <h2 class="video-title">Negócio e Política</h2>
            <a href="assets/videos/2.mp4" class="play-btn style5 popup-video"><i
              class="fa-sharp fa-solid fa-play"></i></a>


          </div>
        </div>
      </div>
    </div>
  </div>

  <keep-alive>
    <NoticiaDestaque/>
  </keep-alive>

</template>
