function Employee(name, age) {
    this.name = name;
    this.age = age;

    // this.showInfos = function () {
    //     console.log("İsim: " + this.name + "Yaş: " + this.age);
    // }
}


Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}


const emp1 = new Employee("Ahmet", 26);
const emp1 = new Employee("Bilal", 22);

emp2.showInfos();
console.log(emp1);
console.log(emp2);