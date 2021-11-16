let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];

// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];


// Uzunluk
value = numbers.length;


// Indeksleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];


// Herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;

value = numbers.indexOf(1000);


// Index Of 
value = numbers.indexOf(1000);


// Arrayin Sonuna Değer Ekleme -Push
numbers.push(2000);
value = numbers;


// Başına Değer Ekleme
numbers.unshift(3000);
value = numbers;


// Sonundan Değer Atma
numbers.pop();
value = numbers;

// Başından Değer Atma
numbers.shift();
value = numbers;


// Belli bir kısmını atma
numbers.splice(0, 3);
value = numbers;


// Reverse - Ters Çevirme
numbers.reverse();
value = numbers;


// Sıralama 
value = numbers.sort();

value = numbers.sort(function (a, b) { // Küçükten Büyüğe 
    return a - b;
});

value = numbers.sort(function (a, b) { // Büyükten Küçüğe
    return b - a;
});




console.log(value);