'use strict';

let login = 'Директор';
let message = '';
message =  (login === 'Вася') ? 'Привет' : (login === 'Директор') ? 'Здравствуйте' : (login === '') ? 'нет логина' : '';
console.log(message);
