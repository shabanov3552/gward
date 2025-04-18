/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swip')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swip', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.dc-product-photos__slider-main')) {
		let thumbsSlider = new Swiper('.dc-product-photos__slider-thumbs', {
			modules: [Navigation],
			direction: 'vertical',
			slidesPerView: 3,
			spaceBetween: 20,
			navigation: {
				prevEl: '.dc-product-photos__nav .swiper-button-prev',
				nextEl: '.dc-product-photos__nav .swiper-button-next',
			},
		});
		let mainSlider = new Swiper('.dc-product-photos__slider-main', {
			modules: [Thumbs],
			spaceBetween: 20,
			// grabCursor: true,
			// navigation: {
			// 	prevEl: '.dc-product-photos__nav .swiper-button-prev',
			// 	nextEl: '.dc-product-photos__nav .swiper-button-next',
			// },
			thumbs: {
				swiper: thumbsSlider,
			},
		});
	}

	if (document.querySelector('.product-slider__slider')) {
		document.querySelectorAll('.product-slider__slider').forEach(slider => {
			const prevEl = slider.parentElement.querySelector('.product-slider__nav .swiper-button-prev');
			const nextEl = slider.parentElement.querySelector('.product-slider__nav .swiper-button-next');

			new Swiper(slider, {
				modules: [Navigation],
				slidesPerView: 5,
				spaceBetween: 20,
				autoHeight: false,
				navigation: {
					prevEl: prevEl,
					nextEl: nextEl,
				},
				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 4,
					},
					1600: {
						slidesPerView: 5,
					}
				}
			})
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});