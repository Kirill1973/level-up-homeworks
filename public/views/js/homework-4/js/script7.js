'use strict';

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      return confirm('Родители разрешили?');
  }

console.log(checkAge(17)); // Будет, так как у нас стоит ретурн вместо else
