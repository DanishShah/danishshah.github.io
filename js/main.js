jQuery(document).ready(function($) {

	if($('#main-content').css("display") == "none"){
		console.log("Ready, None");
		$('#main-content').css("display", "block");
	}else{
		$('#main-content').css("display", "none");
		console.log("Ready, Block");
	}

	
	console.log("Ready");

	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 100 ){
            $(".nav-card").css("visibility", "visible");
            $(".nav-card").css("opacity", "1");
        } else {
        	$(".nav-card").css("visibility", "hidden");
        	$(".nav-card").css("opacity", "0");
        	$(".nav-card").css("transition", "visibility .3s, opacity 0.3s ease-in;");
        }
	});

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();
});

$(window).on('load', function() {
	$('#loader').css("display", "none");
	$('#main-content').css("display", "block");

	console.log("Load");

	window.sr = ScrollReveal();
	sr.reveal('.name', { opacity: 0 });
	sr.reveal('.name_sub' , { opacity: 0 });
	sr.reveal('#cv-text' , { opacity: 0 });

	sr.reveal('.prof-pic', { duration: 800, opacity: 0 });

	sr.reveal('#web-gfx', { duration: 800, opacity: 0 }, 50);
	sr.reveal('#android-gfx', { duration: 800, opacity: 0 }, 50);	
	sr.reveal('#ui-ux-gfx', { duration: 800, opacity: 0 }, 50);	
	sr.reveal('#logo-gfx', { duration: 800, opacity: 0 }, 50);	
	sr.reveal('#design-gfx', { duration: 800, opacity: 0 }, 50);
	sr.reveal('#ml-gfx', { duration: 800, opacity: 0 }, 50);	

	sr.reveal('.skills-icon', { duration: 800, opacity: 0 });
	sr.reveal('.footer-text', { duration: 800, opacity: 0 });
	sr.reveal('.social-icon', { duration: 800, opacity: 0 });

});

