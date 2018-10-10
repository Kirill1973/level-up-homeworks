'use strict';

let login = 'Вася';
let message = '';
(login = 'Вася') ? message = 'Привет' : (login = 'Директор') ? message = 'Здравствуйте' : (login = '') ? message = 'нет логина' : message = '';
console.log(message);
