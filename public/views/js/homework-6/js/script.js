'use strict';

// var a = +prompt('enter first number', '');
// var b = +prompt('enter second number', '');

// alert(a + b);

// alert( 6.35.toFixed(1) ); // 6.3 судя по тому что я понял, это потеря точности

// alert((0.1 * 10 + 0.2 * 10) / 10 + '$');

// var i = 0;
// while (i != 10) {
//   i += 0.2;  // потому что 0.2 по дебильному складывается и значение i никогда не будет 10
// }

// let max = 6;
// alert(Math.random() * max);

// let min = 2;
// let max = 10;
// alert(min + Math.random() * (max-min));

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

alert( randomInteger(5, 10) );// решение я подсмотрел, только тогда понял как решать.



