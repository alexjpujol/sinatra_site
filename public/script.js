$(document).ready(function(){

$("#desertImage").hide();
$("#imageLink").click(function(){

	$("#desertImage").toggle();

})

y = 1
$(".pinata").click(function(){
	r = Math.floor(Math.random()*3)
	candy1 = "images/candy1.png"
	candy2 = "images/candy2.png"
	candy3 = "images/candy3.png"
	candyArr = [candy1, candy2, candy3]
	x = $(".pinata").offset();
	x.top += -550
	x.left += 150
	console.log(x)

	console.log(x)
	$(".candyland").append("<img src='" + candyArr[r] + "' id='candy" + y +"' class='candy'>");
	$("#candy"+y).css({left: x.left, top: x.top}).animate({top:0}, 1500, 'linear');
	y = y + 1;
})
})//Closes .ready