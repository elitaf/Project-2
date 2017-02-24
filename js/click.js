$(document).ready(function(){

	$('#milk-tea').click(function(){
		$('.images-1').addClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#green-tea').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').addClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#red-tea').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').addClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#black-tea').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').addClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#juice').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').addClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#soda').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').addClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#coffee').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').addClass("active");
		$('.images-8').removeClass("active");
		$('.images-9').removeClass("active");
	});

	$('#calpis').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').addClass("active");
		$('.images-9').removeClass("active");
	});

	$('#mocktail').click(function(){
		$('.images-1').removeClass("active");
		$('.images-2').removeClass("active");
		$('.images-3').removeClass("active");
		$('.images-4').removeClass("active");
		$('.images-5').removeClass("active");
		$('.images-6').removeClass("active");
		$('.images-7').removeClass("active");
		$('.images-8').removeClass("active");
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