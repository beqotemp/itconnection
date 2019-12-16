import $ from "jquery";

$( document ).ready(function() {
	$('.tablinks').click(function(){
		if ($('#msk-link').hasClass('active')) {
    		$('#f-map').addClass('active')
    		$('#s-map').removeClass('active');

    	};
    	if ($('#ekb-link').hasClass('active')) {
    		$('#s-map').addClass('active');
    		$('#f-map').removeClass('active');
    	};
	})
    
});
