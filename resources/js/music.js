$(document).ready(function() {
	setTimeout(function(){
		visibilityFadeIn($('#body-content'));
		visibilityFadeIn($('#footer-nav'));
	}, 500);
	
	setTimeout(function(){
		setFrames();

		$(window).resize(function(){
			setFrames();
		});
	}, 300);
});

function setFrames(){
	var dim = $('.album').width();
	$('.spotify-wrapper iframe').width(dim).height(dim);
}
