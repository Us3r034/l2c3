$(document).ready(function(e) {

	$('.close, .close-overlay').click(function(e) {
        $('.overlay, .popup').removeClass('active');
    });

	$('.slider .next').click(function(e) {
        if($('.slide.active').next().is('.slide')) {
			$('.slide.active').removeClass('active').next().addClass('active');
		} else {
			$('.slide').removeClass('active').first().addClass('active');
		}
		clearTimeout(timeout);
		autoSlide();
    });

	$('.slider .prev').click(function(e) {
        if($('.slide.active').prev().is('.slide')) {
			$('.slide.active').removeClass('active').prev().addClass('active');
		} else {
			$('.slide').removeClass('active').last().addClass('active');
		}
		clearTimeout(timeout);
		autoSlide();
    });
	autoSlide();


	$(window).mousemove(function(e) {
        $('.bg .lbg').css({'margin-left':-e.clientX/20+'px', 'margin-top':-e.clientY/24+'px'});
		$('.bg .rbg').css({'margin-right':-e.clientX/18+'px', 'margin-top':-e.clientY/20+'px'});
		$('.bg').css({'background-position':'calc(50% + '+-e.clientX/28+'px) '+e.clientY/24+'px'});
		$('.bg .pers').css({ 'margin-top':-e.clientY/74+'px'});

    });
	$(window).mousemove();
});
$(window).load(function(e) {
    $('.preloader').removeClass('active');
	$('body').addClass('active');
});

var timeout;

function autoSlide() {
	timeout = setTimeout(function(){
        if($('.slide.active').next().is('.slide')) {
			$('.slide.active').removeClass('active').next().addClass('active');
		} else {
			$('.slide').removeClass('active').first().addClass('active');
		}
		autoSlide()
	},5000);
}


function showPopup() {
	$('.overlay, .popup').addClass('active');
}