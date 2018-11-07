// var array = [1, 2, 3, 4, 5]

// function getLastElem (arr) {
//     var last = arr[arr.length - 1];
//     return last;
// }

// console.log(getLastElem(array));

// var array = [1, 2, 3, 4, 5];

// array[array.length] = "Comp";

// console.log(array);
// let styles = ['джаз', 'Блюз'];

// styles.push("Рок-ен-рол");

// styles[styles.length - 2] = "Классика";

// var firstElem = styles.shift();

// console.log(firstElem);

// styles.unshift('Рэп','Регги');

// console.log(styles);

// let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// let rand = Math.floor(Math.random() * arr.length);

// alert( arr[rand] );

// let arr = [];

// while (true) {
//     let value = prompt("value", 0);
//     if (value === ''|| value === null || isNaN(value)) {
//         break;
//     }
//     arr.push(+value);
// }

// let sum = 0;
// for(let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
// }

// alert(sum);

// var arr = [1, 2, 3];

// var arr2 = arr;
// arr2[0] = 5;

// alert( arr[0] );// 5
// alert( arr2[0] ); // 5


// let arr = ["test", 2, 1.5, false];

// function find (arr, value) {
//     for(let i = 0; i <= arr.length; i += 1) {
//         if(arr[i] === value) return i;
//     }
//     return 1;
// }

// console.log(find(arr, "test"));

// var array = [5, 4, 3, 8, 0];
 
// function filterRange (arr, a, b) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i += 1) {
//        if (a <= arr[i] && arr[i] <= b) {
//            newArr.push(arr[i]);
//        }
//     }
//     return newArr;
// }

// console.log(filterRange(array, 2, 4));

// решето ератосфена я вообще манал делать


// function getMaxSubSum(arr) {
//     let max = 0;
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//       max = Math.max(max, sum);
//       if (sum < 0) sum = 0;
//     }
//     return maxSum;
//   }

[4,3,2,5,6,9,7]

// function addClassName(obj, cls) {
//     let classes = obj.className.split(' ');
//     for(let i = 0; i < classes.length; i += 1) {
//         if (classes[i] === cls) {
//             return;
//         }
//     }

//     classes.push(cls);

//     obj.className = classes.join(' ');
// }

// function camelize(str) {
//     var arr = str.split('-');

//     for(let i = 1; i < arr.length; i += 1) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }

//     return arr.join('');
// }

// console.log(camelize('gepmgp-ekgmemg'));

// function removeClass (obj, cls) {
//     let classes = obj.className.split(' ') 
//     for(let i = 0; i < classes.length; i += 1) {
//         if (classes[i] === cls) {
//             classes.splice(i, 1);
//             i -= 1;
//         }
//     }

//     obj.className = classes.join(' ');
// }

// var obj = {
//     className: 'open menu menu'
//   }
  
//   removeClass(obj, 'menu')
//   alert(obj.className) 

//   let array = [5, 3, 8, 1];

//   function filterRangeInPlace(arr, a, b) {
//     for(let i = 0; i < arr.length; i += 1) {
//         if(arr[i] < a || arr[i] > b) {
//             arr.splice(i--, 1);
//         }
//     }
//   }

//   console.log(filterRangeInPlace(array, 0, 3));

// var arr = [5, 2, 1, -10, 8];

// function isNamerican (a, b) {
//     return a - b;
// }

// arr.sort(isNamerican);

// alert(arr.reverse());

// var arr = ["HTML", "JavaScript", "CSS"];

// let newArr = arr.slice();

// newArr.sort();

// alert(newArr);

// var arr = [1, 2, 3, 4, 5];

// function Rand(a, b) {
//     return Math.random();
// }

// arr.sort(Rand);

// alert(arr);

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// function compare(a,b) {
//     return a - b;
// }

// people.sort(compare);

// for(let i = 0; i < people.length; i += 1) {
//     console.log(people[i]);
// }

// var list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
// //   function printList(list) {
  
// //     alert( list.value ); // (1)
  
// //     if (list.next) {
// //       printList(list.next); // (2)
// //     }
  
// //   }

//   function printList(list) {
  
//     if (list.next) {
//       printList(list.next); // (2)
//     }

//     alert( list.value );
  
//   }
  
//   printList(list);

// function aclean(arr) {
//     var obj = {};
  
//     for (var i = 0; i < arr.length; i++) {
//       var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)
//       obj[sorted] = arr[i];
//     }
  
//     var result = [];

//     for (var key in obj) result.push(obj[key]);
  
//     return result;
//   }
  
//   var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
  
//   alert( aclean(arr) );


// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// function unique(arr) {
//     let newArr = [];
//     con:
//     for(let i = 0; i < arr.length; i += 1) {
//         for(let j = 0; i < newArr.length; i += 1) {
//             if(newArr[j] === arr[i]) continue con;
//         }
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// let newArr = arr.map(function callback(item, index, arr) {
//     return arr[index].length;
// });

// console.log(newArr);

// function getSums(arr) {
//     let newArr = [];

//     let sum = arr.reduce(function callback(s, item){
//         newArr.push(s);
//         return sum += item;
//     });

//     newArr.push(sum);

//     return newArr;
// }

// function f(n) {
//     return arguments.length ? 1 : 0;
// }

// function sumArg () {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i += 1) {
//         sum += arguments[i];
//     }
//     return sum;
// }








