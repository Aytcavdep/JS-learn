let number;
let i = 2;
do {
  number = +prompt('Введите число больше 1', '');
  if (!number) break;
} while (number < 2);
if (number) {
  nextStep: for (i; i <= number; i++) {
    for (let n = 2; n < i; n++) {
      if (!(i % n)) continue nextStep;
    }
    alert(i);
  }
}
