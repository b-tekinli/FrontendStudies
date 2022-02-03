class Person { // Subclass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}

class Employee extends Person { // DerivedClass, Subclass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
    }
    showInfos() { // Overriding
        console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " + this.salary);
    }

    toString() { // Overriding
        console.log("Employee");
    }

    raiseSalary(amount) { // Ekstra
        this.salary += amount;
    }
}

const emp = new Employee("Beyza", 22, 5000);

// console.log(emp);
// mep.showInfos();

emp.showInfos();
emp.toString();