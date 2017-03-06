$(document).ready(function() {

	$('#milk-tea').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-1').addClass("active");
	});

	$('#green-tea').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-2').addClass("active");
	});

	$('#red-tea').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-3').addClass("active");

	});

	$('#black-tea').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-4').addClass("active");

	});

	$('#juice').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-5').addClass("active");
	});

	$('#soda').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-6').addClass("active");
	});

	$('#coffee').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-7').addClass("active");
	});

	$('#calpis').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-8').addClass("active");
	});

	$('#mocktail').click(function() {
		$('#bbtpictures img').removeClass('active')
		$('.images-9').addClass("active");
	});

	$('#pearls').click(function(){
		$('.images-10').addClass("active");
		$('.images-11').removeClass("active");
		$('.images-12').removeClass("active");
		$('.images-13').removeClass("active");
		$('.images-14').removeClass("active");
	});

	$('#sugar').click(function(){
		$('.images-10').removeClass("active");
		$('.images-11').addClass("active");
		$('.images-12').removeClass("active");
		$('.images-13').removeClass("active");
		$('.images-14').removeClass("active");
	});

	$('#ice').click(function(){
		$('.images-10').removeClass("active");
		$('.images-11').removeClass("active");
		$('.images-12').addClass("active");
		$('.images-13').removeClass("active");
		$('.images-14').removeClass("active");
	});

	$('#jelly').click(function(){
		$('.images-10').removeClass("active");
		$('.images-11').removeClass("active");
		$('.images-12').removeClass("active");
		$('.images-13').addClass("active");
		$('.images-14').removeClass("active");
	});

	$('#none').click(function(){
		$('.images-10').removeClass("active");
		$('.images-11').removeClass("active");
		$('.images-12').removeClass("active");
		$('.images-13').removeClass("active");
		$('.images-14').addClass("active");
	});

});