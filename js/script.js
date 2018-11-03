window.onload = function() {
	console.log('Documento carregado');
	$('.intro-img').css({
		backgroundColor: '#00ff4071'
	});
	//quando o documento carregar todo, correr estes blocos de script
	//Intro,som e fades
	$('#intro-video').prop("volume", 0.0);
	$('.intro-img').click(function() {
		$('.intro-img').css({
			backgroundColor: '#ffffff'
		});
		$('.intro-img svg').css({
			filter: 'invert(100%)'
		})
		//toca vídeo no click
		$('#intro-video').trigger('play').prop('muted', false).animate({
			volume: 1
		}, 1000);
		$('.intro-container').fadeOut(3000, 'swing');
		//"deblur de cenas"
		$('.blur').css({
			"filter": "blur(0px)"
		});
		$('.cover').delay(3000).animate({
			'opacity': '1'
		}, 3000);
	});
	$('.continuar-button').click(function() {
		$('#intro-video').animate({
			volume: 0
		}, 1000);
		//$('#common-humanity').trigger('play').animate({volume: 0.3}, 1000);
	});
	$('.slide a').click(function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var distance_top = $(target).offset().top;
		$('html, body').animate({
			scrollTop: distance_top
		}, 1000);
	});
	$('.ai-uses-icon').click(function() {
		var ai_content = $(this).parent()[0]
		ai_content = ai_content.querySelector("#ai-uses-content").innerHTML;
		console.log(ai_content);
		$('#content').html(ai_content);
		$('#ai-uses-modal').fadeIn();
	})
	$('#close').click(function() {
		$('#ai-uses-modal').fadeOut();
	});
	//timeline
	var timeline_block = $('.timeline-block');
	//Fora do viewport
	timeline_block.each(function() {
		if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
			$(this).find('.timeline-img, .timeline-content').addClass('timeline-block-hide');
		}
	});
	//No viewport
	$(window).scroll(function() {
		timeline_block.each(function() {
			if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.timeline-img').hasClass('timeline-block-hide')) {
				$(this).find('.timeline-img, .timeline-content').removeClass('timeline-block-hide').addClass('timeline-block-show');
			}
		});
	});
	//Barra de progresso
	$(window).on('scroll', function() {
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		var distanceToTop = $(window).scrollTop();
		var percentScrolled = distanceToTop / (documentHeight - windowHeight) * 100;
		$('#progress-bar').css({
			'height': percentScrolled + '%'
		});
		//Parallax is this ai
		$('#isthisai').mousemove(function(parallax) {
			var window_width = $(window).width();
			var margin1 = -(parallax.pageX - (window_width / 2)) / 30;
			var margin2 = -(parallax.pageX - (window_width / 2)) / 20;
			var margin3 = -(parallax.pageX - (window_width / 2)) / 10;
			var margin4 = -(parallax.pageX - (window_width / 2)) / 5;
			var margin5 = -(parallax.pageX - (window_width / 2)) / 3;
			$('#isthisai_parallax_1').css({
				'margin-left': margin1
			});
			$('#isthisai_parallax_2').css({
				'margin-left': margin2
			});
			$('#isthisai_parallax_3').css({
				'margin-left': margin3
			});
			$('#isthisai_parallax_4').css({
				'margin-left': margin4
			});
			$('#isthisai_parallax_5').css({
				'margin-left': margin5
			});
		});
		var window_scroll = $(window).scrollTop();
		$('#history-img-1').css('top', window_scroll * 0.1);
		$('#history-img-2').css('top', window_scroll * 0.3);
		$('#history-img-3').css('top', window_scroll * 0.2);
		$('#history-img-4').css('top', window_scroll * 0.1);
		$('#history-img-5').css('top', window_scroll * 0.5);
		$('#history-img-6').css('top', -window_scroll * 0.5);
		$('#history-img-7').css('top', -window_scroll * 0.1);
		$('#history-img-8').css('top', -window_scroll * 0.5);
	});
	$('.ai-company, .ai-company-circle').hover(function() {
		$('.ai-company-content', this).toggle(300);
	});
};