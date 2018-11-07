// function ufString (str) {
//   if (str === '') {
//     return str;
//   }
//   return str[0].toUpperCase() + str.substring(1);
// }

// console.log(ufString("hello"));

// function checkSpan (str) {
//   let newStr = str.toLowerCase();
//   if (~newStr.indexOf("viagra") || ~newStr.indexOf("xxx")) {
//     return true;
//   }
//   return false;
// }

// console.log(checkSpan("nvoejrnfo viagra jdnflsdnf"));

// function truncate (str, maxlength) {
//   if (str.length <= maxlength) {
//     return str;
//   }
//   return str.slice(0, maxlength) + "...";
// }

// console.log(truncate("jrofejrfo rfnoerwforew werofiwerofi", 10));

// function extractCurrencyValue (str) {
//   return parseInt(str.slice(1));
// }

// console.log(extractCurrencyValue("$420"));

// let user = {
//   name: 'Вася',
//   surname: 'Петров'
// };

// user.name = 'Сергей';
// delete user.name;

// console.log(user)

// var user = {};

// function isEmpty (obj) {
//   for(var key in obj) {
//       return true;
//     }
//     return false;
//   }

// alert(isEmpty(user));

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function currentValue (obj) {
//   let sum = 0;
//   for(var key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(currentValue(salaries));

// function maxName (obj) {
//   var max = 0;
//   var name = '';
//   for(var key in obj) {
//     if(max < obj[key]) {
//       max = obj[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(maxName(salaries) || "no result");

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric (obj) {
//   let sum = 0;
//   for (var key in obj) {
//     if(isNumeric(obj[key]) === true) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// }

// alert(multiplyNumeric(menu));

// (function () {
//     function strReverse (str) {
//       let newStr = '';
//       for(let i = str.length - 1; i >= 0; i -= 1) {
//         newStr += str[i];
//       }
//       return newStr;
//     }
//     console.log(strReverse('Hello')); 
//   }());


// (function () {
//   function generateStr (N) {
//     let dog = '@';
//     let space = '-';
//     for(let i = 0; i < N; i += 1) {
//       let str = '';
//       if ((i === 0) || (i === N - 1)) {
//         for(let j = 0; j < N; j += 1) {
//           str += dog; 
//         } console.log(i + 1 + str);
//       } else {
//         str += dog;
//         for(let j = 0; j < N - 2; j += 1) {
//           str += space;
//         }
//         str += dog;
//         console.log(i + 1 + str);
//       }
//     }
//     return str;
//   }
//   generateStr(10); 
// }());