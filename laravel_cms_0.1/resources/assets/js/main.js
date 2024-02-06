//= components/dropdown.js
//= components/tabs.js
//= components/accordion.js
//= components/modal.js
//= components/slickLib.js
//= components/slick.js

$(document).ready(function() {

  // if ($('.animate').length > 0) {
  //     setTimeout(function () {
  //         $('.animate').addClass('animated');
  //     }, 200)
  // }

  // $('.js-open-case-info').on('click', function (e) {
  //     e.preventDefault();
  //
  //    $(this).parent().parent().next().addClass('opened');
  //
  //
  // });

  // $('.js-scroll-down').on('click',function(e){
  //     e.preventDefault();
  //         $.fn.fullpage.moveSectionDown();
  //
  // });

  $('.js-show-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu').addClass('opened');
    $('.mask').addClass('active');
    $('body').addClass('fixed');
  });

  $('.js-close-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('opened');
    $('.mask').removeClass('active');
    $('body').removeClass('fixed');
  });

  $('.mask').on('click', function(e) {
    // e.preventDefault();
    $('.menu').removeClass('opened');
    $('.mask').removeClass('active');
    $('body').removeClass('fixed');
  });

  $('.arrow').on('click', function(e) {
    e.preventDefault();
    var target = $(this).data('target');

    $('html,body').animate({
      scrollTop: $(target).offset().top,
    }, 250);
  });

  // $('.menu__content').on('click', function(e) {
  //   e.stopPropagation();
  // })

  // $('body').on('click',function() {
  //
  // })

  // AOS.init({
  //     // Global settings:
  //     disable: function () {
  //         var maxWidth = 992;
  //         return window.innerWidth < maxWidth;
  //     }, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //     initClassName: 'aos-init', // class applied after initialization
  //     animatedClassName: 'aos-animate', // class applied on animation
  //     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  //
  //     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //     offset: 120, // offset (in px) from the original trigger point
  //     delay: 0, // values from 0 to 3000, with step 50ms
  //     duration: 400, // values from 0 to 3000, with step 50ms
  //     easing: 'ease', // default easing for AOS animations
  //     once: true, // whether animation should happen only once - while scrolling down
  //     mirror: false, // whether elements should animate out while scrolling past them
  //     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  //
  // });

  $(document).on('scroll', function() {

    $('[data-parallax=item]').each(function() {
      var $this = $(this),
        positionFromTop = $this.offset().top,
        scroll = $(document).scrollTop();

      $this.css({
        'transform': 'translateY' + '(' + -(scroll / 14) + 'px)',
      });

    });
  });

  $('[data-show=slide]').on('mouseenter', function() {
    var target = $(this).data('target');
    $('.js-first-slide').removeClass('active');

    $(target).addClass('opened');
  });

  $('[data-show=slide]').on('mouseleave', function() {
    $('.intro__device').removeClass('opened');
    $('.js-first-slide').addClass('active');
  });

  var video = $('.device.video'),
    videoW = video.innerWidth();

  video.height(videoW * 0.59);

  $('window').on('resize', function() {
    var videoWInner = video.innerWidth();
    video.height(videoWInner * 0.59);
  });

  // $('.js-show-more').on('click', function (e) {
  //     e.preventDefault();
  //
  //     $('html, body').animate({
  //         scrollTop: $('.js-intro-description').offset().top - 400
  //     }, 400)
  // });

  // $(document).on('scroll', function () {
  //     var scroll = $(this).scrollTop(),
  //         half_scroll = scroll / 400,
  //         scale = 1.0 - half_scroll,
  //         // cases = $('.cases').offset().top,
  //         descr_pos = $('.js-intro-description').offset().top;
  //
  //     // console.log('description position' + descr_pos);
  //     // console.log('descr - doc' + (scroll - descr_pos));
  //
  //
  //     if ($('.js-crm_bg').length > 0 && scroll > 50) {
  //         $('.js-crm_bg').addClass('ghost');
  //     } else {
  //         $('.js-crm_bg').removeClass('ghost');
  //     }
  //
  //
  //     if ($('.js-intro-block').length > 0 && scroll > 100 && scale >= 0.5) {
  //         $('.js-intro-block').css({
  //             transform: ' scale(' + scale + ') '
  //         });
  //
  //         $('.js-intro-block .intro__actions').addClass('ghost');
  //         $('.js-intro-main').addClass('scrolled');
  //     }
  //
  //     if ($('.js-intro-block').length > 0 && scroll <= 100) {
  //         $('.js-intro-block').css({
  //             'transform': 'scale(1) '
  //         });
  //         $('.js-intro-block .intro__actions').removeClass('ghost');
  //         $('.js-intro-main').removeClass('scrolled');
  //     }
  //
  //     if (scroll >= $('.js-intro-descr').offset().top - 50) {
  //         $('.js-intro-descr').addClass('ghost');
  //     } else {
  //         $('.js-intro-descr').removeClass('ghost');
  //     }
  //
  //     if (scroll <= 150) {
  //         $('.js-intro-description').removeClass('visible');
  //     }
  //
  //     if (scroll > 150) {
  //         $('.js-intro-description').addClass('visible');
  //     }
  //
  //     // if (scroll >= cases - $('.cases').outerHeight()) {
  //     //     $('.js-intro-description').removeClass('visible');
  //     //     $('.js-intro-block').addClass('ghost');
  //     //     console.log(cases);
  //     // }
  //
  //     if (scroll >= descr_pos - 250) {
  //         $('.js-intro-block').removeClass('ghost');
  //     }
  //
  //     if (scroll >= descr_pos - 250) {
  //         $('.js-intro-block').addClass('ghost');
  //         $('.js-intro-main').addClass('completed');
  //
  //         $('.cases__block:nth-child(even) .cases__item').each(function () {
  //             var $this = $(this),
  //                 $thisPos = $this.offset().top,
  //                 $docScroll = $(document).scrollTop(),
  //                 number = ($thisPos - $docScroll) / 10;
  //             // console.log($thisPos);
  //
  //             $this.css({
  //                 'transform': 'translateY(' + number + 'px)'
  //             });
  //
  //             if ($this) {
  //
  //             }
  //         });
  //
  //     } else {
  //         $('.js-intro-block').removeClass('ghost');
  //         $('.js-intro-main').removeClass('completed');
  //         // $('.cases__item').css({
  //         //     'trasnform': 'trasnlateY(0px)'
  //         // });
  //     }
  //
  //
  //     // if ($('.js-intro-block').length > 0 && scroll > 0) {
  //     //     if (half_scroll < 0.3) {
  //     //         half_scroll = 0.3;
  //     //         $('.js-intro-block').css({
  //     //             'transform': 'scale('+ half_scroll +')'
  //     //         });
  //     //     }
  //     //
  //     //     if (half_scroll > 1) {
  //     //         half_scroll = 1;
  //     //         $('.js-intro-block').css({
  //     //             'transform': 'scale('+ half_scroll +')'
  //     //         });
  //     //     }
  //     // }
  // });

  //
  //
  //
  //  var $slide = $('.intro__device'),
  //      $intro_link = $('.intro__item'),
  //      isPaused = false,
  //      i = 0;
  //
  // var t =  window.setInterval(function() {
  //     if (!isPaused) {
  //         $slide.removeClass('active').filter($slide[i]).toggleClass('active');
  //         $intro_link.removeClass('active').filter($intro_link[i]).toggleClass('active');
  //         i < $slide.length - 1 ? i++ : i = 0;
  //     }
  //  }, 5000);
  //
  //
  //  $intro_link.on('mouseenter', function () {
  //      // $intro_link.removeClass('active');
  //      isPaused = true;
  //  });
  //
  //  $intro_link.on('mouseleave', function () {
  //      // $intro_link.removeClass('active');
  //      isPaused = false;
  //  });

  // $('.intro__device').each(function () {
  //     var $this = $(this),
  //         length = $('.intro__device').length;
  //
  //    $('.intro__device').not($this).removeClass('opened');
  //
  //
  // });

  // var elem = $.jInvertScroll(['.scroll']);

  //    $('[data-toggle=menu]').on('click', function (e) {
  //        e.preventDefault();
  //        $('.js-menu').toggleClass('opened');
  //        $('html').toggleClass('fixed');
  //
  //        var $this = $(this);
  //        $('body').toggleClass('fixed');
  //        $this.toggleClass('active');
  //        $('.js-main-header').toggleClass('shadow');
  //        $('.js-secondary-header').toggleClass('active');
  //    });
  //
  //
  //        $('.menu__content').on("click", function (e) {
  //            e.stopPropagation();
  //        });
  //
  //

  $('.js-menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('opened');
    $('body').toggleClass('fixed');
    $(this).toggleClass('active');
    $('[data-animate=fade-up]').toggleClass('animated');
  });

  $('.js-site-mode').on('click', function(e) {
    e.preventDefault();

    if (!$('body').hasClass('light-mode')) {
      sessionStorage.setItem('mode', '1');
      $('body').addClass('light-mode');

    } else {
      sessionStorage.removeItem('mode');
      $('body').removeClass('light-mode');
    }
  });

  if (sessionStorage.getItem('mode')) {
    $('body').addClass('light-mode');
  }

  $('[data-scroll=to]').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('target'),
      offsetTop = $(target).offset().top;
    $('html, body').animate({
      scrollTop: offsetTop,
    }, 450);
  });

  $('.sortable__nav a').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('target'),
      offsetTop = $(target).offset().top;

    $('html,body').animate({
      scrollTop: offsetTop,
    }, 450);
  });
  //
  //    $('[data-scroll=content]').on('click', function (e) {
  //        e.preventDefault();
  //        var sect_id = $(this).data("target");
  //
  //        $('html, body').animate({
  //            scrollTop: $(sect_id).offset().top
  //        }, 1000);
  //
  //        $('.menu').removeClass('opened');
  //        $('.mask').removeClass('active');
  //        $('body').removeClass('fixed');
  //    });

  //    $('.js-open-popup').on('click', function (e) {
  //        e.preventDefault();
  //        $('.js-popup-overlay').addClass('opened');
  //    });
  //
  //    // $('.js-popup-overlay').on('click', function () {
  //    //     $(this).removeClass('opened');
  //    // });
  //
  //    $('.js-close-popup').on('click', function (e) {
  //        e.preventDefault();
  //        $('.js-popup-overlay').removeClass('opened');
  //    });
  //
  //
  //    $('.js-login-popup').on('click', function (e) {
  //        e.stopPropagation();
  //    });
  //
  //    $('.js-toggle-menu').on('click', function (e) {
  //        e.preventDefault();
  //        $(this).toggleClass('active');
  //        $('.js-cab-menu').toggleClass('opened');
  //    });
  //
  //
  //    $('.js-toggle-menu, .js-cab-menu').on('click', function (e) {
  //        e.stopPropagation();
  //    });
  //
  //    $('body').on('click', function () {
  //        $('.js-cab-menu').removeClass('opened');
  //        $('.js-toggle-menu').removeClass('active');
  //    });

  // var headerH = $('.header').outerHeight(),
  //     header = $('.header'),
  //     scroll = $(document).scrollTop();
  //
  //
  // $(document).on('scroll', function () {
  //     var scroll = $(this).scrollTop();
  //     if (scroll > 0) {
  //         header.addClass('fixed');
  //
  //     } else {
  //         header.removeClass('fixed');
  //     }
  // });
  //
  // if (scroll > 0) {
  //     header.addClass('fixed');
  //
  // } else {
  //     header.removeClass('fixed');
  // }

  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    let target = $(this).data('target'),
        targetTop = $(target).offset().top;


    $('html,body').animate({
      scrollTop: targetTop
    }, 500);
  });

  //
  let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.field__file-fake').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.field__file-fake').innerText = labelVal;
      });
    });
});

