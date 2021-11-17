// Fonksiyon Tanımlama

function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
    if (typeof name === "undefined") name = "Bilgi Yok";
    if (typeof age === "undefined") age = "Bilgi Yok";

    console.log(`İsim: ${name} Yaş: ${age}`);
}

// merhaba("Bilal", 22); // Fonksiyon Çağrısı (Function Call)

// merhaba("Aleyna", 21);

// merhaba();

// merhaba("Kadir");



/*
function square(x) {
    return x * x;

    console.log("Naber"); // Hiçbir zaman çalıştırılmaz.
}
*/



function cube(x) {
    return x * x * x;
}

let a = cube((square(12)));

console.log(a);



function hello() {
    return "Merhaba";
}

console.log(merhaba());



// Function Expression
const hello = function (name) {
    console.log("Merhaba" + name);
}

merhaba("Aslı");



// Imediately Invoked Function Expression (IIFE)

(function () {
    console.log("Merhaba" + name);
})("Yağmur");


const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi.");
    },
    get: function () {
        console.log("Elde edildi.");
    },
    update: function (id) {
        console.log(`Id: ${id} Güncellendi.`);
    },
    delete: function (id) {
        console.log(`Id: ${id} Silindi.`);
    }
}

console.log(database.host);
database.add();

database.delete(10);