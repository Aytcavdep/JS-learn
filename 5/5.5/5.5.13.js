function groupById(users) {
  return users.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);

/*
  // после вызова у нас должно получиться:
  
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
alert(JSON.stringify(usersById));
