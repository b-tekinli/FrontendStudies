const object = new Object(); // Object Literal
const object2 = new Object();

object.name = "Beyza";
console.log(object);


function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Bilgiler Gösteriliyor...");
    }

    this.toString = function () {
        console.log("Bu bir Employee objesidir..");
    }
}

const emp1 = new Employee("Şevval", 20);
console.log(emp1);

console.log(emp1.toString());