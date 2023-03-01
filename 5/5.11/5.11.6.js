function getSecondsToday() {
  return Math.round((Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000);
}
alert(getSecondsToday());
