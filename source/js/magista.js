/** MAGISTA */
$(".btn-magista").click(function () {
    $(".magista").removeClass("hide").addClass("show");
    $(".menu-global").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $('.magista-left').addClass('animated bounceInLeft');
    $('.magista-right').addClass('animated bounceInRight');
    $('.logo-magista').addClass('animated bounceIn');
    $('.menu-global').removeClass('show').addClass('hide');
    $('.menu-magista-home').removeClass('hide').addClass('show');
});
/** JUGADOR MAGISTA */
$('.next-magista').click(function () {
    $('.magista').removeClass('show').addClass('hide');
    $('.magista-player').removeClass('hide').addClass('show');
    $('.menu-magista-home').removeClass('show').addClass('hide');
    $('.logo-magista-player').addClass('animated fadeInDown');
    $('.magista-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.magista-player h3').addClass('animated fadeInDown');
    $('.menu-magista-player').removeClass('hide').addClass('show');
});
/** BACK MAGISTA */
$('.prev-magista').click(function () {
    $('.magista').addClass('hide').removeClass('show');
    $('.menu-magista-home').addClass('hide').removeClass('show');
    $('.index').removeClass('hide').addClass('show');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
/* VUELVE AL HOME MAGISTA */
$(".prev-magista-player").click(function () {
    $(".magista").removeClass("hide").addClass("show");
    $(".menu-magista-home").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $(".magista-left").addClass("animated bounceInLeft");
    $(".magista-right").addClass("animated bounceInRight");
    $(".logo-magista").addClass("animated bounceIn");
    $(".magista-player").removeClass("show").addClass("hide");
    $(".menu-magista-player").removeClass("show").addClass("hide");
});
/* SIGUENTE EN MAGISTA PLAYER */
$('.next-magista-player').click(function () {
    $('.magista-player').removeClass('show').addClass('hide');
    $('.magista-spec').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-magista-player').addClass('hide').removeClass('show');
    $('.menu-magista-spec').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});
/** MUESTRA VIDEO HABILIDADES MAGISTA */
$('.next-magista-spec').click(function () {
    $('.magista-spec').removeClass('show').addClass('hide');
    $('.menu-magista-spec').removeClass('show').addClass('hide');
    $('.magista-video').removeClass('hide').addClass('show');
    $('.menu-magista-video').removeClass('hide').addClass('show');
    $('.magista-video h1').addClass('animated fadeInLeft');
    $('.magista-logo-video').addClass('animated fadeInDown');
    $('.magista-video p').addClass('animated fadeInDown');
    $('.magista-video h3').addClass('animated fadeInDown');
});
var magista = document.getElementById("magistaVideo");

function setmagista() {
    magista.currentTime = 0;
}
/* VUELVE A JUGADOR MAGISTA */
$('.prev-magista-spec').click(function () {
    $('.magista-spec').removeClass('show').addClass('hide');
    $('.magista-player').removeClass('hide').addClass('show');
    $('.menu-magista-player').addClass('show').removeClass('hide');
    $('.menu-magista-spec').addClass('hide').removeClass('show');
    $('.logo-magista-player').addClass('animated fadeInDown');
    $('.magista-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.magista-player h3').addClass('animated fadeInDown');
});
/** VUELVE A ESPECIFICACIONES MAGISTA */
$('.prev-magista-video').click(function () {
    $('.magista-spec').removeClass('hide').addClass('show');
    $('.magista-video').removeClass('show').addClass('hide');
    $('.menu-magista-spec').removeClass('hide').addClass('show');
    $('.menu-magista-video').removeClass('show').addClass('hide');
});
/* MUESTRA MAGISTA VIDEO CON COUNTER */
$('.next-magista-video').click(function () {
    $('.magista-timer').removeClass('hide').addClass('show');
    $('.magista-video').removeClass('show').addClass('hide');
    $('.magista-timer h1').addClass('animated fadeInLeft');
    $('.magista-logo-video').addClass('animated fadeInDown');
    $('.magista-timer h1').addClass('animated fadeInLeft');
    $('.magista-logo-counter').addClass('animated fadeInDown');
    $('.menu-magista-video').removeClass('show').addClass('hide');
    $('.menu-magista-counter').removeClass('hide').addClass('show');
});
var magistaTimer = document.getElementById('CountDownMagista');
var magista2 = document.getElementById('magistaCount');

function setMag() {
    magistaTimer.currentTime = 0;
    magista2.currentTime = 0;
}
/** VUELVE A MAGISTA VIDEO */
$('.prev-magista-counter').click(function () {
    $('.magista-timer').removeClass('show').addClass('hide');
    $('.magista-video').removeClass('hide').addClass('show');
    $('.menu-magista-video').removeClass('hide').addClass('show');
    $('.menu-magista-counter').removeClass('show').addClass('hide');
});

/** MUESTRA FINAL MAGISTA */
$('.next-magista-counter').click(function () {
    $('.magista-final').addClass('show').removeClass('hide');
    $('.magista-timer').removeClass('show').addClass('hide');
    $('.menu-magista-final').removeClass('hide').addClass('show');
    $('.menu-magista-counter').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A MAGISTA COUNTER */
$('.prev-magista-final').click(function () {
    $('.magista-timer').removeClass('hide').addClass('show');
    $('.magista-final').removeClass('show').addClass('hide');
    $('.menu-magista-counter').removeClass('hide').addClass('show');
    $('.menu-magista-final').removeClass('show').addClass('hide');
});
/** VUELVE A MAGISTA COUNTER */
$('.next-magista-final').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.magista-final').removeClass('show').addClass('hide');
    $('.menu-magista-final').removeClass('show').addClass('hide');
});