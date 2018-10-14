'use strict';

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      return confirm('Родители разрешили?');
  }

console.log(checkAge(17)); // работать будет так как условие пропускается, и идет на return.
