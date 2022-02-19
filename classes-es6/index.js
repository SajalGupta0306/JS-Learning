class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log("Name of the person is " + this.name + ". Age is " + this.age);
  }
}

class Employee extends Person {
  constructor(name, age, profession) {
    super(name, age);
    this.profession = profession;
  }

  getDetailsWithProfession() {
    console.log(
      "Name of the person is " +
        this.name +
        ". Age is " +
        this.age +
        ". Profession is " +
        this.profession
    );
  }
}

const empData = [
  new Employee("Sajal", 27, "IT"),
  new Employee("Abc", 12, "das"),
];

function show(employees) {
  for (const emp of employees) {
    emp.getDetailsWithProfession();
    emp.describe();
  }
}

show(empData);
