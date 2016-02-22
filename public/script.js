$(document).ready(function(){

	/*$(".pinata").animate({
		left:"600px",
		top:"250px",

		},5000);*/
    
    $(".menu img").fadeIn(3000);
    $(".menu img").mouseenter(function() {
        $(this).css({
            "height": "150px",
                             })});
    $(".menu img").mouseleave(function() {
        $(this).css({
            "height": "130px",
                             })});




})//Closes .ready