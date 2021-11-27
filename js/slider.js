// Brands

new Swiper(".brands__slider", {
	navigation: {
		nextEl: ".brands__slider-btn-next",
		prevEl: ".brands__slider-btn-prev"
	},
	breakpoints: {
		767: {
			slidesPerView: 3,
			freeMode: true
		}
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 70
});

// Advantages

new Swiper(".advantages__slider", {
	navigation: {
		nextEl: ".advantages__slider-btn-next",
		prevEl: ".advantages__slider-btn-prev"
	},
	breakpoints: {
		1200: {
			slidesPerView: 5,
			spaceBetween: 48
		},
		992: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 2,
		}
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 75
});






