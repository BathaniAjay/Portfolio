$(document).ready(function() {
    $("#ud_dots")
        .delay(5000)
        .fadeOut(300, function() {
            $("#ud_bg_left").animate({ left: "-50%" }, 300);
            $("#ud_bg_right").animate({ right: "-50%" }, 300, function() {
                $("#ud_preloader").fadeOut(50);
            });
        });
});

$(function () {
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80
                , "density": {
                    "enable": true
                    , "value_area": 800
                }
            }
            , "color": {
                "value": "#D9534F"
            }
            , "shape": {
                "type": "circle"
                , "stroke": {
                    "width": 0
                    , "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 5
                }
                , "image": {
                    "src": "img/github.svg"
                    , "width": 100
                    , "height": 100
                }
            }
            , "opacity": {
                "value": 0.5
                , "random": false
                , "anim": {
                    "enable": false
                    , "speed": 1
                    , "opacity_min": 0.1
                    , "sync": false
                }
            }
            , "size": {
                "value": 3
                , "random": true
                , "anim": {
                    "enable": false
                    , "speed": 40
                    , "size_min": 0.1
                    , "sync": false
                }
            }
            , "line_linked": {
                "enable": true
                , "distance": 150
                , "color": "#ffffff"
                , "opacity": 0.4
                , "width": 1
            }
            , "move": {
                "enable": true
                , "speed": 6
                , "direction": "none"
                , "random": false
                , "straight": false
                , "out_mode": "out"
                , "bounce": false
                , "attract": {
                    "enable": false
                    , "rotateX": 600
                    , "rotateY": 1200
                }
            }
        }
        , "interactivity": {
            "detect_on": "canvas"
            , "events": {
                "onhover": {
                    "enable": true
                    , "mode": "repulse"
                }
                , "onclick": {
                    "enable": true
                    , "mode": "push"
                }
                , "resize": true
            }
            , "modes": {
                "grab": {
                    "distance": 400
                    , "line_linked": {
                        "opacity": 1
                    }
                }
                , "bubble": {
                    "distance": 400
                    , "size": 40
                    , "duration": 2
                    , "opacity": 8
                    , "speed": 3
                }
                , "repulse": {
                    "distance": 200
                    , "duration": 0.4
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);;
    
});

$(function () {
    
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
    
    function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
    
     new WOW().init();
     $('.counter').counterUp({
    delay: 10,
    time: 1500
});
      $(document).on('input change', '#budget', function() {
    $('.budget-text').html( $(this).val() );
});
    
    
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
    
    
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});