'use strict';
let number;
do {
  number = +prompt('Введите число больше 100', '');
  if (!number) break;
} while (number < 100);
