function getMaxSubSum(arr) {
  let sum = 0;
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum === 0 && arr[i] < 0) continue;

    tempSum += arr[i];
    if (tempSum < 0) {
      tempSum = 0;
      continue;
    }
    sum > tempSum ? sum : (sum = tempSum);
  }
  return sum;
}
