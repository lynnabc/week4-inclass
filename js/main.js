
$(window).on('click',function(e){

	if($('button').hasClass('on') == true){
		$("h1").css('color','white');
		$('body').removeClass("light");
		$('body').addClass("dark");
		$('button').removeClass("on");
		$('button').addClass("off");
		$(".status").text("Hey,who turn off the lights?");
	}
	else{
		$("h1").css('color','black');
		$('body').removeClass("dark");
		$('body').addClass("light");
		$('button').removeClass("off");
		$('button').addClass("on");
		$(".status").text("It's so bright in here!");

	}

})

				


