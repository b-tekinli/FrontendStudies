console.log(this); // Global Scope


const emp1 = { // Object Literal
    name: "Beyza",
    age: 22,
    showInfos: function () {
        console.log("Bilgiler Gösteriliyor...");
    }
};

const emp2 = {
    name: "Şevval",
    age: 20
};

console.log(emp1);


function Employee(name, age, salary) { // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("Beyza", 22, 5000);
const emp2 = new Employee("Şevval", 20, 7000);

emp1.showInfos();
emp2.showInfos();
