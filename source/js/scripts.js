// CustomScript //
$('.btn-intro').click(function () {
    $('.intro').removeClass('show').addClass('hide');
    $('.home').removeClass('hide').addClass('show');
    $('.title-home').addClass('animated fadeIn');
});
$('.btn-home').click(function () {
    $('.home').removeClass('show').addClass('hide'); 
    $('.index').removeClass('hide').addClass('show');
    $('.btn-mercurial').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
$('.btn-mercurial').click(function () {
    $('.mercurial').removeClass('hide').addClass('show');
    $('.menu-global').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
});
$('.btn-hypervenom').click(function () {
    $('.hypervenom').removeClass('hide').addClass('show');
    $('.menu-global').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
});
$('.btn-magista').click(function () {
    $('.magista').removeClass('hide').addClass('show');
    $('.menu-global').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
});
$('.btn-tiempo').click(function () {
    $('.tiempo').removeClass('hide').addClass('show');
    $('.menu-global').removeClass('hide').addClass('show');
    $('.index').removeClass('show').addClass('hide');
});