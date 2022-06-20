function Employee(name, age, basic) {
  this.name = name;
  this.age = age;
  const basicSal = basic;
  const bonus = 20000;
  this.getTotalSalaryWithBonus = function () {
    console.log(`total Salary is ${basicSal + bonus}`);
  };
}

const e = new Employee("david", 25, 500000);
e.getTotalSalaryWithBonus();
console.log(e.bonus); // prints undefined, because the info is hidden and limited to the function scope
