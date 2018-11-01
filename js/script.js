window.onload = function () {
	console.log('Documento carregado');
	$('.intro-img').css({backgroundColor:'#00ff4071'});
	//quando o documento carregar todo, correr estes blocos de script
	//Intro,som e fades
	$('.intro-img').click(function () {
		$('.intro-img').css({backgroundColor:'#ffffff'});
		$('.intro-img svg').css({filter: 'invert(100%)'})
		//toca vídeo no click
		$('#intro-video').trigger('play');
		$('.intro-container').fadeOut(3000, 'swing');
		//"deblur de cenas"
		$('.blur').css({ "filter": "blur(0px)" });
		$('.slide-txt').delay(3000).animate({ 'opacity': '1' }, 3000);
	});

	$('.slide a').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var distance_top = $(target).offset().top;
        $('html, body').animate({scrollTop:distance_top},1000);
    });

	//Parallax is this ai
	$('#isthisai').mousemove(function (parallax) {
		var window_width = $(window).width();
		var margin1 = -(parallax.pageX - (window_width / 2)) / 30;
		var margin2 = -(parallax.pageX - (window_width / 2)) / 20;
		var margin3 = -(parallax.pageX - (window_width / 2)) / 10;
		var margin4 = -(parallax.pageX - (window_width / 2)) / 5;

		$('#isthisai_parallax_1').css({ 'margin-left': margin1 });
		$('#isthisai_parallax_2').css({ 'margin-left': margin2 });
		$('#isthisai_parallax_3').css({ 'margin-left': margin3 });
		$('#isthisai_parallax_4').css({ 'margin-left': margin4 });
	});



	//timeline
	var timeline_block = $('.timeline-block');
	//blocos de texto da timeline fora do viewport estão escondidos
	timeline_block.each(function () {
		if ($(this).offset().top > $(window).scrollTop() + $(window).height()) {
			$(this).find('.timeline-img, .timeline-content').addClass('timeline-block-hide');
		}
	});

	//quando entram dentro do viewport são animados a partir do centro do ecrã
	$(window).on('scroll', function () {
		timeline_block.each(function () {
			if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.timeline-img').hasClass('timeline-block-hide')) {
				$(this).find('.timeline-img, .timeline-content').removeClass('timeline-block-hide').addClass('timeline-block-show');
			}
		});
	});

};
