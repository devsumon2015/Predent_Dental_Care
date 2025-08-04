(function($) {
  
  "use strict";


  var varWindow = $(window);

  // Preloader
    function stylePreloader() {
      $('body').addClass('preloader-deactive');
    }

  // Background Image Js
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function (index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });

  // Margin Top Js
    const marginTopcl = $("[data-margin-top]");
    marginTopcl.each(function (index, elem) {
      let element = $(elem),
        marginTop = element.data('margin-top');
      element.css('margin-top', marginTop);
    });

  // Offcanvas Nav Js
    var $offCanvasNav = $('.mobile-menu-items'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if($this.parent().attr('class')){
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active-expand');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active-expand');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.closest('li').siblings('li').removeClass('active-expand');
                    $this.siblings('ul').slideDown();
                }
            }
        }
    });

    $( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );
    
 // Mouse Move Parallax
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll('.mousemove-layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * speed)/100;
      const y = (window.innerHeight - e.pageY * speed)/100;
          
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      })
    }

  // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage === "" || curpage === "/" || curpage === "admin") && hash === "")
      {
      } else {
        $(".header-navigation-area li").each(function()
      {
        $(this).removeClass("active");
      });
      if(hash != "")
        $(".header-navigation-area li a[href='"+hash+"']").parents("li").addClass("active");
      else
      $(".header-navigation-area li a[href='"+curpage+"']").parents("li").addClass("active");
    }

  // Swiper Default Slider Js
    var carouselSlider = new Swiper('.default-slider-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 500,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
          crossFade: true,
      },
    });

  // Swiper Feature Default Slider Js
    var carouselSlider = new Swiper('.feature-slider-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 500,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: '.feature-slider-container .swiper-btn-next',
        prevEl: '.feature-slider-container .swiper-btn-prev',
      },
    });

  // Brand Logo Slider Js
    var testimonialThumbs = new Swiper(".testimonial-thumbs", {
      spaceBetween: 0,
      speed: 900,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });

    var testimonialTop = new Swiper(".testimonial-top", {
      spaceBetween: 0,
      speed: 400,
      navigation: {
        nextEl: '.testimonial-top .swiper-btn-next',
        prevEl: '.testimonial-top .swiper-btn-prev',
      },
      effect: 'fade',
        fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: testimonialThumbs
      }
    });
    testimonialTop.on('slideChangeTransitionStart', function() {
      testimonialThumbs.slideTo(testimonialTop.activeIndex);
    });
    testimonialThumbs.on('transitionStart', function(){
      testimonialTop.slideTo(testimonialThumbs.activeIndex);
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.brand-logo-slider-container', {
      autoplay: false,
      slidesPerView : 5,
      slidesPerGroup: 1,
      spaceBetween: 171,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 5,
        },
        768: {
          slidesPerView : 4,
          spaceBetween: 120,
        },
        576: {
          slidesPerView : 3,
        },
        480: {
          slidesPerView : 2,
        },
        0: {
          slidesPerView : 1,
        },
      }
    });

  // Benifits Slider Js
    var swiper = new Swiper('.benifits-slider-container', {
      slidesPerGroup: 1,
      spaceBetween: 25,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 3,
        },
        992: {
          slidesPerView : 3,
        },
        576: {
          slidesPerView : 3,
        },
        480: {
          slidesPerView : 3,
        },
        0: {
          slidesPerView : 2,
        },
      }
    });

  // Counter Up Js
  var counterId = $('.counter');
  if (counterId.length) {
    counterId.counterUp({
      delay: 10,
      time: 3000
    });
  }

  // Fancybox Js
  $('.image-popup').fancybox();
  $('.video-popup').fancybox();

  $('#datepicker').datetimepicker({
    timepicker:false
  });

  $('#timepicker').datetimepicker({
    datepicker:false,
    format:'H:i',
    step:5
  });

  // Aos Js
  AOS.init({
    once: true,
    duration: 1200,
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData
    }).done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success fade show');

      // Set the message text.
      formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
      formMessages.append(response);

      // Clear the form.
      $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger fade show');

      // Set the message text.
      if (data.responseText === '') {
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
  });

  function scrollToTop() {
    var $scrollUp = $('#scroll-to-top'),
      $lastScrollTop = 0,
      $window = $(window);
      $window.on('scroll', function () {
      var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
            $('.sticky-header').removeClass('sticky-show');
        } else {
          if ($window.scrollTop() > 119) {
            $scrollUp.addClass('show');
            $('.sticky-header').addClass('sticky-show');
          } else {
            $scrollUp.removeClass('show');
            $('.sticky-header').removeClass('sticky-show');
          }
        }
        $lastScrollTop = st;
    });
    $scrollUp.on('click', function (evt) {
      $('html, body').animate({scrollTop: 0}, 50);
      evt.preventDefault();
    });
  }
  scrollToTop();
  varWindow.on('scroll', function(){
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 119) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  varWindow.on('load', function() {
    stylePreloader();
  });

})(window.jQuery);