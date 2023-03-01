function random(min, max) {
  return Math.floor(min + Math.random() * (1 + max - min));
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
