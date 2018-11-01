window.onload = function () {
	console.log('Documento carregado');
	$('.intro-img').css({ backgroundColor: '#00ff4071' });
	//quando o documento carregar todo, correr estes blocos de script
	//Intro,som e fades
	$('#intro-video').prop("volume", 0.0);
	$('#intro-video').prop("volume", 0.0);

	$('.intro-img').click(function () {
		$('.intro-img').css({ backgroundColor: '#ffffff' });
		$('.intro-img svg').css({ filter: 'invert(100%)' })
		//toca vídeo no click
		$('#intro-video').trigger('play').prop('muted', false).animate({ volume: 1 }, 1000);
		$('.intro-container').fadeOut(3000, 'swing');
		//"deblur de cenas"
		$('.blur').css({ "filter": "blur(0px)" });
		$('.slide-txt').delay(3000).animate({ 'opacity': '1' }, 3000);
	});

	$('.button-yes').click(function () {
		$('#intro-video').animate({ volume: 0 }, 1000);
		//$('#common-humanity').trigger('play').animate({volume: 0.3}, 1000);
	});




	$('.slide a').click(function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var distance_top = $(target).offset().top;
		$('html, body').animate({ scrollTop: distance_top }, 1000);
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


	//scroll dentro da div da timeline


	  $( "#descer" ).click(function(){
		$('#brief-history').animate({scrollTop: $('#brief-history').scrollTop()+600}, 1000, 'swing');
	});

	$( "#subir" ).click(function(){
		$('#brief-history').stop().animate({scrollTop: $('#brief-history').scrollTop()-600}, 1000, 'swing');
	});

	
	//if( ($('#brief-history').scrollTop() <= 0)) {
	//	console.log('adeus')
	//};

	//timeline
	var timeline_block = $('.timeline-block');
	//blocos de texto da timeline fora do viewport estão escondidos
	timeline_block.each(function () {
		if ($(this).offset().top > $('#brief-history').scrollTop() + $('#brief-history').height()) {
			$(this).find('.timeline-img, .timeline-content').addClass('timeline-block-hide');
		}
	});

	//quando "entram" dentro da div são animados chegaram e apareceram
	$('#brief-history').on('scroll', function () {
		timeline_block.each(function () {
			if ($(this).position().top <= $('#brief-history').scrollTop() + $('#brief-history').height() * 0.3  && $(this).find('.timeline-img').hasClass('timeline-block-hide')) {
				$(this).find('.timeline-img, .timeline-content').removeClass('timeline-block-hide').addClass('timeline-block-show');
			}
		});
	});

};
