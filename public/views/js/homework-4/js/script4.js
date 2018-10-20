'use strict';

num: for(let i = 2; i < 10; i += 1) {
    for(let j = 2; j < i; j += 1) {
      if( i % j ===0 ) {
        continue num;
      } 
    }

  alert(i);
}
