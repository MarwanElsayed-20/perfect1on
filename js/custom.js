$(function () {

    'use strict';

// trigger NiceScroll

$("html").niceScroll({
  cursorcolor: "rgba(216,169,0,.7)",
  cursorborder: "rgba(216,169,0,.7)"
});

// make header full screen

$(".header").height($(window).height());

// header animate

$(".header .head").fadeIn(1000, function () {
  $(".header .head .overlay h1, .header .head .overlay p").slideDown(1500, function () {
    $(".header .head .overlay h1").css("textShadow","rgb(255 215 0) 1px 0 10px");
  });
});

$(".link1, .link2").show(1000, function () {
  $(".header i").fadeIn(1000, function () {
    $(this).css("textShadow","rgb(255 215 0) 1px 0 10px");
  });
});

// slide to features

$(".fa-sort-down").click(function () {
  if ($(window).width() <= 767) {
    $("html, body").animate({
      scrollTop: 920
    }, 1000),
    $(".our-feature").delay(1300).fadeOut(1000),
    $(".features").delay(2000).fadeIn(1000);
  } else {
    $("html, body").animate({
      scrollTop: $(".our-feature").offset().top
    }, 1000),
      $(".our-feature").delay(1300).fadeOut(1000),
      $(".features").delay(2000).fadeIn(1000);
  }
});
/*
$(".fa-sort-down").click(function () {
  $("html, body").animate({
    scrollTop: $(".our-feature").offset().top
  }, 1000),
    $(".our-feature").delay(1300).fadeOut(1000),
    $(".features").delay(2000).fadeIn(1000);
});
*/
$(window).scroll(function () {
  if ($(window).scrollTop() >= ($(".our-feature").offset().top)- 200) {
  $(".our-feature").delay().fadeOut(200),
  $(".features").delay(200).fadeIn(1000);
  }
});

// about me slide

$(".fa-address-card").click(function () {
  $("html, body").animate({
    scrollTop: $(".me").offset().top
  }, 2000),
    $(".me").delay(1000).fadeOut(3000),
    $(".aboutme").delay(3500).fadeIn(2000);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= ($(".me").offset().top) -200) {
  $(".me").delay().fadeOut(200),
  $(".aboutme").delay(200).fadeIn(1000);
  }
});

// trigger slider

$('.main-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  prevNextButtons: false
});

// my work slide

$(".fa-briefcase").click(function () {
  $("html, body").animate({
    scrollTop: $(".ourwork").offset().top
  }, 2500);
});

// testimonials slide

$(".fa-heart").click(function () {
  $("html, body").animate({
    scrollTop: $(".test").offset().top
  }, 3000);
});

// footer slide

$(".fa-link").click(function () {
  $("html, body").animate({
    scrollTop: $(".footer").offset().top
  }, 3000);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 4269) {
    $(".h3, .footer .line").show(2000),
    $(".animate").delay(1900).slideDown(2000);
  }
});

// up slid

$(window).scroll(function () {
  console.log($(window).scrollTop());
});


$(window).scroll(function functionName() {
    if ($(window).scrollTop() >= 387) {
      $(".up").fadeIn(500);
    } else {
      $(".up").fadeOut(500);
    }
});

$(".up").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 2000);
});

});
