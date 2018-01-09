/** TIEMPO */
$(".btn-tiempo").click(function () {
    $(".tiempo").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $('.tiempo-left').addClass('animated bounceInLeft');
    $('.tiempo-right').addClass('animated bounceInRight');
    $('.logo-tiempo').addClass('animated bounceIn');
    $('.menu-tiempo-home').removeClass('hide').addClass('show');
});
/** JUGADOR TIEMPO */
$('.next-tiempo').click(function () {
    $('.tiempo').removeClass('show').addClass('hide');
    $('.tiempo-player').removeClass('hide').addClass('show');
    $('.menu-tiempo-home').removeClass('show').addClass('hide');
    $('.logo-tiempo-player').addClass('animated fadeInDown');
    $('.tiempo-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.tiempo-player h3').addClass('animated fadeInDown');
    $('.menu-tiempo-player').removeClass('hide').addClass('show');
});
/** BACK TIEMPO */
$('.prev-tiempo').click(function () {
    $('.tiempo').addClass('hide').removeClass('show');
    $('.menu-tiempo-home').addClass('hide').removeClass('show');
    $('.index').removeClass('hide').addClass('show');
    $('.btn-mercurial').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
/* VUELVE AL HOME TIEMPO */
$(".prev-tiempo-player").click(function () {
    $(".tiempo").removeClass("hide").addClass("show");
    $(".menu-tiempo-home").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $(".tiempo-left").addClass("animated bounceInLeft");
    $(".tiempo-right").addClass("animated bounceInRight");
    $(".logo-tiempo").addClass("animated bounceIn");
    $(".tiempo-player").removeClass("show").addClass("hide");
    $(".menu-tiempo-player").removeClass("show").addClass("hide");
});
/* SIGUENTE EN TIEMPO PLAYER */
$('.next-tiempo-player').click(function () {
    $('.tiempo-player').removeClass('show').addClass('hide');
    $('.tiempo-spec').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-tiempo-player').addClass('hide').removeClass('show');
    $('.menu-tiempo-spec').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});
/* VUELVE A JUGADOR TIEMPO */
$('.prev-tiempo-spec').click(function () {
    $('.tiempo-spec').removeClass('show').addClass('hide');
    $('.tiempo-player').removeClass('hide').addClass('show');
    $('.menu-tiempo-player').addClass('show').removeClass('hide');
    $('.menu-tiempo-spec').addClass('hide').removeClass('show');
    $('.logo-tiempo-player').addClass('animated fadeInDown');
    $('.tiempo-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.tiempo-player h3').addClass('animated fadeInDown');
});
/** MUESTRA VIDEO HABILIDADES TIEMPO */
$('.next-tiempo-spec').click(function () {
    $('.tiempo-spec').removeClass('show').addClass('hide');
    $('.menu-tiempo-spec').removeClass('show').addClass('hide');
    $('.tiempo-video').removeClass('hide').addClass('show');
    $('.menu-tiempo-video').removeClass('hide').addClass('show');
    $('.tiempo-video h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-video').addClass('animated fadeInDown');
    $('.tiempo-video p').addClass('animated fadeInDown');
    $('.tiempo-video h3').addClass('animated fadeInDown');
});
var tiempo = document.getElementById("tiempoVideo");

function settiempo() {
    tiempo.currentTime = 0;
}
/** VUELVE A ESPECIFICACIONES TIEMPO */
$('.prev-tiempo-video').click(function () {
    $('.tiempo-spec').removeClass('hide').addClass('show');
    $('.tiempo-video').removeClass('show').addClass('hide');
    $('.menu-tiempo-spec').removeClass('hide').addClass('show');
    $('.menu-tiempo-video').removeClass('show').addClass('hide');
});
/* MUESTRA TIEMPO VIDEO CON COUNTER */
$('.next-tiempo-video').click(function () {
    $('.tiempo-timer').removeClass('hide').addClass('show');
    $('.tiempo-video').removeClass('show').addClass('hide');
    $('.tiempo-timer h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-video').addClass('animated fadeInDown');
    $('.tiempo-timer h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-counter').addClass('animated fadeInDown');
    $('.menu-tiempo-video').removeClass('show').addClass('hide');
    $('.menu-tiempo-counter').removeClass('hide').addClass('show');
});
var tiempoTimer = document.getElementById('CountDownTiempo');
var tiempo2 = document.getElementById('tiempoCount');

function setTiem() {
    tiempoTimer.currentTime = 0;
    tiempo2.currentTime = 0;
}
/** VUELVE A TIEMPO VIDEO */
$('.prev-tiempo-counter').click(function () {
    $('.tiempo-timer').removeClass('show').addClass('hide');
    $('.tiempo-video').removeClass('hide').addClass('show');
    $('.menu-tiempo-video').removeClass('hide').addClass('show');
    $('.menu-tiempo-counter').removeClass('show').addClass('hide');
});

/** MUESTRA FINAL TIEMPO */
$('.next-tiempo-counter').click(function () {
    $('.tiempo-final').addClass('show').removeClass('hide');
    $('.tiempo-timer').removeClass('show').addClass('hide');
    $('.menu-tiempo-final').removeClass('hide').addClass('show');
    $('.menu-tiempo-counter').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A TIEMPO COUNTER */
$('.prev-tiempo-final').click(function () {
    $('.tiempo-timer').removeClass('hide').addClass('show');
    $('.tiempo-final').removeClass('show').addClass('hide');
    $('.menu-tiempo-counter').removeClass('hide').addClass('show');
    $('.menu-tiempo-final').removeClass('show').addClass('hide');
});
/** VUELVE A INICIO */
$('.next-tiempo-final').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.tiempo-final').removeClass('show').addClass('hide');
    $('.menu-tiempo-final').removeClass('show').addClass('hide');
});

/** TIEMPO SINTETICO */
$(".btn-tiempo-sintetico").click(function () {
    $(".tiempo-sintetico").removeClass("hide").addClass("show");
    $(".index-sintetico").removeClass("show").addClass("hide");
    $('.tiempo-left').addClass('animated bounceInLeft');
    $('.tiempo-right').addClass('animated bounceInRight');
    $('.logo-tiempo').addClass('animated bounceIn');
    $('.menu-tiempo-home-sintetico').removeClass('hide').addClass('show');
});
/** JUGADOR TIEMPO SINTETICO */
$('.next-tiempo-sintetico').click(function () {
    $('.tiempo-sintetico').removeClass('show').addClass('hide');
    $('.tiempo-player').removeClass('hide').addClass('show');
    $('.menu-tiempo-home-sintetico').removeClass('show').addClass('hide');
    $('.logo-tiempo-player').addClass('animated fadeInDown');
    $('.tiempo-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.tiempo-player h3').addClass('animated fadeInDown');
    $('.menu-tiempo-player-sintetico').removeClass('hide').addClass('show');
});
/** BACK TIEMPO SINTETICO AL HOME */
$('.prev-tiempo-sintetico').click(function () {
    $('.tiempo-sintetico').addClass('hide').removeClass('show');
    $('.menu-tiempo-home-sintetico').addClass('hide').removeClass('show');
    $('.index-sintetico').removeClass('hide').addClass('show');
    $('.btn-mercurial-sintetico').addClass('animated fadeIn');
    $('.btn-hypervenom-sintetico').addClass('animated fadeIn');
    $('.btn-magista-sintetico').addClass('animated fadeIn');
    $('.btn-tiempo-sintetico').addClass('animated fadeIn');
});
/* VUELVE AL HOME TIEMPO SINTETICO */
$(".prev-tiempo-player-sintetico").click(function () {
    $(".tiempo-sintetico").removeClass("hide").addClass("show");
    $(".menu-tiempo-home-sintetico").removeClass("hide").addClass("show");
    // $(".index").removeClass("show").addClass("hide");
    $(".tiempo-left-sintetico").addClass("animated bounceInLeft");
    $(".tiempo-right-sintetico").addClass("animated bounceInRight");
    $(".logo-tiempo").addClass("animated bounceIn");
    $(".tiempo-player").removeClass("show").addClass("hide");
    $(".menu-tiempo-player-sintetico").removeClass("show").addClass("hide");
});
/* SIGUENTE EN TIEMPO PLAYER */
$('.next-tiempo-player-sintetico').click(function () {
    $('.tiempo-player').removeClass('show').addClass('hide');
    $('.tiempo-spec-sintetico').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-tiempo-player-sintetico').addClass('hide').removeClass('show');
    $('.menu-tiempo-spec-sintetico').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});
/* VUELVE A JUGADOR TIEMPO SINTETICO */
$('.prev-tiempo-spec-sintetico').click(function () {
    $('.tiempo-spec-sintetico').removeClass('show').addClass('hide');
    $('.tiempo-player').removeClass('hide').addClass('show');
    $('.menu-tiempo-player-sintetico').addClass('show').removeClass('hide');
    $('.menu-tiempo-spec-sintetico').addClass('hide').removeClass('show');
    $('.logo-tiempo-player').addClass('animated fadeInDown');
    $('.tiempo-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.tiempo-player h3').addClass('animated fadeInDown');
});
/** MUESTRA VIDEO HABILIDADES TIEMPO */
$('.next-tiempo-spec-sintetico').click(function () {
    $('.tiempo-spec-sintetico').removeClass('show').addClass('hide');
    $('.menu-tiempo-spec-sintetico').removeClass('show').addClass('hide');
    $('.tiempo-video').removeClass('hide').addClass('show');
    $('.menu-tiempo-video-sintetico').removeClass('hide').addClass('show');
    $('.tiempo-video h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-video').addClass('animated fadeInDown');
    $('.tiempo-video p').addClass('animated fadeInDown');
    $('.tiempo-video h3').addClass('animated fadeInDown');
});
/** VUELVE A ESPECIFICACIONES TIEMPO SINTETICO */
$('.prev-tiempo-video-sintetico').click(function () {
    $('.tiempo-spec').removeClass('hide').addClass('show');
    $('.tiempo-video').removeClass('show').addClass('hide');
    $('.menu-tiempo-spec-sintetico').removeClass('hide').addClass('show');
    $('.menu-tiempo-video-sintetico').removeClass('show').addClass('hide');
});
/* MUESTRA TIEMPO SINTETICO VIDEO CON COUNTER */
$('.next-tiempo-video-sintetico').click(function () {
    $('.tiempo-timer').removeClass('hide').addClass('show');
    $('.tiempo-video').removeClass('show').addClass('hide');
    $('.tiempo-timer h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-video').addClass('animated fadeInDown');
    $('.tiempo-timer h1').addClass('animated fadeInLeft');
    $('.tiempo-logo-counter').addClass('animated fadeInDown');
    $('.menu-tiempo-video-sintetico').removeClass('show').addClass('hide');
    $('.menu-tiempo-counter-sintetico').removeClass('hide').addClass('show');
});
/** VUELVE A TIEMPO VIDEO */
$('.prev-tiempo-counter-sintetico').click(function () {
    $('.tiempo-timer').removeClass('show').addClass('hide');
    $('.tiempo-video').removeClass('hide').addClass('show');
    $('.menu-tiempo-video-sintetico').removeClass('hide').addClass('show');
    $('.menu-tiempo-counter-sintetico').removeClass('show').addClass('hide');
});
/** MUESTRA FINAL TIEMPO SINTETICO */
$('.next-tiempo-counter-sintetico').click(function () {
    $('.tiempo-final-sintetico').addClass('show').removeClass('hide');
    $('.tiempo-timer').removeClass('show').addClass('hide');
    $('.menu-tiempo-final-sintetico').removeClass('hide').addClass('show');
    $('.menu-tiempo-counter-sintetico').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A TIEMPO SINTETICO COUNTER */
$('.prev-tiempo-final-sintetico').click(function () {
    $('.tiempo-timer').removeClass('hide').addClass('show');
    $('.tiempo-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-tiempo-counter-sintetico').removeClass('hide').addClass('show');
    $('.menu-tiempo-final-sintetico').removeClass('show').addClass('hide');
});
/** VUELVE A INICIO */
$('.next-tiempo-final-sintetico').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.tiempo-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-tiempo-final-sintetico').removeClass('show').addClass('hide');
});