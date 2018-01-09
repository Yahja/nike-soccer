
/** HYPERVENOM */
$(".btn-hypervenom").click(function() {
  $(".hypervenom").removeClass("hide").addClass("show");
  $(".menu-global").removeClass("hide").addClass("show");
  $(".index").removeClass("show").addClass("hide");
  $('.hypervenom-left').addClass('animated bounceInLeft');
  $('.hypervenom-right').addClass('animated bounceInRight');
  $('.logo-hypervenom').addClass('animated bounceIn');
  $('.menu-global').removeClass('show').addClass('hide');
  $('.menu-hypervenom-home').removeClass('hide').addClass('show');
});
/** JUGADOR HYPERVENOM */
$('.next-hypervenom').click(function () {
    $('.hypervenom').removeClass('show').addClass('hide');
    $('.hypervenom-player').removeClass('hide').addClass('show');
    $('.menu-hypervenom-home').removeClass('show').addClass('hide');
    $('.logo-hypervenom-player').addClass('animated fadeInDown');
    $('.hypervenom-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.hypervenom-player h3').addClass('animated fadeInDown');
    $('.menu-hypervenom-player').removeClass('hide').addClass('show');
});
/** BACK HYPERVENOM */
$('.prev-hypervenom').click(function () {
    $('.hypervenom').addClass('hide').removeClass('show');
    $('.menu-hypervenom-home').addClass('hide').removeClass('show');
    $('.index').removeClass('hide').addClass('show');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
/* SIGUENTE EN HYPERVENOM PLAYER */
$('.next-hypervenom-player').click(function () {
    $('.hypervenom-player').removeClass('show').addClass('hide');
    $('.hypervenom-spec').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-hypervenom-player').addClass('hide').removeClass('show');
    $('.menu-hypervenom-spec').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});
/** MUESTRA VIDEO HABILIDADES HYPERVENOM */
$('.next-hypervenom-spec').click(function () {
    $('.hypervenom-spec').removeClass('show').addClass('hide');
    $('.menu-hypervenom-spec').removeClass('show').addClass('hide');
    $('.hypervenom-video').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video').removeClass('hide').addClass('show');
    $('.hypervenom-video h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-video').addClass('animated fadeInDown');
    $('.hypervenom-video p').addClass('animated fadeInDown');
    $('.hypervenom-video h3').addClass('animated fadeInDown');
});
var hypervenom = document.getElementById("hypervenomVideo");

function setHypervenom() {
    hypervenom.currentTime = 0;
}
/* VUELVE A JUGADOR HYPERVENOM */
$('.prev-hypervenom-spec').click(function () {
    $('.hypervenom-spec').removeClass('show').addClass('hide');
    $('.hypervenom-player').removeClass('hide').addClass('show');
    $('.menu-hypervenom-player').addClass('show').removeClass('hide');
    $('.menu-hypervenom-spec').addClass('hide').removeClass('show');
    $('.logo-hypervenom-player').addClass('animated fadeInDown');
    $('.hypervenom-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.hypervenom-player h3').addClass('animated fadeInDown');
});
/* VUELVE AL HOME HYPERVENOM */
$(".prev-hypervenom-player").click(function () {
    $(".hypervenom").removeClass("hide").addClass("show");
    $(".menu-hypervenom-home").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $(".hypervenom-left").addClass("animated bounceInLeft");
    $(".hypervenom-right").addClass("animated bounceInRight");
    $(".logo-hypervenom").addClass("animated bounceIn");
    $(".hypervenom-player").removeClass("show").addClass("hide");
    $(".menu-hypervenom-player").removeClass("show").addClass("hide");
});
/** VUELVE A ESPECIFICACIONES HYPERVENOM */
$('.prev-hypervenom-video').click(function () {
    $('.hypervenom-spec').removeClass('hide').addClass('show');
    $('.hypervenom-video').removeClass('show').addClass('hide');
    $('.menu-hypervenom-spec').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video').removeClass('show').addClass('hide');
});
/* MUESTRA HYPERVENOM VIDEO CON COUNTER */
$('.next-hypervenom-video').click(function () {
    $('.hypervenom-timer').removeClass('hide').addClass('show');
    $('.hypervenom-video').removeClass('show').addClass('hide');
    $('.hypervenom-timer h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-video').addClass('animated fadeInDown');
    $('.hypervenom-timer h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-counter').addClass('animated fadeInDown');
    $('.menu-hypervenom-video').removeClass('show').addClass('hide');
    $('.menu-hypervenom-counter').removeClass('hide').addClass('show');
});
var hyperTimer = document.getElementById('CountDownHypervenom');
var hypervenom2 = document.getElementById('hypervenomCount');

function setHyper() {
    hyperTimer.currentTime = 0;
    hypervenom2.currentTime = 0;
}
/** VUELVE A HYPERVENOM VIDEO */
$('.prev-hypervenom-counter').click(function () {
    $('.hypervenom-timer').removeClass('show').addClass('hide');
    $('.hypervenom-video').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video').removeClass('hide').addClass('show');
    $('.menu-hypervenom-counter').removeClass('show').addClass('hide');
});

/** MUESTRA FINAL HYPERVENOM */
$('.next-hypervenom-counter').click(function () {
    $('.hypervenom-final').addClass('show').removeClass('hide');
    $('.hypervenom-timer').removeClass('show').addClass('hide');
    $('.menu-hypervenom-final').removeClass('hide').addClass('show');
    $('.menu-hypervenom-counter').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A HYPERVENOM COUNTER */
$('.prev-hypervenom-final').click(function () {
    $('.hypervenom-timer').removeClass('hide').addClass('show');
    $('.hypervenom-final').removeClass('show').addClass('hide');
    $('.menu-hypervenom-counter').removeClass('hide').addClass('show');
    $('.menu-hypervenom-final').removeClass('show').addClass('hide');
});
/** VUELVE A INICIO */
$('.next-hypervenom-final').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.hypervenom-final').removeClass('show').addClass('hide');
    $('.menu-hypervenom-final').removeClass('show').addClass('hide');
});


/** HYPERVENOM SINTETICO */
$(".btn-hypervenom-sintetico").click(function () {
    $(".hypervenom-sintetico").removeClass("hide").addClass("show");
    $(".index-sintetico").removeClass("show").addClass("hide");
    $('.hypervenom-left').addClass('animated bounceInLeft');
    $('.hypervenom-right').addClass('animated bounceInRight');
    $('.logo-hypervenom').addClass('animated bounceIn');
    $('.menu-hypervenom-home-sintetico').removeClass('hide').addClass('show');
});
/** JUGADOR HYPERVENOM SINTETICO */
$('.next-hypervenom-sintetico').click(function () {
    $('.hypervenom-sintetico').removeClass('show').addClass('hide');
    $('.hypervenom-player').removeClass('hide').addClass('show');
    $('.menu-hypervenom-home-sintetico').removeClass('show').addClass('hide');
    $('.logo-hypervenom-player').addClass('animated fadeInDown');
    $('.hypervenom-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.hypervenom-player h3').addClass('animated fadeInDown');
    $('.menu-hypervenom-player-sintetico').removeClass('hide').addClass('show');
});
/** BACK HYPERVENOM */
$('.prev-hypervenom-sintetico').click(function () {
    $('.hypervenom-sintetico').addClass('hide').removeClass('show');
    $('.menu-hypervenom-home-sintetico').addClass('hide').removeClass('show');
    $('.index-sintetico').removeClass('hide').addClass('show');
    $('.btn-mercurial-sintetico').addClass('animated fadeIn');
    $('.btn-hypervenom-sintetico').addClass('animated fadeIn');
    $('.btn-magista-sintetico').addClass('animated fadeIn');
    $('.btn-tiempo-sintetico').addClass('animated fadeIn');
});
/* VUELVE AL HOME HYPERVENOM SINTETICO*/
$(".prev-hypervenom-player-sintetico").click(function () {
    $(".hypervenom-sintetico").removeClass("hide").addClass("show");
    $(".menu-hypervenom-home-sintetico").removeClass("hide").addClass("show");
    // $(".index").removeClass("show").addClass("hide");
    $(".hypervenom-left").addClass("animated bounceInLeft");
    $(".hypervenom-right").addClass("animated bounceInRight");
    $(".logo-hypervenom").addClass("animated bounceIn");
    $(".hypervenom-player").removeClass("show").addClass("hide");
    $(".menu-hypervenom-player-sintetico").removeClass("show").addClass("hide");
});
/* SIGUENTE EN HYPERVENOM PLAYER */
$('.next-hypervenom-player-sintetico').click(function () {
    $('.hypervenom-player').removeClass('show').addClass('hide');
    $('.hypervenom-spec-sintetico').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-hypervenom-player-sintetico').addClass('hide').removeClass('show');
    $('.menu-hypervenom-spec-sintetico').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});
/* VUELVE A JUGADOR HYPERVENOM */
$('.prev-hypervenom-spec-sintetico').click(function () {
    $('.hypervenom-spec-sintetico').removeClass('show').addClass('hide');
    $('.hypervenom-player').removeClass('hide').addClass('show');
    $('.menu-hypervenom-player-sintetico').addClass('show').removeClass('hide');
    $('.menu-hypervenom-spec-sintetico').addClass('hide').removeClass('show');
    $('.logo-hypervenom-player').addClass('animated fadeInDown');
    $('.hypervenom-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.hypervenom-player h3').addClass('animated fadeInDown');
});
/** MUESTRA VIDEO HABILIDADES HYPERVENOM SINTETICO */
$('.next-hypervenom-spec-sintetico').click(function () {
    $('.hypervenom-spec-sintetico').removeClass('show').addClass('hide');
    $('.menu-hypervenom-spec-sintetico').removeClass('show').addClass('hide');
    $('.hypervenom-video').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video-sintetico').removeClass('hide').addClass('show');
    $('.hypervenom-video h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-video').addClass('animated fadeInDown');
    $('.hypervenom-video p').addClass('animated fadeInDown');
    $('.hypervenom-video h3').addClass('animated fadeInDown');
});
/** VUELVE A ESPECIFICACIONES HYPERVENOM SINTETICO */
$('.prev-hypervenom-video-sintetico').click(function () {
    $('.hypervenom-spec-sintetico').removeClass('hide').addClass('show');
    $('.hypervenom-video').removeClass('show').addClass('hide');
    $('.menu-hypervenom-spec-sintetico').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video-sintetico').removeClass('show').addClass('hide');
});
/* MUESTRA HYPERVENOM SINTETICO VIDEO CON COUNTER */
$('.next-hypervenom-video-sintetico').click(function () {
    $('.hypervenom-timer').removeClass('hide').addClass('show');
    $('.hypervenom-video').removeClass('show').addClass('hide');
    $('.hypervenom-timer h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-video').addClass('animated fadeInDown');
    $('.hypervenom-timer h1').addClass('animated fadeInLeft');
    $('.hypervenom-logo-counter').addClass('animated fadeInDown');
    $('.menu-hypervenom-video-sintetico').removeClass('show').addClass('hide');
    $('.menu-hypervenom-counter-sintetico').removeClass('hide').addClass('show');
});
/** VUELVE A HYPERVENOM VIDEO */
$('.prev-hypervenom-counter-sintetico').click(function () {
    $('.hypervenom-timer').removeClass('show').addClass('hide');
    $('.hypervenom-video').removeClass('hide').addClass('show');
    $('.menu-hypervenom-video-sintetico').removeClass('hide').addClass('show');
    $('.menu-hypervenom-counter-sintetico').removeClass('show').addClass('hide');
});

/** MUESTRA FINAL HYPERVENOM SINTETICO */
$('.next-hypervenom-counter-sintetico').click(function () {
    $('.hypervenom-final-sintetico').addClass('show').removeClass('hide');
    $('.hypervenom-timer').removeClass('show').addClass('hide');
    $('.menu-hypervenom-final-sintetico').removeClass('hide').addClass('show');
    $('.menu-hypervenom-counter-sintetico').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A HYPERVENOM SINTETICO COUNTER */
$('.prev-hypervenom-final-sintetico').click(function () {
    $('.hypervenom-timer').removeClass('hide').addClass('show');
    $('.hypervenom-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-hypervenom-counter-sintetico').removeClass('hide').addClass('show');
    $('.menu-hypervenom-final-sintetico').removeClass('show').addClass('hide');
});
/** VUELVE A INICIO */
$('.next-hypervenom-final-sintetico').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.hypervenom-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-hypervenom-final-sintetico').removeClass('show').addClass('hide');
});