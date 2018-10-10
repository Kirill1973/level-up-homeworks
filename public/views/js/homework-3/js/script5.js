'use strict';

var message = prompt('Hello', '');
if (message > 0) {
  alert('значение больше 0');
} else if (message < 0) {
  alert('значение меньше 0');
} else {
  alert('значение = 0');
}
