

$('.intro-img').click(function () {
    $('#audio-intro').trigger('play');
    $('.intro-container').fadeOut( 3000, 'swing');
    $('.blur').css({ "filter": "blur(0px)"});
    $('.slide-txt').delay(3000).animate({'opacity':'1'}, 3000);
});


