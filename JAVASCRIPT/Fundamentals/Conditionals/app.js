// Karşılaştırma Operatörleri

// == 
// ===     // veri tipini kontrol eder
// !=
// !== 
// >
// <
// >=
// <=

// console.log(2 == 2);
// console.log("js" == "java");

// console.log(2 == "2");
// console.log(2 === "2");

// console.log(4 > 2);
// console.log(2 > 4);

// console.log(2 != 2);

// console.log(2 < 4);
// console.log(4 < 2);

// console.log(2 >= 4);

// console.log(2 <= 4);

// console.log(4 <= 2);




// Mantıksal Bağlaçlar

// Not Operatörü
console.log(!(2 != 2));


// And Operatörü
console.log((4 == 2) && ("Ahmet" == "Ahmet"));


// Or Operatörü
console.log((4 == 2) || ("Ahmet" != "Ahmet"));



const error = false;

if (error == true) {
    console.log("Hata oluştu.");
} else {
    console.log("Hata oluşmadı.");
}



const user = "mmc";
if (user === "mmc") {
    console.log("Kullanıcı bulundu.");
} else {
    console.log("Kullanıcı bulunmadı.");
}



const process = "10";

if (process === "1") {
    console.log("İşlem 1");
} else if (process === "2") {
    console.log("İşlem 2");
} else if (process === "3") {
    console.log("İşlem 3");
} else if (process === "4") {
    console.log("İşlem 4");
} else {
    console.log("Geçersiz işlem");
}



const number = 100;

if (number === 100) {
    console.log("Sayı 100'e eşit.");
} else {
    console.log("Sayı 100'eşit değil.");
}



// Ternary Operator
console.log(number === 100 ? "Sayı 100'e eşit" : "Sayı 100 değil.");



if (number === 100) console.log("Sayı 100");
else console.log("Sayı 100 değil");