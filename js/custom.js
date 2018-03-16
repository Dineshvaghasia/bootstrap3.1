// JavaScript Document


$(function() {
	
	/* Top Search button */
	$('.search-btn').click(function(){
		$('.searchbox').fadeToggle();
	});

	$('.club-btn').click(function(){
		$('.club-icon').fadeToggle();
	});

	// $('.cat-down-img').click(function(){
	// 	$('.sub-menu').fadeToggle();
	// });

	$('.sub-menu').hide(); //Hide children by default

	$('.menu').children().click(function(){
	    //event.preventDefault();
	    $(this).children('.sub-menu').slideToggle('slow');     
	});
	
});