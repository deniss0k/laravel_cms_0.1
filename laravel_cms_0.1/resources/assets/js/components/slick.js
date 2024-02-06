$(document).ready(function() {
  var slider_5 = $('.js-content-slider'),
    slider_6 = $('.js-text-slider'),
    category_slider = $('.js-category'),
    $progressBar = $('.step__line-progress');

  if (slider_5.length > 0) {

    slider_5.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      dots: false,
      arrows: true,
      appendArrows: '.intro__arrows',
      focusOnSelect: true,
    });
  }

  if (category_slider.length > 0) {

    category_slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      appendArrows: '.category__arrows',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],

    });
  }

  // slider_6.on('afterChange', function () {
  //     var $slickIndex = slider_6.find('.slick-slide.slick-current').data('slick-index'),
  //         $slickSlides = slider_5.find('.slick-slide');
  //
  //
  //     $slickSlides.filter(function(){
  //         var $this = $(this);
  //
  //         if ($this.data("slick-index") < $slickIndex) {
  //             $this.addClass('completed');
  //         } else {
  //             $this.removeClass('completed');
  //         }
  //     });
  //
  //     if ($slickIndex === 0) {
  //
  //         $progressBar
  //             .css('width', '10%');
  //     }
  //
  //     if ($slickIndex === 1) {
  //         $progressBar
  //             .css('width', '30%')
  //     }
  //
  //     if ($slickIndex === 2) {
  //         $progressBar
  //             .css('width', '50%')
  //     }
  //
  //     if ($slickIndex === 3) {
  //         $progressBar
  //             .css('width', '70%')
  //     }
  //
  //     if ($slickIndex === 4) {
  //         $progressBar
  //             .css('width', '90%')
  //     }
  // });

  // if (slider_6.length > 0) {
  //     slider_6.slick({
  //         infinite: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoplay: true,
  //         autoplaySpeed: 5000,
  //         speed: 0,
  //         dots: false,
  //         arrows: false,
  //         fade: true,
  //         asNavFor: slider_5,
  //
  //
  //
  //     });
  // }
});

$(function() {

  'use strict';

  /**
   * Slick.js
   * Docs: https://github.com/kenwheeler/slick
   */

  var slider_1 = $('.js-intro-slider'),
    slider_3 = $('.js-intro-thumbs'),
    slider_4 = $('.js-cases-slider');

  if (slider_1.length > 0) {
    slider_1.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      dots: true,
      arrows: true,
      fade: true,
      // cssEase: 'ease-in',
      // asNavFor: slider_3,
      responsive: [
        {
          breakpoint: 560,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  if (slider_3.length > 0) {
    slider_3.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      asNavFor: slider_1,
      responsive: [
        {
          breakpoint: 560,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  $('.intro__item').on('mouseover', function() {
    var $this = $(this);
    slider_1.filter('.slick-initialized').slick('slickGoTo', $this.closest('.slick-slide').index());
  });

  if (slider_4.length > 0) {
    slider_4.slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 560,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  let productImgs = $('.js-product-images'),
    productThumbs = $('.js-product-thumbs');

  if (productImgs.length > 0) {
    productImgs.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      asNavFor: productThumbs,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }

  if (productThumbs.length > 0) {
    productThumbs.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      asNavFor: productImgs,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          },
        },
      ],
    });
  }

  var slider_2 = $('.js-partners-slider');

  if (slider_2.length > 0) {
    slider_2.slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      swipeToSlide: true,
      // dots: true,
      // fade: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            //                        dots: true,
            slidesToShow: 3,
          },
        }, {
          breakpoint: 690,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        }, {
          breakpoint: 560,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }

});
