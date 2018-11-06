window.onload = function () {
	//console.log('Documento carregado');
	$('.intro-img').css({
		backgroundColor: '#00ff4071'
	});
	//quando o documento carregar todo, correr estes blocos de script
	//Intro,som e fades
	$('#intro-video').prop("volume", 0.0);
	$('#intro-audio').prop('volume', 0.0);
	$('.intro-img').on('click', function () {
		$('.intro-img').css({
			backgroundColor: '#ffffff'
		});
		$('.intro-img svg').css({
			filter: 'invert(100%)'
		});
		//toca vídeo no click
		$('#intro-video').trigger('play').prop('muted', false).animate({
			volume: 1
		}, 1000);
		$('#common-humanity').trigger('play').animate({ volume: 0.5 }, 1000);
		$('.intro-container').fadeOut(3000, 'swing');
		//"deblur de cenas"
		$('.blur').css({
			"filter": "blur(0px)"
		});
		$('.cover').delay(3000).animate({
			'opacity': '1'
		}, 3000, function () {
			$(document.body).css({ 'overflow': 'visible' });
		});
	});
	$('.continuar-button').on('click', function () {
		$('#intro-video').animate({
			volume: 0
		}, 1000);

	});
	//navegacao pela navegacao que ja nao é lateral (podia ter dado um nome melhor)
	$('.sidenav-link a').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var distance_top = $(target).offset().top;
		$('html, body').animate({
			scrollTop: distance_top
		}, 1000);
	});
	$('.sidenav-link ').on('click', function () {
		$('.sidenav-link').removeClass('active');
		$(this).addClass('active');
	});

	$('.ai-uses-icon').on('click', function () {
		var ai_content = $(this).parent()[0]
		ai_content = ai_content.querySelector("#ai-uses-content").innerHTML;
		////console.log(ai_content);
		$('#content').html(ai_content);
		$('#ai-uses-modal').fadeIn();
	})
	$('#close').on('click', function () {
		$('#ai-uses-modal').fadeOut();
	});


	//timeline
	var timeline_block = $('.timeline-block');
	//Para cada timeline block que estiver fora do viewport, esconder
	timeline_block.each(function () {
		if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
			$(this).find('.timeline-img, .timeline-content').addClass('timeline-block-hide');
		}
	});

	$(window).on('scroll', function () {

		var document_height = $(document).height();
		var window_height = $(window).height();
		var window_scroll_top = $(window).scrollTop();

		//Para cada timeline block que estiver fora do viewport e entrar, adicionar class
		timeline_block.each(function () {
			if ($(this).offset().top <= window_scroll_top + window_height * 0.75 && $(this).find('.timeline-img').hasClass('timeline-block-hide')) {
				$(this).find('.timeline-img, .timeline-content').removeClass('timeline-block-hide').addClass('timeline-block-show');
			}
		});
		if (window_scroll_top > 200) {
			$('.sidenav').stop().fadeIn(300);
		} else {
			$('.sidenav').stop().fadeOut(300);
		}

		//Barra de progresso
		//console.log('Altura do doc:',document_height);
		//console.log('Altura da janela:', window_height);
		//console.log('Scroll topo da janela:', window_scroll_top);

		//A percentagem do scroll é = ao scroll do topo da janela a dividir pela diferença entre a altura do documento
		//e da janela (o resultado é o número máximo do scrolltop). Scrolltop total a dividir por scrolltop atual * 100
		//para percentagem
		var percent_scrolled = window_scroll_top / (document_height - window_height) * 100;
		//console.log('percentagem do scroll', percent_scrolled)
		$('#progress-bar').css({
			'height': percent_scrolled + '%'
		});
		//Parallax is this ai
		$('#isthisai').on('mousemove', function (e) {
			var window_width = $(window).width();
			var parallax_speed_1 = -(e.pageX - (window_width / 2)) / 30;
			var parallax_speed_2 = -(e.pageX - (window_width / 2)) / 20;
			var parallax_speed_3 = -(e.pageX - (window_width / 2)) / 10;
			var parallax_speed_4 = -(e.pageX - (window_width / 2)) / 5;
			var parallax_speed_5 = -(e.pageX - (window_width / 2)) / 3;
			$('#isthisai_parallax_1').css({
				'margin-left': parallax_speed_1
			});
			$('#isthisai_parallax_2').css({
				'margin-left': parallax_speed_2
			});
			$('#isthisai_parallax_3').css({
				'margin-left': parallax_speed_3
			});
			$('#isthisai_parallax_4').css({
				'margin-left': parallax_speed_4
			});
			$('#isthisai_parallax_5').css({
				'margin-left': parallax_speed_5
			});
		});

		$('#history-img-1').css('top', window_scroll_top * 0.1);
		$('#history-img-2').css('top', window_scroll_top * 0.3);
		$('#history-img-3').css('top', window_scroll_top * 0.2);
		$('#history-img-4').css('top', window_scroll_top * 0.1);
		$('#history-img-5').css('top', window_scroll_top * 0.5);
		$('#history-img-6').css('top', -window_scroll_top * 0.5);
		$('#history-img-7').css('top', -window_scroll_top * 0.1);
		$('#history-img-8').css('top', -window_scroll_top * 0.5);
	});
	
	$('#common-humanity').prop('volume', 0.5)
	$('#mute').on('click', function () {
		if ($('#common-humanity').prop('volume')) {
			$('#common-humanity').animate({ volume: 0.0 }, 2000);
		} else {
			$('#common-humanity').animate({ volume: 0.5 }, 2000);
		}
	});
	
	$('.ai-company, .ai-company-circle').hover(function () {
		$('.ai-company-content', this).stop().fadeToggle(300);
	});

};