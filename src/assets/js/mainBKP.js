import $ from './jquery-global.js';
import 'magnific-popup';
import imagesLoaded from 'imagesloaded';
import 'jquery-waypoints/waypoints.js';
import Swiper from "swiper";

imagesLoaded.makeJQueryPlugin($);

;(function ($) {
  "use strict";
  /*=================================
      JS Index Here
  ==================================*/
  /*
  01. On Load Function
  02. Preloader
  03. Mobile Menu
  04. Sticky fix
  05. Scroll To Top
  06. Set Background Image Color & Mask
  07. Global Slider
  08. Ajax Contact Form
  09. Search Box Popup
  10. Popup Sidemenu
  11. Magnific Popup
  12. Section Position
  13. Filter
  14. Counter Up
  15. Shape Mockup
  16. Progress Bar Animation
  17. Countdown
  18. Image to SVG Code
  00. Woocommerce Toggle
  00. Color Scheme
  00. Right Click Disable
  */
  /*=================================
      JS Index End
  ==================================*/

  /*

  /*---------- 09. Search Box Popup ----------*/
  function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
    $($searchOpen).on("click", function (e) {
      e.preventDefault();
      $($searchBox).addClass($toggleCls);
    });
    $($searchBox).on("click", function (e) {
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
    $($searchBox)
      .find("form")
      .on("click", function (e) {
        e.stopPropagation();
        $($searchBox).addClass($toggleCls);
      });
    $($searchCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
  }

  popupSarchBox(".popup-search-box", ".searchBoxToggler", ".searchClose", "show");

  /*---------- 03. Mobile Menu ----------*/
  $.fn.thmobilemenu = function (options) {
    const opt = $.extend(
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
      const menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        const subMenu = "." + opt.subMenuClass;
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
        const submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        $(this).addClass(opt.subMenuParent);
        $(this).addClass(opt.thSubMenuParent); // Add th-item-has-children class
        $(this).children("a").append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        const submenu = $element.children("ul");
        if (submenu.length > 0) {
          $element.toggleClass(opt.subMenuParentToggle);
          submenu.slideToggle(opt.toggleSpeed);
          submenu.toggleClass(opt.subMenuToggleClass);
        }
      }

      // Submenu toggle Button
      const itemHasChildren = "." + opt.thSubMenuParent + " > a";
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
    const topPos = $(this).scrollTop();
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
        const link = $(this).find('a');
        $(this).find(link).each(function () {
          $(this).on('click', function () {
            const target = $(this.getAttribute('href'));
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

    const scrollTopbtn = document.querySelector('.scroll-top');
    const progressPath = document.querySelector('.scroll-top path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    const updateProgress = function () {
      const scroll = $(globalThis).scrollTop();
      const height = $(document).height() - $(globalThis).height();
      progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
    };
    updateProgress();
    $(globalThis).scroll(updateProgress);
    const offset = 50;
    const duration = 750;
    // eslint-disable-next-line no-undef
    jQuery(globalThis).on('scroll', function () {
      // eslint-disable-next-line no-undef
      if (jQuery(this).scrollTop() > offset) {
        // eslint-disable-next-line no-undef
        jQuery(scrollTopbtn).addClass('show');
      } else {
        // eslint-disable-next-line no-undef
        jQuery(scrollTopbtn).removeClass('show');
      }
    });
    // eslint-disable-next-line no-undef
    jQuery(scrollTopbtn).on('click', function (event) {
      event.preventDefault();
      // eslint-disable-next-line no-undef
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
  }

  /*---------- 06. Set Background Image Color & Mask ----------*/
  let dataBgSrc = $('[data-bg-src]');
  let dataBgColor = $('[data-bg-color]');
  let dataThemeColor = $('[data-theme-color]')
  let dataMaskSrc = $('[data-mask-src]')
  if (dataBgSrc.length > 0) {
    dataBgSrc.each(function () {
      const src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }

  if (dataBgColor.length > 0) {
    dataBgColor.each(function () {
      const color = $(this).attr('data-bg-color');
      $(this).css('background-color', color);
      $(this).removeAttr('data-bg-color');
    });
  }

  if (dataThemeColor.length > 0) {
    dataThemeColor.each(function () {
      const $color = $(this).attr('data-theme-color');
      $(this).get(0).style.setProperty('--theme-color', $color);
      $(this).removeAttr('data-theme-color');
    });
  }

  $('[data-border]').each(function () {
    const borderColor = $(this).data('border');
    $(this).css('--th-border-color', borderColor);
  });

  if (dataMaskSrc.length > 0) {
    dataMaskSrc.each(function () {
      const mask = $(this).attr('data-mask-src');
      $(this).css({
        'mask-image': 'url(' + mask + ')',
        '-webkit-mask-image': 'url(' + mask + ')'
      });
      $(this).addClass('bg-mask');
      $(this).removeAttr('data-mask-src');
    });
  }

  /*----------- 07. Global Slider ----------*/
  $('.th-slider').each(function () {
    const thSlider = $(this);
    const settings = $(this).data('slider-options') || {};

    // Store references to the navigation buttons
    const prevArrow = thSlider.find('.slider-prev');
    const nextArrow = thSlider.find('.slider-next');
    const paginationEl1 = thSlider.find('.slider-pagination').get(0);
    const paginationEl2 = thSlider.find('.slider-pagination2');
    const progressBarEl = thSlider.find('.slider-pagination-progressbar2 .slider-progressbar-fill');

    const sliderDefault = {
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
          const number = index + 1;
          const formattedNumber = number < 10 ? '0' + number : number;
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

    const options = $.extend({}, sliderDefault, settings);
    const swiperInstance = new Swiper(thSlider.get(0), options);

    // Update Pagination and other UI elements
    function updatePagination(swiper) {
      const activeIndex = swiper.realIndex + 1;
      const totalSlides = swiper.slides.length;
      paginationEl2.html(
        '<span class="current-slide">' +
        (activeIndex < 10 ? '0' + activeIndex : activeIndex) +
        '</span> <span class="divider"></span> <span class="total-slides">' +
        (totalSlides < 10 ? '0' + totalSlides : totalSlides) +
        '</span>'
      );
    }

    function updateProgressBar(swiper) {
      const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
      progressBarEl.css('height', progress + '%');
    }

    const sliderArea = $('.slider-area')
    if (sliderArea.length > 0) {
      sliderArea.closest(".container").parent().addClass("arrow-wrap");
    }

  });

// Function to add animation classes
  function animationProperties() {
    $('[data-ani]').each(function () {
      const animationName = $(this).data('ani');
      $(this).addClass(animationName);
    });

    $('[data-ani-delay]').each(function () {
      const delayTime = $(this).data('ani-delay');
      $(this).css('animation-delay', delayTime);
    });
  }

  animationProperties();

// Add click event handlers for external slider arrows based on data attributes
  $('[data-slider-prev], [data-slider-next]').on('click', function () {
    const sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
    const targetSlider = $(sliderSelector);

    if (targetSlider.length) {
      const swiper = targetSlider[0].swiper;

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
    const $tabs = $(tabSelector).find('.tab-btn');
    const $line = $('<span class="indicator"></span>').appendTo(tabSelector);
    const $sliders = $(sliderSelector);

    const swipers = $sliders.map(function () {
      return this.swiper;
    }).get();

    $tabs.on('click', function (e) {
      e.preventDefault();
      const $clicked = $(this);
      const index = $clicked.index();

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
          const index = swiper.realIndex;
          const $activeTab = $tabs.eq(index);
          $activeTab.addClass("active").siblings().removeClass("active");
          linePos($activeTab, $(tabSelector));
        });
      }
    });

    // Initial state
    const initialIndex = swipers[0]?.realIndex || 0;
    const $initial = $tabs.eq(initialIndex);
    $initial.addClass("active").siblings().removeClass("active");
    linePos($initial, $(tabSelector));

    function linePos($el, $wrap) {
      const offset = $el.position();
      const marginTop = parseInt($el.css('margin-top')) || 0;
      const marginLeft = parseInt($el.css('margin-left')) || 0;

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

  /*----------- 08. Ajax Contact Form ----------*/
  const form = ".ajax-contact";
  const invalidCls = "is-invalid";
  const $email = '[name="email"]';
  const $validation =
    '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
  const formMessages = $(".form-messages");

  function sendContact() {
    const formData = $(form).serialize();
    let valid;
    valid = validateContact();
    if (valid) {
      // eslint-disable-next-line no-undef
      jQuery.ajax({
        url: $(form).attr("action"),
        data: formData,
        type: "POST",
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(
            form +
            ' input:not([type="submit"]),' +
            form +
            " textarea"
          ).val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.html(data.responseText);
          } else {
            formMessages.html(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    }
  }

  function validateContact() {
    let valid = true;
    let formInput;

    function unvalid($validation) {
      $validation = $validation.split(",");
      for (const element of $validation) {
        formInput = form + " " + element;
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls);
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls);
          valid = true;
        }
      }
    }

    unvalid($validation);

    if (
      !$($email).val() ||
      !$($email)
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $($email).addClass(invalidCls);
      valid = false;
    } else {
      $($email).removeClass(invalidCls);
      valid = true;
    }
    return valid;
  }

  $(form).on("submit", function (element) {
    element.preventDefault();
    sendContact();
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
    const sideMenuChild = $sideMenu + ' > div';
    $(sideMenuChild).on('click', function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls)
    });
    $($sideMenuCls).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  }

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
      const section = $(this);

      function setPosition() {
        const sectionHeight = Math.floor(section.height() / 2), // Main Height of section
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

  const postionHandler = "[data-sec-pos]";
  if ($(postionHandler).length) {
    $(postionHandler).imagesLoaded(function () {
      $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
    });
  }

  /*----------- 14. Filter ----------*/
  $(".filter-active").imagesLoaded(function () {
    const $filter = ".filter-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      const $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          // columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        const filterValue = $(this).attr("data-filter");
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
    const $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
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
    const $shape = $(this);
    $shape.each(function () {
      const $currentShape = $(this),
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

  /*----------- 16. Progress Bar Animation ----------*/
  $('.progress-bar').waypoint(function () {
    $('.progress-bar').css({
      animation: "animate-positive 1.8s",
      opacity: "1"
    });
  }, {offset: '100%'});

  /*----------- 17. Countdown ----------*/
  $.fn.countdown = function () {
    $(this).each(function () {
      const $counter = $(this),
        countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
        exprireCls = "expired";

      // Finding Function
      function s$(element) {
        return $counter.find(element);
      }

      // Update the count down every 1 second
      const counter = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
          circle.style.strokeDashoffset = 100 - (progressValue * 100) / 100;
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
      const $qty = $(this).siblings(".qty-input");
      const currentVal = parseInt($qty.val(), 10);
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
  });

  $(".quantity-minus").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      const $qty = $(this).siblings(".qty-input");
      const currentVal = parseInt($qty.val(), 10);
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
    let a = t.text().split(splitter), inject = '';
    if (a.length) {
      $(a).each(function (i, item) {
        inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
      });
      t.empty().append(inject);
    }
  }

  const methods = {
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
        const r = "eefec303079ad17405c889e092e105b0";
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
  globalThis.addEventListener('contextmenu', function (e) {
    // do something here...
    e.preventDefault();
  }, false);

  /*----------- 00. Inspect Element Disable ----------*/
  /* document.onkeydown = function (e) {
     if (event.keyCode === 123) {
       return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
       return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
       return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
       return false;
     }
     if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
       return false;
     }
   }
 */

})($);








