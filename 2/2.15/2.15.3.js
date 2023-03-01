function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
}
let x = +prompt('Введите число', '');
let n = +prompt('Введите степень', '');
if (n < 1) {
  alert('Введите натуральное целое число от 1');
} else alert(pow(x, n));
