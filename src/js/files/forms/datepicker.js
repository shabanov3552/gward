// /* Календарь */

// // Подключение функционала "Чертогов Фрилансера"
// // Подключение списка активных модулей
// import { flsModules } from "../modules.js";

// // Подключение модуля
// import datepicker from 'js-datepicker';

// if (document.querySelector('[data-datepicker]')) {
// 	const picker = datepicker('[data-datepicker]', {
// 		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
// 		overlayButton: 'Применить',
// 		overlayPlaceholder: 'Год (4 цифры)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString()
// 			input.value = value
// 		},
// 		onSelect: function (input, instance, date) {

// 		}
// 	});
// 	flsModules.datepicker = picker;
// }

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
const datepickers = document.querySelectorAll('[data-datepicker]');
datepickers.forEach(datepicker => {
	new AirDatepicker(datepicker, {});
})