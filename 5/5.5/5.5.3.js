function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, index) => {
    if (!(a <= item && item <= b)) arr.splice(index, 1);
  });
}
