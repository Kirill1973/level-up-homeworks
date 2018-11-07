// function filter (arr, callback) {
//     let result = [];
//     for(let i = 0; i < arr.length; i += 1) {
//        if (callback(arr[i], i)) {
//            result.push(arr[i]);
//        }
//     }
//     return result;
// }

// function map(arr, callback){
//     let result = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         result.push(callback(arr[i], i));
//     }

//     return result;
// }

// function some(arr, callback) {
//     for(let i = 0; i < arr.length; i += 1) {
//         if(callback(arr[i], i)) {
//             return true;
//         }
//     }
//     return false;
// }

// function every(arr, callback) {
//     for(let i = 0; i < arr.length; i += 1) {
//         if(!(callback(arr[i], i))) {
//             return false;
//         }
//     }
//     return true;
// }

// function reduce(arr, callback, startValue) {
//     let acc = startValue !== undifined ? startValue : arr[0];
  
//     let i = startValue !== undifined ? 0 : 1;
  
//     for(; i < arr.length; i += 1) {
//       acc = callback(acc, arr[i], i);
//     }
//     return acc;
//   }