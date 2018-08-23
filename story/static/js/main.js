
// section one title

var storyTag = ['Karbala', 'Hussain','The 10th Day']
var titleH1 = document.getElementsByClassName("title-h1")
let i = 0;
function titleChange() {
	if (i < storyTag.length) {
  		titleH1[0].innerHTML = "<span>The story of " + storyTag[i] + ".</span>" ;
	}
	i += 1
}
setInterval(titleChange, 3000);


$(document).ready(function(){

	var controller = new ScrollMagic.Controller();


	// hiding scroll down & dimming the background
	var backTween = TweenMax.to('.home-parallax',3,{opacity:'0.4'}); // background selection

	function loop() { //scroll down animation function
		$(".scroll-down").animate({
			opacity: 0,
			height: "toggle"
		}, 2000, function(){
			$(".scroll-down").css({opacity: 1})
			loop();
		})
	}
	loop();
	var scrollingScene = new ScrollMagic.Scene({ //Scroll down hiding
		triggerElement: '.scroll-down',
		triggerHook: 0.6
	})
	.setClassToggle('.sc-home-intro','fade-out')
	.setTween(backTween)
	.addTo(controller)

// Home page slideshow animation


var $slides	= $(".home-slides-item");
var currentSlide = 0;	//keep track on the current slide
var stayTime = 5; //time the slide stays
var slideTime = 2; //fade in / fade out time
var animateSlide = $('.home-parallax')

TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0});	//we hide all images after the first one
TweenLite.to($slides.eq(currentSlide).children()[1], 2, {x:2, y:20, z:0, scale:1}) // Move the first slide
TweenLite.delayedCall(stayTime, nextSlide);	//start the slideshow

function nextSlide() {
	TweenLite.to($slides.eq(currentSlide), 0, {autoAlpha:0} );	//fade out the old slide
	TweenLite.to($slides.eq(currentSlide).children()[1], 2, {x:0, y:0, z:0, scale:1}) // resets the animation
	currentSlide = ++currentSlide % $slides.length;	//find out which is the next slide

	if (scrollingScene.state() === "DURING") {
		TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0.4} ); //fade in the next slide
	} else {
		TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );
	}

	TweenLite.to($slides.eq(currentSlide).children()[1], 2, {x:8, y:2, z:0, scale:1}) //animates
	TweenLite.delayedCall(stayTime, nextSlide);	//wait a couple of seconds before next slide
}

	// showing text
	$('.p-big').each(function(){
		var firstScene = new ScrollMagic.Scene({
			// offset: $(window).height() / 2,
			triggerElement: this,
			triggerHook: 0.8,
			duration: '65%'
			// reverse: false, // animation will only happen once
		})
		.setClassToggle(this.children[0],'fade-in')
		// .setPin('#intro', {pushFollowers: false})
		.addTo(controller)
	});


	//TweenTimeline
	// var myParallax = new TimelineMax()

	// myParallax
	// 	.from('#blabla', 1, {autoAlpha:0, ease:Power0.easeNone}, 0.3) //last number indicates the trigger time
	// 	.from('.blah2', 1, {y: '-50%'} 0 ) // last zero indicated the start time

	// Commander of Faithful and Ali icon appearance
	var imamAliTween = new TimelineMax()
	imamAliTween
		.to('#ali-icon', 2, {opacity:'1'}) // animation
		.to('.move-up',2, {y:0}, 3);

	var aliScene = new ScrollMagic.Scene({
		triggerElement: '#ali-icon',
		triggerHook: 0,
		duration: 300
	})
	.setTween(imamAliTween)
	.setClassToggle("#social-navigation", "redcolor")
	.addTo(controller)

	// Commandar of Faithful text move
	// var scalingDownIcon = new TimelineMax()
	// scalingDownIcon.to('#ali-icon', 3, { scale: 0.6 } )
	//
	// new ScrollMagic.Scene({
	// 	triggerElement: '#sc-timeline',
	// 	triggerHook: 0.1,
	// 	duration: 200
	// }).addIndicators({name:'scaling'})
	// .addTo(controller)

	// commander of Faithful set pin
	// new ScrollMagic.Scene({
	// 	triggerElement: '#ali-icon',
	// 	triggerHook: 0.1,
	// 	duration: 500
	// })
	// .setTween()
	// .setPin('#ali-icon', {pushFollowers: false})
	// .addTo(controller)
	// .addIndicators({
	// 	name: 'scaledown',
	// })

	// timeline
	var timeLineAnimation = new TimelineMax()
	timeLineAnimation
		.to('.time-line', 5 ,{width: '+=1500px'})
	// stop the timeline
	new ScrollMagic.Scene({
		triggerElement: '.timeline',
		triggerHook: 0.3
	})
	.setPin('.timeline', {pushFollowers: false}).addTo(controller)

	// animated the line
	new ScrollMagic.Scene({
		triggerElement: '#first-fight',
		triggerHook: 0.5
	})
	.setTween(timeLineAnimation).addTo(controller)

	// animates the horizontal scrolling
	$('.timeline-list').each(function(){
		var timelineScene = new ScrollMagic.Scene({
			// offset: $(window).height() / 2,
			triggerElement: '.timeline',
			triggerHook: 0,
			duration: 6500
			// reverse: false, // animation will only happen once
		})
		.setTween(TweenMax.to('.timeline-list li',0.5,{x:"-=3000"}))
		.addIndicators({
			name: 'horizontal',
		})
		.addTo(controller)
	});




});
