// Inheritance - KALITIM

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}

// const person = new Person("Aleyna", 22);
// console.log(person);

function Employee(name, age, salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age);
    Person.apply(this, [name, age]);
    this.salary = salary;
}

Employee.prototype = Object.create(person.prototype);
Employee.prototype.toString = function () {
    console.log("Employee");
}



// Overriding - İptal Etme

Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age + "Maasş: " + this.salary);
}

const emp = new Employee("Miray", 20, 4000);

console.log(emp);
emp.showInfos();
emp.toString();