'use strict';

let userName = prompt('Вы кто?', '');
if (userName === 'Admin') {

  let password = prompt('Введите пароль', '');
} else if (userName === null) {
  alert('Вход отменен');
} else {
  alert('Не верно');
}
if (password === 'Черный влаcтелин') {
  alert('Добро пожаловать');
} else if (password === null) {
  alert('Ввод пароля отменен');
} else {
  alert('Не верно');
}

