// CustomScript //
$('.btn-intro').click(function () {
    $('.intro').removeClass('show').addClass('hide');
    $('.home').removeClass('hide').addClass('show');
    $('.title-home').addClass('animated fadeIn');
});
$('.btn-home').click(function () {
    $('.home').removeClass('show').addClass('hide');
    $('.selecc-pasto').removeClass('hide').addClass('show');
    $('.pasto-sintetico').addClass('animated fadeIn');
    $('.pasto-natural').addClass('animated fadeIn');
});
$('.pasto-natural').click(function () {
    $('.selecc-pasto').removeClass('show').addClass('hide'); 
    $('.index').removeClass('hide').addClass('show');
    $('.btn-mercurial').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
/* ACCIONES PARA SELECCIÓN DE MODELO */
$('.btn-mercurial').click(function () {
    $('.mercurial').removeClass('hide').addClass('show');
    $('.menu-mercurial-home').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
    $('.mercurial-left').addClass('animated bounceInLeft');
    $('.mercurial-right').addClass('animated bounceInRight');
    $('.logo-mercurial').addClass('animated bounceIn');
    // $('.btn-mercurial').removeClass('animated fadeIn');
    // $('.btn-hypervenom').removeClass('animated fadeIn');
    // $('.btn-magista').removeClass('animated fadeIn');
    // $('.btn-tiempo').removeClass('animated fadeIn');
});
$(".btn-hypervenom").click(function() {
  $(".hypervenom").removeClass("hide").addClass("show");
  $(".menu-global").removeClass("hide").addClass("show");
  $(".index").removeClass("show").addClass("hide");
});
$(".btn-magista").click(function() {
  $(".magista").removeClass("hide").addClass("show");
  $(".menu-global").removeClass("hide").addClass("show");
  $(".index").removeClass("show").addClass("hide");
});
$(".btn-tiempo").click(function() {
  $(".tiempo").removeClass("hide").addClass("show");
  $(".menu-global").removeClass("hide").addClass("show");
  $(".index").removeClass("show").addClass("hide");
});

/* MENU MERCURIAL HOME */
$('.prev-mercurial').click(function () {
    $('.mercurial').addClass('hide').removeClass('show');
    $('.menu-mercurial-home').addClass('hide').removeClass('show');
    $('.index').removeClass('hide').addClass('show');
    $('.btn-mercurial').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
$('.next-mercurial').click(function () {
    $('.mercurial').removeClass('show').addClass('hide');
    $('.mercurial-player').removeClass('hide').addClass('show');
    $('.menu-mercurial-home').addClass('hide').removeClass('show');
    $('.menu-mercurial-player').removeClass('hide').addClass('show');
    $('.logo-mercurial-player').addClass('animated fadeInDown');
    $('.mercurial-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.mercurial-player h3').addClass('animated fadeInDown');
});


/* MUESTRA JUGADOR MERCURIAL */
$('.mercurial').click(function () {
    $('.mercurial').removeClass('show').addClass('hide');
    $('.mercurial-player').removeClass('hide').addClass('show');
    $('.menu-mercurial-home').addClass('hide').removeClass('show');
    $('.menu-mercurial-player').removeClass('hide').addClass('show');
    $('.logo-mercurial-player').addClass('animated fadeInDown');
    $('.mercurial-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.mercurial-player h3').addClass('animated fadeInDown');
});


/* VUELVE AL HOME MERCURIAL */
$(".prev-mercurial-player").click(function() {
  $(".mercurial").removeClass("hide").addClass("show");
  $(".menu-mercurial-home").removeClass("hide").addClass("show");
  $(".index").removeClass("show").addClass("hide");
  $(".mercurial-left").addClass("animated bounceInLeft");
  $(".mercurial-right").addClass("animated bounceInRight");
  $(".logo-mercurial").addClass("animated bounceIn");
  // $('.btn-mercurial').removeClass('animated fadeIn');
  // $('.btn-hypervenom').removeClass('animated fadeIn');
  // $('.btn-magista').removeClass('animated fadeIn');
  // $('.btn-tiempo').removeClass('animated fadeIn');
  $(".mercurial-player").removeClass("show").addClass("hide");
  $(".menu-mercurial-player").removeClass("show").addClass("hide");
});

/* SIGUENTE EN MERCURIAL PLAYER */
$('.next-mercurial-player').click(function () {
    $('.mercurial-player').removeClass('show').addClass('hide');
    $('.mercurial-spec').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-mercurial-player').addClass('hide').removeClass('show');    
    $('.menu-mercurial-spec').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});

/* MUESTRA ESPECIFICACIONES DE MERCURIAL */
$('.mercurial-player').click(function () {
    $('.mercurial-player').removeClass('show').addClass('hide');
    $('.mercurial-spec').removeClass('hide').addClass('show');
    $('.menu-mercurial-player').addClass('hide').removeClass('show');
    $('.menu-mercurial-spec').addClass('show').removeClass('hide');
});

/* VUELVE A JUGADOR MERCURIAL */
$('.prev-mercurial-spec').click(function () {
    $('.mercurial-spec').removeClass('show').addClass('hide');
    $('.mercurial-player').removeClass('hide').addClass('show');
    $('.menu-mercurial-player').addClass('show').removeClass('hide');
    $('.menu-mercurial-spec').addClass('hide').removeClass('show');
    $('.logo-mercurial-player').addClass('animated fadeInDown');
    $('.mercurial-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.mercurial-player h3').addClass('animated fadeInDown');
});

var vid = document.getElementById("myVideo");

function setCurTime() {
    vid.currentTime = 0;
} 
var vid2 = document.getElementById("CountDown");
var vid3 = document.getElementById("MercurialCount");

function setCurTimeCount() {
    vid2.currentTime = 0;
    vid3.currentTime = 0;
} 

/** MUESTRA VIDEO HABILIDADES */
$('.next-mercurial-spec').click(function () {
    $('.mercurial-spec').removeClass('show').addClass('hide');
    $('.menu-mercurial-spec').removeClass('show').addClass('hide');
    $('.mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('hide').addClass('show');
    // $('.video-merc').get(0).paused ? $('.video-merc').get(0).play() : $('.video-merc').get(0).pause();
    // var video = $(".video-merc").get(0);
    // video.play();
    // vid.currentTime = 0;
    $('.mercurial-video h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-video').addClass('animated fadeInDown');
    $('.mercurial-video p').addClass('animated fadeInDown');
    $('.mercurial-video h3').addClass('animated fadeInDown');
});
/** VUELVE A ESPECIFICACIONES MERCURAL */
$('.prev-mercurial-video').click(function () {
    $('.mercurial-spec').removeClass('hide').addClass('show');
    $('.mercurial-video').removeClass('show').addClass('hide');
    $('.menu-mercurial-spec').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('show').addClass('hide');
});

/* MUESTRA VIDEO CON COUNTER */
$('.next-mercurial-video').click(function () {
    $('.mercurial-timer').removeClass('hide').addClass('show');
    $('.mercurial-video').removeClass('show').addClass('hide');
    $('.mercurial-timer h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-video').addClass('animated fadeInDown');
    // $('.video-merc-timer').get(0).paused ? $('.video-merc-timer').get(0).play() : $('.video-merc-timer').get(0).pause();
    // $('.countdown').get(0).paused ? $('.countdown').get(0).play() : $('.countdown').get(0).pause();
    $('.mercurial-timer h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-counter').addClass('animated fadeInDown');
    $('.menu-mercurial-video').removeClass('show').addClass('hide');
    $('.menu-mercurial-counter').removeClass('hide').addClass('show');
});
/** VUELVE A MERCURIAL VIDEO */
$('.prev-mercurial-counter').click(function () {
    $('.mercurial-timer').removeClass('show').addClass('hide');
    $('.mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-counter').removeClass('show').addClass('hide');
});
/** MUESTRA FINAL MERCURIAL */
$('.next-mercurial-counter').click(function () {
    $('.mercurial-final').addClass('show').removeClass('hide');
    $('.mercurial-timer').removeClass('show').addClass('hide');
    $('.menu-mercurial-final').removeClass('hide').addClass('show');
    $('.menu-mercurial-counter').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A MERCURIAL COUNTER */
$('.prev-mercurial-final').click(function () {
    $('.mercurial-timer').removeClass('hide').addClass('show');
    $('.mercurial-final').removeClass('show').addClass('hide');
    $('.menu-mercurial-counter').removeClass('hide').addClass('show');
    $('.menu-mercurial-final').removeClass('show').addClass('hide');
});