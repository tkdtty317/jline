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
  }); //global-navの開閉

  $('.js-hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $('.js-global-nav').addClass('is-active');
    } else {
      $('.js-global-nav').removeClass('is-active');
    }
  });
});