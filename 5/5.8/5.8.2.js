let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];
let map = new WeakMap();
messages.forEach((item) => {
  map.set(item, new Date());
});
alert(map.get(messages[1]));
