function getSecondsToTomorrow() {
  let now = new Date();
  return Math.round(
    (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now) /
      1000
  );
}
alert(getSecondsToTomorrow());
