$(document).ready(function(){
	initEvents();
});
function initEvents(){
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