function sumInput() {
  let array = [];
  let sum = 0;
  while (true) {
    let number = prompt('Введите число для суммирования', 0);
    if (!isFinite(number) || number === '' || number === null) break;
    array.push(+number);
  }
  for (let item of array) {
    sum += item;
  }
  return sum;
}
