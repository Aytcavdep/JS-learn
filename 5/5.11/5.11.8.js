function formatDate(date) {
  let difTime = (Date.now() - date) / 1000;
  return difTime < 1
    ? 'прямо сейчас'
    : difTime < 60
    ? `${difTime} сек. назад`
    : difTime < 3600
    ? `${difTime / 60} мин. назад`
    : `${date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()}.${
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1)
      }.${('' + date.getFullYear()).slice(2)} ${
        date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
      }:${
        date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
      }`;
}
alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
