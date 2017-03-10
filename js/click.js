$(document).ready(function() {

		$('#milk-tea').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-1').addClass("active");
	});

	$('#green-tea').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-2').addClass("active");
	});

	$('#red-tea').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-3').addClass("active");

	});

	$('#black-tea').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-4').addClass("active");

	});

	$('#juice').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-5').addClass("active");
	});

	$('#soda').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-6').addClass("active");
	});

	$('#coffee').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-7').addClass("active");
	});

	$('#calpis').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-8').addClass("active");
	});

	$('#mocktail').click(function(e) {
		e.preventDefault();
		$('#bbtpictures img').removeClass('active')
		$('.images-9').addClass("active");
	});




	$('#pearls').click(function(e) {
		e.preventDefault();
		$('#bbtpictures2 img').removeClass('active')
		$('.images-10').addClass("active");
	});


	$('#ice').click(function(e) {
		e.preventDefault();
		$('#bbtpictures2 img').removeClass('active')
		$('.images-12').addClass("active");
	});

	$('#jelly').click(function(e) {
		e.preventDefault();
		$('#bbtpictures2 img').removeClass('active')
		$('.images-13').addClass("active");
	});

	$('#none').click(function(e) {
		e.preventDefault();
		$('#bbtpictures2 img').removeClass('active')
		$('.images-14').addClass("active");
	});

	$('.add').click(function (e) {
		e.preventDefault();
	    $(this).prev().val(+$(this).prev().val() + 1);
	});
	$('.sub').click(function (e) {
		e.preventDefault();
	    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
	});

});