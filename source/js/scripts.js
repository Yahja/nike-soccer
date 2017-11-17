// CustomScript //
$('.btn-intro').click(function () {
    $('.intro').removeClass('show').addClass('hide');
    $('.home').removeClass('hide').addClass('show');
});
$('.btn-home').click(function () {
    $('.home').removeClass('show').addClass('hide'); 
    $('.index').removeClass('hide').addClass('show');
});