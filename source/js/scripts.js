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


/** TIEMPO */
$(".btn-tiempo").click(function () {
    $(".tiempo").removeClass("hide").addClass("show");
    $(".menu-global").removeClass("hide").addClass("show");
    $(".index").removeClass("show").addClass("hide");
    $('.tiempo-left').addClass('animated bounceInLeft');
    $('.tiempo-right').addClass('animated bounceInRight');
    $('.logo-tiempo').addClass('animated bounceIn');
    $('.menu-global').removeClass('show').addClass('hide');
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
    $('.btn-tiempo').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
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
