let value;

const programmer = {
    name: "Murat Coşkun",
    age: 25,
    email: "coskunmurat@gmail.com",
    langs: ["Python", "Java", "Javascript"],

    address: {
        city: "Ankara",
        street = "Bahçelievler"
    },

    work: function () {
        console.log("Programcı çalışıyor...");
    }
}

value = programmer;

value = programmer.email; // Genel olarak
value = programmer["email"];


value = programmer.langs;

value = programmer.address.city;

programmer.work();



const programmers = [{
    name: "Murat",
    age: 25
}, {
    name: "Bilal",
    age: 21
}];

value = programmers[0].name;

console.log(value);