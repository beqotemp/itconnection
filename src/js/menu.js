import $ from "jquery";
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var content = document.getElementById("blog");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("s");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("s");
  }
}




$( document ).ready(function() {
	$('#nav-btn').click(function(event){
		$(this).toggleClass('open');
		$('.second-lvl__ul').toggleClass('open');
		// $('.Site').toggleClass('hide');
		event.preventDefault();
	});
	$('#footer-btn').click(function(event){
		$(this).toggleClass('open');
		$('.nav-fl__ul').toggleClass('open');
	});
	// top nav
    $('.show-trg').click(function(){
		$('#city-choice-block').toggleClass('show');
	})
	$('section').click(function(){
	  $('#city-choice-block').removeClass('show');
	  $('#city-choice-block-s').removeClass('show');
	});
	// footer nav
    $('.show-trg-s').click(function(){
		$('#city-choice-block-s').toggleClass('show');
	})





	// da net
	
	$('#city-yes').click(function(){
	  $('.city-ask').hide();
	  $('.dropdown-triangle').removeClass('hide');
	});
	$('#city-no').click(function(){
	  $('.city-ask').hide();
	  $('#city-choice-block').addClass('show');
	  $('.dropdown-triangle').removeClass('hide');
	});

}); 


