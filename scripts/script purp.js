$(document).ready(function() {

$('.menu-toggle').click(function() {
	console.log("test");

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  })
})