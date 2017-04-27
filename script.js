$(document).ready(function(){
	initEvents();
});
function initEvents(){
	fall()
	$(".click").click(startOver)
}
function startOver (){
		$(".green").animate({
			"border-radius": 0
		},
			500, reset
			)	
}
function reset (){
		$(".green").animate({
					"border-radius": 163
				},
			500, startOver )
}
function jump (){
	$(".whiteBall").animate({
					'top': 0
				},
			250, fall)	
}
function fall (){
	$(".whiteBall").animate({
					'top': 100
				},
			250, jump )
}