$(document).ready(function(){
	 $(".inception").css("width", $(window).width());
	$( window ).resize(function() {
	  $(".inception").css("width", $(window).width());
	});
	
	$('#slider').slick({
      arrows: false,
      fade: true, 
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnFocus: false,
      speed:1000
    });	
});





	
	function moveDivisor() { 
		var divisor = document.getElementById("divisor"),
	slider = document.getElementById("slider");
		divisor.style.width = slider.value+"%";
		$('.beerTitle span').removeClass('delay5').removeClass('showUp').removeClass('toShow')
		if(slider.value < 35) {
			$('#rightTittle').addClass('grow');
		
		}

		else {
			$('#rightTittle').removeClass('grow');

		}

		if(slider.value > 65) {
			$('#leftTittle').addClass('grow');	

		}

		else {
			$('#leftTittle').removeClass('grow');

		}

/*
		if(slider.value < 15) {

			$('#pilsnerBt').addClass('z');	
		}

		else {
	
			$('#pilsnerBt').removeClass('z');
		}

		if(slider.value > 80) {

			$('#dunkelBt').addClass('z');
		}

		else {

			$('#dunkelBt').removeClass('z');
		}*/
	}
/*
	$('#dunkelBt').on('click tap',function(){
		$('.beerBox#dunkel').toggleClass('details');
		$('#comparison').toggleClass('details');
		$('#divisor').toggleClass('details');
		$('body').toggleClass('details');
		
	});

	$('#pilsnerBt').on('click tap',function(){
		$('.beerBox#pilsner').toggleClass('details');
		$('#comparison').toggleClass('details');
		$('#divisor').toggleClass('details');
		$('body').toggleClass('details');
	});*/
