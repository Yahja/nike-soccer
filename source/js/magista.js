/** MAGISTA */
$(".btn-magista").click(function () {
    $(".magista").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $('.magista-left').addClass('animated bounceInLeft');
    $('.magista-right').addClass('animated bounceInRight');
    $('.logo-magista').addClass('animated bounceIn');
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
/** VUELVE A INICIO */
$('.next-magista-final').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.magista-final').removeClass('show').addClass('hide');
    $('.menu-magista-final').removeClass('show').addClass('hide');
});

/** MAGISTA SINTETICO */
$(".btn-magista-sintetico").click(function () {
    $(".magista-sintetico").removeClass("hide").addClass("show");
    $(".index-sintetico").removeClass("show").addClass("hide");
    $('.magista-left').addClass('animated bounceInLeft');
    $('.magista-right').addClass('animated bounceInRight');
    $('.logo-magista').addClass('animated bounceIn');
    $('.menu-magista-home-sintetico').removeClass('hide').addClass('show');
});

/** JUGADOR MAGISTA SINTETICO */
$('.next-magista-sintetico').click(function () {
    $('.magista-sintetico').removeClass('show').addClass('hide');
    $('.magista-player').removeClass('hide').addClass('show');
    $('.menu-magista-home-sintetico').removeClass('show').addClass('hide');
    $('.logo-magista-player').addClass('animated fadeInDown');
    $('.magista-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.magista-player h3').addClass('animated fadeInDown');
    $('.menu-magista-player-sintetico').removeClass('hide').addClass('show');
});
/** BACK MAGISTA SINTETICO */
$('.prev-magista-sintetico').click(function () {
    $('.magista-sintetico').addClass('hide').removeClass('show');
    $('.menu-magista-home-sintetico').addClass('hide').removeClass('show');
    $('.index-sintetico').removeClass('hide').addClass('show');
    $('.btn-mercurial-sintetico').addClass('animated fadeIn');
    $('.btn-hypervenom-sintetico').addClass('animated fadeIn');
    $('.btn-magista-sintetico').addClass('animated fadeIn');
    $('.btn-tiempo-sintetico').addClass('animated fadeIn');
});
/* VUELVE AL HOME MAGISTA SINTETICO */
$(".prev-magista-player-sintetico").click(function () {
    $(".magista-sintetico").removeClass("hide").addClass("show");
    $(".menu-magista-home-sintetico").removeClass("hide").addClass("show");
    // $(".index").removeClass("show").addClass("hide");
    $(".magista-left-sintetico").addClass("animated bounceInLeft");
    $(".magista-right-sintetico").addClass("animated bounceInRight");
    $(".logo-magista").addClass("animated bounceIn");
    $(".magista-player").removeClass("show").addClass("hide");
    $(".menu-magista-player-sintetico").removeClass("show").addClass("hide");
});
/* SIGUENTE EN MAGISTA PLAYER SINTETICO */
$('.next-magista-player-sintetico').click(function () {
    $('.magista-player').removeClass('show').addClass('hide');
    $('.magista-spec-sintetico').removeClass('hide').addClass('show animated fadeIn');
    $('.menu-magista-player-sintetico').addClass('hide').removeClass('show');
    $('.menu-magista-spec-sintetico').addClass('show').removeClass('hide');
    $('.logo-spec').addClass('animated zoomIn');
    $('.titulo-spec').addClass('animated fadeInDown');
    $('.subt-spec').addClass('animated fadeInLeft');
    $('.bajada-spec-left').addClass('animated fadeInLeft');
    $('.bajada-spec-right').addClass('animated fadeInRight');
});

/* VUELVE A JUGADOR MAGISTA SINTETICO */
$('.prev-magista-spec-sintetico').click(function () {
    $('.magista-spec-sintetico').removeClass('show').addClass('hide');
    $('.magista-player').removeClass('hide').addClass('show');
    $('.menu-magista-player-sintetico').addClass('show').removeClass('hide');
    $('.menu-magista-spec-sintetico').addClass('hide').removeClass('show');
    $('.logo-magista-player').addClass('animated fadeInDown');
    $('.magista-player p').addClass('animated fadeInDown');
    $('.subtitle').addClass('animated fadeInDown');
    $('.magista-player h3').addClass('animated fadeInDown');
});
/** MUESTRA VIDEO HABILIDADES MAGISTA SINTETICO */
$('.next-magista-spec-sintetico').click(function () {
    $('.magista-spec-sintetico').removeClass('show').addClass('hide');
    $('.menu-magista-spec-sintetico').removeClass('show').addClass('hide');
    $('.magista-video').removeClass('hide').addClass('show');
    $('.menu-magista-video-sintetico').removeClass('hide').addClass('show');
    $('.magista-video h1').addClass('animated fadeInLeft');
    $('.magista-logo-video').addClass('animated fadeInDown');
    $('.magista-video p').addClass('animated fadeInDown');
    $('.magista-video h3').addClass('animated fadeInDown');
});
/** VUELVE A ESPECIFICACIONES MAGISTA SINTETICO */
$('.prev-magista-video-sintetico').click(function () {
    $('.magista-spec-sintetico').removeClass('hide').addClass('show');
    $('.magista-video').removeClass('show').addClass('hide');
    $('.menu-magista-spec-sintetico').removeClass('hide').addClass('show');
    $('.menu-magista-video-sintetico').removeClass('show').addClass('hide');
});
/* MUESTRA MAGISTA SINTETICO VIDEO CON COUNTER */
$('.next-magista-video-sintetico').click(function () {
    $('.magista-timer').removeClass('hide').addClass('show');
    $('.magista-video').removeClass('show').addClass('hide');
    $('.magista-timer h1').addClass('animated fadeInLeft');
    $('.magista-logo-video').addClass('animated fadeInDown');
    $('.magista-timer h1').addClass('animated fadeInLeft');
    $('.magista-logo-counter').addClass('animated fadeInDown');
    $('.menu-magista-video-sintetico').removeClass('show').addClass('hide');
    $('.menu-magista-counter-sintetico').removeClass('hide').addClass('show');
});
/** VUELVE A MAGISTA SINTETICO VIDEO */
$('.prev-magista-counter-sintetico').click(function () {
    $('.magista-timer').removeClass('show').addClass('hide');
    $('.magista-video').removeClass('hide').addClass('show');
    $('.menu-magista-video-sintetico').removeClass('hide').addClass('show');
    $('.menu-magista-counter-sintetico').removeClass('show').addClass('hide');
});
/** MUESTRA FINAL MAGISTA SINTETICO */
$('.next-magista-counter-sintetico').click(function () {
    $('.magista-final-sintetico').addClass('show').removeClass('hide');
    $('.magista-timer').removeClass('show').addClass('hide');
    $('.menu-magista-final-sintetico').removeClass('hide').addClass('show');
    $('.menu-magista-counter-sintetico').removeClass('show').addClass('hide');
    $('.zapatilla-final').addClass('animated fadeInDown');
    $('.logo-negro').addClass('animated fadeInUp');
});
/** VUELVE A MAGISTA SINTETICO COUNTER */
$('.prev-magista-final-sintetico').click(function () {
    $('.magista-timer').removeClass('hide').addClass('show');
    $('.magista-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-magista-counter-sintetico').removeClass('hide').addClass('show');
    $('.menu-magista-final-sintetico').removeClass('show').addClass('hide');
});
/** VUELVE A INICIO */
$('.next-magista-final-sintetico').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.magista-final-sintetico').removeClass('show').addClass('hide');
    $('.menu-magista-final-sintetico').removeClass('show').addClass('hide');
});