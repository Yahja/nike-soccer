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
$('.pasto-sintetico').click(function () {
    $('.selecc-pasto').removeClass('show').addClass('hide');
    $('.index-sintetico').removeClass('hide').addClass('show');
    $('.btn-mercurial').addClass('animated fadeIn');
    $('.btn-hypervenom').addClass('animated fadeIn');
    $('.btn-magista').addClass('animated fadeIn');
    $('.btn-tiempo').addClass('animated fadeIn');
});
