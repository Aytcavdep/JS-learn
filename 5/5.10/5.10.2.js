function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryName = null;
  for (let [name, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalary = value;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
alert(topSalary(salaries));
