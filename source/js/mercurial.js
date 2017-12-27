/** MERCURIAL */
$('.btn-mercurial').click(function () {
    $('.mercurial').removeClass('hide').addClass('show');
    $('.menu-mercurial-home').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
    $('.mercurial-left').addClass('animated bounceInLeft');
    $('.mercurial-right').addClass('animated bounceInRight');
    $('.logo-mercurial').addClass('animated bounceIn');
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
$(".prev-mercurial-player").click(function () {
    $(".mercurial").removeClass("hide").addClass("show");
    $(".menu-mercurial-home").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $(".mercurial-left").addClass("animated bounceInLeft");
    $(".mercurial-right").addClass("animated bounceInRight");
    $(".logo-mercurial").addClass("animated bounceIn");
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

/** MUESTRA VIDEO HABILIDADES MERCURIAL */
$('.next-mercurial-spec').click(function () {
    $('.mercurial-spec').removeClass('show').addClass('hide');
    $('.menu-mercurial-spec').removeClass('show').addClass('hide');
    $('.mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('hide').addClass('show');
    $('.mercurial-video h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-video').addClass('animated fadeInDown');
    $('.mercurial-video p').addClass('animated fadeInDown');
    $('.mercurial-video h3').addClass('animated fadeInDown');
});
var vid = document.getElementById("myVideo");

function setCurTime() {
    vid.currentTime = 0;
}
/** VUELVE A ESPECIFICACIONES MERCURAL */
$('.prev-mercurial-video').click(function () {
    $('.mercurial-spec').removeClass('hide').addClass('show');
    $('.mercurial-video').removeClass('show').addClass('hide');
    $('.menu-mercurial-spec').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('show').addClass('hide');
});

/* MUESTRA MERCURIAL VIDEO CON COUNTER */
$('.next-mercurial-video').click(function () {
    $('.mercurial-timer').removeClass('hide').addClass('show');
    $('.mercurial-video').removeClass('show').addClass('hide');
    $('.mercurial-timer h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-video').addClass('animated fadeInDown');
    $('.mercurial-timer h1').addClass('animated fadeInLeft');
    $('.mercurial-logo-counter').addClass('animated fadeInDown');
    $('.menu-mercurial-video').removeClass('show').addClass('hide');
    $('.menu-mercurial-counter').removeClass('hide').addClass('show');
});
var vid2 = document.getElementById("CountDown");
var vid3 = document.getElementById("MercurialCount");

function setCurTimeCount() {
    vid2.currentTime = 0;
    vid3.currentTime = 0;
}
/** VUELVE A MERCURIAL VIDEO */
$('.prev-mercurial-counter').click(function () {
    $('.mercurial-timer').removeClass('show').addClass('hide');
    $('.mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-video').removeClass('hide').addClass('show');
    $('.menu-mercurial-counter').removeClass('show').addClass('hide');
});
/** VUELVE A MERCURIAL COUNTER */
$('.prev-mercurial-final').click(function () {
    $('.mercurial-timer').removeClass('hide').addClass('show');
    $('.mercurial-final').removeClass('show').addClass('hide');
    $('.menu-mercurial-counter').removeClass('hide').addClass('show');
    $('.menu-mercurial-final').removeClass('show').addClass('hide');
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
/** DE MERCURIAL VUELVE A INICIO */
$('.next-mercurial-final').click(function () {
    $('.intro').removeClass('hide').addClass('show');
    $('.mercurial-final').removeClass('show').addClass('hide');
    $('.menu-mercurial-final').removeClass('show').addClass('hide');
});