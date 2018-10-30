window.onload = function(){
    console.log('Documento carregado');
//quando o documento carregar todo, correr estes blocos de script
//Intro,som e fades
$('.intro-img').click(function () {
    //toca áudio no click
    $('#audio-intro').trigger('play');
    $('.intro-container').fadeOut( 3000, 'swing');
    //"deblur de cenas"
    $('.blur').css({ "filter": "blur(0px)"});
    $('.slide-txt').delay(3000).animate({'opacity':'1'}, 3000);
});


//timeline
var timeline_block = $('.timeline-block');
	//blocos de texto da timeline fora do viewport estão escondidos
	timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.timeline-img, .timeline-content').addClass('timeline-block-hide');
		}
    });
    
    //quando entram dentro do viewport são animados
	$(window).on('scroll', function(){
		timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img').hasClass('timeline-block-hide') ) {
				$(this).find('.timeline-img, .timeline-content').removeClass('timeline-block-hide').addClass('timeline-block-show');
			}
		});
    });
    
};
