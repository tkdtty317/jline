"use strict";

//別ページからのアンカーリンク時にヘッダーの高さだけ位置をずらす
$(window).on('load', function () {
  var url = $(location).attr('href');

  if (url.indexOf("#") != -1) {
    var anchor = url.split("#");
    var target = $('#' + anchor[anchor.length - 1]);
    var hh = $('header').innerHeight();

    if (target.length) {
      var pos = Math.floor(target.offset().top) - hh;
      $("html, body").animate({
        scrollTop: pos
      }, 1);
    }
  }
});
$(function () {
  // スムーススクロール
  $('a[href^="#"]').click(function () {
    if (!$(this).hasClass('more-btn')) {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);

      if ($('header').hasClass('fixed')) {
        var hh = $('header').innerHeight();
      } else {
        var hh = $('header').innerHeight() - 30;
      }

      var position = target.offset().top - hh;
      $("html, body").animate({
        scrollTop: position
      }, speed);
      $('header').removeClass('open');
      $('.js-global-nav').removeClass('is-active');
      $('.js-hamburger').removeClass('is-active');
    }

    return false;
  }); //slickスライダー

  $('.js-main-slider').slick({
    autoplay: true,
    //自動再生
    dots: true //

  });
  $('.js-collection-slider').slick({
    autoplay: true,
    //自動再生
    dots: true,
    //
    arrows: true,
    centerMode: true,
    centerPadding: "25%",
    responsive: [{
      breakpoint: 1024,
      settings: {
        centerMode: false,
        centerPadding: "0"
      }
    }]
  }); // global-navの開閉

  $('.js-hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $('.js-global-nav').addClass('is-active');
    } else {
      $('.js-global-nav').removeClass('is-active');
    }
  }); // inview

  $('.js-information').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('is-active');
    }
  });
  $('.js-about').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-about__heading').addClass('is-active');
      $('.js-about__content').addClass('is-active');
      $('.js-about__img1').addClass('is-active');
    }
  });
  $('.js-about__img2').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('is-active');
    }
  });
  $('.js-about__img3').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('is-active');
    }
  });
  $('.js-voice').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-voice__heading').addClass('is-active');
      $('.js-voice__first').addClass('is-active');
    }
  });
  $('.js-voice__second').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('is-active');
    }
  });
  $('.js-voice__button').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('is-active');
    }
  });
  $('.js-collection').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-collection__heading').addClass('is-active');
      $('.js-collection__slider').addClass('is-active');
    }
  });
  $('.js-service').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-service-heading').addClass('is-active');
      $('.js-service-item').addClass('is-active');
    }
  });
  $('.js-contact').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-contact__heading').addClass('is-active');
      $('.js-contact-item').addClass('is-active');
      $('.js-contact-foot').addClass('is-active');
    }
  });
  $('.js-footer').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('.js-footer__container').addClass('is-active');
      $('.js-footer__copy').addClass('is-active');
    }
  });
});