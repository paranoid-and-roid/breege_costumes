$(document).ready(function() {
							   
		var currentPosition = 0;
		var slideWidth = 640;
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		var slideShowInterval;
		var speed = 5000;

		//slideShowInterval = setInterval(changePosition, speed);
		
		slides.wrapAll('<div id="slidesHolder"></div>')
		
		slides.css({ 'float' : 'left' });
		
		//set #slidesHolder width equal to the total width of all the slides
		$('#slidesHolder').css('width', slideWidth * numberOfSlides);
		
		//$('#slideshow')
		//	.prepend('<span class="nav" id="leftNav"></span>')
		//	.append('<span class="nav" id="rightNav"></span>');
		
		manageNav(currentPosition);
		
		//tell the buttons what to do when clicked
		$('.nav').on('click', function() {
			
			//determine new position
			currentPosition = ($(this).attr('id')=='arrow_right') ? currentPosition+1 : currentPosition-1;
										
			//hide/show controls
			manageNav(currentPosition);
			clearInterval(slideShowInterval);
			changePosition;
			moveSlide();
		});
		
		function manageNav(position) {
			//hide left arrow if position is first slide
			if(position==0){ $('#arrow_left').css("visibility", "hidden") }
			else { $('#arrow_left').css("visibility", "visible") }
			//hide right arrow is slide position is last slide
			if(position==numberOfSlides-1){ $('#arrow_right').css("visibility", "hidden") }
			else { $('#arrow_right').css("visibility", "visible") }
		}

		
		/*changePosition: this is called when the slide is moved by the 
        timer and NOT when the next or previous buttons are clicked*/
		function changePosition() {
			if(currentPosition == numberOfSlides - 1) {
				currentPosition = 0;
				manageNav(currentPosition);
			} else {
				currentPosition++;
				manageNav(currentPosition);
			}
			moveSlide();
		}
		
		
		//moveSlide: this function moves the slide 
		function moveSlide() {
				$('#slidesHolder')
                  .animate({'marginLeft' : slideWidth*(-currentPosition)});
		}

	});