//slider-gallery - start
$(document).ready(function() {
  // Главный слайдер

  $('.gallery__slider').on('init', function(event, slick){
    $('.slide-item .lightgallery-item').append();
  });
  $('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: false,
    asNavFor: '.gallery__nav',
    lazyLoad: 'progressive'
  });
  // Инициализируем LighGallery
  $('body').on('click', '.gallery__slider-item', function(e) {
      e.preventDefault();
      $('.gallery__slider').lightGallery({
        selector: '.slick-slide:not(.slick-cloned) .lightgallery-item',
        thumbnail: true,
        width: '100%'
      });
      $('.gallery__slider').find('.slick-current').find('.lightgallery-item').trigger('click');
      $('.gallery__slider').on('onAferAppendSlide.lg',function(event){
        if($('.lg-outer .lg .album-pagination').length <= 0) {
          html = '';
          html += '<div class="album-pagination">';
          html += '<div class="caption-wrap">';
          html += '</div></div>';
          $('.lg-outer .lg').prepend(html);
        }
      });
      $('.gallery__slider').on('onCloseAfter.lg',function(event){
        if ($('.gallery__slider').data('lightGallery')) {
          $('.gallery__slider').data('lightGallery').destroy('true');
        }
      });
  });
  // Слайдер для навигации
  $('.gallery__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.gallery__slider',
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: true
  });
});
//slider-gallery - end