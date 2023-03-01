let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
function aclean(arr) {
  let map = new Map();
  arr.forEach((item) => {
    let sortedStr = item.toLowerCase().split('').sort().join('');
    map.set(sortedStr, item);
  });
  return Array.from(map.values());
}
alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
