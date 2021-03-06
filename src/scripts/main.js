const elementHeader = document.querySelector('#main_header');

const aboutButton = elementHeader.querySelector('.nav .about_btn');
const recommendationsButton = elementHeader.querySelector('.nav .recommendations_btn');
const teamButton = elementHeader.querySelector('.nav .team_btn');
const contactButton = elementHeader.querySelector('.nav .contact_btn');
const footer = document.querySelector('.page_footer');
const toggleBtn = elementHeader.querySelector('.toggle_btn');
const heroContainer = elementHeader.querySelector('.hero_container');
const nav = elementHeader.querySelector('.nav');
const logo = elementHeader.querySelector('.hero_logo');
const fa_bars = toggleBtn.querySelector('.fa-bars');
const fa_times = toggleBtn.querySelector('.fa-times');

aboutButton.addEventListener('click', function (e) {
	e.preventDefault();

	const href = 'about.html';

	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');

	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');

	elementHeader.addEventListener('animationend', function () {
		window.location = href;
	})
});

recommendationsButton.addEventListener('click', function (e) {
	e.preventDefault();

	const href = 'recommendation.html';

	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');

	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');

	elementHeader.addEventListener('animationend', function () {
		window.location = href;
	})
});

// teamButton.addEventListener('click', function(e) { 
// 	e.preventDefault();

// 	const href = 'team.html';

// 	footer.classList.remove('bounceInUp');
// 	footer.classList.add('bounceOutDown');	

// 	elementHeader.classList.remove('bounceInLeft');
// 	elementHeader.classList.add('bounceOutLeft');

// 	elementHeader.addEventListener('animationend', function() {
// 		window.location = href;
// 	})
// });

contactButton.addEventListener('click', function (e) {
	e.preventDefault();

	const href = 'contact.html';

	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');

	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');

	elementHeader.addEventListener('animationend', function () {
		window.location = href;
	})
});

toggleBtn.addEventListener('click', function () {

	fa_bars.classList.toggle('btn_open');
	fa_times.classList.toggle('btn_close');
	heroContainer.classList.toggle('hero_container_toggle');
	nav.classList.toggle('nav_close');
	nav.classList.toggle('nav_open');

});

logo.addEventListener('click', function () {

	fa_bars.classList.toggle('btn_open');
	fa_times.classList.toggle('btn_close');
	heroContainer.classList.toggle('hero_container_toggle');
	nav.classList.toggle('nav_close');
	nav.classList.toggle('nav_open');
});