angular.module('breegeApp', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);
		
		$routeProvider
		
		.when('/', {
			templateUrl: '/templates/home.html',
			controller: 'MainCtrl'
		})
		.when('/Film_And_TV', {
			templateUrl: '/templates/film_tv.html',
			controller: 'SlideCtrl'
		})
		.when('/personal_commissions', {
			templateUrl: '/templates/personal_commissions.html',
			controller: 'SlideCtrl'
		})
		.when('/street_theatre', {
			templateUrl: '/templates/street_theatre.html',
			controller: 'SlideCtrl'
		})
		.when('/textiles', {
			templateUrl: '/templates/textiles.html',
			controller: 'SlideCtrl'
		})
		.when('/theatre_work', {
			templateUrl: '/templates/theatre_work.html',
			controller: 'SlideCtrl'
		})
		.when('/biography', {
			templateUrl: '/templates/biography.html'
		})
		.when('/contact', {
			templateUrl: '/templates/contact.html'
		})
		.when('/CV', {
			templateUrl: '/templates/cv.html'
		})
		.otherwise ({
			redirectTo: '/'
		});
			}])

		
		.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
				$scope.isActive = function(route) {
	        	return route === $location.path();
			};
		}])
		
		.controller('SlideCtrl', function() {
			
		var currentPosition = 0;
		var slideWidth = 640;
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		var slideShowInterval;
		var speed = 5000;		
		
		slides.wrapAll('<div id="slidesHolder"></div>');
		
		slides.css({ 'float':'left' });
		
		//set #slidesHolder width equal to the total width of all the slides
		$('#slidesHolder').css('width', slideWidth * numberOfSlides);
		
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
			if(position==0){ 
				$('#arrow_left').css("visibility", "hidden");
			} else { 
				$('#arrow_left').css("visibility", "visible");
			}
			//hide right arrow is slide position is last slide
			if(position==numberOfSlides-1){ 
				$('#arrow_right').css("visibility", "hidden"); 
			} else { 
				$('#arrow_right').css("visibility", "visible");
			}
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
