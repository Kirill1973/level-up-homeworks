'use strict';

function pow (x, n) {
  let res = x;

  for (let i = 1; i < n; i += 1) {
    res *= x;
  }

  return res;
}

console.log(pow(3, 3));
