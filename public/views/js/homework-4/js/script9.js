'use strict';

function min(a, b) {
  if (a < b) {
    return a;  
  } else if (b < a) {
    return b;
  } else {
    return a || b;
  }
}

console.log(min(6, 10));
