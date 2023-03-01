let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];
let set = new WeakSet();
messages.forEach((item) => {
  set.add(item);
});
alert(set.has(messages[1]) ? 'Прочитано' : 'Не прочитано');
