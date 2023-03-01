let login = prompt('Введите логин', '');
if (!login) {
  alert('Отменено');
} else if (login !== 'Админ') {
  alert('Я вас не знаю');
} else {
  let password = prompt('Введите пароль', '');
  if (!password) {
    alert('Отменено');
  } else if (password === 'Я Главный') {
    alert('Здравствуйте!');
  } else alert('Неверный пароль');
}
